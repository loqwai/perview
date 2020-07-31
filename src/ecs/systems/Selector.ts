import { System } from "ecsy";
import Circle from "../components/Circle";
import Selectable from "../components/Selectable";
import positionsAreClose from "../utils/positionsAreClose";
import Position from "../components/Position";
import Vector2 from "../types/Vector2";
import Camera from "../components/Camera";

class Selector extends System {
  execute(_delta: number, _time: number): void {}

  onMouseDown = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (e.button !== 0) return;

    const clickPosition = new Vector2(e.clientX, e.clientY).divideScalarMut(this.cameraScale())
                                                           .subtractMut(this.cameraOffset())
    this.selectCircles(clickPosition)
  };

  selectCircles = (clickPosition: Vector2) => {
    this.deselectAllCircles()

    this.queries.circles.results.forEach(entity => {
      const { radius } = entity.getComponent(Circle)
      const { position } = entity.getComponent(Position)

      if (positionsAreClose(clickPosition, position, radius)) {
        entity.getMutableComponent(Selectable).selected = true
      }
    })
  }

  private deselectAllCircles = () => {
    this.queries.circles.results.forEach(entity => {
      if (!entity.getComponent(Selectable).selected) return

      entity.getMutableComponent(Selectable).selected = false
    })
  }

  private cameraOffset = () => this.queries.cameras.results[0].getComponent(Position).position
  private cameraScale = () => this.queries.cameras.results[0].getComponent(Camera).zoom
}

Selector.queries = {
  cameras: { components: [Camera, Position] },
  circles: { components: [Circle, Position, Selectable] }
}

export default Selector