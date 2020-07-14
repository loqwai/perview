import { System } from "ecsy";
import Circle from "../components/Circle";
import Selectable from "../components/Selectable";
import positionsAreClose from "../utils/positionsAreClose";

class SelectionToggler extends System {
  execute(_delta: number, _time: number): void {}

  onMouseDown = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (e.button !== 0) return;

    const clickPosition = { x: e.clientX, y: e.clientY }
    this.selectCircles(clickPosition)
  };

  selectCircles = (clickPosition: { x: number, y: number }) => {
    let anySelected = false

    this.queries.circles.results.forEach(entity => {
      const { position, radius } = entity.getComponent(Circle)

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

SelectionToggler.queries = {
  circles: { components: [Selectable, Circle] }
}

export default SelectionToggler