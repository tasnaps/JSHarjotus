const plantNeedsWater = day => day === 'Wednesday' ? true : false;

const getUserChoice =userInput=>{
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' ||userInput ==='paper'||userInput ==='scissors'){
        return userInput
    }else{
        console.log('Not a valid input')
    }
}

const canIVote = number => number > 18;


//console.log(canIVote(19))


// Write your function here:
const agreeOrDisagree = (string1, string2) => string1 === string2 ? 'You agree!' : 'You disagree!'

// Write your function here:



const lifePhase = (age) =>{
    console.log('Paskaa...')
    let ika = age;
    let asetus = '';
    switch(ika){
        case (ika < 3 && ika > 0):
            asetus = 'baby';
            break;
        case(ika >= 4 && ika <= 12):
            console.log('Ollaan casessa')
            asetus =  'child'
            break;

        case(ika >= 13 && ika <= 19):
            asetus = 'teen';
            break;
        case(ika >=20 && ika <= 64):
            asetus =  'adult';
            break;
        case(ika <=140 && ika >= 65):
            asetus = 'senior citizen';
            break;
        case(ika >140 || ika < 0):
            asetus = 'This is not a valid age';
            break;

    }
    console.log(asetus)
    return asetus;
}
var arvo = lifePhase(5)
console.log(arvo)

function toimiSaatana(age){
    let asetus = '';
        if(age < 3 && age > 0){
            asetus = 'baby';
        }else if(age >= 4 && age <= 12){
            asetus =  'child'
        }else if(age >= 13 && age <= 19) {
            asetus = 'teen';
        }else if(age >=20 && age <= 64) {
            asetus = 'adult';
        }else if(age <=140 && age >= 65) {

            asetus = 'senior citizen';
        }else{
            asetus = 'This is not a valid age';
    }
    return asetus;

}
console.log(toimiSaatana(5))




// Uncomment the line below when you're ready to try out your function
// console.log(lifePhase(5)) //should print 'child'

// We encourage you to add more function calls of your own to test your code!



// Uncomment the line below when you're ready to try out your function
// console.log(agreeOrDisagree("yep", "yep"))
// Should print 'You agree!'

// We encourage you to add more function call of your own to test your code!