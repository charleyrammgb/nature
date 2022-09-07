import fastify from "fastify";
import fs from "fs";

const app = fastify({ logger: false });

const getRegions = () => {
    const data = fs.readFileSync("regions.json", "utf8");
    return JSON.parse(data);
}

app.get('/', async (request: any, reply: any) => {
    console.log('hit', '/');
    return { hello: 'world' };
});

app.get('/regions', async (request: any, reply: any) => {
    return { regions: getRegions()};
});

app.listen(3000, (err: any, address: any) => {
    if (err) {
        app.log.error(err);
        process.exit(1);
    }
});



