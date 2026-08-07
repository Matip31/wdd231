export {getStores};
const url="data/stores.json";
let data=[];
async function getStores() {
    const response = await fetch(url);
    data= await response.json();
    displayStores(data);
}
const container = document.querySelector("#members");
function displayStores(stores) {
    container.innerHTML = "";
    stores.forEach(store => {

        const card = document.createElement("section");
        card.classList.add("card");
        const name = document.createElement("h2");
        const image = document.createElement("img");
        const address = document.createElement("p");
        const phone = document.createElement("p");

        name.textContent = store.name;
        address.textContent = store.address;
        phone.textContent = store.phone;
        image.src = `images/${store.photo_url}`;
        image.alt = store.name;

        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(address);
        card.appendChild(phone);
        container.appendChild(card);
    });
}
const menbutton = document.querySelector("#men");
const womenbutton = document.querySelector("#women");
const allbutton = document.querySelector("#all");
menbutton.addEventListener("click", () => {
	let men=data.filter(store=>{
        const type=store.type;
        return type=="men";
    })
    displayStores(men);
});
womenbutton.addEventListener("click", () => {
	let women=data.filter(store=>{
        const type=store.type;
        return type=="women";
    })
    displayStores(women);
});
allbutton.addEventListener("click", () => {
    displayStores(data);
});