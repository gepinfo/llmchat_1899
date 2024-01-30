import { Request, Response, NextFunction } from "express";
import { rolepermissionController } from '../controller/rolepermissionController';


export class Routes {
    private rolepermission: rolepermissionController = new rolepermissionController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/rolepermission/:id').delete(this.rolepermission.Delete);
app.route('/rolepermission/get/search').get(this.rolepermission.Search);
app.route('/rolepermission/get/update').put(this.rolepermission.SearchForUpdate);
app.route('/rolepermission').put(this.rolepermission.Update);
app.route('/rolepermission/:id').get(this.rolepermission.GetEntityById);
app.route('/rolepermission').get(this.rolepermission.GetAllValues);
app.route('/rolepermission').post(this.rolepermission.Create);
app.route('/rolepermission/userid/created_by').get(this.rolepermission.GetNounCreatedBy);
     }

}