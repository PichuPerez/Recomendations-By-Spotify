import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { loadItem } from '../../services/localStorage'
import Loading from '../Layout/Loading'

const PlaylistDetail = props => {
  const token = loadItem('TOKEN')
  const { params } = props.match
  const [tracks, setTracks] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await axios({
        method: 'get',
        url: ` https://api.spotify.com/v1/playlists/${params.id}`,
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json'
        }
      })

      setTracks(response.data.tracks.items)
    }
    fetchData()
  }, [])

  const playlistTracks =
    tracks && tracks.length > 0
      ? tracks.map(track => {
          return (
            <tr key={track.track.id}>
              <th scope="row">{tracks.indexOf(track) + 1}</th>
              <td>
                <img src={track.track.album.images[2].url}></img>
              </td>
              <td>
                <Link to={`/track/${track.track.id}`}>
                  <p style={{ color: 'white' }}>{track.track.name}</p>
                </Link>
              </td>
              <td>{track.track.artists[0].name}</td>
              <td>{track.track.popularity}</td>
            </tr>
          )
        })
      : ''

  if (tracks && tracks.length > 0) {
    return (
      <div className="container">
        <table className="table table-dark table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Artis Name</th>
              <th scope="col">Popularity</th>
            </tr>
          </thead>
          <tbody>{playlistTracks}</tbody>
        </table>
      </div>
    )
  } else {
    return <Loading />
  }
}

export default PlaylistDetail
