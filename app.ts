import fastify from "fastify";
import routes from "./routes";

const app = fastify({ logger: false });

app.register(routes);

app.listen(3000, (err: any, address: any) => {
    console.log('started webserver', address);
});



