const CustomError = require('../extensions/custom-error')

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length
  },
  addLink(value) {
    if (value != 'undefined') {
      this.chain.push(value + '')
    } else {
      this.chain.push('')
    }
    return this
  },
  removeLink(position) {
    if (!this.chain[position]) {
      this.chain = []
      console.log((this.chain = []))
      throw new Error('Not implemented')
    }

    this.chain.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    let str = `( ${this.chain.join(' )~~( ')} )`

    this.chain = []
    return str
  },
}

module.exports = chainMaker
