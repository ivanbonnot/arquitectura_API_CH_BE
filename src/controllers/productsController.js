const { getProductsDTO, getProductByIdDTO, deleteProductDTO, addNewProductDTO } = require('../DTO/productsDTO')


const newProductController = async ( productToAdd ) => {
    await addNewProductDTO ( productToAdd )
    return
}

const getAllProductsController = async() => {
  const products = await getProductsDTO()
  return products
}

const getProductByIdController = async( id ) => {
  const product = await getProductByIdDTO( id )
  return product
}

const delProductByIdController = async( id ) => {
  await deleteProductDTO( id )
  return
}


module.exports = { newProductController, getAllProductsController, getProductByIdController, delProductByIdController }