import fastify from "fastify";
import routes from "./routes";

const app = fastify({ logger: false });

routes(app);

app.listen(3000, (err: any, address: any) => {
    console.log('started webserver', address);
});



