import { Request, Response } from 'express';
import {rolepermissionDao} from '../dao/rolepermissionDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';

















let rolepermission = new rolepermissionDao();

export class rolepermissionService {
    
    constructor() { }
    
    public  Delete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into rolepermissionService.ts: Delete')
     let  rolepermissionId = req.params.id;
     rolepermission.Delete(rolepermissionId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from rolepermissionService.ts: Delete')
             
             
            callback(response);

         });
    }
    
public  Search(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into rolepermissionService.ts: Search')
     let  rolepermissionData = req.query;
     rolepermission.Search(rolepermissionData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from rolepermissionService.ts: Search')
             
             
            callback(response);

         });
    }
    
public  SearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into rolepermissionService.ts: SearchForUpdate')
     let  rolepermissionData = req.body;
     rolepermission.SearchForUpdate(rolepermissionData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from rolepermissionService.ts: SearchForUpdate')
             
             
            callback(response);

         });
    }
    
public  Update(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into rolepermissionService.ts: Update')
     let  rolepermissionData = req.body;
     rolepermission.Update(rolepermissionData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from rolepermissionService.ts: Update')
             
             
            callback(response);

         });
    }
    
public  GetEntityById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into rolepermissionService.ts: GetEntityById')
     let  rolepermissionId = req.params.id;
     rolepermission.GetEntityById(rolepermissionId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from rolepermissionService.ts: GetEntityById')
             
             
            callback(response);

         });
    }
    
public  GetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into rolepermissionService.ts: GetAllValues')
     
     rolepermission.GetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from rolepermissionService.ts: GetAllValues')
             
             
            callback(response);

         });
    }
    
public  Create(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into rolepermissionService.ts: Create')
     let  rolepermissionData = req.body;
     rolepermission.Create(rolepermissionData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from rolepermissionService.ts: Create')
             
             
            callback(response);

         });
    }
    
public  GetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into rolepermissionService.ts: GetNounCreatedBy')
     let  rolepermissionData = { created_by: req.query.createdby };
     rolepermission.GetNounCreatedBy(rolepermissionData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from rolepermissionService.ts: GetNounCreatedBy')
             
             
            callback(response);

         });
    }
    
    
    
    
}