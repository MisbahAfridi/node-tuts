const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/e-comm');
const productSchema = new mongoose.Schema({
        name: String,
        brand: String,
        price: Number,
        category: String
    });

const saveInDb = async () => {
const ProductsModel = mongoose.model('products', productSchema);
    let data = new ProductsModel({
        name:'Note 30',
        brand:'Infinix',
        price:52000,
        category:'mobile'
        
    });
    let result = await data.save();
    console.log(result);
}

const updateInDb = async () => {
    const Product = mongoose.model('products', productSchema);
    let data = await Product.updateOne(
        {name:'Note 30'},
        {
            $set:{price:49000}
        }
    );
    console.log(data);
}

const deleteInDb = async () => {
    const Product = mongoose.model('products', productSchema);
    let data = await Product.deleteOne(
        {name:'Note 30'}
    );
    console.log(data);
}

const findInDb = async () => {
    const Product = mongoose.model('products', productSchema);
    let data = await Product.find({name:'v 35 pro'});
    console.log(data);
}

findInDb();