const isVowel = require('.')

console.log("is vowel retorna true para input 'a'");
if (isVowel('a') === true) {
      console.log("OK")
} else {
      console.error("FAIL")
}

console.log("is vowel retorna false para input 'c'")

if (isVowel('c') === false) {
      console.log('OK')
} else {
      console.error("FAIL")
}