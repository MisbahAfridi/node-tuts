
const dbConnection = require('./mongodb');

// dbConnection().then((resp) => {
//     resp.find().toArray().then((data) => {
//         console.log(data);
//     })
// });

const main = async () => {
    let data = await dbConnection();
    data = await data.find().toArray();
    console.warn(data);

}
main();