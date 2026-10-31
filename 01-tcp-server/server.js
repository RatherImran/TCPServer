import net from 'node:net'

const server = net.createServer(socket => {
  console.log('Client Connected')

  socket.on('data', chunk => {
    console.log('Received:', chunk.toString())

    socket.write(`Received: ${chunk}`) // response back to the client
    socket.end()
  })
})

server.listen(1337, () => {
  console.log('Server listening on port 1337')
})
