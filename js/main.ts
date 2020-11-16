function isSelect(value: string) : boolean
{
  return value.substr(0, 7) === "select ";
}

function conversion(value: string) : void
{
  let nest = 0;
  let beforeChar = '';
  let selectNest = [];
  let sql: string[] = new Array();
  for(var i = 0; i < value.length; ++i){
    let current = value[i];

    sql[nest] += current;
    if(isSelect(value.substr(i))){
      
    }
    else if(value[i] == '('){
      ++nest;
    }
    else if(value[i] == ')'){
      --nest;
      //名前があるから微妙
    }
    beforeChar = current;
  }
}