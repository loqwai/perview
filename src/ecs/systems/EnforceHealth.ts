import { System } from 'ecsy'
import Health from '../components/Health'

class EnforceHealth extends System {
  execute(_delta: number, _time: number): void {
    this.queries.withHealth.results.forEach(entity => {
      const { health } = entity.getComponent(Health)

      if (health <= 0) {
        entity.remove()
      }
    })
  }
}

EnforceHealth.queries = {
  withHealth: { components: [Health] }
}

export default EnforceHealth