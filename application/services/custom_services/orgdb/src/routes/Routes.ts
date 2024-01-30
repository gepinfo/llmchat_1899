import { Request, Response, NextFunction } from "express";
import { orgdbController } from '../controller/orgdbController';


export class Routes {
    private orgdb: orgdbController = new orgdbController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/orgdb/:id').delete(this.orgdb.Delete);
app.route('/orgdb/get/search').get(this.orgdb.Search);
app.route('/orgdb/get/update').put(this.orgdb.SearchForUpdate);
app.route('/orgdb').put(this.orgdb.Update);
app.route('/orgdb/:id').get(this.orgdb.GetEntityById);
app.route('/orgdb').get(this.orgdb.GetAllValues);
app.route('/orgdb').post(this.orgdb.Create);
app.route('/orgdb/userid/created_by').get(this.orgdb.GetNounCreatedBy);
     }

}