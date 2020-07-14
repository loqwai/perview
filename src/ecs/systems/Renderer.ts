import { System, World, Entity } from "ecsy";
import Circle from "../components/Circle";
import Selectable from "../components/Selectable";
import RectangleSelection from "../components/RectangleSelection";
import positionsAreClose from "../utils/positionsAreClose";

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
    this.queries.rectangleSelections.results.forEach(this.drawRectangleSelection)
  }

  private clear = () => {
    this.ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  private drawCircle = (entity: Entity) => {
    if (!this.ctx) return

    const ctx = this.ctx
    const { position, radius } = entity.getComponent(Circle)
    const { selected } = entity.getComponent(Selectable)
    const { x, y } = position

    ctx.fillStyle = "#888"
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false)
    ctx.fill()
    ctx.lineWidth = 2
    ctx.strokeStyle = selected ? "#F22" : "#222"
    ctx.stroke()    
  }

  private drawRectangleSelection = (entity: Entity) => {
    if (!this.ctx) return;

    const ctx = this.ctx
    const { startPosition, endPosition } = entity.getComponent(RectangleSelection)

    if (positionsAreClose(startPosition, endPosition, 5)) return;

    const { x, y } = startPosition
    const w = endPosition.x - x
    const h = endPosition.y - y

    ctx.lineWidth = 1
    ctx.strokeStyle = "#F22";
    ctx.strokeRect(x, y, w, h)
  }
}

Renderer.queries = {
  circles: { components: [Circle, Selectable] },
  rectangleSelections: { components: [RectangleSelection] },
}

export default Renderer