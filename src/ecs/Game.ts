import { World } from 'ecsy';
import Attack from './components/Attack';
import Circle from './components/Circle';
import Collidable from './components/Collidable';
import Debug from './components/Debug';
import DebugVector from './components/DebugVector';
import Destination from './components/Destination';
import DestroyedOnImpact from './components/DestroyedOnImpact';
import DoesDamage from './components/DoesDamage';
import Health from './components/Health';
import Lifespan from './components/Lifespan';
import Moveable from './components/Moveable';
import Position from './components/Position';
import RectangleSelection from './components/RectangleSelection';
import Selectable from './components/Selectable';
import Team from './components/Team';
import Attacker from './systems/Attacker';
import Boidser from './systems/Boidser';
import DestinationSetter from './systems/DestinationSetter';
import EnforceHealth from './systems/EnforceHealth';
import EnforceLifespan from './systems/EnforceLifespan';
import Mover from './systems/Mover';
import RectangleSelector from './systems/RectangleSelector';
import Renderer from './systems/Renderer';
import Selector from './systems/Selector';
import Stopper from './systems/Stopper';
import Vector2 from './types/Vector2';
import Camera from './components/Camera';
import VectorDebugger from './systems/VectorDebugger';
import VectorDebugState from './components/VectorDebugState';
import CameraPanner from './systems/CameraPanner';
import CameraZoomer from './systems/CameraZoomer';
import ZoomStrengthModifier from './systems/ZoomStrengthModifier';




const colors = {
  friendly: '#59cd90',
  enemy: '#c73e1d',
  projectile: '#ffe74c',
  background: '#545e75',
  selection: '#57b8ff',
}

class Game {
  private world: World
  private lastTime: number
  private animationFrameRequest: number | null
  private canvasSize: { width: number, height: number };

  constructor({ canvas }: { canvas: HTMLCanvasElement }) {
    this.lastTime = performance.now()
    this.animationFrameRequest = null
    this.canvasSize = { width: canvas.width, height: canvas.height }
    this.world = new World()
      .registerSystem(Attacker)
      .registerSystem(Boidser)
      .registerSystem(CameraPanner)
      .registerSystem(CameraZoomer)
      .registerSystem(DestinationSetter)
      .registerSystem(EnforceLifespan)
      .registerSystem(EnforceHealth)
      .registerSystem(Mover)
      .registerSystem(RectangleSelector)
      .registerSystem(Renderer, { canvas, colors })
      .registerSystem(Selector)
      .registerSystem(Stopper)
      .registerSystem(VectorDebugger)
      .registerSystem(ZoomStrengthModifier)
      .registerComponent(Attack)
      .registerComponent(Camera)
      .registerComponent(Circle)
      .registerComponent(Collidable)
      .registerComponent(Debug)
      .registerComponent(DebugVector)
      .registerComponent(Destination)
      .registerComponent(DestroyedOnImpact)
      .registerComponent(DoesDamage)
      .registerComponent(Health)
      .registerComponent(Lifespan)
      .registerComponent(Moveable)
      .registerComponent(Position)
      .registerComponent(RectangleSelection)
      .registerComponent(Selectable)
      .registerComponent(Team)
      .registerComponent(VectorDebugState)
  }

  start = () => {
    this.createCamera()
    this.createVectorDebugState()
    for (let i = 0; i < 10; i++) {
      this.createFriendly(50 + 50 * i, 500)
      this.createEnemy(50 + 50 * i, 100)
    }
    this.run();
  }

  stop = () => {
    if (!this.animationFrameRequest) return

    cancelAnimationFrame(this.animationFrameRequest)
  }

  onCanvasResize = ({ width, height }: { width: number, height: number }) => {
    this.cameraZoomer().onCanvasResize({width, height})
  }

  onKeyDown = (e: KeyboardEvent) => {
    this.vectorDebugger().onKeyDown(e)
    this.cameraPanner().onKeyDown(e)
  }

