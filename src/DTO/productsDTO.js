const factoryDAO = require('../DAO/factory')

const addNewProductDTO = async( prod ) => {
  console.log( prod )
  const products = await (factoryDAO()).mongoDAO
  await products.saveProduct( prod )
  return 
}

const getProductsDTO = async() => {
  const products = await(factoryDAO()).mongoDAO
  const allProducts = await products.getProducts()
  return allProducts
}

const getProductByIdDTO = async( id ) => {
  const products = await (factoryDAO()).mongoDAO
  const productById = await products.getProductById( id )
  return productById
}

const deleteProductDTO = async( id ) => {
  const products = await (factoryDAO()).mongoDAO
  await products.deleteProduct( id )
  return 
}

const deleteAllProductsDTO = async() => {
  const products = await (factoryDAO()).mongoDAO
  await products.deleteAllProducts()
  return 
}


module.exports = { getProductsDTO, getProductByIdDTO, deleteProductDTO, deleteAllProductsDTO, addNewProductDTO }

