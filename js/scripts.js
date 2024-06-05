const cursor = document.querySelectorAll(".cursor");
const links = document.querySelectorAll("a")

window.addEventListener("mousemove", (e) => {

    let x = e.pageX;
    let y = e.pageY;

    cursor.forEach(el => {
        el.style.left = `${x-10}px`;
        el.style.top = `${y-10}px`;

        links.forEach(link => {
            link.addEventListener("mouseenter", () => {
                el.classList.add("hover");
            })
            link.addEventListener("mouseleave", () => {
                el.classList.remove("hover");
            })
        })
    })
})

