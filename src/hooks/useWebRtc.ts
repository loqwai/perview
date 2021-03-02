import Peer from 'peerjs'

const peerId = 'c800ab1b-cd04-475e-94ed-89c2df73f469';

const initiate = async () => {
  const peer = new Peer();
  peer.on('open', id => {
    console.log('initiate(open)', id)

    console.log('trying to connect to peer with id', peerId)
    const conn = peer.connect(peerId);
    conn.on('open', () => {
      console.log('initiate(conn(open))')
      conn.send('hi')
    })
    conn.on('data', data => {
      console.log('initiate(conn(data))', id, data)
    })
  })
}

const receive = async () => {
  const conns: Peer.DataConnection[] = []

  console.log('starting up receiver with id', peerId)
  const peer = new Peer(peerId);
  peer.on('connection', conn => {
    console.log('receive(connection)')
    conns.push(conn)

    conn.on('data', data => {
      console.log('receive(data)', data)

      for (const c of conns) {
        c.send('hi back!')
      }
    })
  })
}

const useWebRtc = () => {
  return [initiate, receive]
}

export default useWebRtc