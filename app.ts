import fastify from "fastify";
import routes from "./routes";
import populateDbDummyData from "./populateDbDummyData";

populateDbDummyData();


const app = fastify({ logger: false });

app.register(routes);

app.listen(3000, (err: any, address: any) => {
    console.log('started webserver', address);
});



