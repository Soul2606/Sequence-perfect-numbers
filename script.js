

function generatePrimes(limit) {
    let primes = [];
    for(let i = 2; i <= limit; i++) {
        if(isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}




function isPrime(num) {
    for(let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++)
        if(num % i === 0) return false; 
    return num > 1;
}




function sum(numbers){
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        sum += number
    }
    return sum
}




function factor(number, primes){
    let number_copy = number
    let factors = [1]
    for (let i = 0; i < primes.length; i++) {
        const prime = primes[i];
        
        while(Number.isInteger(number / prime)){
            factors.push(prime)
            number /= prime
        }
    }
    factors.push(number_copy)
    return factors
}




function unique(array){
    //Eliminates any duplicate elements is an array
    //Returns a copy of array
    return [...new Set(array)]
}




function kill_all_children(element){
    while(element.firstChild){
        element.removeChild(element.firstChild)
    }
}



function create_paragraph(content){
    const paragraph = document.createElement("p")
    paragraph.textContent = content
    return paragraph
}




const primes = generatePrimes(10000000)

console.log("Primes", primes)

const button = document.getElementById("submit-button")
const input = document.getElementById("number-input")
const list = document.getElementById("list")

button.addEventListener("click", function(){

    kill_all_children(list)

    let n = input.value
    let stop = false
    for(let i=0; i<10000&&n>1; i++){
        
        let factors_of_n = unique(factor(n, primes))

        factors_of_n.pop()
        
        console.log("factors of " + n, factors_of_n)
        
        stop = n === sum(factors_of_n)

        n = sum(factors_of_n)
        
        list.appendChild(create_paragraph(factors_of_n + " > " + n))

        console.log("sum of factors", n)
        if(stop){
            break
        }
    }
})
