const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};
function decode(expr) {
    let array = expr.split('');
    let word = "";
    let result ="";
    for(let i=0; i<array.length; i++){
        if(i%11==0){
          array.splice(i, 0, " ");
        }
        if(array[i]==" "){
            word+=" "
        }else if(array[i]+array[i+1]=="10"){
          word+='.'
          i++
        }else if(array[i]+array[i+1]=="11"){
          word+='-'
          i++
        }else  if(array[i]=="*"){
            word+=" | "
            i+=9
        }
    }
    let transform = word.split(" ");
    transform.forEach(item => {
      for(let key in MORSE_TABLE){
          if(item == key){
              result+=MORSE_TABLE[key]
          }
      }
      if(item == "|"){
          result+=" "
      }
    })
    return result;
}


module.exports = {
    decode
}
