
const switcher = (text:string,number='0')=>{
    switch(text){
        case '0' :
        case '1' :
        case '2' :
        case '3' :
        case '4' :
        case '5' :
        case '6' :
        case '7' :
        case '8' :
        case '9' :
          if(number==='0'){
            return (text)
          }
          else{return (number+text)}
          
        case '.' : 
          if(number.indexOf('.') < 0){return(number+text)}
          break;
        case '删除':
          if(number.length>1){return(number.slice(0,-1))}
          else{return('0')}
        case '清空':
          return('0')
        case 'OK':
          console.log('确认')
          break;
        default :
          return '0';
      }      
}

export {switcher} ;