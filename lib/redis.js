import Redis from 'ioredis';

const redis = new Redis({
  host: 'localhost', // Use 'host.docker.internal' if on Docker for Windows/Mac
  port: 6379,
});

export default redis;
