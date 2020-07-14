import { System, World, Entity } from "ecsy";
import Circle from "../components/Circle";
import Selectable from "../components/Selectable";

interface Attributes {
  priority?: number;
  canvas: HTMLCanvasElement;
}

class Renderer extends System {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D | null;

  constructor(world: World, { canvas, priority }: Attributes) {
    super(world, { priority })
    this.canvas = canvas
    this.ctx = this.canvas.getContext('2d')
  }

  execute(delta: number, time: number): void {
    this.clear()
    this.queries.circles.results.forEach(this.drawCircle)
  }

  private clear = () => {
    this.ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  private drawCircle = (entity: Entity) => {
    if (!this.ctx) return

    const { position, radius } = entity.getComponent(Circle)
    const { selected } = entity.getComponent(Selectable)
    const { x, y } = position

    this.ctx.fillStyle = "#888"
    this.ctx.beginPath()
    this.ctx.arc(x, y, radius, 0, 2 * Math.PI, false)
    this.ctx.fill()
    this.ctx.lineWidth = 1
    this.ctx.strokeStyle = selected ? "#F22" : "#222"
    this.ctx.stroke()    
  }
}

Renderer.queries = {
  circles: { components: [Circle, Selectable] }
}

export default Renderer