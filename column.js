var LENGTH_DATA = {}
var TOTAL_STIRRUP_LENGTH = {}
var TOTAL_LENGTH = {}

function calc_length(l,dia){
  return l + ((50 * dia)/304)
}

function calc_stirrup(l,b,d,stirrup_spacing){
  one_stirrup = ((((b - 2) + (d - 2))*2)+2)
  return  (one_stirrup/12)* (((l * 12)/stirrup_spacing)+1);
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

function main(l,b,d,dia_rod_data,stirrup_dia,stirrup_spacing , multiple_index){
  LENGTH_DATA = calc_length_data(l,b,d,dia_rod_data,stirrup_dia,stirrup_spacing);

  for(var dia in LENGTH_DATA){
    column_length = ((dia_rod_data[dia] * LENGTH_DATA[dia]) * multiple_index)
    if(TOTAL_LENGTH.hasOwnProperty(dia)){
      TOTAL_LENGTH[dia] = TOTAL_LENGTH[dia] + column_length;
    }
    else{
      TOTAL_LENGTH[dia] = column_length;
    }
  }

  //STIRRUP CALCULATION
  STIRRUP_DATA = calc_stirrup(l,b,d,stirrup_spacing) * multiple_index;
  if(TOTAL_LENGTH.hasOwnProperty(stirrup_dia)){
    TOTAL_LENGTH[stirrup_dia] = TOTAL_LENGTH[stirrup_dia] + STIRRUP_DATA;
  }
  else{
    TOTAL_LENGTH[stirrup_dia] = STIRRUP_DATA;
  }

}

function get_output(){
  ROD_COUNT = {}
  for(var dia in TOTAL_LENGTH){
      obj = {}
      no_of_rods = TOTAL_LENGTH[dia] / 39.5
      obj["rod_count"] = no_of_rods + (no_of_rods *(10/100))
      obj["weight"] = obj["rod_count"] * ((Math.pow(dia,2)/Math.pow(16,2))*12)
      ROD_COUNT[dia] = obj
  }
  return ROD_COUNT;
}

dia_rod_data = {}
dia_rod_data[16] = 4
dia_rod_data[12] = 2
main(10,9,12,dia_rod_data,8,6,2)
ans = get_output()
console.log("OUTPUT----------------");
console.log(ans);
