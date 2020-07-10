import { Component, Types } from "ecsy";

export interface RenderableProps {
  canvas: HTMLCanvasElement
}

class Renderable extends Component<RenderableProps> {}

Renderable.schema = {
  canvas: { type: Types.Ref },
}

export default Renderable