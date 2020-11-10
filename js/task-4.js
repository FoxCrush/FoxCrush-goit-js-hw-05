 // Write code under this line
  class StringBuilder {
      constructor (value){
        this._value = value;
      }
      get value (){return this._value}
      set value (newValue){
          this._value = newValue;
      }
      append(str){
          let newStr = '';
          newStr = newStr.concat(this._value, str);
          this._value = newStr;
      }
      prepend(str){
        let newStr = '';
        newStr = newStr.concat(str, this._value);
        this._value = newStr;
      }
      pad(str) {
          this.append(str);
          this.prepend(str);
      }
  }

console.log(typeof StringBuilder);
// 'function'


const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='
