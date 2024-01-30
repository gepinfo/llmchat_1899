
import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const orgdbSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: { type: String },
   type: { type: String },
   permissions: { type: String }
})

const orgdbModel = mongoose.model('orgdb', orgdbSchema, 'orgdb');
export default orgdbModel;
