const redis = require("ioredis")


const redisClient = redis.createClient({
    legacyMode: true,
    socket: {
        host: 'localhost',
        port: 6379
    },
});
redisClient.on('error', (err: Error) => {
    console.log(err);
});

redisClient.on('connect', function (err: Error) {
    console.log('Connected to redis successfully');
});

// (async () => {
//     redisClient.connect();
//  })();

module.exports = redisClient