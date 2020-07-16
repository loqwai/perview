import { World } from 'ecsy'

import Vector2 from './types/Vector2'

import Attack from './components/Attack'
import Circle from './components/Circle'
import Collidable from './components/Collidable'
import Destination from './components/Destination'
import DestroyedOnImpact from './components/DestroyedOnImpact'
import Moveable from './components/Moveable'
import RectangleSelection from './components/RectangleSelection'
import Selectable from './components/Selectable'
import Team from './components/Team'

import Attacker from './systems/Attacker'
import Mover from './systems/Mover'
import RectangleSelector from './systems/RectangleSelector'
import Renderer from './systems/Renderer'
import Selector from './systems/Selector'
import Stopper from './systems/Stopper'

const colors = {
  friendly: '#59cd90',
  enemy: '#c73e1d',
  projectile: '#ffe74c',
  background: '#545e75',
  selection: '#57b8ff',
}

class Game {
  private world: World
  private canvas: HTMLCanvasElement
  private lastTime: number
  private animationFrameRequest: number | null

  constructor({canvas}: {canvas: HTMLCanvasElement}) {
    this.canvas = canvas
    this.lastTime = performance.now()
    this.animationFrameRequest = null
    this.world = new World()
      .registerSystem(Attacker)
      .registerSystem(Mover)
      .registerSystem(RectangleSelector)
      .registerSystem(Renderer, { canvas, colors })
      .registerSystem(Selector)
      .registerSystem(Stopper)
      .registerComponent(Attack)
      .registerComponent(Circle)
      .registerComponent(Collidable)
      .registerComponent(Destination)
      .registerComponent(DestroyedOnImpact)
      .registerComponent(Moveable)
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

    const projectileColor = colors.projectile
    const projectileSpeed = 100;
    const projectileLifetime = 5000;
    const minimumRefactoryPeriod = 1000;

    this.world.createEntity()
      .addComponent(Attack, { projectileColor, projectileSpeed, projectileLifetime, minimumRefactoryPeriod })
      .addComponent(Circle, { radius, color, position })
      .addComponent(Collidable)
      .addComponent(Team, { name: teamName })
  }

  createFriendly = (x: number, y: number) => {
    const teamName = "Friendly"
    const color = colors.friendly
    const radius = 10;
    const speed = 100;
    const position = new Vector2(x, y)

    const projectileColor = colors.projectile
    const projectileSpeed = 100;
    const projectileLifetime = 5000;
    const minimumRefactoryPeriod = 1000;

    this.world.createEntity()
      .addComponent(Attack, { projectileColor, projectileSpeed, projectileLifetime, minimumRefactoryPeriod })
      .addComponent(Circle, { radius, color, position })
      .addComponent(Collidable)
      .addComponent(Moveable, { speed })
      .addComponent(Selectable)
      .addComponent(Team, { name: teamName })
  }

  stop = () => {
    if (!this.animationFrameRequest) return

    cancelAnimationFrame(this.animationFrameRequest)
  }

  onMouseDown = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    const mover = this.world.getSystem(Mover) as Mover
    const selector = this.world.getSystem(Selector) as Selector
    const rectangleSelector = this.world.getSystem(RectangleSelector) as RectangleSelector

    mover.onMouseDown(e)
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