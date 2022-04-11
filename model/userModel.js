import con from './dbconfig.js'
class User {
    constructor(con){
        this.con=con;
        this.table=process.env.prifix+'users';
    }
    users(id=0){
        return new Promise((resolve,reject)=>{
           let user='SELECT * from '+this.table;
            if(id > 0){
                user=user+' where ID=?'
            }
            console.log(user)
            this.con.query(user,[id],(error,row,field)=>{
            if(error) reject(error);
            resolve(row);

            });
        })
    }
}
export default new User(con);