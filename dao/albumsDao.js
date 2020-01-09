//dao/BookDao.js v1
const mogoose=require('mongoose')

let albumsModel=mogoose.model("albums");
function addAlbum(album,callback) {
    let b=  albumsModel.create(album,function (err,newAlbum) {
        if(!err) callback(newAlbum.toObject())
    })
}

function findAllAlbums(callback) {
    albumsModel.find({}).exec(function (err,albums) {
        if(!err) callback(albums)
    })
}

function deleteAlbum(id,callback) {
    albumsModel.findByIdAndRemove(id,function (err) {
        if(!err) callback({})
    })
}

function updateAlbum(id,album, callback) {
    albumsModel.findByIdAndUpdate(id, album, function (err, newAlbum) {
        if(!err) callback(newAlbum.toObject())
    })
}

module.exports={findAllAlbums,deleteAlbum, addAlbum, updateAlbum}
