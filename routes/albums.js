var express = require('express');
var router = express.Router();
var albumsDao=require('../dao/albumsDao')
/* GET users listing. */
router.get('/', function(req, res) {
    albumsDao.findAllAlbums(function (albums) {
        res.json(albums)
    })
});

router.post('/add',function (req,res) {
    let album=req.body
    albumsDao.addAlbum(album,function (newAlbum) {
        res.json(newAlbum)
    })
})
router.post('/update',function (req,res) {
    let album=req.body;
    albumsDao.updateAlbum(album._id, album,function (newAlbum) {
        res.json(newAlbum)
    })
})
router.delete('/:id',function (req,res) {
    let id=req.params.id;
    albumsDao.deleteAlbum(id,function (obj) {
        res.json(obj)
    })
})

module.exports = router;
