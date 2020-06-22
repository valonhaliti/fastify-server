const fastify = require('fastify')({ logger: true });

fastify.get('/hello', async (request, reply) => {
  return {
    hello: 'world',
  };
});

fastify.post('/prsh', async (request, reply) => {
  return {
    prsh: 'bote',
  };
});

// Run the server!
fastify.listen(3000, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`server listening on ${fastify.server.address().port}`);
});
