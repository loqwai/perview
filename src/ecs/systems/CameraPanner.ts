import { System } from "ecsy"
import Camera from "../components/Camera"
import Position from "../components/Position"
import Vector2 from "../types/Vector2"

class CameraPanner extends System {
  private panning = {
    up: false,
    right: false,
    down: false,
    left: false,
  }

  execute(delta: number, time: number): void {
    const camera = this.queries.cameras.results[0]

    const { position } = camera.getMutableComponent(Position)

    if (this.panning.up) position.addMut(new Vector2(0, 1))
    if (this.panning.right) position.addMut(new Vector2(-1, 0))
    if (this.panning.down) position.addMut(new Vector2(0, -1))
    if (this.panning.left) position.addMut(new Vector2(1, 0))
  }

  onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'w') this.panning.up = true
    if (e.key === 'd') this.panning.right = true
    if (e.key === 's') this.panning.down = true
    if (e.key === 'a') this.panning.left = true
  }

  onKeyUp = (e: KeyboardEvent) => {
    if (e.key === 'w') this.panning.up = false
    if (e.key === 'd') this.panning.right = false
    if (e.key === 's') this.panning.down = false
    if (e.key === 'a') this.panning.left = false
  }
}

CameraPanner.queries = {
  cameras: { components: [Camera, Position] }
}

export default CameraPanner