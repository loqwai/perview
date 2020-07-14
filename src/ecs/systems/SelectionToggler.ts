import { System } from "ecsy";
import Circle from "../components/Circle";
import Selectable from "../components/Selectable";
import positionsAreClose from "../utils/positionsAreClose";

class SelectionToggler extends System {
  execute(_delta: number, _time: number): void {}

  onMouseDown = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (e.button !== 0) return;

    const clickPosition = { x: e.clientX, y: e.clientY }

    this.queries.selectables.results.forEach(entity => {
      const { position } = entity.getComponent(Circle)

      if (positionsAreClose(clickPosition, position, 10)) {
        entity.getMutableComponent(Selectable).toggle()
      }
    })
  };
}

SelectionToggler.queries = {
  selectables: { components: [Selectable, Circle] }
}

export default SelectionToggler