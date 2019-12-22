import React, { Fragment, useEffect } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'

import Playlist from './components/playlist'
import PlaylistDetail from './components/playlistDetail'
import SongDetail from './components/songDetail'

const Routes = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Playlist} />
        <Route path="/playlist/:id" component={PlaylistDetail} />
        <Route exact path="/track/:id" component={SongDetail} />
      </Switch>
    </Fragment>
  )
}

export default Routes
