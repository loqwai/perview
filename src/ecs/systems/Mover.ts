import { System } from "ecsy";

import Circle from "../components/Circle";
import Moveable from "../components/Moveable";
import Selectable from "../components/Selectable";

import unitVector from "../utils/unitVector";
import Vector2 from "../types/Vector2";
import Destination from "../components/Destination";

class Mover extends System {
  execute(delta: number, _time: number): void {
    this.queries.moveables.results.forEach(entity => {
      const { position } = entity.getMutableComponent(Circle)
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
      const { position } = entity.getComponent(Circle)

      const vector = unitVector({
        x: clientX - position.x,
        y: clientY - position.y,
      })

      entity.addComponent(Destination, { position: new Vector2(clientX, clientY) })
      const moveable = entity.getMutableComponent(Moveable)
      moveable.direction.set(vector.x, vector.y)
    });
  }

  selected = () => {
    return this.queries.selectables.results.filter(entity => {
      return entity.getComponent(Selectable).selected
    })
  }
}

Mover.queries = {
  moveables: { components: [ Moveable, Circle ] },
  selectables: { components: [ Moveable, Selectable ] },
}

export default Mover