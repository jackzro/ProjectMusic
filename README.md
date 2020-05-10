# ProjectMusic
Creating Project Music


## RESTful endpoints
### POST / register

> Register user 

_Request Header_
```
not needed
```

_Request Body_
```
{
	"email": email to register,
	"password": password to register
}
```

_Response (200)_
```
[
    {
        "id": 1,
        "email": "su@gmail.com",
        "password": "$2b$10$1E7/urX3VEOXf0Y7Evo41etLdQgii95.RW0FhFWpRZQqnYCHhFiLC",
        "createdAt": "2020-04-28T04:05:56.156Z",
        "updatedAt": "2020-04-28T04:05:56.156Z"
    },
    {
        "id": 2,
        "email": "jackson@gmail.com",
        "password": "$2b$10$mpGCUFX4qHbUNI/9cgALtuN04rCZ9bZ4FOTEJkoJ.q6orAgOds31G",
        "createdAt": "2020-04-28T05:01:59.625Z",
        "updatedAt": "2020-04-28T05:01:59.625Z"
    }
]
```

_Response (403)_
```
{
  "message":'Email is already used'
}
```


_Response (400 - Bad Request)_
```
{
  "message": "Email is required, password length must be at least 6 character"
}
```

_Response (500 - Internet Server Error)_
```
{
  "message":"unknown error"
}
```
---

### POST / login

> login user 

_Request Header_
```
not needed
```

_Request Body_
```
{
	"email": email that you registered before to login,
	"password": password that you registered before to login
}
```

_Response (200)_
```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjAsImVtYWlsIjoid2l3aUB5YWhvby5jb20iLCJpYXQiOjE1ODgzMjgxMzd9.WemjSdfy7dNal8b0vXz4SaqIjHJ3HwQIh9lE1cRxchs"
}
```

_Response (404 - Not Found)_
```
{
  "message":"Invalid email or password"
}
```


_Response (500 - Internet Server Error)_
```
{
  "message":"unkown error"
}
```
---


### GET / album

> getting data album 

_Request Header_
```
{
  "token": "<your access token>"
}
```

_Request Body_
```
not needed
```

_Request Query Params_
```
not needed
```

_Response (200)_
```
{
{
    "message": {
        "header": {
            "status_code": 200,
            "execute_time": 0.028717041015625,
            "available": 357
        },
        "body": {
            "album_list": [
                {
                    "album": {
                        "album_id": 37161694,
                        "album_mbid": "",
                        "album_name": "Champion Of The World (Live at NPR's Tiny Desk) - Single",
                        "album_rating": 73,
                        "album_release_date": "2020-03-16",
                        "artist_id": 1039,
                        "artist_name": "Coldplay",
                        "primary_genres": {
                            "music_genre_list": [
                                {
                                    "music_genre": {
                                        "music_genre_id": 34,
                                        "music_genre_parent_id": 0,
                                        "music_genre_name": "Music",
                                        "music_genre_name_extended": "Music",
                                        "music_genre_vanity": "Music"
                                    }
                                }
                            ]
                        },
                        "album_pline": "℗ 2020 National Public Radio, Inc., under exclusive license to Parlophone Records Limited, a Warner Music Company",
                        "album_copyright": "℗ 2020 National Public Radio, Inc., under exclusive license to Parlophone Records Limited, a Warner Music Company",
                        "album_label": "Parlophone UK",
                        "restricted": 0,
                        "updated_time": "2020-03-31T03:18:15Z"
                    }
                },
            ]
        }
    }
}
}
```

_Response (404 - Not Found)_
```
{
  "message":"token not found"
}
```

_Response (500 - Internet Server Error)_
```
{
  "message":"unkown error"
}
```
---

### GET / song

> login user 

_Request Header_
```
{
  "token": "<your access token>"
}
```

_Request Query Params_
```
{
    "album_id"=35530294
}
```

_Request Body_
```
not needed
```

