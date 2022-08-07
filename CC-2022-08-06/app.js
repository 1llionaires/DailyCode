// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

//P: speed in km/hr
//R: speed in cm/s round down to nearest integer
//E: given 1.08, result 30
//   given 2.1, results 58
//   given 0.9, results 25
//PC: create a function that converts speed from km/hr to cm/s
function cockroachSpeed(s) {
    return Math.floor(s*27.778);
}
