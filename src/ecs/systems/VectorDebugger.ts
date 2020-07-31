import { System } from 'ecsy'
import VectorDebugState from '../components/VectorDebugState'

class VectorDebugger extends System {
  execute(delta: number, time: number): void {}

  onKeyDown = (e: KeyboardEvent) => {
    if (e.key !== 'v') return;

    const state = this.queries.vectorDebugStates.results[0].getMutableComponent(VectorDebugState)

    state.enabled = !state.enabled
  }

}

VectorDebugger.queries = {
  vectorDebugStates: { components: [VectorDebugState] },
}

export default VectorDebugger