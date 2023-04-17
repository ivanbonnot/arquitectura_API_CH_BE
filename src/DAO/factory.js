const MongoProductDao = require('./mongoProductDao')

let productsDao = undefined

const getDao = async() => {
  if( !productsDao ) {
      productsDao = await new MongoProductDao()
  }
  return {
    products: productsDao
  }
}


module.exports = getDao