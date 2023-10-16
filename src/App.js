import { Router, Utils } from '@lightningjs/sdk'
import Boot from './pages/Boot'
import Home from './pages/Home'
import Page1 from './pages/Page1'

export default class App extends Router.App {
  static getFonts() {
    return [{ family: 'Regular', url: Utils.asset('fonts/Roboto-Regular.ttf') }]
  }

  _setup() {
    const routes = {
      root: 'home',
      routes: [
        {
          path: 'home',
          component: Home,
        },
        {
          path: 'page1',
          component: Page1,
        },
        {
          path: '$',
          component: Boot,
        },
      ],
    }

    Router.startRouter(routes, this)
  }
}
