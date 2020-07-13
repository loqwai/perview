import { System } from "ecsy";
import Position from "../components/Position";
import Selectable from "../components/Selectable";

class SelectionToggler extends System {
  execute(_delta: number, _time: number): void {}

  onMouseDown = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (e.button !== 0) return;

    const {clientX, clientY} = e

    this.queries.selectables.results.forEach(entity => {
      const { x, y } = entity.getComponent(Position)

      const dX = x - clientX
      const dY = y - clientY

      const distance = Math.sqrt( (dX*dX) + (dY*dY) )
      if (distance <= 10) {
        entity.getMutableComponent(Selectable).toggle()
      }
    })
  };

}

SelectionToggler.queries = {
  selectables: { components: [Selectable, Position] }
}

export default SelectionToggler