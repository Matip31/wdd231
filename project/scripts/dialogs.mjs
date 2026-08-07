export {initializeDialogs};
function initializeDialogs(){
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
}
