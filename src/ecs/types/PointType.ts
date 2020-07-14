import { createType } from "ecsy";

const PointType = createType({
  name: "Point",
  default: { x: 0, y: 0 },
  copy: ({ x, y }, des) => {
    des.x = x 
    des.y = y
    return des
  },
  clone: ({ x, y }) => ({ x, y })
});

export default PointType