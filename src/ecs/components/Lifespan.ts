import { Component, Types } from "ecsy";

class Lifespan extends Component<Lifespan> {
  ttl: number = 0;
  createdAt: number = 0;
}

Lifespan.schema = {
  ttl: { type: Types.Number },
  createdAt: { type: Types.Number },
}

export default Lifespan