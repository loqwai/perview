import { Component, Types } from "ecsy";

class VectorDebugState extends Component<VectorDebugState>{
  enabled: boolean = false;
}

VectorDebugState.schema = {
  enabled: { type: Types.Boolean }
}

export default VectorDebugState