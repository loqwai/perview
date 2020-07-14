import { System } from "ecsy";
import Moveable from "../components/Moveable";
import Position from "../components/Position";
import Selectable from "../components/Selectable";
import positionsAreClose from "../utils/positionsAreClose";

const unitVector = ({ x, y }: { x: number, y: number }) => {
  const r = Math.sqrt(x*x + y*y)

  return {
    x: x / r,
    y: y / r,
  }
}

class MoveCommander extends System {
  execute(delta: number, _time: number): void {
    this.withDestination().forEach(entity => {
      const position = entity.getMutableComponent(Position)
      const { destinationX, destinationY, speed } = entity.getComponent(Moveable)

      const destination = { x: destinationX, y: destinationY }

      const vector = unitVector({
        x: destination.x - position.x,
        y: destination.y - position.y,
      })

      const mX = vector.x * (delta * speed / 1000)
      const mY = vector.y * (delta * speed / 1000)

      position.x += mX
      position.y += mY

      if (positionsAreClose(position, destination, 1)) {
        entity.getMutableComponent(Moveable).hasDestination = false
      }
    })
  }

  onMouseDown = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (e.button !== 2) return;

    const {clientX, clientY} = e

    this.selected().forEach(entity => {
      const moveable = entity.getMutableComponent(Moveable)
      moveable.hasDestination = true
      moveable.destinationX = clientX
      moveable.destinationY = clientY
    });
  }

  selected = () => {
    return this.queries.selectables.results.filter(entity => {
      return entity.getComponent(Selectable).selected
    })
  }

  withDestination = () => {
    return this.queries.moveables.results.filter(entity => {
      return entity.getComponent(Moveable).hasDestination
    })
  }
}

MoveCommander.queries = {
  moveables: { components: [ Moveable, Position ] },
  selectables: { components: [ Moveable, Selectable ] },
}

export default MoveCommander