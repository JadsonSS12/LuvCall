import Fastify from 'fastify';

export async function build(){
    const app = Fastify({
        logger: true,
    });

    app.get('/health', async() => ({status : "ok"}));

    return app;
}