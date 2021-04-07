function randomNumber(paramLower, paramUpper){
  return Math.floor(Math.random() * parseInt(paramUpper)) + parseInt(paramLower);
}

module.exports = {randomNumber}
