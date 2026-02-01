const showAlertModule = () => {
    const showAlert = document.querySelector("[show-alert]");
    if (showAlert) {
        let time = parseInt(showAlert.getAttribute("data-time"));

        setTimeout(() => {
            showAlert.classList.add("alert-hidden");
        }, time);

        const closeAlert = showAlert.querySelector("[close-alert]");
        closeAlert.addEventListener("click", () => {
            showAlert.classList.add("alert-hidden");
        })
    }
}
export default showAlertModule;