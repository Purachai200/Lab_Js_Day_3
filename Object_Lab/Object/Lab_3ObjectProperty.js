const user = {
    name: 'John',
    surname: 'Doe'
};
alert(user.name+ user.surname);
user['name'] = 'Matt';
alert(user.name+ user.surname);
delete user['name'];
alert(user.name+ user.surname)