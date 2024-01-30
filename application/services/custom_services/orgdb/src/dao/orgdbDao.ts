import * as mongoose from 'mongoose';
import orgdbModel from '../models/daomodels/orgdb';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'




export class orgdbDao {
    private orgdb = orgdbModel;

    

    constructor() { }
    
    public async Delete(orgdbId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into orgdbDao.ts: Delete');

    

    
    
    
    this.orgdb.findByIdAndRemove(orgdbId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from orgdbDao.ts: Delete');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Search(orgdbData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into orgdbDao.ts: Search');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(orgdbData).forEach(
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
    this.orgdb.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from orgdbDao.ts: Search');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async SearchForUpdate(orgdbData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into orgdbDao.ts: SearchForUpdate');

    

    
    
    
    this.orgdb.findOneAndUpdate({ _id: orgdbData._id }, orgdbData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from orgdbDao.ts: SearchForUpdate');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Update(orgdbData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into orgdbDao.ts: Update');

    

    
    
    
    this.orgdb.findOneAndUpdate({ _id: orgdbData._id }, orgdbData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from orgdbDao.ts: Update');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetEntityById(orgdbId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into orgdbDao.ts: GetEntityById');

    

    
    
    
    this.orgdb.findById(orgdbId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from orgdbDao.ts: GetEntityById');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into orgdbDao.ts: GetAllValues');

    

    
    
    
    this.orgdb.find().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from orgdbDao.ts: GetAllValues');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Create(orgdbData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into orgdbDao.ts: Create');

    let temp = new orgdbModel(orgdbData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from orgdbDao.ts: Create');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetNounCreatedBy(orgdbData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into orgdbDao.ts: GetNounCreatedBy');

    

    
    
    
    this.orgdb.aggregate(([
                        { $match: { $and: [{ created_by: orgdbData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from orgdbDao.ts: GetNounCreatedBy');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}


}