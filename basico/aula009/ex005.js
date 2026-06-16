const users = {
    name: 'Rodolfo',
    age: 33,
    street: 'Rua dos Bobos'
}

for(let key in users){
    console.log(`${key}: ${users[key]}`)
}