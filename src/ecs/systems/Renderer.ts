import { System, World, Entity } from "ecsy";
import Circle from "../components/Circle";
import Selectable from "../components/Selectable";
import RectangleSelection from "../components/RectangleSelection";
import positionsAreClose from "../utils/positionsAreClose";
import Position from "../components/Position";
import Health from "../components/Health";
import DebugVector from "../components/DebugVector";
import Vector2 from "../types/Vector2";

interface Colors {
  background: string;
  selection: string;
}

interface Attributes {
  priority?: number;
  canvas: HTMLCanvasElement;
  colors: Colors
}

class Renderer extends System {
  private canvas: HTMLCanvasElement;
  private colors: Colors;
  private ctx: CanvasRenderingContext2D | null;

  private debug: boolean;

  constructor(world: World, { canvas, colors, priority }: Attributes) {
    super(world, { priority })
    this.canvas = canvas
    this.colors = colors
    this.ctx = this.canvas.getContext('2d')
    this.debug = false
  }

  execute(delta: number, time: number): void {
    this.clear()
    this.queries.circles.results.forEach(this.drawCircle)
    this.queries.healths.results.forEach(this.drawHealth)
    this.queries.rectangleSelections.results.forEach(this.drawRectangleSelection)
    this.queries.debugVectors.results.forEach(this.drawDebugVector)
    this.queries.debugVectors.results.forEach(e => e.remove())
  }

  toggleDebug = () => {
    this.debug = !this.debug
  }

  private clear = () => {
    if (!this.ctx) return;

    this.ctx.fillStyle = this.colors.background
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  private drawCircle = (entity: Entity) => {
    if (!this.ctx) return

    const ctx = this.ctx
    const { color, radius } = entity.getComponent(Circle)
    const { position } = entity.getComponent(Position)
    const selected = entity.getComponent(Selectable)?.selected ?? false
    const { x, y } = position

    ctx.fillStyle = color
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false)
    ctx.fill()
    ctx.lineWidth = 2
    ctx.strokeStyle = '#222'
    ctx.stroke()

    if (selected) {
      ctx.beginPath()
      ctx.arc(x, y, radius + 2, 0, 2 * Math.PI, false)
      ctx.lineWidth = 2
      ctx.strokeStyle = this.colors.selection
      ctx.stroke()
    }
  }

  private drawDebugVector = (entity: Entity) => {
    if (!this.debug) return;
    this.drawVector(entity.getComponent(DebugVector))
  }

  private drawHealth = (entity: Entity) => {
    const ctx = this.ctx;
    if (!ctx) return;

    const { position } = entity.getComponent(Position);
    const { health, maxHealth } = entity.getComponent(Health);

    const x = position.x - 10
    const y = position.y + 15
    const w = 20
    const h = 4

    const wHealth = w * health / maxHealth

    ctx.lineWidth = 2
    ctx.strokeStyle = '#222'
    ctx.strokeRect(x, y, w, h)

    ctx.lineWidth = 0
    ctx.fillStyle = this.colors.selection;
    ctx.fillRect(x, y, wHealth, h)
  }

  private drawRectangleSelection = (entity: Entity) => {
    if (!this.ctx) return;

    const ctx = this.ctx
    const { startPosition, endPosition } = entity.getComponent(RectangleSelection)

    if (positionsAreClose(startPosition, endPosition, 5)) return;

    const { x, y } = startPosition
    const w = endPosition.x - x
    const h = endPosition.y - y

    ctx.lineWidth = 2
    ctx.strokeStyle = this.colors.selection;
    ctx.strokeRect(x, y, w, h)
  }

  private drawVector = ({ position, direction, color }: { position: Vector2, direction: Vector2, color: string }) => {
    if (!this.ctx) return;

    const { x, y } = position.add(direction)

    const ctx = this.ctx
    ctx.lineWidth = 2
    ctx.strokeStyle = color
    ctx.beginPath()
    ctx.moveTo(position.x, position.y)
    ctx.lineTo(x, y)
    ctx.stroke()
  }
}

Renderer.queries = {
  circles: { components: [Circle, Position] },
  debugVectors: { components: [DebugVector] },
  healths: { components: [Health, Position] },
  rectangleSelections: { components: [RectangleSelection] },
}

export default Renderer