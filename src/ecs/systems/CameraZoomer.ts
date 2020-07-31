import { System } from "ecsy"
import Camera from "../components/Camera"

class CameraZoomer extends System {
  execute(_delta: number, _time: number): void {}

  onMouseWheel = (deltaY: number) => {
    const camera = this.queries.cameras.results[0].getMutableComponent(Camera)

    const zoom = -1 * deltaY * camera.zoomSpeed

    camera.zoom = zoom <= 0 ? 0.000000001 : zoom
  }
}

CameraZoomer.queries = {
  cameras: { components: [Camera] }
}

export default CameraZoomer