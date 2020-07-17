import { Component } from "ecsy";
import Vector2, { Vector2Type } from "../types/Vector2";

class Position extends Component<Position> {
  position: Vector2 = new Vector2()
}

Position.schema = {
  position: { type: Vector2Type },
}

export default Position