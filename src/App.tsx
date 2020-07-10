import React from 'react';

import Game from './ecs/Game'
import './App.css';

const App = () => {
  const [canvas, setCanvas] = React.useState<HTMLCanvasElement | null>(null);
  const gameRef = React.useRef<Game | null>(null)

  React.useEffect(() => {
    if (!canvas) return;

    gameRef.current = new Game({canvas})
    gameRef.current.run()

    return () => {
      gameRef.current?.destroy()
      gameRef.current = null
    }
  }, [canvas])

  React.useEffect(() => {
    const handleResize = () => {
      if (!canvas) return

      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      gameRef.current?.render();
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  })

  return (
    <div className="App">
      <canvas ref={setCanvas} />
    </div>
  );
}

export default App;
