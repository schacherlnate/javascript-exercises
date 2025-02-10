const findTheOldest = function(people) {
    people.forEach(person=>{
        if (!("yearOfDeath" in person)) {
            person.yearOfDeath = 2025;
        }
    })
    let oldestPerson = people.sort((p1, p2)=>{
        let p1age = p1.yearOfDeath-p1.yearOfBirth;
        let p2age = p2.yearOfDeath-p2.yearOfBirth;
        return (p1age - p2age)
    }).at(-1);
    return oldestPerson
};

// Do not edit below this line
module.exports = findTheOldest;
