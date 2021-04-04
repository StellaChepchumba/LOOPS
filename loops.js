const students=['mary','ann','stella','milka']
for(let element of students){
    console.log(element)
}

const salaries={
    jame:50000,
    stella:100000,
    maryanne:30000,
   kayler:75000
}
for(let i in salaries){
    let salary="ksh" +" " + salaries[i];
    console.log(i+ ": " + ""+salary);
}