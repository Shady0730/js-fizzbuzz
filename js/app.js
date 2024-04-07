console.log('funziona')

for (let i=0; i<100; i++){
    let num = i + 1;
    console.log('-' ,num)
    const resto1 = num % 3;
    //console.log ('il numero', num ,'è multiplo di 3 con il resto di' , resto1)
    const resto2 = num % 5;
    //console.log ('il numero', num ,'è multiplo di 5 con il resto di' , resto2)
    const resto4 = num % 15;


    if (resto4 === 0){
        console.log('FIZZBUZZ')
    }

    else if (resto1 === 0){
        console.log('FIZZ')
    }

    else (resto2 === 0){
        const resto2 = num % 5;
        console.log('BUZZ');
    };

    


}