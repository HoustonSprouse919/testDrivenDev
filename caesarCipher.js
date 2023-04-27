function caesarCipher(string,shiftFactor) {
    let cipherText ="";
    let charcode =0;
    var re = /[a-y]/;
    for(let i=0; i<string.length; i++){
        if(re.test(string[i]) ){
        charcode = (string[i].charCodeAt()) + shiftFactor;
        cipherText += String.fromCharCode(charcode);
        } else if(string[i] == "z"){
            cipherText += "a"
        } else{
            cipherText += string[i];
        }
    }
    return cipherText;
  }
  module.exports = caesarCipher;