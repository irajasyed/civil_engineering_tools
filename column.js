var LENGTH_DATA = {}
var TOTAL_STIRRUP_LENGTH = {}
var TOTAL_LENGTH = {}

function calc_length(l,dia){
  return l + ((50 * dia)/304)
}

function calc_stirrup(l,b,d,stirrup_spacing){
  console.log(((((b - 2) + (d - 2))*2)+2) * (l/stirrup_spacing));
  return ((((b - 2) + (d - 2))*2)+2) * (l/stirrup_spacing);
}

function calc_length_data(l,b,d,dia_rod_data,stirrup_dia,stirrup_spacing){
  for(var dia in dia_rod_data){
    if(LENGTH_DATA.hasOwnProperty(dia)){
      LENGTH_DATA[dia] = LENGTH_DATA[dia] + calc_length(l,dia);
    }
    else{
      LENGTH_DATA[dia] = calc_length(l,dia);
    }
  }


    return LENGTH_DATA;
}

function main(l,b,d,dia_rod_data,stirrup_dia,stirrup_spacing){
  LENGTH_DATA = calc_length_data(l,b,d,dia_rod_data,stirrup_dia,stirrup_spacing);

  console.log("LENGTH_DATA");
  console.log(LENGTH_DATA);

  for(var dia in LENGTH_DATA){
    if(TOTAL_LENGTH.hasOwnProperty(dia)){
      TOTAL_LENGTH[dia] = TOTAL_LENGTH[dia] + (dia_rod_data[dia] * LENGTH_DATA[dia])
    }
    else{
      TOTAL_LENGTH[dia] = dia_rod_data[dia] * LENGTH_DATA[dia]
    }
  }

  //STIRRUP CALCULATION
  if(TOTAL_LENGTH.hasOwnProperty(stirrup_dia)){
    TOTAL_LENGTH[stirrup_dia] = TOTAL_LENGTH[stirrup_dia] + calc_stirrup(l,b,d,stirrup_spacing);
  }
  else{
    TOTAL_LENGTH[stirrup_dia] = calc_stirrup(l,b,d,stirrup_spacing);
  }

  console.log("TOTAL LENGTH------------");
  console.log(TOTAL_LENGTH);
}

function get_output(){
  ROD_COUNT = {}
  for(var dia in TOTAL_LENGTH){
      obj = {}
      obj["rod_count"] = TOTAL_LENGTH[dia] / 39.5
      obj["weight"] = obj["rod_count"] * ((Math.pow(dia,2)/Math.pow(16,2))*12)
      // ROD_COUNT[dia] = {}
      ROD_COUNT[dia] = obj
  }
  return ROD_COUNT;
}

dia_rod_data = {}
dia_rod_data[16] = 4
dia_rod_data[12] = 2
main(10,9,12,dia_rod_data,8,6)
ans = get_output()
console.log("OUTPUT----------------");
console.log(ans);
