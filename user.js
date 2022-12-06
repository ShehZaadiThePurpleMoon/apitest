function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUser(data))
}

loadUsers()

function displayUser (users){
    //console.log(users);
    const useDiv = document.getElementById('users');
    for (const user of users){
        console.log(user);
        const li = document.createElement('li');
        li.classList.add('user')
        li.innerHTML = `
        <h3> ${user.name} </h3>
        <h4> ${user.email} </h4>
        <h5> UseId: ${user.id} </h5>
        <h5> ${user.address.City} </h5>
        <h5> Zip Code: ${user.address.zipcode} </h5>
        <span> Lat: ${user.address.geo.lat} </span>
        <span> Lng: ${user.address.geo.lng} </span>
        `;
        useDiv.appendChild(li);
    } 
}