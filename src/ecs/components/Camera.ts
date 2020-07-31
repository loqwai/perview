import { Component, Types } from "ecsy";

class Camera extends Component<Camera> {
  panSpeed: number = 0;
}

Camera.schema = {
  panSpeed: { type: Types.Number },
}

export default Camera