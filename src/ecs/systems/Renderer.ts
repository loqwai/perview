import { System } from "ecsy";
import Renderable, { RenderableProps } from "../components/Renderable";
import Position, { PositionProps } from "../components/Position";

class Renderer extends System {

  execute(delta: number, time: number): void {
    this.queries.renderables.results.forEach(entity => {
      const { canvas } = entity.getComponent(Renderable) as unknown as RenderableProps
      const { x, y } = entity.getComponent(Position) as unknown as PositionProps

      this.drawCircle({canvas, x, y})
    })
  }

  drawCircle = ({canvas, x, y}: {canvas: HTMLCanvasElement, x: number, y: number}) => {
    const ctx = canvas.getContext('2d')
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