const formChangeMultiModule = () => {
    const formChangeMulti = document.querySelector("[form-change-multi]");
    if (formChangeMulti) {
        formChangeMulti.addEventListener("submit", (event) => {
            event.preventDefault();

            const type = formChangeMulti.querySelector("select[name='type']").value;

            const listInputIdChecked = document.querySelectorAll("input[name='id']:checked");
            if (listInputIdChecked.length > 0) {
                const ids = [];

                listInputIdChecked.forEach(input => {
                    const id = input.value;
                    if (type == "change-position") {
                        const position = input.closest("tr").querySelector("input[name='position']").value;
                        ids.push(`${id}-${position}`);
                    } else {
                        ids.push(id);
                    }
                });

                const stringIds = ids.join(", ");

                const input = formChangeMulti.querySelector("input[name='ids']");
                input.value = stringIds;

                if (type == "delete-all") {
                    const isConfirm = confirm("Bạn có chắc muốn xóa những bản ghi này?");
                    if (!isConfirm) {
                        return;
                    }
                }

                formChangeMulti.submit();
            } else {
                alert("Vui lòng chọn ít nhất 1 bản ghi!");
            }
        });
    }
}
export default formChangeMultiModule;