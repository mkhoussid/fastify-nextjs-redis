const fastifyConstructor = require('fastify');
const nextJs = require('fastify-nextjs');

const PORT = process.env.PORT || 3000;
const isDev = process.env.NODE_ENV !== 'production';

const { registerPlugins, afterHandler, listenHandler } = require('./utils');

console.log('Environment: ', process.env.NODE_ENV);
const fastify = fastifyConstructor({
	// logger: isDev,
});

registerPlugins(fastify, isDev);

fastify.register(nextJs, { dev: isDev }).after(afterHandler(fastify, isDev));

fastify.listen(PORT, '::', listenHandler(PORT));
