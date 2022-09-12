//Write a function that collects an input (a number) 
//and prints all the possible prime numbers within that number


const isPrime =(num) => {
    for ( var i = 2; i < num; i++ ) {
        if ( num % i === 0 ) {
            return false;
        }
    }
    return true;
}

const display =(n) => {
    var arr = [2];
    for ( var i = 3; i < n; i+=2 ) {
        if ( isPrime(i) ) {
            arr.push(i);
        }
    }
    console.log(arr); // use arr result on your own
}

display(100);


///sexond attempt

const printPrimeNumbers =(num)=>{
    let primes = []
    for(let n = 3; n<num; n+=2){
        if (primes.every((prime)=>{return n% prime !==0})){
            primes.push(n)
        }
    }
    primes.unshift(2)
    console.log(primes)
}

printPrimeNumbers(100)



