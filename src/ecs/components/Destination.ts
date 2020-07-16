import { Component } from "ecsy";
import Vector2, { Vector2Type } from "../types/Vector2";

class Destination extends Component<Destination> {
  position: Vector2 = new Vector2()
}

Destination.schema = {
  position: { type: Vector2Type },
}

export default Destination