  onKeyUp = (e: KeyboardEvent) => {
    this.cameraPanner().onKeyUp(e)
  }

  onMouseDown = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    this.destinationSetter().onMouseDown(e)
    this.selector().onMouseDown(e)
    this.rectangleSelector().onMouseDown(e)
  }

  onMouseMove = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => this.rectangleSelector().onMouseMove(e)
  onMouseUp = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => this.rectangleSelector().onMouseUp(e)
  onMouseWheel = (e: WheelEvent) => this.cameraZoomer().onMouseWheel(e)

  private createCamera = () => {
    const { width, height } = this.canvasSize

    this.world.createEntity()
              .addComponent(Camera, { panSpeed: 500, zoomSpeed: 0.01, zoom: 1, width, height })
              .addComponent(Position, { position: new Vector2(0, 0) })
              .addComponent(Team, { name: 'Friendly' })
  }

  private createEnemy = (x: number, y: number) => {
    const teamName = "Enemy"
    const radius = 10;
    const color = colors.enemy
    const position = new Vector2(x, y)
    const health = 100;

    const projectileColor = colors.projectile
    const projectileSpeed = 200;
    const projectileLifetime = 1800;
    const projectileDamage = 10;
    const projectileDamageOriginal = 10;
    const minimumRefactoryPeriod = 500;

    this.world.createEntity()
      .addComponent(Attack, { projectileColor, projectileSpeed, projectileLifetime, projectileDamage, projectileDamageOriginal, minimumRefactoryPeriod })
      .addComponent(Circle, { radius, color })
      .addComponent(Collidable)
      .addComponent(Health, { health, maxHealth: health })
      .addComponent(Position, { position })
      .addComponent(Team, { name: teamName })
  }

  private createFriendly = (x: number, y: number) => {
    const teamName = "Friendly"
    const color = colors.friendly
    const radius = 10;
    const maxSpeed = 100;
    const health = 100;
    const direction = new Vector2()
    const position = new Vector2(x, y)

    const minSeparation = 2 * radius
    const separation = 3 * radius;

    const projectileColor = colors.projectile
    const projectileSpeed = 200;
    const projectileLifetime = 1800;
    const projectileDamage = 10;
    const projectileDamageOriginal = 10;
    const minimumRefactoryPeriod = 500;

    this.world.createEntity()
      .addComponent(Attack, { projectileColor, projectileSpeed, projectileLifetime, projectileDamage, projectileDamageOriginal, minimumRefactoryPeriod })
      .addComponent(Circle, { radius, color })
      .addComponent(Collidable)
      .addComponent(Health, { health, maxHealth: health })
      .addComponent(Moveable, { direction, maxSpeed, separation, minSeparation })
      .addComponent(Position, { position })
      .addComponent(Selectable)
      .addComponent(Team, { name: teamName })
  }

  private createVectorDebugState = () => {
    this.world.createEntity().addComponent(VectorDebugState)
  }

  private run = () => {
    // Compute delta and elapsed time
    const time = performance.now()
    const delta = time - this.lastTime

    // Run all the systems
    this.world.execute(delta, time)

    this.lastTime = time
    this.animationFrameRequest = requestAnimationFrame(this.run)
  }

  private cameraPanner = () => this.world.getSystem(CameraPanner) as CameraPanner
  private cameraZoomer = () => this.world.getSystem(CameraZoomer) as CameraZoomer
  private destinationSetter = () => this.world.getSystem(DestinationSetter) as DestinationSetter
  private rectangleSelector = () => this.world.getSystem(RectangleSelector) as RectangleSelector
  private renderer = () => this.world.getSystem(Renderer) as Renderer
  private selector = () => this.world.getSystem(Selector) as Selector
  private vectorDebugger = () => this.world.getSystem(VectorDebugger) as VectorDebugger
}

export default Game
