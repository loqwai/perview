import { System, World } from "ecsy";
import Renderable from "../components/Renderable";
import Position, { PositionProps } from "../components/Position";

interface Attributes {
  priority?: number;
  canvas: HTMLCanvasElement;
}

class Renderer extends System {
  private canvas: HTMLCanvasElement;

  constructor(world: World, { canvas, priority }: Attributes) {
    super(world, { priority })
    this.canvas = canvas
  }

  execute(delta: number, time: number): void {
    this.queries.renderables.results.forEach(entity => {
      const { x, y } = entity.getComponent(Position) as unknown as PositionProps

      this.drawCircle({x, y})
    })
  }

  drawCircle = ({x, y}: {x: number, y: number}) => {
    const ctx = this.canvas.getContext('2d')
    if (!ctx) return

    ctx.fillStyle = "#888"
    ctx.beginPath()
    ctx.arc(x, y, 10, 0, 2 * Math.PI, false)
    ctx.fill()
    ctx.lineWidth = 1
    ctx.strokeStyle = "#222"
    ctx.stroke()    
  }
}

Renderer.queries = {
  renderables: { components: [Renderable, Position] }
}

export default Renderer