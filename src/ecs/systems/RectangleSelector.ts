import { System } from "ecsy";
import Selectable from "../components/Selectable";
import Circle from "../components/Circle";

class RectangleSelector extends System {
  execute(_delta: number, _time: number): void {}
}

RectangleSelector.queries = {
  selectables: { components: [Selectable, Circle] }
}

export default RectangleSelector