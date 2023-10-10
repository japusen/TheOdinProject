const findTheOldest = function(people) {
    return people.reduce((oldest, person) => older(oldest, person));
};

function older(firstPerson, secondPerson) {
    return age(firstPerson) > age(secondPerson) ? firstPerson : secondPerson;
}

function age(person) {
    return ('yearOfDeath' in person) ? 
    person.yearOfDeath - person.yearOfBirth : 
    new Date().getFullYear() - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
