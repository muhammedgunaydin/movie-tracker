const redis = require('redis')
const client = redis.createClient()

;(async () => {
  await client.connect()
})()

client.on('ready', () => {
  console.log('Connected to Redis')
})

client.on('error', () => {
  console.log('Error in the Connection')
})

const setJWT = (userId, token) => {
  client.setEx(userId, 3600, token)
}

const delJWT = (userId)=>{
  client.del(userId)
}

module.exports = { client, setJWT, delJWT }
