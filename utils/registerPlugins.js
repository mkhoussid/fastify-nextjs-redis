const fastifyCookie = require('fastify-cookie');
const fastifyRedis = require('fastify-redis');

module.exports = (fastify, isDev) => {
	fastify.register(fastifyCookie);
	fastify.register(
		fastifyRedis,
		isDev
			? { host: '127.0.0.1' }
			: {
					url: process.env.REDIS_URL,
			  },
	);
};
