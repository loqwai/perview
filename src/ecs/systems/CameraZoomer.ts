import { System } from "ecsy"
import Camera from "../components/Camera"
import Position from "../components/Position"
import Vector2 from "../types/Vector2"

class CameraZoomer extends System {
  execute(_delta: number, _time: number): void {}

  onCanvasResize = ({ width, height }: { width: number, height: number }) => {
    const camera = this.queries.cameras.results[0].getMutableComponent(Camera)
    camera.width = width
    camera.height = height
  }

  onMouseWheel = ({ clientX, clientY, deltaY }: WheelEvent) => {
    const { position } = this.queries.cameras.results[0].getMutableComponent(Position)
    const camera = this.queries.cameras.results[0].getMutableComponent(Camera)

    const { zoom: zoomStart } = camera


    const zoom = -1 * deltaY * camera.zoomSpeed
    camera.zoom += zoom

    if (camera.zoom <= 0.2) camera.zoom = 0.2
    if (camera.zoom > 10) camera.zoom = 10

    const zoomEnd = camera.zoom

    const startMousePosition = new Vector2(clientX, clientY).divideScalarMut(zoomStart).subtractMut(position)
    const endMousePosition = new Vector2(clientX, clientY).divideScalarMut(zoomEnd).subtractMut(position)

    const offset = endMousePosition.subtract(startMousePosition)
    position.addMut(offset)
  }
}

CameraZoomer.queries = {
  cameras: { components: [Camera, Position] }
}

export default CameraZoomer