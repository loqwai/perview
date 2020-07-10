import { World } from 'ecsy'
import Position from './components/Position'
import Renderable from './components/Renderable'
import Renderer from './systems/Renderer'

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
      .registerSystem(Renderer)
      .registerComponent(Position)
      .registerComponent(Renderable)
  }

  start = () => {
    for (let i = 0; i < 10; i++) {
      this.world.createEntity()
        .addComponent(Position, {x: 50 * i, y: 50 * i})
        .addComponent(Renderable, {canvas: this.canvas})
    }
    this.run();
  }

  stop = () => {
    if (!this.animationFrameRequest) return

    cancelAnimationFrame(this.animationFrameRequest)
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