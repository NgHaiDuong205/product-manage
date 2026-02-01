const deleteItemModule = () => {
    const listButtonDelete = document.querySelectorAll("[button-delete]");

    if (listButtonDelete.length > 0) {
        const formDelete = document.querySelector("[form-delete-item]");

        listButtonDelete.forEach(button => {
            button.addEventListener("click", () => {
                const isConfirm = confirm("Bạn có chắc muốn xóa chứ ?");

                if (isConfirm) {
                    const id = button.getAttribute("data-id");
                    const path = formDelete.getAttribute("data-path");
                    const action = `${path}/${id}?_method=DELETE`;

                    formDelete.action = action;

                    formDelete.submit();
                }
            });
        });
    }
}
export default deleteItemModule;