import { Component, Types } from "ecsy";
import Vector2, { Vector2Type } from "../types/Vector2";

class Circle extends Component<Circle> {
  position: Vector2 = new Vector2()
  radius: number = 0
}

Circle.schema = {
  position: { type: Vector2Type },
  radius: { type: Types.Number }, 
}

export default Circle