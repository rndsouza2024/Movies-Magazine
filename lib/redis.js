// redis.js

import Redis from 'ioredis';

// Create a new Redis instance pointing to your Redis server
const redis = new Redis({
  host: process.env.REDIS_HOST || 'localhost', // Use 'host.docker.internal' for Docker for Windows/Mac
  port: process.env.REDIS_PORT || 6379,        // Default Redis port
});

export default redis;


// import redis from 'redis';

// // Connect to Redis
// const client = redis.createClient({
//   host: 'redis', // Name of the Redis service in docker-compose.yml
//   port: 6379,    // Default Redis port
// });

// client.on('connect', () => {
//   console.log('Connected to Redis');
// });

// client.on('error', (err) => {
//   console.error('Error connecting to Redis:', err);
// });

// export default client;
