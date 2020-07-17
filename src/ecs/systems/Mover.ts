import { System } from "ecsy";

import Position from "../components/Position";
import Moveable from "../components/Moveable";
import Selectable from "../components/Selectable";

import unitVector from "../utils/unitVector";
import Destination from "../components/Destination";

class Mover extends System {
  execute(delta: number, _time: number): void {
    this.queries.moveables.results.forEach(entity => {
      const { position } = entity.getMutableComponent(Position)
      const { direction, speed } = entity.getComponent(Moveable)

      const mX = direction.x * (delta * speed / 1000)
      const mY = direction.y * (delta * speed / 1000)

      position.x += mX
      position.y += mY
    })
  }

  onMouseDown = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (e.button !== 2) return;

    const {clientX, clientY} = e

    this.selected().forEach(entity => {
      const { position } = entity.getComponent(Position)

      const vector = unitVector({
        x: clientX - position.x,
        y: clientY - position.y,
      })

      if (!entity.hasComponent(Destination)) {
        entity.addComponent(Destination)
      }
      entity.getMutableComponent(Destination).position.set(clientX, clientY)
      entity.getMutableComponent(Moveable).direction.set(vector.x, vector.y)
    });
  }

  selected = () => {
    return this.queries.selectables.results.filter(entity => {
      return entity.getComponent(Selectable).selected
    })
  }
}

Mover.queries = {
  moveables: { components: [ Moveable, Position ] },
  selectables: { components: [ Moveable, Selectable ] },
}

export default Mover