
import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const organizationSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   realm_name: { type: String }
})

const organizationModel = mongoose.model('organization', organizationSchema, 'organization');
export default organizationModel;
