import Page from './Page'

export default class Page1 extends Page {
  get title() {
    return 'Page1'
  }

  pageTransition(i, o) {
    return new Promise((resolve) => {
      i.patch({
        alpha: 0,
        visible: true,
        smooth: {
          alpha: [1, { duration: 0.5, delay: 0.1 }],
        },
      })
      if (o) {
        o.patch({
          smooth: {
            alpha: [0, { duration: 0.5, delay: 0.3 }],
          },
        })

        // resolve on y finish
        o.transition('alpha').on('finish', () => {
          resolve()
        })
      } else {
        // resolve on y finish
        i.transition('alpha').on('finish', () => {
          resolve()
        })
      }
    })
  }
}
