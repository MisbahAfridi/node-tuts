const dbConnect = require('./mongodb');

const insert = async () => {
    let db = await dbConnect();
    let result = await db.insertMany([ 
        {name:'v 30', brand:'Vivo', price:35000, category:'mobile'},
        {name:'note 11 pro', brand:'Redmi', price:45000, category:'mobile'},
        {name:'samsung s20', brand:'Samsung', price:55000, category:'mobile'}
    ]); 
    if(result.acknowledged){
        console.log('data inserted');
    }
    // console.log(result);
}
insert();