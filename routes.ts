import dal from "./dal";
import {FastifyInstance} from "fastify";

export default async function routes (fastify: FastifyInstance) {

    fastify.get('/sites', async () => {
        return dal.getSites();
    });

    fastify.get('/sites/:id', async (request: any) => {
        return dal.getSites(+request.params.id);
    });

    fastify.get('/areas', async () => {
        return dal.getAreas();
    });

    fastify.get('/areas/:areaId', async (request: any) => {
        return dal.getSites(+request.params.areaId);
    });

    fastify.post('/sites/new', async (request: any) => {
        return dal.createSite(request.body.name, +request.body.areaId);
    });

    fastify.post('/sites/:siteId/delete', async (request: any) => {
        return dal.deleteSite(+request.params.siteId);
    });
}





