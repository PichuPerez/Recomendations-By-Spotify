import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Switch, Route, Link, Redirect } from 'react-router-dom'
import Footer from './Footer'
import { loadItem } from '../../services/localStorage'
import LoginSpotify from '../LoginSpotify'
import appRoutes from '../../routes/AppRoutes'

const App = () => {
  const token = loadItem('TOKEN')
  if (token !== undefined) {
    return (
      <div style={{ backgroundColor: '#cfe4e7' }} className="pb-5">
        <Footer />
        <div
          className="jumbotron jumbotron-fluid justify-content-center"
          style={{ backgroundColor: '#0a4953' }}
        >
          <Link to="/playlist">
            <h1 style={{ color: '#dae0e5', textAlign: 'center' }}>
              Recomendations by Spotify
            </h1>
          </Link>
        </div>
        <Switch>
          {appRoutes.map((prop, key) => {
            if (prop.redirect)
              return <Redirect from={prop.path} to={prop.to} key={key} />
            return (
              <Route path={prop.path} component={prop.component} key={key} />
            )
          })}
        </Switch>
      </div>
    )
  } else {
    return <LoginSpotify />
  }
}

export default App
