
import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const rolepermissionSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   role_ids: { type: String },
   data_permission: { type: String },
   definition: { type: String },
   roles: { type: String }
})

const rolepermissionModel = mongoose.model('rolepermission', rolepermissionSchema, 'rolepermission');
export default rolepermissionModel;
