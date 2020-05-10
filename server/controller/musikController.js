const apikey=process.env.APIKEY
const axios=require('axios')

class MusikController{
    static album(req,res,next){
        axios.get(`https://api.musixmatch.com/ws/1.1/artist.albums.get?artist_id=1039&s_release_date=desc&page_size=100&apikey=${apikey}`)
        .then(data=>{
            res.status(200).json(data.data)
        })
        .catch(err=>{
            next(err)
        })
    }
    static song(req,res,next){
        console.log(req.query)
        axios({
            method:"get",
            url:"https://api.musixmatch.com/ws/1.1/album.tracks.get",
            params:{
                album_id:req.query.album_id,
                page:1,
                page_size:10,
                apikey:apikey
            }
        })
        .then(data=>{
            if(data.data.message.header.status_code!==200){
                next(err)
            }else{
                res.status(200).json(data.data)
            }
        })
        .catch(err=>{
            next(err)
        })
    }
}

module.exports=MusikController