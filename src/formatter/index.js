import _ from 'lodash'

export default class Formatter {
  constructor(options) {
    _.assign(
      this,
      _.pick(options, [
        'colorFns',
        'cwd',
        'eventDataCollector',
        'log',
        'snippetBuilder',
        'stream',
        'supportCodeLibrary'
      ])
    )
  }
}
