import { Component, Types } from "ecsy";

class Camera extends Component<Camera> {
  readonly panSpeed: number = 0;
  readonly zoomSpeed: number = 0;
  height: number = 0;
  width: number = 0;
  zoom: number = 0;
}

Camera.schema = {
  height: { type: Types.Number },
  width: { type: Types.Number },
  panSpeed: { type: Types.Number },
  zoom: { type: Types.Number },
  zoomSpeed: { type: Types.Number },
}

export default Camera