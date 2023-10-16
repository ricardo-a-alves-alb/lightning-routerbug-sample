import { Router } from '@lightningjs/sdk'
import Page from './Page'

export default class Home extends Page {
  get title() {
    return 'Home'
  }

  _handleEnter() {
    Router.navigate('page1')
  }
}
