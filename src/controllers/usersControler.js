const { checkUserDTO, addUserDTO } = require('../DTO/userDto')


const validateEmail = ( email ) => {
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  return email.match(mailformat) !== null
}


const checkUserController = async( email, password ) => {
  const checkUser = await checkUserDTO( email, password )
  return checkUser
}


const newUserController = async ( email, password ) => {
  if ( validateEmail( email ) & password ) {
    await addUserDTO ( email, password )
    return true
  }
  return false  
}

module.exports = { checkUserController, newUserController }