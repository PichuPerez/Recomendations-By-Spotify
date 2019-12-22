import React, { Fragment, useEffect } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'

import Playlist from '../components/playlist'
import PlaylistDetail from '../components/playlistDetail'
import SongDetail from '../components/songDetail'

const appRoutes = [
  {
    path: '/playlist/:id',
    component: PlaylistDetail
  },
  {
    path: '/playlist',
    component: Playlist
  },
  {
    path: '/track/:id',
    component: SongDetail
  }
]

export default appRoutes
