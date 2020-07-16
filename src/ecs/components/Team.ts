import { Component, Types } from "ecsy"

class Team extends Component<Team> {
  name: string = "unknown";
}

Team.schema = {
  name: { type: Types.String },
}

export default Team