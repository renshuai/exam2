const mongoose=require('mongoose')
let BookSchema={name:String,price:Number}
let Customer={name:String,password:String,score:Number}

let albumsSchema={
    album_id: String,
    album_name: String,
    public_time: String,
    week: Number,
    price: Number,
    cover: String,
    singers: Array
}

mongoose.model("albums",albumsSchema)

mongoose.model("books",BookSchema)
mongoose.model("Customer",Customer)


