import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { loadItem } from '../../services/localStorage'
import Loading from '../Layout/Loading'

const SongDetail = props => {
  const token = loadItem('TOKEN')
  const { params } = props.match
  const [song, setSong] = useState('')

  useEffect(() => {
    async function fetchData() {
      const response = await axios({
        method: 'get',
        url: `https://api.spotify.com/v1/tracks/${params.id}`,
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json'
        }
      })

      setSong(response.data)
    }
    fetchData()
  }, [])

  const msToMins = ms => {
    var minutes = Math.floor(ms / 60000)
    var seconds = ((ms % 60000) / 1000).toFixed(0)
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds
  }

  const imageURL = song && song.album ? song.album.images[0].url : ''
  const songName = song && song.name ? song.name : ''
  const songAlbum = song && song.album ? song.album.name : ''
  const songArtist = song && song.artists ? song.artists[0].name : ''
  const songDuration =
    song && song.duration_ms ? msToMins(song.duration_ms) : ''

  if (song && song.name) {
    return (
      <div>
        <div className="row justify-content-center">
          <h1>{`${songName} | ${songArtist}`}</h1>
        </div>
        <div className="row justify-content-center mt-3">
          <img src={`${imageURL}`}></img>
        </div>
        <div className="row justify-content-center mt-3">
          <h3>{`Album : ${songAlbum}`}</h3>
        </div>
        <div className="row justify-content-center mb-5">
          <h3>{`Duration : ${songDuration}`}</h3>
        </div>
      </div>
    )
  } else {
    return <Loading />
  }
}

export default SongDetail
