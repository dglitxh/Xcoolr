const redis = require("redis")


const redisClient = redis.createClient({
    socket: {
        host: 'localhost',
        port: 6379
    },
});
redisClient.on('error', (err: Error) => {
    console.log('Error ' + err);
});

redisClient.on('connect', function (err: Error) {
    console.log('Connected to redis successfully');
});

module.exports = redisClient