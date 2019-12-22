import React from 'react'
import SpotifyService from '../services/spotifyApi'

const LoginSpotify = props => {
  const spotifyService = new SpotifyService()
  const url = spotifyService.getUrl()

  return (
    <div>
      <p>
        This is a Spotify client, but before you can use it, you need to login
        in Spotify
      </p>
      <a href={url}>
        <button className="btn btn-success">Login to Spotify</button>
      </a>
    </div>
  )
}

export default LoginSpotify
