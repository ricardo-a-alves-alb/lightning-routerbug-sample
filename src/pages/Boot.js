import { Router } from '@lightningjs/sdk'
import Page from './Page'

export default class Boot extends Page {
  _firstActive() {
    super._firstActive()

    setTimeout(() => Router.resume(), 2000)
  }

  get title() {
    return 'Boot'
  }
}
