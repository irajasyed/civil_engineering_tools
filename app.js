var LENGTH_DATA = {};

function calc_plan_wise_length(plane_1, plane_2, l_d, spacing){
 result = 0;
 result = ((plane_1 - 0.5) + (2*l_d)) *((plane_2/(spacing/12))+1);
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

function calc_bbs(x,y,depth,x_s,y_s,x_dia,y_dia){


  l_d = depth - 0.5;

  x_l = calc_plan_wise_length(y,x,l_d,x_s);
  y_l = calc_plan_wise_length(x,y,l_d,y_s);

  update_length(x_dia,x_l);
  update_length(y_dia,y_l);

  obj = {}
  obj[x_dia] = x_l;
  obj[y_dia] = y_l;
  return obj;

}

x = calc_bbs(5,6,2,6,8,10,8);
console.log(x);
y = calc_bbs(4,5,2,6,8,10,8);
console.log(y);

ans = frame_result()
console.log(ans);
