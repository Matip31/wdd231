import {places} from '../data/places.mjs'

const container=document.querySelector('#allplaces');

function displayItems(places){
    places.forEach(place => {
        const card=document.createElement('div');
        const picture=document.createElement('img');
        picture.src=`images/${place.photoUrl}`;
        const title=document.createElement('h2');
        title.textContent=place.name;
        const address=document.createElement('address');
        address.textContent=place.address;
        const description=document.createElement('p');
        description.textContent=place.description;
        card.appendChild(picture);
        card.appendChild(title);
        card.appendChild(address);
        card.appendChild(description);
        card.classList.add('place');
        container.appendChild(card);
    });
}
displayItems(places);
const visitMessage = document.querySelector("#visit-message");
const today = Date.now();
const lastVisit = localStorage.getItem("lastVisit");

if (!lastVisit) {
    visitMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const millisecondsBetweenVisits = today - Number(lastVisit);

    const daysBetweenVisits = Math.floor(
        millisecondsBetweenVisits / (1000 * 60 * 60 * 24)
    );

    if (daysBetweenVisits < 1) {
        visitMessage.textContent = "Back so soon! Awesome!";
    } else if (daysBetweenVisits === 1) {
        visitMessage.textContent = "You last visited 1 day ago.";
    } else {
        visitMessage.textContent = `You last visited ${daysBetweenVisits} days ago.`;
    }
}

localStorage.setItem("lastVisit", today);