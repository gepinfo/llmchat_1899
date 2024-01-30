import * as mongoose from 'mongoose';
import rolepermissionModel from '../models/daomodels/rolepermission';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'




export class rolepermissionDao {
    private rolepermission = rolepermissionModel;

    

    constructor() { }
    
    public async Delete(rolepermissionId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into rolepermissionDao.ts: Delete');

    

    
    
    
    this.rolepermission.findByIdAndRemove(rolepermissionId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from rolepermissionDao.ts: Delete');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Search(rolepermissionData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into rolepermissionDao.ts: Search');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(rolepermissionData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.rolepermission.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from rolepermissionDao.ts: Search');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async SearchForUpdate(rolepermissionData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into rolepermissionDao.ts: SearchForUpdate');

    

    
    
    
    this.rolepermission.findOneAndUpdate({ _id: rolepermissionData._id }, rolepermissionData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from rolepermissionDao.ts: SearchForUpdate');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Update(rolepermissionData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into rolepermissionDao.ts: Update');

    

    
    
    
    this.rolepermission.findOneAndUpdate({ _id: rolepermissionData._id }, rolepermissionData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from rolepermissionDao.ts: Update');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetEntityById(rolepermissionId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into rolepermissionDao.ts: GetEntityById');

    

    
    
    
    this.rolepermission.findById(rolepermissionId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from rolepermissionDao.ts: GetEntityById');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into rolepermissionDao.ts: GetAllValues');

    

    
    
    
    this.rolepermission.find().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from rolepermissionDao.ts: GetAllValues');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Create(rolepermissionData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into rolepermissionDao.ts: Create');

    let temp = new rolepermissionModel(rolepermissionData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from rolepermissionDao.ts: Create');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetNounCreatedBy(rolepermissionData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into rolepermissionDao.ts: GetNounCreatedBy');

    

    
    
    
    this.rolepermission.aggregate(([
                        { $match: { $and: [{ created_by: rolepermissionData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from rolepermissionDao.ts: GetNounCreatedBy');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}


}