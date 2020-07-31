import { System, World, Entity } from "ecsy";
import Circle from "../components/Circle";
import Selectable from "../components/Selectable";
import RectangleSelection from "../components/RectangleSelection";
import positionsAreClose from "../utils/positionsAreClose";
import Position from "../components/Position";
import Health from "../components/Health";
import DebugVector from "../components/DebugVector";
import Vector2 from "../types/Vector2";
import Camera from "../components/Camera";
import VectorDebugState from "../components/VectorDebugState";

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

  constructor(world: World, { canvas, colors, priority }: Attributes) {
    super(world, { priority })
    this.canvas = canvas
    this.colors = colors
    this.ctx = this.canvas.getContext('2d')
  }

  execute(_delta: number, _time: number): void {
    this.clear()
    this.renderCircles()
    this.renderHealths()
    this.renderRectangleSelections()
    this.renderDebugVectors()
  }

  renderCircles = () => this.queries.circles.results.forEach(this.renderCircle)
  renderHealths = () => this.queries.healths.results.forEach(this.renderHealth)
  renderRectangleSelections = () => this.queries.rectangleSelections.results.forEach(this.renderRectangleSelection)

  renderDebugVectors() {
    if (this.vectorDebugEnabled()) {
      this.queries.debugVectors.results.forEach(this.renderDebugVector)
    };

    this.queries.debugVectors.results.forEach(e => e.remove());
  }

  private cameraOffset = () => {
    const camera = this.queries.cameras.results[0]
    return camera.getComponent(Position).position
  }

  private clear = () => {
    if (!this.ctx) return;

    this.ctx.fillStyle = this.colors.background
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  private renderCircle = (entity: Entity) => {
    if (!this.ctx) return

    const ctx = this.ctx
    const { color, radius } = entity.getComponent(Circle)
    const { position } = entity.getComponent(Position)
    const selected = entity.getComponent(Selectable)?.selected ?? false
    const { x, y } = position.add(this.cameraOffset())

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

  private renderDebugVector = (entity: Entity) => this.renderVector(entity.getComponent(DebugVector))

  private renderHealth = (entity: Entity) => {
    const ctx = this.ctx;
    if (!ctx) return;

    const position = entity.getComponent(Position).position.add(this.cameraOffset());
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

  private renderRectangleSelection = (entity: Entity) => {
    if (!this.ctx) return;

    const ctx = this.ctx
    const rectangleSelection = entity.getComponent(RectangleSelection)
    const startPosition = rectangleSelection.startPosition.add(this.cameraOffset())
    const endPosition = rectangleSelection.endPosition.add(this.cameraOffset())

    if (positionsAreClose(startPosition, endPosition, 5)) return;

    const { x, y } = startPosition
    const w = endPosition.x - x
    const h = endPosition.y - y

    ctx.lineWidth = 2
    ctx.strokeStyle = this.colors.selection;
    ctx.strokeRect(x, y, w, h)
  }


  private renderVector = ({ position, direction, color }: { position: Vector2, direction: Vector2, color: string }) => {
    if (!this.ctx) return;

    const offsetPosition = position.add(this.cameraOffset())
    const { x, y } = offsetPosition.add(direction)

    const ctx = this.ctx
    ctx.lineWidth = 2
    ctx.strokeStyle = color
    ctx.beginPath()
    ctx.moveTo(offsetPosition.x, offsetPosition.y)
    ctx.lineTo(x, y)
    ctx.stroke()
  }

  private vectorDebugEnabled = () => this.queries.vectorDebugStates.results[0]?.getComponent(VectorDebugState).enabled
}

Renderer.queries = {
  cameras: { components: [Camera, Position] },
  circles: { components: [Circle, Position] },
  debugVectors: { components: [DebugVector] },
  healths: { components: [Health, Position] },
  rectangleSelections: { components: [RectangleSelection] },
  vectorDebugStates: { components: [VectorDebugState] },
}

export default Renderer