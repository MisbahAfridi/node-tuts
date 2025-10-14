const dbConnection = require('./mongodb');

const deleteData = async () => {
    let data = await dbConnection();
    let result = await data.deleteMany(
        {name:'Note 30'}
    );
    if(result.acknowledged && result.deletedCount > 0){
        console.log('data deleted');
    }
    else{
        console.log('no data found');
    }   
    console.warn(result);
}
deleteData();