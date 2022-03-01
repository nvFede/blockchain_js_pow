const Block = require('./block')
const BlockChain = require('./blockchain')

pepeCoin = new BlockChain(3)

pepeCoin.addBlock(new Block(new Date(), 'otro block'))
pepeCoin.addBlock(new Block(new Date(), 'otro block 2'))
pepeCoin.addBlock(new Block(new Date(), 'otro block 3'))

console.log(pepeCoin)
console.log(pepeCoin.isValidBlockChain())
