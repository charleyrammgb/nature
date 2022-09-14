import dal from "./dal";
import {FastifyInstance} from "fastify";

export default function routes(app: FastifyInstance) {

    app.get('/sites', async (request: any, reply: any) => {
        return dal.getSites();
    });

    app.get('/sites/:id', async (request: any, reply: any) => {
        return dal.getSites(+request.params.id);
    });

    app.get('/areas', async (request: any, reply: any) => {
        return dal.getAreas();
    });

    app.get('/areas/:areaId', async (request: any, reply: any) => {
        return dal.getSites(+request.params.areaId);
    });

    app.post('/sites/new', async (request: any, reply: any) => {
        return dal.createSite(request.body.name, +request.body.areaId);
    });

    app.post('/sites/:siteId/delete', async (request: any, reply: any) => {
        return dal.deleteSite(+request.params.siteId);
    });
}




