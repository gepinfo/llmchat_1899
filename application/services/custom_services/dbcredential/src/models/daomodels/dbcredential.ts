
import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const dbcredentialSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   org_ids: { type: String },
   db_username: { type: String },
   passowrd: { type: String },
   host: { type: String },
   port: { type: String },
   driver: { type: String },
   dialect: { type: String },
   database_name: { type: String },
   enterprise_type: { type: String }
})

const dbcredentialModel = mongoose.model('dbcredential', dbcredentialSchema, 'dbcredential');
export default dbcredentialModel;
