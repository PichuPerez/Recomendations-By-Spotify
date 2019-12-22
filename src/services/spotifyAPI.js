class SpotifyService {
  constructor() {
    this._baseUrl = 'https://accounts.spotify.com/authorize?'
    this._client_id = 'c97d310597574e91b8cdd002b7bb0441'
    this._redirect_uri = 'http://localhost:3000/callback'
    this._scope = ['user-top-read', 'user-read-email', 'user-read-private']
  }

  queryString(params = {}) {
    return Object.keys(params)
      .map(key => `${key}=${encodeURIComponent(params[key])}`)
      .join('&')
  }

  getUrl() {
    let query = this.queryString({
      response_type: 'token',
      client_id: this._client_id,
      scope: this._scope,
      redirect_uri: this._redirect_uri
    })
    return `${this._baseUrl}${query}`
  }
}

export default SpotifyService
