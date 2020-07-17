import { System } from "ecsy";
import Circle from "../components/Circle";
import Selectable from "../components/Selectable";
import positionsAreClose from "../utils/positionsAreClose";
import Position from "../components/Position";

class Selector extends System {
  execute(_delta: number, _time: number): void {}

  onMouseDown = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (e.button !== 0) return;

    const clickPosition = { x: e.clientX, y: e.clientY }
    this.selectCircles(clickPosition)
  };

  selectCircles = (clickPosition: { x: number, y: number }) => {
    let anySelected = false

    this.queries.circles.results.forEach(entity => {
      const { radius } = entity.getComponent(Circle)
      const { position } = entity.getComponent(Position)

      if (positionsAreClose(clickPosition, position, radius)) {
        entity.getMutableComponent(Selectable).selected = true
        anySelected = true
      }
    })

    if (!anySelected) this.deselectAllCircles();
  }

  private deselectAllCircles = () => {
    this.queries.circles.results.forEach(entity => {
      if (!entity.getComponent(Selectable).selected) return

      entity.getMutableComponent(Selectable).selected = false
    })
  }
}

Selector.queries = {
  circles: { components: [Circle, Position, Selectable] }
}

export default Selector