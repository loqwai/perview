import { System, World } from "ecsy";
import Renderable from "../components/Renderable";
import Circle from "../components/Circle";
import Selectable from "../components/Selectable";

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
    this.clear()
    this.queries.renderables.results.forEach(entity => {
      const { position } = entity.getComponent(Circle)
      const { selected } = entity.getComponent(Selectable) ?? { selected: false }
      const { x, y } = position

      this.drawCircle({x, y, selected})
    })
  }

  private clear = () => {
    const ctx = this.canvas.getContext('2d')
    if (!ctx) return

    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  private drawCircle = ({x, y, selected}: {x: number, y: number, selected: boolean}) => {
    const ctx = this.canvas.getContext('2d')
    if (!ctx) return

    ctx.fillStyle = "#888"
    ctx.beginPath()
    ctx.arc(x, y, 10, 0, 2 * Math.PI, false)
    ctx.fill()
    ctx.lineWidth = 1
    ctx.strokeStyle = selected ? "#F22" : "#222"
    ctx.stroke()    
  }
}

Renderer.queries = {
  renderables: { components: [Renderable, Circle] }
}

export default Renderer