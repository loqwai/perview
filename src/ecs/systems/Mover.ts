import { System } from "ecsy";

import Position from "../components/Position";
import Moveable from "../components/Moveable";

class Mover extends System {
  execute(delta: number, _time: number): void {
    this.queries.moveables.results.forEach(entity => {
      const { position } = entity.getMutableComponent(Position)
      const { direction } = entity.getComponent(Moveable)

      const mX = direction.x * (delta / 1000)
      const mY = direction.y * (delta / 1000)

      position.x += mX
      position.y += mY
    })
  }
}

Mover.queries = {
  moveables: { components: [ Moveable, Position ] },
}

export default Mover