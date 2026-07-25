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
const openButtons = document.querySelectorAll(".open-modal");
openButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modal = document.getElementById(button.dataset.modal);
        modal.showModal();
    });
});
const closeButtons = document.querySelectorAll(".close-btn");
closeButtons.forEach(button => {
    button.addEventListener("click", () => {
        button.closest("dialog").close();
    });
});