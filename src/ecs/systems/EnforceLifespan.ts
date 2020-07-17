import { System } from 'ecsy'
import Lifespan from '../components/Lifespan'

class EnforceLifespan extends System {
  execute(delta: number, time: number): void {
    this.queries.withLifepan.results.forEach(entity => {
      const { ttl, createdAt } = entity.getComponent(Lifespan)

      if (createdAt + ttl < time) {
        entity.remove()
      }
    })
  }
}

EnforceLifespan.queries = {
  withLifepan: { components: [Lifespan] }
}

export default EnforceLifespan