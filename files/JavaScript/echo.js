//variables used for the echo command
var echoString = "";
var echoWhile = 0;

function echoLoud(paramArgArray) {
  echoString = "";
  echoWhile = 0;

  while (paramArgArray[echoWhile] != undefined){
    echoString = echoString + paramArgArray[echoWhile] + " ";
    echoWhile++;
  }
  return ("**"+echoString.toUpperCase()+"**");
}

function echo(paramArgArray) {
  echoString = "";
  echoWhile = 0;

  while (paramArgArray[echoWhile] != undefined){
    echoString = echoString + paramArgArray[echoWhile] + " ";
    echoWhile++;
  }
  return echoString;
}

module.exports = {echo, echoLoud}