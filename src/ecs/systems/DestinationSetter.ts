import { System } from "ecsy";

import Destination from "../components/Destination";
import Moveable from "../components/Moveable";
import Selectable from "../components/Selectable";

class DestinationSetter extends System {
  execute(_delta: number, _time: number): void {}

  onMouseDown = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (e.button !== 2) return;

    const { clientX, clientY } = e

    this.selected().forEach(entity => {
      if (!entity.hasComponent(Destination)) {
        entity.addComponent(Destination)
      }
      entity.getMutableComponent(Destination).position.set(clientX, clientY)
    });
  }

  selected = () => {
    return this.queries.selectables.results.filter(entity => {
      return entity.getComponent(Selectable).selected
    })
  }
}

DestinationSetter.queries = {
  selectables: { components: [ Moveable, Selectable ] },
}

export default DestinationSetter