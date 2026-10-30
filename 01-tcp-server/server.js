import net from 'node:net'

const server = net.createServer(socket => {
  console.log('Connection established')
})

server.listen(1337, () => {
  console.log('Server listening on port 1337')
})
