import { Request, Response } from 'express';
import { dbcredentialService } from '../service/dbcredentialService';
import { CustomLogger } from '../config/Logger'
let dbcredential = new dbcredentialService();

export class dbcredentialController {
    
    constructor() { }
    
    public Delete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    dbcredential.Delete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into dbcredentialController.ts: Delete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from dbcredentialController.ts: Delete');
    })}
public Search(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    dbcredential.Search(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into dbcredentialController.ts: Search');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from dbcredentialController.ts: Search');
    })}
public SearchForUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    dbcredential.SearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into dbcredentialController.ts: SearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from dbcredentialController.ts: SearchForUpdate');
    })}
public Update(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    dbcredential.Update(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into dbcredentialController.ts: Update');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from dbcredentialController.ts: Update');
    })}
public GetEntityById(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    dbcredential.GetEntityById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into dbcredentialController.ts: GetEntityById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from dbcredentialController.ts: GetEntityById');
    })}
public GetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    dbcredential.GetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into dbcredentialController.ts: GetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from dbcredentialController.ts: GetAllValues');
    })}
public Create(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    dbcredential.Create(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into dbcredentialController.ts: Create');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from dbcredentialController.ts: Create');
    })}
public GetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    dbcredential.GetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into dbcredentialController.ts: GetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from dbcredentialController.ts: GetNounCreatedBy');
    })}


}