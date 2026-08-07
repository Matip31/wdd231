export { CreateNav };
function CreateNav(){
const navButton = document.querySelector('#ham');
const navBar=document.querySelector("#nav-bar");
navButton.addEventListener('click', () => {
  navButton.classList.toggle('show');
  navBar.classList.toggle("show");
});
}
