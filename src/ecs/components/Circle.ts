import { Component, Types } from "ecsy";
import Vector2, { Vector2Type } from "../types/Vector2";

class Circle extends Component<Circle> {
  color: string = '#000000';
  radius: number = 0
  position: Vector2 = new Vector2()
}

Circle.schema = {
  color: {type: Types.String},
  radius: { type: Types.Number }, 
  position: { type: Vector2Type },
}

export default Circle