function isSelect(value: string) : boolean
{
  return value.substr(0, 7) === "select ";
}

function isFrom(value: string) : boolean
{
  return value.substr(0, 5) === "from ";
}

function conversion(value: string) : void
{
  let nest = 0;
  let beforeChar = '';
  let selectNest: number[] = new Array();
  let selectCount = 0;
  let sql: string[] = new Array();
  let queryBuilder: string[] = new Array();
  let queryBuilderStr = "";
  for(var i = 0; i < value.length; ++i){
    let current = value[i];
    let isAlias = false;

    if(isSelect(value.substr(i))){
      i += 7;
      for(; i < value.length; ++i){
        if(isFrom(value.substr(i))){
          i += 5;
          let from = "";
          let isBig = true;
          for(; i < value.length; ++i){
            if(value[i] == ''){
              continue;
            }else if(value[i] == '_'){
              isBig = true;
            }
            else if(isBig){
              from += value[i].toUpperCase();
              isBig = false;
            }else{
              from += value[i];
            }
          }
          queryBuilderStr += from;
        }
        queryBuilderStr += "->get();"
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