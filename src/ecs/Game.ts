import { World } from 'ecsy'

import Vector2 from './types/Vector2'

import Attack from './components/Attack'
import Circle from './components/Circle'
import Collidable from './components/Collidable'
import Destination from './components/Destination'
import DestroyedOnImpact from './components/DestroyedOnImpact'
import Lifespan from './components/Lifespan'
import Moveable from './components/Moveable'
import RectangleSelection from './components/RectangleSelection'
import Selectable from './components/Selectable'
import Team from './components/Team'

import Attacker from './systems/Attacker'
import RectangleSelector from './systems/RectangleSelector'
import Renderer from './systems/Renderer'
import Selector from './systems/Selector'
import Stopper from './systems/Stopper'
import EnforceLifespan from './systems/EnforceLifespan'
import Health from './components/Health'
import EnforceHealth from './systems/EnforceHealth'
import DoesDamage from './components/DoesDamage'
import Position from './components/Position'
import Boidser from './systems/Boidser'
import Debug from './components/Debug'
import DestinationSetter from './systems/DestinationSetter'
import Mover from './systems/Mover'
import DebugVector from './components/DebugVector'

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

  constructor({ canvas }: {canvas: HTMLCanvasElement}) {
    this.lastTime = performance.now()
    this.animationFrameRequest = null
    this.world = new World()
      .registerSystem(Attacker)
      .registerSystem(Boidser)
      .registerSystem(DestinationSetter)
      .registerSystem(EnforceLifespan)
      .registerSystem(EnforceHealth)
      .registerSystem(Mover)
      .registerSystem(RectangleSelector)
      .registerSystem(Renderer, { canvas, colors })
      .registerSystem(Selector)
      .registerSystem(Stopper)
      .registerComponent(Attack)
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
  }

  start = () => {
    for (let i = 0; i < 10; i++) {
      this.createFriendly(50 + 50 * i, 500)
      this.createEnemy(50 + 50 * i, 100)
    }
    this.run();
  }

  createEnemy = (x: number, y: number) => {
    const teamName = "Enemy"
    const radius = 10;
    const color = colors.enemy
    const position = new Vector2(x, y)
    const health = 100;

    const projectileColor = colors.projectile
    const projectileSpeed = 200;
    const projectileLifetime = 1000;
    const projectileDamage = 10;
    const minimumRefactoryPeriod = 500;

    this.world.createEntity()
      .addComponent(Attack, { projectileColor, projectileSpeed, projectileLifetime, projectileDamage, minimumRefactoryPeriod })
      .addComponent(Circle, { radius, color })
      .addComponent(Collidable)
      .addComponent(Health, { health, maxHealth: health })
      .addComponent(Position, { position })
      .addComponent(Team, { name: teamName })
  }

  createFriendly = (x: number, y: number) => {
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
    const projectileLifetime = 1000;
    const projectileDamage = 10;
    const minimumRefactoryPeriod = 500;

    this.world.createEntity()
      .addComponent(Attack, { projectileColor, projectileSpeed, projectileLifetime, projectileDamage, minimumRefactoryPeriod })
      .addComponent(Circle, { radius, color })
      .addComponent(Collidable)
      .addComponent(Health, { health, maxHealth: health })
      .addComponent(Moveable, { direction, maxSpeed, separation, minSeparation })
      .addComponent(Position, { position })
      .addComponent(Selectable)
      .addComponent(Team, { name: teamName })
  }

  stop = () => {
    if (!this.animationFrameRequest) return

    cancelAnimationFrame(this.animationFrameRequest)
  }

  toggleDebug = () => {
    const renderer = this.world.getSystem(Renderer) as Renderer
    renderer.toggleDebug()
  }

  onMouseDown = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    const destionationSetter = this.world.getSystem(DestinationSetter) as DestinationSetter
    const selector = this.world.getSystem(Selector) as Selector
    const rectangleSelector = this.world.getSystem(RectangleSelector) as RectangleSelector

    destionationSetter.onMouseDown(e)
    selector.onMouseDown(e)
    rectangleSelector.onMouseDown(e)
  }

  onMouseMove = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    const rectangleSelector = this.world.getSystem(RectangleSelector) as RectangleSelector
    rectangleSelector.onMouseMove(e)
  }

  onMouseUp = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    const rectangleSelector = this.world.getSystem(RectangleSelector) as RectangleSelector
    rectangleSelector.onMouseUp(e)
  }

  private run =  () => {
     // Compute delta and elapsed time
     const time = performance.now()
     const delta = time - this.lastTime

     // Run all the systems
     this.world.execute(delta, time)

     this.lastTime = time
     this.animationFrameRequest = requestAnimationFrame(this.run)
  }
}

export default Game