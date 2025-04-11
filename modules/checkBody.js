function checkBody(bodyObject, inputsArray) {
  let emptyField = inputsArray.find(key => key === '')
  if ((inputsArray.length === Object.keys(bodyObject).length) && (emptyField === undefined)) {
    return true
  } else {
    return false
  }
}

module.exports = { checkBody }