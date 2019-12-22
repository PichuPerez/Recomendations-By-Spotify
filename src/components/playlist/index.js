import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { loadItem } from '../../services/localStorage'
import Loading from '../Layout/Loading'

const Playlist = () => {
  const [playlists, setPlaylists] = useState([])
  const [country, setCountry] = useState('')
  const token = loadItem('TOKEN')

  useEffect(() => {
    const fetchData = async () => {
      await axios({
        method: 'get',
        url: `https://api.spotify.com/v1/me`,
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json'
        }
      }).then(response => {
        if (response && response.data) {
          const country = response.data.country
          setCountry(country)
          const fetchPlaylists = async () => {
            const response = await axios({
              method: 'get',
              url: `https://api.spotify.com/v1/browse/featured-playlists`,
              params: {
                country: country,
                limit: '10'
              },
              headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json'
              }
            })
            setPlaylists(response.data.playlists.items)
          }
          fetchPlaylists()
        }
      })
    }
    fetchData()
  }, [])

  const recomendedPlaylists =
    playlists && playlists.length > 0
      ? playlists.map(playlist => {
          return (
            <div
              className="row mt-3"
              key={playlist.id}
              style={{
                borderBottom: '2px solid #6c757d'
              }}
            >
              <div className="row justify-content-end mr-5">
                <div className="col mb-3">
                  <img src={playlist.images[0].url}></img>
                </div>
              </div>
              <div className="col">
                <div className="row mt-5">
                  <h1>{`${playlist.name}`}</h1>
                </div>
                <div className="row">
                  <h3>{`# of tracks: ${playlist.tracks.total}`}</h3>
                </div>
                <div className="row">
                  <Link to={`/playlist/${playlist.id}`}>
                    <button className="btn btn-info mt-5">See playlist</button>
                  </Link>
                </div>
              </div>
            </div>
          )
        })
      : ''

  if (playlists && playlists.length > 0) {
    return (
      <div className="container">
        <div className="row">
          <h1>{`Editor's pick for ${country} ENJOY!!!`}</h1>
        </div>
        <div className="row">
          <div className="container">{recomendedPlaylists}</div>
        </div>
      </div>
    )
  } else {
    return <Loading />
  }
}

export default Playlist
