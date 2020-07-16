import { World } from 'ecsy'
import Circle from './components/Circle'
import Renderer from './systems/Renderer'
import Selectable from './components/Selectable'
import Selector from './systems/Selector'
import Mover from './systems/Mover'
import Moveable from './components/Moveable'
import Stopper from './systems/Stopper'
import Vector2 from './types/Vector2'
import RectangleSelection from './components/RectangleSelection'
import RectangleSelector from './systems/RectangleSelector'

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
      .registerSystem(Renderer, { canvas, colors })
      .registerSystem(Selector)
      .registerSystem(RectangleSelector)
      .registerSystem(Mover)
      .registerSystem(Stopper)
      .registerComponent(Circle)
      .registerComponent(Selectable)
      .registerComponent(Moveable)
      .registerComponent(RectangleSelection)
  }

  start = () => {
    for (let i = 0; i < 10; i++) {
      this.createFriendly(50 + 50 * i, 500)
      this.createEnemy(50 + 50 * i, 100)
    }
    this.run();
  }

  createEnemy = (x: number, y: number) => {
    const radius = 10;
    const color = colors.enemy
    const position = new Vector2(x, y)

    this.world.createEntity()
      .addComponent(Circle, { radius, color, position })
      .addComponent(Moveable)
  }

  createFriendly = (x: number, y: number) => {
    const radius = 10;
    const color = colors.friendly
    const position = new Vector2(x, y)

    this.world.createEntity()
      .addComponent(Circle, { radius, color, position })
      .addComponent(Selectable)
      .addComponent(Moveable)
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