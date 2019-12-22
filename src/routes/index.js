import App from '../components/Layout/App'
import Callback from '../components/Layout/spotifyRedirect'

const indexRoutes = [
  { path: '/callback', component: Callback },
  { path: '/', component: App }
]

export default indexRoutes
