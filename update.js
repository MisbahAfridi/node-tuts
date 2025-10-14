const dbConnect = require('./mongodb');

const update = async () => {
    let data = await dbConnect();
    let result = await data.updateMany(
        {name:'v 30'},
        {
            $set:{name:'v 35 pro',price:75600}
        }
    );
    console.log(result);
}       
update();
