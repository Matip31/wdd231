const navButton = document.querySelector('#ham');

navButton.addEventListener('click', () => {
  navButton.classList.toggle('show');
  navBar.classList.toggle("show");
});
const navBar=document.querySelector("#nav-bar");
const currentYear=new Date().getFullYear();
document.getElementById("currentyear").innerHTML=currentYear;
document.getElementById("lastModified").innerHTML=`Last Modification: ${document.lastModified}`;
document.getElementById("timestamp").value =
new Date().toISOString();
const params = new URLSearchParams(window.location.search);

document.getElementById("firstName").textContent =
params.get("firstName");

document.getElementById("lastName").textContent =
params.get("lastName");

document.getElementById("email").textContent =
params.get("email");

document.getElementById("phone").textContent =
params.get("phone");

document.getElementById("organization").textContent =
params.get("organization");

document.getElementById("timestamp").textContent =
new Date(params.get("timestamp")).toLocaleString();