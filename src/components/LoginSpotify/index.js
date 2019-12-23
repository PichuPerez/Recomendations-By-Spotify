import React from 'react'
import SpotifyService from '../../services/spotifyAPI'

const LoginSpotify = props => {
  const spotifyService = new SpotifyService()
  const url = spotifyService.getUrl()

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-6 text-align-center">
          <h3 className="text-center">
            Before you can get your recomendations, you need to login to your
            Spotify account.
          </h3>
          <a href={url}>
            <button className="btn btn-info btn-block mt-5">
              Login to Spotify
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default LoginSpotify
