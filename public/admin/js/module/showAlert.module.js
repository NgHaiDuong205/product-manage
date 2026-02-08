const showAlertModule = () => {
    const showAlert = document.querySelector("[data-show-alert]");
    if (showAlert) {
        let time = parseInt(showAlert.getAttribute("data-time"));

        setTimeout(() => {
            showAlert.classList.add("alert-hidden");
        }, time);

        const closeAlert = showAlert.querySelector("[data-close-alert]");
        closeAlert.addEventListener("click", () => {
            showAlert.classList.add("alert-hidden");
        })
    }
}
export default showAlertModule;