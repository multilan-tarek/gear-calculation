let tire_diameter_mm = 653;
let speed_km_h = 117;
let engine_rpm = 3000;
let differential_ratio = 3.15;

let gear_1_ratio = 4.23;
let gear_2_ratio = 2.52;
let gear_3_ratio = 1.66;
let gear_4_ratio = 1.22;
let gear_5_ratio = 1.0;
let gear_6_ratio = 0;

let tire_diameter_m = tire_diameter_mm / 1000;
let speed_km_m = speed_km_h / 60;
let tire_circumference_m = tire_diameter_m * Math.PI;
let wheel_rpm = speed_km_m / tire_circumference_m  * 1000;
let current_gear_ratio = engine_rpm / wheel_rpm;5
current_gear_ratio = current_gear_ratio / differential_ratio;
current_gear_ratio_min = parseFloat(current_gear_ratio - 0.15).toFixed(2);
current_gear_ratio_max = parseFloat(current_gear_ratio + 0.15).toFixed(2);

if (current_gear_ratio_min <= gear_1_ratio && current_gear_ratio_max >= gear_1_ratio) {
  console.log(current_gear_ratio, "Gear 1")
} else if (current_gear_ratio_min <= gear_2_ratio && current_gear_ratio_max >= gear_2_ratio) {
  console.log(current_gear_ratio, "Gear 2")
} else if (current_gear_ratio_min <= gear_3_ratio && current_gear_ratio_max >= gear_3_ratio) {
  console.log(current_gear_ratio, "Gear 3")
} else if (current_gear_ratio_min <= gear_4_ratio && current_gear_ratio_max >= gear_4_ratio) {
  console.log(current_gear_ratio, "Gear 4")
} else if (current_gear_ratio_min <= gear_5_ratio && current_gear_ratio_max >= gear_5_ratio) {
  console.log(current_gear_ratio, "Gear 5")
} else if (current_gear_ratio_min <= gear_6_ratio && current_gear_ratio_max >= gear_6_ratio) {
  console.log(current_gear_ratio, "Gear 6")
}
