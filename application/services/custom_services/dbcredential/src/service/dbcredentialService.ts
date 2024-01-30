import { Request, Response } from 'express';
import {dbcredentialDao} from '../dao/dbcredentialDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';

















let dbcredential = new dbcredentialDao();

export class dbcredentialService {
    
    constructor() { }
    
    public  Delete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into dbcredentialService.ts: Delete')
     let  dbcredentialId = req.params.id;
     dbcredential.Delete(dbcredentialId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from dbcredentialService.ts: Delete')
             
             
            callback(response);

         });
    }
    
public  Search(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into dbcredentialService.ts: Search')
     let  dbcredentialData = req.query;
     dbcredential.Search(dbcredentialData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from dbcredentialService.ts: Search')
             
             
            callback(response);

         });
    }
    
public  SearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into dbcredentialService.ts: SearchForUpdate')
     let  dbcredentialData = req.body;
     dbcredential.SearchForUpdate(dbcredentialData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from dbcredentialService.ts: SearchForUpdate')
             
             
            callback(response);

         });
    }
    
public  Update(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into dbcredentialService.ts: Update')
     let  dbcredentialData = req.body;
     dbcredential.Update(dbcredentialData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from dbcredentialService.ts: Update')
             
             
            callback(response);

         });
    }
    
public  GetEntityById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into dbcredentialService.ts: GetEntityById')
     let  dbcredentialId = req.params.id;
     dbcredential.GetEntityById(dbcredentialId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from dbcredentialService.ts: GetEntityById')
             
             
            callback(response);

         });
    }
    
public  GetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into dbcredentialService.ts: GetAllValues')
     
     dbcredential.GetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from dbcredentialService.ts: GetAllValues')
             
             
            callback(response);

         });
    }
    
public  Create(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into dbcredentialService.ts: Create')
     let  dbcredentialData = req.body;
     dbcredential.Create(dbcredentialData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from dbcredentialService.ts: Create')
             
             
            callback(response);

         });
    }
    
public  GetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into dbcredentialService.ts: GetNounCreatedBy')
     let  dbcredentialData = { created_by: req.query.createdby };
     dbcredential.GetNounCreatedBy(dbcredentialData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from dbcredentialService.ts: GetNounCreatedBy')
             
             
            callback(response);

         });
    }
    
    
    
    
}