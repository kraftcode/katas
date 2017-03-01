class StringCalculator {

  constructor(_delimiter = ';'){
    this.delimiter = [];
    this.delimiter[0] = _delimiter;
  }

  add() {
    let limit = 1000;
    let accumulator = 0;
    let parameters = [];
    let delimiterIndex = -1;
    let number = 0;

    for(let i = 0; i < arguments.length; i++){
      if(arguments[i].substring(0,2) === '//'){
        let newDelim = String(arguments[i].substring(2).split('/n')[0].split(',')[0]);
        this.delimiter[0]= newDelim[0];
        for(let j = 1; j < newDelim.length; j++){
          if(newDelim[j-1] !== newDelim[j]){
            this.delimiter.push(newDelim[j]);
          } else {
            this.delimiter[this.delimiter.length-1] += newDelim[j];
          }
        }
      }

      parameters = arguments[i].split(this.delimiter[0]);
      if(this.delimiter.length > 1){
        for(let l = 1; l < this.delimiter.length; l++){
          parameters = parameters[l-1].split(this.delimiter[l]);
        }
      }
      for(let k = 0; k < parameters.length; k++){
        number = Number(parameters[k]);
        if(number < 0){
          throw 'negatives not allowed';
        }
        if(!isNaN(number) && number < limit){
          accumulator += number;
        }
      }
    }
    return accumulator;
  }
}


// assignDelimiters(){
//
// }

export default StringCalculator;

