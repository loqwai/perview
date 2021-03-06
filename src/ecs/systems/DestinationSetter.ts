import { System } from "ecsy";

import Camera from "../components/Camera";
import Destination from "../components/Destination";
import Moveable from "../components/Moveable";
import Position from "../components/Position";
import Selectable from "../components/Selectable";

class DestinationSetter extends System {
  execute(_delta: number, _time: number): void {}

  onMouseDown = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (e.button !== 2) return;

    const { clientX, clientY } = e

    this.selected().forEach(entity => {
      if (!entity.hasComponent(Destination)) {
        entity.addComponent(Destination)
      }
      entity.getMutableComponent(Destination).position.set(clientX, clientY)
                                                      .divideScalarMut(this.cameraScale())
                                                      .subtractMut(this.cameraOffset())
    });
  }

  private selected = () => {
    return this.queries.selectables.results.filter(entity => {
      return entity.getComponent(Selectable).selected
    })
  }

  private cameraOffset = () => this.queries.cameras.results[0].getComponent(Position).position
  private cameraScale = () => this.queries.cameras.results[0].getComponent(Camera).zoom
}

DestinationSetter.queries = {
  cameras: { components: [Camera, Position] },
  selectables: { components: [ Moveable, Selectable ] },
}

export default DestinationSetter