import fastify from "fastify";

const app = fastify({ logger: false });

const sites = [
    {
        "name": "Whitlingham Broad",
        "areaId": 3
    },
    {
        "name": "Mousehold Heath",
        "areaId": 1
    },
    {
        "name": "Plantation Garden",
        "areaId": 4
    },
    {
        "name": "Eaton Park",
        "areaId": 4
    }
]

const areas = {
    "North Norwich": 1,
    "South Norwich": 2,
    "East Norwich": 3,
    "West Norwich": 4
};


app.get('/sites', async (request: any, reply: any) => {
    return sites;
});

app.get('/areas', async (request: any, reply: any) => {
    return areas;
});

app.get('/areas/:areaId', async (request: any, reply: any) => {
    return sites.filter((r) => r.areaId === +request.params.areaId);
});

app.post('/sites/new', async (request: any, reply: any) => {
    const newSite = {
        name: request.body.name,
        areaId: request.body.areaId
    };
    sites.push(newSite);
    return newSite
});

app.listen(3000, (err: any, address: any) => {
    console.log('started webserver', address);
});



