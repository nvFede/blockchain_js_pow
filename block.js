const SHA256 = require('crypto-js/SHA256')

module.exports = class Block {
  constructor(ts, data, previousHash='') {
    this.ts = ts
    this.data = data
    this.previousHash = previousHash
    this.hash = this.generateHash()
    this.nonce = 0
  }

  generateHash() {
    return SHA256(this.ts + this.previousHash + this.hash + JSON.stringify(this.data) + this.nonce).toString()
  }

  mineDifficulty(difficulty) {
    while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join('0')) {
      this.nonce++
      this.hash = this.generateHash()
    }
    console.log('\x1b[36m%s\x1b[0m', 'Block Mined: ', this.hash)
  }
}
