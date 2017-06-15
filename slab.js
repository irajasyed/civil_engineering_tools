var LENGTH_DATA = {};

function calc_plan_wise_length(plane_1, plane_2, spacing,slab_type){
 result = 0;
 if (slab_type ==1)
 result = ((plane_1 + 5) ) *((plane_2/(spacing/12))+1);
 else if (slab_type == 2) {
    result = ((plane_1 + 1.5) ) *((plane_2/(spacing/12))+1);
 }
 else {
    result = ((plane_1 + 1+1.5*plane_1) ) *((plane_2/(spacing/12))+1);
 }
 return result;
}

function get_output(result,dia){
  no_of_rods = result / 39.5;
  no_of_rods = (no_of_rods*(10/100) ) + no_of_rods;
  weight = no_of_rods * ((Math.pow(dia,2)/162)*12);
  return {
    weight: weight.toFixed(2),
    no_of_rods : no_of_rods.toFixed(2)
  }
}

function frame_result(){
  result_obj = {}
  for (var key in LENGTH_DATA) {
      if (LENGTH_DATA.hasOwnProperty(key)) {
        total_length = 0
        for(var i in LENGTH_DATA[key]) { total_length += LENGTH_DATA[key][i]; }
        result_obj[key] = get_output(total_length,key);
      }
  }
  return result_obj;
}

function update_length(dia,length_val){
  if(LENGTH_DATA.hasOwnProperty(dia)){
     LENGTH_DATA[dia].push(length_val);
  }
  else{
    LENGTH_DATA[dia] = []
    LENGTH_DATA[dia].push(length_val);
  }
}

function calc_bbs(mutiple,x,y,x_s,y_s,x_dia,y_dia,slab_type){

  x_l = calc_plan_wise_length(x,y,x_s,slab_type);
  y_l = calc_plan_wise_length(y,x,y_s,slab_type);
console.log(x_l);
console.log(y_l);
  // added mutiple
  if( mutiple != 0 ) {
    x_l = mutiple * x_l;
    y_l = mutiple * y_l;
  }

  update_length(x_dia,x_l);
  update_length(y_dia,y_l);

  obj = {}
  obj[x_dia] = x_l;
  obj[y_dia] = y_l;
  return obj;

}
console.log(calc_bbs(2,5,6,6,8,10,8,3));