_Response (200)_
```
{
    "message": {
        "header": {
            "status_code": 200,
            "execute_time": 0.012237071990967,
            "available": 3
        },
        "body": {
            "track_list": [
                {
                    "track": {
                        "track_id": 186946305,
                        "track_name": "Everyday Life",
                        "track_name_translation_list": [],
                        "track_rating": 73,
                        "commontrack_id": 102303469,
                        "instrumental": 0,
                        "explicit": 0,
                        "has_lyrics": 1,
                        "has_subtitles": 1,
                        "has_richsync": 1,
                        "num_favourite": 112,
                        "album_id": 35530294,
                        "album_name": "Everyday Life",
                        "artist_id": 1039,
                        "artist_name": "Coldplay",
                        "track_share_url": "https://www.musixmatch.com/lyrics/Coldplay-9/Everyday-Life?utm_source=application&utm_campaign=api&utm_medium=Zro%3A1409619881752",
                        "track_edit_url": "https://www.musixmatch.com/lyrics/Coldplay-9/Everyday-Life/edit?utm_source=application&utm_campaign=api&utm_medium=Zro%3A1409619881752",
                        "restricted": 0,
                        "updated_time": "2019-11-22T08:43:57Z",
                        "primary_genres": {
                            "music_genre_list": [
                                {
                                    "music_genre": {
                                        "music_genre_id": 34,
                                        "music_genre_parent_id": 0,
                                        "music_genre_name": "Music",
                                        "music_genre_name_extended": "Music",
                                        "music_genre_vanity": "Music"
                                    }
                                }
                            ]
                        }
                    }
                },
                {
                    "track": {
                        "track_id": 186501271,
                        "track_name": "Arabesque",
                        "track_name_translation_list": [],
                        "track_rating": 45,
                        "commontrack_id": 101979384,
                        "instrumental": 0,
                        "explicit": 1,
                        "has_lyrics": 1,
                        "has_subtitles": 1,
                        "has_richsync": 1,
                        "num_favourite": 106,
                        "album_id": 35530294,
                        "album_name": "Everyday Life",
                        "artist_id": 1039,
                        "artist_name": "Coldplay",
                        "track_share_url": "https://www.musixmatch.com/lyrics/Coldplay-9/Arabesque?utm_source=application&utm_campaign=api&utm_medium=Zro%3A1409619881752",
                        "track_edit_url": "https://www.musixmatch.com/lyrics/Coldplay-9/Arabesque/edit?utm_source=application&utm_campaign=api&utm_medium=Zro%3A1409619881752",
                        "restricted": 0,
                        "updated_time": "2019-11-22T08:43:57Z",
                        "primary_genres": {
                            "music_genre_list": [
                                {
                                    "music_genre": {
                                        "music_genre_id": 34,
                                        "music_genre_parent_id": 0,
                                        "music_genre_name": "Music",
                                        "music_genre_name_extended": "Music",
                                        "music_genre_vanity": "Music"
                                    }
                                }
                            ]
                        }
                    }
                },
                {
                    "track": {
                        "track_id": 186501272,
                        "track_name": "Orphans",
                        "track_name_translation_list": [],
                        "track_rating": 58,
                        "commontrack_id": 101979383,
                        "instrumental": 0,
                        "explicit": 0,
                        "has_lyrics": 1,
                        "has_subtitles": 1,
                        "has_richsync": 1,
                        "num_favourite": 204,
                        "album_id": 35530294,
                        "album_name": "Everyday Life",
                        "artist_id": 1039,
                        "artist_name": "Coldplay",
                        "track_share_url": "https://www.musixmatch.com/lyrics/Coldplay-9/Orphans?utm_source=application&utm_campaign=api&utm_medium=Zro%3A1409619881752",
                        "track_edit_url": "https://www.musixmatch.com/lyrics/Coldplay-9/Orphans/edit?utm_source=application&utm_campaign=api&utm_medium=Zro%3A1409619881752",
                        "restricted": 0,
                        "updated_time": "2019-11-22T08:43:57Z",
                        "primary_genres": {
                            "music_genre_list": [
                                {
                                    "music_genre": {
                                        "music_genre_id": 34,
                                        "music_genre_parent_id": 0,
                                        "music_genre_name": "Music",
                                        "music_genre_name_extended": "Music",
                                        "music_genre_vanity": "Music"
                                    }
                                }
                            ]
                        }
                    }
                }
            ]
        }
    }
}
```

_Response (404 - Not Found)_
```
{
  "message":"token not found"
}
```

_Response (500 - Internet Server Error)_
```
{
  "message":"unkown error"
}
```
---