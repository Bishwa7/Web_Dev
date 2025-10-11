
type Employee = {
    name: string,
    startDate : string
}

type Manager = {
    name : string,
    department : string
}


type TeamLead = Employee | Manager;

let teamLead : TeamLead = {
    name : "Bishwa",
    startDate : "11-10-2025",
    // department : "Important"     // it will compile but give error while executing
}


let anotherTeamLead : TeamLead = {
    name : "Bro",
    startDate : "11-10-2025"
}

let anotherTeamLead2 : TeamLead = {
    name : "Brother",
    department : "Crazy"
}


console.log(teamLead.name)
console.log(teamLead.startDate)

console.log(anotherTeamLead.name)
console.log(anotherTeamLead.startDate)


console.log(anotherTeamLead2.name)
console.log(anotherTeamLead2.department)
