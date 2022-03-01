const Block = require('./block')

module.exports = class Blockchain {
  constructor(difficulty) {
    this.chain = [this._generateGenesisBlock()]
    this.difficulty = difficulty
  }

  _generateGenesisBlock() {
    return new Block(new Date(), 'Genesis Block', '0')
  }

  _getPreviousBlock() {
    return this.chain[this.chain.length - 1]
  }

  addBlock(newBlock) {
    newBlock.previousHash = this._getPreviousBlock().hash
    newBlock.mineDifficulty(this.difficulty)
    this.chain.push(newBlock)
  }

  isValidBlockChain() {
    for (var i = 1; i < this.chain.length; i++) {

      let currentBlock = this.chain[i]
      let previousBlock = this.chain[i - 1]

      if ( currentBlock.previousHash !== previousBlock.hash) {
        return false
      }

      if ( currentBlock.hash !== currentBlock.generateHash()) {
        return false
      }
    }
    return true
  }

}
