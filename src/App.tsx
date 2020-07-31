import React, { MouseEventHandler } from 'react';
import { useKey } from 'react-use'

import Game from './ecs/Game'
import './App.css';

const App = () => {
  const [canvas, setCanvas] = React.useState<HTMLCanvasElement | null>(null);
  const gameRef = React.useRef<Game | null>(null)

  React.useEffect(() => {
    if (!canvas) return;

    gameRef.current = new Game({canvas})
    gameRef.current.start()

    return () => {
      gameRef.current?.stop()
      gameRef.current = null
    }
  }, [canvas])

  React.useEffect(() => {
    const handleResize = () => {
      if (!canvas) return

      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [canvas])

  const onMouseDown: MouseEventHandler<HTMLCanvasElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
    gameRef.current?.onMouseDown(e)
  }

  const onMouseMove: MouseEventHandler<HTMLCanvasElement> = (e) => gameRef.current?.onMouseMove(e)
  const onMouseUp: MouseEventHandler<HTMLCanvasElement> = (e) => gameRef.current?.onMouseUp(e)

  useKey(
    () => true,
    (e) => gameRef.current?.onKeyDown(e),
    {event: 'keydown'}
  )

  useKey(
    () => true,
    (e) => gameRef.current?.onKeyUp(e),
    {event: 'keyup'}
  )

  return (
    <div className="App">
      <canvas
        ref={setCanvas}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onContextMenu={e => e.preventDefault()} />
    </div>
  );
}

export default App;
