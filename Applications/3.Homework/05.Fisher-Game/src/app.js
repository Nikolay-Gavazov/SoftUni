document.getElementById('logout').addEventListener('click', logout);
//document.querySelector('#login').style.display = 'none';
const authToken = localStorage.getItem('accessToken');
const res = await fetch('http://localhost:3030/users/articles', {
    method: 'get',
    headers: {'X-Authorization': authToken}
})
console.log(localStorage);




















async function logout(e){
    const res = await fetch('http://localhost:3030/users/logout');
    
    localStorage.clear();
    document.querySelector('#login').style.display = 'block';
    document.location.href = 'index.html';
}

