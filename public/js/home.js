
const logOut = document.querySelector('.logout');

logOut.onclick = () => {
    sessionStorage.clear();
    location.reload();
}