import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Playlist = () => {
  const [playlists, setPlaylists] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await axios({
        method: 'get',
        url: `https://api.spotify.com/v1/browse/featured-playlists`,
        params: {
          market: 'MX',
          limit: '5'
        },
        headers: {
          Authorization: 'Bearer ' + process.env.REACT_APP_API_TOKEN,
          'Content-Type': 'application/json'
        }
      })
      console.log(response.data)
      setPlaylists(response.data.playlists.items)
    }
    fetchData()
  }, [])
  console.log('Playlists', playlists)
  const recomendedPlaylists =
    playlists && playlists.length > 0
      ? playlists.map(playlist => {
          return (
            <div className="row mt-3" key={playlist.id}>
              <div className="row justify-content-end mr-5">
                <div className="col">
                  <img src={playlist.images[0].url}></img>
                </div>
              </div>
              <div className="col">
                <div className="row">
                  <h1>{`${playlist.name}`}</h1>
                </div>
                <div className="row">
                  <h3>{`# of tracks: ${playlist.tracks.total}`}</h3>
                </div>
                <div className="row">
                  <Link to={`/playlist/${playlist.id}`}>
                    <button className="btn btn-success mt-5">
                      See playlist
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )
        })
      : ''

  return (
    <div>
      <div className="container">
        <h3>
          Here are your playlists recomendations according to your country.
          ENJOY!!!
        </h3>
        <div className="row justify-content-center">
          <div className="container">{recomendedPlaylists}</div>
        </div>
      </div>
    </div>
  )
}

export default Playlist
