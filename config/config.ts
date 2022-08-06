const redis = require("redis")

const client = redis.createClient({
    socket: {
        host: 'localhost',
        port: 6379
    },
    password: process.env.REDIS_PWD
});
client.on('error', (err: Error) => {
    console.log('Error ' + err);
});