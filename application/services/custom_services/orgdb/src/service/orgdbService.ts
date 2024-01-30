import { Request, Response } from 'express';
import {orgdbDao} from '../dao/orgdbDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';

















let orgdb = new orgdbDao();

export class orgdbService {
    
    constructor() { }
    
    public  Delete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into orgdbService.ts: Delete')
     let  orgdbId = req.params.id;
     orgdb.Delete(orgdbId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from orgdbService.ts: Delete')
             
             
            callback(response);

         });
    }
    
public  Search(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into orgdbService.ts: Search')
     let  orgdbData = req.query;
     orgdb.Search(orgdbData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from orgdbService.ts: Search')
             
             
            callback(response);

         });
    }
    
public  SearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into orgdbService.ts: SearchForUpdate')
     let  orgdbData = req.body;
     orgdb.SearchForUpdate(orgdbData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from orgdbService.ts: SearchForUpdate')
             
             
            callback(response);

         });
    }
    
public  Update(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into orgdbService.ts: Update')
     let  orgdbData = req.body;
     orgdb.Update(orgdbData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from orgdbService.ts: Update')
             
             
            callback(response);

         });
    }
    
public  GetEntityById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into orgdbService.ts: GetEntityById')
     let  orgdbId = req.params.id;
     orgdb.GetEntityById(orgdbId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from orgdbService.ts: GetEntityById')
             
             
            callback(response);

         });
    }
    
public  GetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into orgdbService.ts: GetAllValues')
     
     orgdb.GetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from orgdbService.ts: GetAllValues')
             
             
            callback(response);

         });
    }
    
public  Create(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into orgdbService.ts: Create')
     let  orgdbData = req.body;
     orgdb.Create(orgdbData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from orgdbService.ts: Create')
             
             
            callback(response);

         });
    }
    
public  GetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into orgdbService.ts: GetNounCreatedBy')
     let  orgdbData = { created_by: req.query.createdby };
     orgdb.GetNounCreatedBy(orgdbData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from orgdbService.ts: GetNounCreatedBy')
             
             
            callback(response);

         });
    }
    
    
    
    
}