module.exports = (fastify) =>
	async function () {
		try {
			fastify.next('/', (app, req, reply) => {
				req.raw.redisInstance = fastify.redis;
				app.render(req.raw, reply.raw, '/', req.query);
			});

			fastify.next('/another', (app, req, reply) => {
				req.raw.redisInstance = fastify.redis;
				app.render(req.raw, reply.raw, '/another', req.query);
			});
		} catch (err) {
			console.log('Error caught in afterHandler', err);
		}
	};
