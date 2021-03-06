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
import Attack from "../components/Attack";

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
    this.renderStrengths()
    this.renderDebugVectors()
  }

  renderCircles = () => this.queries.circles.results.forEach(this.renderCircle)
  renderHealths = () => this.queries.healths.results.forEach(this.renderHealth)
  renderStrengths = () => this.queries.strengths.results.forEach(this.renderStrength)
  renderRectangleSelections = () => this.queries.rectangleSelections.results.forEach(this.renderRectangleSelection)

  renderDebugVectors() {
    if (this.vectorDebugEnabled()) {
      this.queries.debugVectors.results.forEach(this.renderDebugVector)
    };

    this.queries.debugVectors.results.forEach(e => e.remove());
  }

  private cameraOffset = () => this.queries.cameras.results[0].getComponent(Position).position
  private cameraScale = () => this.queries.cameras.results[0].getComponent(Camera).zoom

  private clear = () => {
    if (!this.ctx) return;

    this.ctx.fillStyle = this.colors.background
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  private renderCircle = (entity: Entity) => {
    if (!this.ctx) return

    const offset = this.cameraOffset()
    const scale = this.cameraScale()
    const ctx = this.ctx
    const { color, radius } = entity.getComponent(Circle)
    const { position } = entity.getComponent(Position)
    const selected = entity.getComponent(Selectable)?.selected ?? false
    const { x, y } = position.add(offset).multiplyScalar(scale)

    const circleRadius = radius * scale
    const selectionRadius = (radius + 2) * scale

    ctx.fillStyle = color
    ctx.beginPath()
    ctx.arc(x, y, circleRadius, 0, 2 * Math.PI, false)
    ctx.fill()
    ctx.lineWidth = 2 * scale
    ctx.strokeStyle = '#222'
    ctx.stroke()

    if (selected) {
      ctx.beginPath()
      ctx.arc(x, y, selectionRadius, 0, 2 * Math.PI, false)
      ctx.lineWidth = 2 * scale
      ctx.strokeStyle = this.colors.selection
      ctx.stroke()
    }
  }

  private renderDebugVector = (entity: Entity) => this.renderVector(entity.getComponent(DebugVector))

  private renderHealth = (entity: Entity) => {
    const ctx = this.ctx;
    if (!ctx) return;

    const offset = this.cameraOffset()
    const scale = this.cameraScale()
    const { position } = entity.getComponent(Position);
    const { health, maxHealth } = entity.getComponent(Health);

    const { x, y } = position.add(new Vector2(-10, 15)).addMut(offset).multiplyScalarMut(scale)
    const w = 20 * scale
    const h = 4 * scale

    const wHealth = w * health / maxHealth

    ctx.lineWidth = 2 * scale
    ctx.strokeStyle = '#222'
    ctx.strokeRect(x, y, w, h)

    ctx.lineWidth = 0
    ctx.fillStyle = this.colors.selection;
    ctx.fillRect(x, y, wHealth, h)
  }

  private renderRectangleSelection = (entity: Entity) => {
    if (!this.ctx) return;

    const offset = this.cameraOffset()
    const scale = this.cameraScale()
    const ctx = this.ctx
    const rectangleSelection = entity.getComponent(RectangleSelection)

    if (positionsAreClose(rectangleSelection.startPosition, rectangleSelection.endPosition, 5)) return;

    const startPosition = rectangleSelection.startPosition.add(offset).multiplyScalarMut(scale)
    const endPosition = rectangleSelection.endPosition.add(offset).multiplyScalarMut(scale)

    const { x, y } = startPosition
    const w = endPosition.x - x
    const h = endPosition.y - y

    ctx.lineWidth = 2 * scale
    ctx.strokeStyle = this.colors.selection;
    ctx.strokeRect(x, y, w, h)
  }

  private renderStrength = (entity: Entity) => {
    const ctx = this.ctx;
    if (!ctx) return;

    const offset = this.cameraOffset()
    const scale = this.cameraScale()
    const { position } = entity.getComponent(Position);
    const { projectileDamage, projectileDamageOriginal } = entity.getComponent(Attack);

    const { x, y } = position.add(new Vector2(-10, 20)).addMut(offset).multiplyScalarMut(scale)
    const w = 20 * scale
    const h = 4 * scale

    const wHealth = w * projectileDamage / (projectileDamageOriginal * 10)

    ctx.lineWidth = 2 * scale
    ctx.strokeStyle = '#222'
    ctx.strokeRect(x, y, w, h)

    ctx.lineWidth = 0
    ctx.fillStyle = '#c73e1d';
    ctx.fillRect(x, y, wHealth, h)
  }


  private renderVector = ({ position, direction, color }: { position: Vector2, direction: Vector2, color: string }) => {
    if (!this.ctx) return;
    const offset = this.cameraOffset()
    const scale = this.cameraScale()

    const offsetPosition = position.add(offset).multiplyScalarMut(scale)
    const { x, y } = offsetPosition.add(direction.multiplyScalar(scale))

    const ctx = this.ctx
    ctx.lineWidth = 2 * scale
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
  strengths: { components: [Attack, Position] },
  rectangleSelections: { components: [RectangleSelection] },
  vectorDebugStates: { components: [VectorDebugState] },
}

export default Renderer