
const catchButton = document.getElementById("button");
const catchDiv = document.getElementById("hidden");
let show = true;
catchButton.addEventListener("click", function () {
   
    if(show == true){
    catchDiv.style.display = 'block';
    show = false;
    }
    else{
        catchDiv.style.display = 'none';
        show = true;
    }

   
})



async function fetchRandomUsers() {
    try {
        const response = await fetch('https://randomuser.me/api/?results=1');
        const data = await response.json();
        
        const user = data.results;
        
        renderUser(user);
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}

function renderUser(user) {
    const userDiv = document.getElementById('user');
    
    user.forEach(user => {
        const userFname = document.createElement('span');
        const userLname = document.createElement('span');
        
        userFname.innerHTML = `
            <h3>${"שם:" + ' ' + user.name.first}</h3>         
        `;
        userLname.innerHTML = `
        <h3>${"משפחה:" + ' ' +user.name.last}</h3>
        `;
        userDiv.appendChild(userFname)
        userDiv.appendChild(userLname)
    });
}

fetchRandomUsers();