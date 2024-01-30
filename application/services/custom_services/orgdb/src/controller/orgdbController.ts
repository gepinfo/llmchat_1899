import { Request, Response } from 'express';
import { orgdbService } from '../service/orgdbService';
import { CustomLogger } from '../config/Logger'
let orgdb = new orgdbService();

export class orgdbController {
    
    constructor() { }
    
    public Delete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    orgdb.Delete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into orgdbController.ts: Delete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from orgdbController.ts: Delete');
    })}
public Search(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    orgdb.Search(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into orgdbController.ts: Search');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from orgdbController.ts: Search');
    })}
public SearchForUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    orgdb.SearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into orgdbController.ts: SearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from orgdbController.ts: SearchForUpdate');
    })}
public Update(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    orgdb.Update(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into orgdbController.ts: Update');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from orgdbController.ts: Update');
    })}
public GetEntityById(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    orgdb.GetEntityById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into orgdbController.ts: GetEntityById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from orgdbController.ts: GetEntityById');
    })}
public GetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    orgdb.GetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into orgdbController.ts: GetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from orgdbController.ts: GetAllValues');
    })}
public Create(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    orgdb.Create(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into orgdbController.ts: Create');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from orgdbController.ts: Create');
    })}
public GetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    orgdb.GetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into orgdbController.ts: GetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from orgdbController.ts: GetNounCreatedBy');
    })}


}