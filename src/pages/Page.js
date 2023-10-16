import { Lightning, Router } from '@lightningjs/sdk'

export default class Page extends Lightning.Component {
  static _template() {
    return {
      w: 1920,
      h: 1080,
      rect: true,
      color: 0xffcccccc,

      PageTitle: {
        mount: 0.5,
        x: (w) => w / 2,
        y: (h) => h / 2,
        text: {
          textColor: 0xff000000,
          fontSize: 128,
        },
      },
    }
  }

  /*
   * Router events
   */
  _onDataProvided() {
    console.log(this.title, 'Router', '_onDataProvided', arguments)
  }

  _onMounted() {
    console.log(this.title, 'Router', '_onMounted')
  }

  _onChanged() {
    console.log(this.title, 'Router', '_onChanged')
  }

  _onUrlParams(params) {
    console.log(this.title, 'Router', '_onUrlParams', params)
  }

  /*
   * Lifecycle events
   */
  _construct() {
    console.log(this.title, 'Lifecycle', '_construct')
  }

  _build() {
    console.log(this.title, 'Lifecycle', '_build')

    this.tag('PageTitle').patch({ text: { text: this.title } })
  }

  _setup() {
    console.log(this.title, 'Lifecycle', '_setup')
  }

  _init() {
    console.log(this.title, 'Lifecycle', '_init')
  }

  _attach() {
    console.log(this.title, 'Lifecycle', '_attach')
  }

  _detach() {
    console.log(this.title, 'Lifecycle', '_detach')
  }

  _firstEnable() {
    console.log(this.title, 'Lifecycle', '_firstEnable')
  }

  _enable() {
    console.log(this.title, 'Lifecycle', '_enable')
  }

  _disable() {
    console.log(this.title, 'Lifecycle', '_disable')
  }

  _firstActive() {
    console.log(this.title, 'Lifecycle', '_firstActive')
  }

  _active() {
    console.log(this.title, 'Lifecycle', '_active')
  }

  _inactive() {
    console.log(this.title, 'Lifecycle', '_inactive')
  }

  _handleBack() {
    return Router.isNavigating()
  }

  pageTransition() {
    return 'crossFade'
  }

  get title() {
    return 'Page'
  }
}
