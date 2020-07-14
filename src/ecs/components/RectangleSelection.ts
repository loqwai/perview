import { Component } from "ecsy";
import Vector2, { Vector2Type } from "../types/Vector2";

interface Props {
  startPosition: Vector2
  endPosition: Vector2
}

class RectangleSelection extends Component<Props>{
  startPosition: Vector2 = new Vector2()
  endPosition: Vector2 = new Vector2()
}

RectangleSelection.schema = {
  startPosition: { type: Vector2Type },
  endPosition: { type: Vector2Type },
}

export default RectangleSelection