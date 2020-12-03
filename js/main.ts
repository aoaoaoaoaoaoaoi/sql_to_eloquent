function isSelect(value: string) : boolean
{
  return value.substr(0, 7) === "select ";
}

function isFrom(value: string) : boolean
{
  return value.substr(0, 5) === "from ";
}

function getAggregateStr(value: string) : string
{
  if(value.substr(0, 1) === "*"){
    return "->get();";
  }else if(value.substr(0, 3) === "min"
  || value.substr(0, 3) === "max"
  || value.substr(0, 5) === "count"
  || value.substr(0, 3) === "avg"
  || value.substr(0, 3) === "sum"
  ){
    if (value.indexOf("(") == -1) {
      return "->" + value + "()";
    }
    return "->" + value;
  }
  return "";
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

  let seletStr = "";

  let selects = value.split(/([select]+)/);
  selects.forEach(select =>{
    let from = select.split(/([from]+)/);
    let selectNest = from[0].split(/([,]+)/);
    selectNest.forEach(nest =>{
      let n = nest.split("as");
      if(selectNest.length == 1 && n.length == 1){
        let s = selectNest[0].replace(/\s+/g, "");
        seletStr = getAggregateStr(s);
      }
    });
  });

  }
}