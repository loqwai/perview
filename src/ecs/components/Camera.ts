import { Component, Types } from "ecsy";

class Camera extends Component<Camera> {
  readonly panSpeed: number = 0;
  readonly zoomSpeed: number = 0;
  zoom: number = 0;
}

Camera.schema = {
  panSpeed: { type: Types.Number },
  zoom: { type: Types.Number },
  zoomSpeed: { type: Types.Number },
}

export default Camera