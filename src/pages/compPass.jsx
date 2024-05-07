const bcrypt = require('bcrypt')
const comparar = async (password, hash) => {
  try {
    const match = await bcrypt.compare(password, hash)
    return match
  } catch (error) {
    console.error('Error al comparar contraseñas:', error)
    throw new Error('Error al comparar contraseñas')
  }
}

module.exports = { comparar }
