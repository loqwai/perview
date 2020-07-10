
class Game {
  private canvas: HTMLCanvasElement

  constructor({canvas}: {canvas: HTMLCanvasElement}) {
    this.canvas = canvas
  }

  run =  () => {
    this.render()
  };

  destroy = () => void 0;

  render = () => {
    for (let i = 1; i < 10; i++) {
      this.drawCircle({x: 50 * i, y: 50 * i});
    }
  }

  drawCircle = ({x, y}: {x: number, y: number}) => {
    const ctx = this.canvas.getContext('2d')
    if (!ctx) return;

    ctx.fillStyle = "#888";
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#222";
    ctx.stroke();    
  }
}

export default Game