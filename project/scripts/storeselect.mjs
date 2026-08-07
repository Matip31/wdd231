export {loadStores};
async function loadStores() {
    const response = await fetch("data/stores.json");
    const stores = await response.json();
    const select = document.querySelector("#store");
    stores.forEach(store => {
        const option = document.createElement("option");
        option.value = store.name;
        option.textContent = store.name;
        select.appendChild(option);
    });
}