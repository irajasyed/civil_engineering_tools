function calc_plan_wise_length(plane_1, plane_2, l_d, spacing){
 result = 0;
 result = (plane_1 + (2*l_d)) *((plane_2/(spacing/12))+1);
 // console.log(result);
 return result;
}

function calc_bbs(x,y,depth,x_s,y_s,x_dia,y_dia){
  //defining inputs

  //in feet
  // x = 5;
  // y = 6;
  // depth = 2;

  //in inches
  // x_s = 6;
  // y_s = 8;

  //in mm
  // x_dia = 10;
  // y_dia = 10;

  // console.log(x);
  // console.log(y);
  // console.log(depth);
  // console.log(x_s);
  // console.log(y_s);
  // console.log(x_dia);
  // console.log(y_dia);

 same_dia = false;
 if(x_dia == y_dia)
   same_dia = true;

  l_d = depth - 0.5;

  x_l = calc_plan_wise_length(y,x,l_d,x_s);
  y_l = calc_plan_wise_length(x,y,l_d,y_s);

  total = x_l + y_l;

  no_of_rods = Math.ceil(total / 39.5);

  weight = 0;
  if(same_dia){
    weight = no_of_rods * ((Math.pow(x_dia,2)/162)*12);
  }

  return {
    weight : Math.ceil(weight),
    no_of_rods : no_of_rods
  }
  // console.log("No of Rods" +no_of_rods);
  // console.log("Weight" + weight);
  // console.log("Weight" + Math.ceil(weight));

}

// x = calc_bbs();
// console.log(x);
