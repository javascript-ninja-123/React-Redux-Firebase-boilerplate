import {database} from '../actions';



class FirebaseCenter{
    constructor(){
      //we are creating a collection
      this.ref = database.ref('/user');
      this.ref = database.ref('/frequent-user')
    }

    async addData(data){
      //firebase
      //it is not a built-in javascript func
      const uniqueId = this.ref.push().key;
      //rest operator
      //from es6 and you must learn it
      await this.ref.push({...data, id:uniqueId})
    }
    async deleteData(id){
      try{
        //will go through only id and find a matching data and delete
        const snap = await this.ref.orderByChild('id').equalTo(id).once('value')
        snap.ref.remove();
      }
      catch(err){
        console.log(err)
      }
    }

    async updateData(obj){
      try{
        // const newId = obj.id;
        const {id} = obj;
        const snap = await this.ref.orderByChild('id').equalTo(id).once('value')
        snap.ref.update(obj);
      }
      catch(err){
        console.log(err)
      }
    }

      async getData(id){
        //this is the way you get realtme data from firebase
        return this.ref.orderByChild('id').equalTo(id).on('value', snap => {
          return snap.val();
        })
        //once
        //this.ref.once()
      }
      async getAllData(){
        return this.ref.on('value', snap => {
          return snap.val();
        })

      }


}


export default FirebaseCenter;
