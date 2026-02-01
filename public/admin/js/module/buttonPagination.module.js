const buttonPaginationModule = () => {
    const listButtonPagination = document.querySelectorAll("[button-pagination]");
    if (listButtonPagination.length > 0) {
        let url = new URL(window.location.href);

        listButtonPagination.forEach(button => {
            button.addEventListener("click", () => {
                const page = button.getAttribute("button-pagination");
                url.searchParams.set("page", page);
                window.location.href = url.href;
            });
        });
    }
}
export default buttonPaginationModule;