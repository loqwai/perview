import { Component, Types } from "ecsy";
import Vector2, { Vector2Type } from "../types/Vector2";

class DebugVector extends Component<DebugVector> {
  position: Vector2 = new Vector2();
  direction: Vector2 = new Vector2();
  color: string = '#ff00ff';
}

DebugVector.schema = {
  position: { type: Vector2Type },
  direction: { type: Vector2Type },
  color: { type: Types.String },
}

export default DebugVector