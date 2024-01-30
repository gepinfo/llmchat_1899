import { Request, Response, NextFunction } from "express";
import { dbcredentialController } from '../controller/dbcredentialController';


export class Routes {
    private dbcredential: dbcredentialController = new dbcredentialController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/dbcredential/:id').delete(this.dbcredential.Delete);
app.route('/dbcredential/get/search').get(this.dbcredential.Search);
app.route('/dbcredential/get/update').put(this.dbcredential.SearchForUpdate);
app.route('/dbcredential').put(this.dbcredential.Update);
app.route('/dbcredential/:id').get(this.dbcredential.GetEntityById);
app.route('/dbcredential').get(this.dbcredential.GetAllValues);
app.route('/dbcredential').post(this.dbcredential.Create);
app.route('/dbcredential/userid/created_by').get(this.dbcredential.GetNounCreatedBy);
     }

}