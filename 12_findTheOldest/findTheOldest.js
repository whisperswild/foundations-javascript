const findTheOldest = function(people) {



const ages = people.map(person => ({
    ...person, age: person.yearOfDeath - person.yearOfBirth
    }));

for (let a in ages){
    if (isNaN(ages[a].age)){
        ages[a].age = new Date().getFullYear() - ages[a].yearOfBirth;
    }
}

const oldest = ages.sort((a, b) => b.age - a.age);
console.table(oldest);
return oldest[0];



};

// Do not edit below this line
module.exports = findTheOldest;
