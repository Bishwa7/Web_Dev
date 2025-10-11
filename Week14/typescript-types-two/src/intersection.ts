
type Employee = {
    name : string,
    startDate : string
}

type Manager = {
    name : string,
    department : string
}

type TeamLead = Employee & Manager;


let person : TeamLead = {
    name : "Bishwa",
    startDate : "11-10-2025",
    department : "Important"
}


console.log(person.name)
console.log(person.startDate)
console.log(person.department)