import * as mongoose from 'mongoose';
import dbcredentialModel from '../models/daomodels/dbcredential';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'




export class dbcredentialDao {
    private dbcredential = dbcredentialModel;

    

    constructor() { }
    
    public async Delete(dbcredentialId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into dbcredentialDao.ts: Delete');

    

    
    
    
    this.dbcredential.findByIdAndRemove(dbcredentialId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from dbcredentialDao.ts: Delete');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Search(dbcredentialData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into dbcredentialDao.ts: Search');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(dbcredentialData).forEach(
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
    this.dbcredential.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from dbcredentialDao.ts: Search');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async SearchForUpdate(dbcredentialData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into dbcredentialDao.ts: SearchForUpdate');

    

    
    
    
    this.dbcredential.findOneAndUpdate({ _id: dbcredentialData._id }, dbcredentialData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from dbcredentialDao.ts: SearchForUpdate');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Update(dbcredentialData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into dbcredentialDao.ts: Update');

    

    
    
    
    this.dbcredential.findOneAndUpdate({ _id: dbcredentialData._id }, dbcredentialData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from dbcredentialDao.ts: Update');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetEntityById(dbcredentialId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into dbcredentialDao.ts: GetEntityById');

    

    
    
    
    this.dbcredential.findById(dbcredentialId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from dbcredentialDao.ts: GetEntityById');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into dbcredentialDao.ts: GetAllValues');

    

    
    
    
    this.dbcredential.find().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from dbcredentialDao.ts: GetAllValues');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Create(dbcredentialData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into dbcredentialDao.ts: Create');

    let temp = new dbcredentialModel(dbcredentialData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from dbcredentialDao.ts: Create');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetNounCreatedBy(dbcredentialData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into dbcredentialDao.ts: GetNounCreatedBy');

    

    
    
    
    this.dbcredential.aggregate(([
                        { $match: { $and: [{ created_by: dbcredentialData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from dbcredentialDao.ts: GetNounCreatedBy');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}


}