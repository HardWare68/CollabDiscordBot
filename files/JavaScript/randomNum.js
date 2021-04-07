function randomNumber(paramUpper, paramLower){
  return Math.floor(Math.random() * (paramUpper+paramLower)) + paramLower;
}

module.exports = {randomNumber}
