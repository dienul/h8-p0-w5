function hapusSimbol(str) {
  var kamus = '~!@#$%^&*()_+'
  var hapus =''
  for(var i = 0; i < str.length; i++){
    var isCek = false 
    for(var j =0 ; j < kamus.length; j++){
      if(str[i] === kamus[j]){
        isCek = true
      }
    }
    if(!isCek){
      hapus+= str[i]
    }
  }
  return hapus
}

// TEST CASES
console.log(hapusSimbol('test%$4aa')); // test4aa
console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')); // makan
console.log(hapusSimbol('coding')); // coding
console.log(hapusSimbol('1+3-5*2=100')); // 1352100