function isSelect(value: string) : boolean
{
  return value.substr(0, 7) === "select ";
}

function conversion(value: string) : void
{
  let nest = 0;
  let beforeChar = '';
  let selectNest = [];
  let selectCount = 0;
  let sql: string[] = new Array();
  let queryBuilder: string[] = new Array();
  for(var i = 0; i < value.length; ++i){
    let current = value[i];
    let isAlias = false;

    if(isSelect(value.substr(i))){
      i += 7;
      for(){
        queryBuilder
      }
      

      selectNest[selectCount] = nest;
      ++selectCount;
    }
    else if(value[i] == '('){
      ++nest;
    }
    else if(value[i] == ')'){
      --nest;
      if(selectNest[selectCount] == nest + 1){
        isAlias = true;
      }
    }
    sql[selectCount] += current;
    beforeChar = current;
  }
}