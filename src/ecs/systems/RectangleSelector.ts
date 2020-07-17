import { System } from "ecsy";
import Selectable from "../components/Selectable";
import Vector2 from "../types/Vector2";
import RectangleSelection from "../components/RectangleSelection";
import positionsAreClose from "../utils/positionsAreClose";
import Position from "../components/Position";

class RectangleSelector extends System {
  execute(_delta: number, _time: number): void { }

  onMouseDown = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (e.button !== 0) return;
    if (this.queries.rectangleSelections.results.length > 0) return;

    const startPosition = new Vector2(e.clientX, e.clientY)
    const endPosition = new Vector2(e.clientX, e.clientY)

    this.world.createEntity()
      .addComponent(RectangleSelection, { startPosition, endPosition })
  }

  onMouseMove = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    const { clientX, clientY } = e

    this.queries.rectangleSelections.results.forEach(entity => {
      const { endPosition } = entity.getComponent(RectangleSelection)

      if (clientX === endPosition.x || clientY === endPosition.y) {
        return;
      }

      entity.getMutableComponent(RectangleSelection).endPosition.set(clientX, clientY)
    })
  }

  onMouseUp = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (e.button !== 0) return;

    this.queries.rectangleSelections.results.forEach(entity => {
      const { startPosition, endPosition } = entity.getComponent(RectangleSelection)
      entity.remove();
      if (positionsAreClose(startPosition, endPosition, 5)) return;

      this.queries.selectables.results.forEach(selectableEntity => {
        const selectable = selectableEntity.getMutableComponent(Selectable)
        const { position } = selectableEntity.getComponent(Position);
        const { x, y } = position

        const withinX = (startPosition.x < x && x < endPosition.x)
                    || (endPosition.x < x && x < startPosition.x)

        const withinY = (startPosition.y < y && y < endPosition.y)
                    || (endPosition.y < y && y < startPosition.y)

        selectable.selected = (withinX && withinY)
      })
    })
  }
}

RectangleSelector.queries = {
  selectables: { components: [Position, Selectable] },
  rectangleSelections: { components: [RectangleSelection] },
}

export default RectangleSelector