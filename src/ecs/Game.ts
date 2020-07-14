import { World } from 'ecsy'
import Circle from './components/Circle'
import Renderer from './systems/Renderer'
import Selectable from './components/Selectable'
import SelectionToggler from './systems/SelectionToggler'
import Mover from './systems/Mover'
import Moveable from './components/Moveable'
import Stopper from './systems/Stopper'
import Vector2 from './types/Vector2'

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
      .registerSystem(Renderer, { canvas })
      .registerSystem(SelectionToggler)
      .registerSystem(Mover)
      .registerSystem(Stopper)
      .registerComponent(Circle)
      .registerComponent(Selectable)
      .registerComponent(Moveable)
  }

  start = () => {
    for (let i = 0; i < 10; i++) {
      this.world.createEntity()
        .addComponent(Circle, { position: new Vector2(50 * i, 50 * i), radius: 10 })
        .addComponent(Selectable)
        .addComponent(Moveable)
    }
    this.run();
  }

  stop = () => {
    if (!this.animationFrameRequest) return

    cancelAnimationFrame(this.animationFrameRequest)
  }

  onMouseDown = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    const moveCommander = this.world.getSystem(Mover) as Mover
    const selectionToggler = this.world.getSystem(SelectionToggler) as SelectionToggler

    moveCommander.onMouseDown(e)
    selectionToggler.onMouseDown(e)
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