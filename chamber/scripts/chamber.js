const navButton = document.querySelector('#ham');

navButton.addEventListener('click', () => {
  navButton.classList.toggle('show');
  navBar.classList.toggle("show");
});
const navBar=document.querySelector("#nav-bar");
const currentYear=new Date().getFullYear();
document.getElementById("currentyear").innerHTML=currentYear;
document.getElementById("lastModified").innerHTML=`Last Modification: ${document.lastModified}`;
const url="data/members.json";
async function getMembers() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.companies);
}
getMembers();
const container = document.querySelector("#members");

function displayMembers(members) {

    members.forEach(member => {

        const card = document.createElement("section");
        card.classList.add("card");
        const pageUrl=document.createElement("a");
        const name = document.createElement("h2");
        const image = document.createElement("img");
        const address = document.createElement("p");
        const phone = document.createElement("p");

        name.textContent = member.name;
        address.textContent = member.address;
        phone.textContent = member.phone;
        pageUrl.href = member.weburl;
        pageUrl.textContent = "Visit Website";
        pageUrl.target = "_blank";
        image.src = `images/${member.image}`;
        image.alt = member.name;

        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(pageUrl);
        container.appendChild(card);
    });
}
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
gridbutton.addEventListener("click", () => {
	container.classList.add("grid");
	container.classList.remove("list");
    gridbutton.classList.add("active");
    listbutton.classList.remove("active");
});
listbutton.addEventListener("click", () => {
	container.classList.add("list");
	container.classList.remove("grid");
    listbutton.classList.add("active");
    gridbutton.classList.remove("active");
});