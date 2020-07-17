import { Component, Types } from "ecsy";

class Circle extends Component<Circle> {
  color: string = '#000000';
  radius: number = 0
}

Circle.schema = {
  color: {type: Types.String},
  radius: { type: Types.Number }, 
}

export default Circle