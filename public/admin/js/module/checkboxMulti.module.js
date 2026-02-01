const checkboxMultiModule = () => {
    const checkboxMulti = document.querySelector("[checkbox-multi]");
    if (checkboxMulti) {
        const inputCheckAll = checkboxMulti.querySelector("input[name='checkall']");
        const listInputId = checkboxMulti.querySelectorAll("input[name='id']");

        inputCheckAll.addEventListener("click", () => {
            if (inputCheckAll.checked) {
                listInputId.forEach(input => {
                    input.checked = true;
                });
            } else {
                listInputId.forEach(input => {
                    input.checked = false;
                });
            }
        });

        listInputId.forEach(inputId => {
            inputId.addEventListener("click", () => {
                const countInputIdChecked = checkboxMulti.querySelectorAll("input[name='id']:checked").length;
                const lengthInputId = listInputId.length;

                if (countInputIdChecked == lengthInputId) {
                    inputCheckAll.checked = true;
                } else {
                    inputCheckAll.checked = false;
                }
            });
        });
    }
}
export default checkboxMultiModule;