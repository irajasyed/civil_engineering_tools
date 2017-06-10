var LENGTH_DATA = {}
var TOTAL_LENGTH = {}

function calc_length(l,dia){
  return l + ((50 * dia)/304)
}

function calc_length_data(l,dia_rod_data){
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
  LENGTH_DATA = calc_length_data(l, dia_rod_data);

  for(var dia in LENGTH_DATA){
    if(TOTAL_LENGTH.hasOwnProperty(dia)){
      TOTAL_LENGTH[dia] = TOTAL_LENGTH[dia] + (dia_rod_data[dia] * LENGTH_DATA[dia])
    }
    else{
      TOTAL_LENGTH[dia] = dia_rod_data[dia] * LENGTH_DATA[dia]
    }
  }
  console.log("LENGTH---------------");
  console.log(LENGTH_DATA);
  console.log("TOTAL LENGTH------------");
  console.log(TOTAL_LENGTH);
}

function get_output(){
  ROD_COUNT = {}
  for(var dia in TOTAL_LENGTH){
      ROD_COUNT[dia] = TOTAL_LENGTH[dia] / 39.5
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
