import { Request, Response } from 'express';
import { rolepermissionService } from '../service/rolepermissionService';
import { CustomLogger } from '../config/Logger'
let rolepermission = new rolepermissionService();

export class rolepermissionController {
    
    constructor() { }
    
    public Delete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    rolepermission.Delete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into rolepermissionController.ts: Delete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from rolepermissionController.ts: Delete');
    })}
public Search(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    rolepermission.Search(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into rolepermissionController.ts: Search');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from rolepermissionController.ts: Search');
    })}
public SearchForUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    rolepermission.SearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into rolepermissionController.ts: SearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from rolepermissionController.ts: SearchForUpdate');
    })}
public Update(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    rolepermission.Update(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into rolepermissionController.ts: Update');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from rolepermissionController.ts: Update');
    })}
public GetEntityById(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    rolepermission.GetEntityById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into rolepermissionController.ts: GetEntityById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from rolepermissionController.ts: GetEntityById');
    })}
public GetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    rolepermission.GetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into rolepermissionController.ts: GetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from rolepermissionController.ts: GetAllValues');
    })}
public Create(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    rolepermission.Create(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into rolepermissionController.ts: Create');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from rolepermissionController.ts: Create');
    })}
public GetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    rolepermission.GetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into rolepermissionController.ts: GetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from rolepermissionController.ts: GetNounCreatedBy');
    })}


}