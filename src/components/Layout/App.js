import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Routes from './Routes'
import Footer from './components/Layout/Footer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="jumbotron jumbotron-fluid justify-content-center">
          <Link to="/">
            <h1 style={{ color: 'black', textAlign: 'center' }}>
              Recomendations by Spotify{' '}
            </h1>
          </Link>
        </div>
        <Route path="/" component={Routes} />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
