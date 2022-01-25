function brainLuck(code, input){
    const output = input.split('');
    const data = [];
    let pointer = 1500;
    
    for(let i = 0; i < pointer * 2; i ++) {
      data.push(0);
    }
    
    let cursor = 0;
    
    while(cursor < code.length) {
      switch(code[cursor]) {
          case '>':
            pointer++;
          break;
          
          case '<':
            pointer--;
            if(data[pointer] == -1) data[pointer] = 255;
          break;
          
          case '+':
            data[pointer]++;
            if(data[pointer] == 256) data[pointer] = 0;
          break;
          
          case '-':
            data[pointer]--;
          break;
          
          case '.':
            output.push(data[pointer]);
          break;
          
          case ',':
            data[pointer] = output.pop().charCodeAt(0);
          break;
          
          case '[':
            if(!data[pointer]) cursor = code.indexOf(']', cursor);
          break;
          
          case ']':
            if(data[pointer]) cursor = code.lastIndexOf('[', cursor);
          break;
      }
      cursor++;
    }
    
    return output.join('');
  }

  console.log(brainLuck(',+[-.,+]','Codewars'+String.fromCharCode(255)));

  function boolfuck(code, input = "") {
    const bitInput = input.split('').map( char => reverse( fillZeros( reverse( char.charCodeAt(0).toString(2) ) ) ) ).reverse().join('').split('');
    const output = [];
    let pointer = new Point();
    let cursor = 0;
    
    //console.log(bitInput);
    
    while(cursor < code.length) {
      switch(code[cursor]) {
          case '>':
            if(!pointer.next) {
              pointer.next = new Point(pointer);
            }
          
            pointer = pointer.next;       
          break;
          
          case '<':
            if(!pointer.last) {
              pointer.last = new Point(null, pointer);
            }
          
            pointer = pointer.last;
          break;
          
          case '+':
            pointer.value = pointer.value ? 0 : 1;
          break;
          
          case ';':
            output.push(pointer.value);
          break;
          
          case ',':
            pointer.value = bitInput.length ? +bitInput.pop() : 0;
          break;
          
          case '[':
            if(!pointer.value) cursor = toPairBracket(code, cursor, true);      
          break;
          
          case ']':
            if(pointer.value) cursor = toPairBracket(code, cursor, false);
          break;
      }
      //console.log(code[cursor] + ' out: ' + output + ' step: ' + cursor + ' val: ' + pointer.value)
      
      cursor++;
      
    }
    
    const result = [];
    let byte = '';
    
    output.forEach( (bit, index) => {
      if(!(index % 8) && index)  {
        result.push(byte);
        byte = '';
      }
      
      byte += bit;
      
      if( index != (output.length - 1)) return;
      result.push(fillZeros(byte));
  
    }, '');
    
    return result.map( cod => String.fromCharCode( parseInt( reverse(cod), 2) ) ).join('');  
  }
  
  function Point(last = null, next = null, value = 0) {
    this.next = next;
    this.last = last;
    this.value = value;
  }
  
  function reverse(str) {
    return str.split('').reverse().join('');
  }
  
  function fillZeros(str) {
    for(let i = 0; i < str.length % 8; i++) str += '0';
    return str;
  }

  function toPairBracket(str, pos, side) {
    let opens = 0;
    while(true) {
      pos += side? 1 : -1;
              
      if(str[pos] == (side ? '[' : ']')) opens++;
              
      if(str[pos] == (side ? ']' : '[')) {
          if(!opens) break;
            
          opens--;
        }
      }
    return pos;
  }

  console.log(boolfuck(`;;;+;+;;+;+;
  +;+;+;+;;+;;+;
  ;;+;;+;+;;+;
  ;;+;;+;+;;+;
  +;;;;+;+;;+;
  ;;+;;+;+;+;;
  ;;;;;+;+;;
  +;;;+;+;;;+;
  +;;;;+;+;;+;
  ;+;+;;+;;;+;
  ;;+;;+;+;;+;
  ;;+;+;;+;;+;
  +;+;;;;+;+;;
  ;+;+;+;`));

  console.log(boolfuck(">,>,>,>,>,>,>,>,<<<<<<<[>]+<[+<]>>>>>>>>>[+]+<<<<<<<<+[>+]<[<]>>>>>>>>>[+<<<<<<<<[>]+<[+<]>>>>>>>>>+<<<<<<<<+[>+]<[<]>>>>>>>>>[+]<<<<<<<<;>;>;>;>;>;>;>;<<<<<<<,>,>,>,>,>,>,>,<<<<<<<[>]+<[+<]>>>>>>>>>[+]+<<<<<<<<+[>+]<[<]>>>>>>>>>]<[+<]", "Codewars" + String.fromCharCode(255)))