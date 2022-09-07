import fastify from "fastify";
import fs from "fs";

const app = fastify({ logger: false });

const regions = [
    {
        "id": "1",
        "name": "Whitlingham Broad",
        "location": 3
    },
    {
        "id": "2",
        "name": "Mousehold Heath",
        "location": 1
    }
]

const regionIds = {
    "North Norwich": 1,
    "South Norwich": 2,
    "East Norwich": 3,
    "West Norwich": 4
};

app.get('/regions', async (request: any, reply: any) => {
    return regions;
});

app.get('/regions/:locationId', async (request: any, reply: any) => {
    const region = regions.find((region: any) => region.location === +request.params.locationId);
    return { region };
});

app.listen(3000, (err: any, address: any) => {
    if (err) {
        app.log.error(err);
        process.exit(1);
    }
});



