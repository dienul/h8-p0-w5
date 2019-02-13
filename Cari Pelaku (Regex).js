/**
Problem
Diberikan sebuah function cariPelaku(kalimat) yang menerima satu parameter berupa string. 
Function akan me-return jumlah berapa kali ditemukan kata "abc" secara berturut-turut di 
dalam kalimat tersebut. Gunakan regex untuk melatih kemampuan regex.
 */

function cariPelaku(str) {
  var counter = 0
  var abc = 'abc'

  for(var i = 0; i < str.length; i++){
    var iscek = false
    var strTamp = ''
    if(str[i]=== abc[0]){
      for(var j =0 ; j < abc.length; j++){
        strTamp += str[i+j]
      }
      if(strTamp === abc){
        counter++
      }
    }
  }
  return counter
}

// TEST CASES
console.log(cariPelaku('mabcvabc')); // 2
console.log(cariPelaku('abcdabdc')); // 1
console.log(cariPelaku('bcabcac')); // 1
console.log(cariPelaku('abcabcabc')); // 3
console.log(cariPelaku('babcbacabc')); // 2