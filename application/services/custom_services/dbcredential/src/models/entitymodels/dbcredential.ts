
export interface dbcredential 
{
   created_date: { type: Date },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date },
   org_ids: { type: String },
   db_username: { type: String },
   passowrd: { type: String },
   host: { type: String },
   port: { type: String },
   driver: { type: String },
   dialect: { type: String },
   database_name: { type: String },
   enterprise_type: { type: String }
}



