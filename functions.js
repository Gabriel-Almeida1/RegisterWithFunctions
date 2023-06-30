let names = []
let passwords = []
let cont = 0
let cont2 = 0

let startOrStop = true

while (startOrStop) {
    
    function insertValues() {
        var name = prompt("Name: ")
        let password = prompt("Password: ")
        names[cont] = name
        passwords[cont] = password
        cont++
    }
    
    function userLogin() {
        let checkLogInOrNot = true
        let name = prompt("ID to login: ")
        let password = prompt("Password to login: ")
        for (let i = 0; i < names.length; i++) {
            if (name === names[i] && password === passwords[i]){
                console.log("You're log in.")
                checkLogInOrNot = false
            } 
        }
        if (checkLogInOrNot) {
            console.log("Name or password may not exist or are not right.")
        }
    }
    
    function deleteUser() {
        let auxiliarNames = []
        let auxiliarPassword = []
        let deleteName = prompt("Type the ID to delete: ")
        for (let i = 0; i < names.length; i++) {
            if (deleteName !== names[i]) {
                auxiliarNames[cont2] = names[i]
                auxiliarPassword[cont2] = passwords[i]
                cont2++     
            } 
        }
        if (auxiliarNames.length === names.length) {
            console.log("You did not type the right ID.")
        }
        names = auxiliarNames
        passwords = auxiliarPassword
        
    }
    
    function options() {
        let option = parseInt(prompt("1 - Register, 2 - Login, 3 - Delete User, 4 - End the program: "))
        if (option === 1) {
            return insertValues()
        } else if (option === 2) {
            return userLogin()
        } else if (option === 3) {
            console.log("User removed.")
            return deleteUser()
        } else {
            console.log("Closed program.")
            return startOrStop = false
        }
    }
    options()

}

console.log(names)
console.log(passwords)

