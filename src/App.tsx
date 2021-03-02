import React, { MouseEventHandler } from 'react';
import { useKey, useWindowSize, useEvent } from 'react-use'

import Game from './ecs/Game'
import './App.css';
import useWebRtc from './hooks/useWebRtc';

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

  const [initiate, receive] = useWebRtc()

  const { width, height } = useWindowSize()

  React.useEffect(() => {
    if (!canvas) return;

    canvas.width = width
    canvas.height = height
    gameRef.current?.onCanvasResize({width, height})
  }, [canvas, width, height])

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

  useEvent('wheel', (e: WheelEvent) => {
    gameRef.current?.onMouseWheel(e)
  })

  return (
    <div className="App">
      <button onClick={initiate}>Initiate</button>
      <button onClick={receive}>Receive</button>
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
