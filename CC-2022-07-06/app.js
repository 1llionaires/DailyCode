// create a function that finds the total pressure when given molar mass 1,2 given mass 1,2 volume and temperature

//P: M1,M2,m1,m2,v,t
//R: return total pressure convert temp to K and gas constant = 0.082
//E: given (44, 30, 3, 2, 5, 50), results 0.7146511212121212
//   given (60, 20, 10, 30, 10, 100), results  5.099716666666667
//PC: create a function that calculates the total pressure
const solution = (M1, M2, m, m2, v, t) => {
    return (((m1/M1)+(m2/M2))*0.082*(t+273.15)/v)
}