//your JS code here. If required.
let squares = document.querySelectorAll(".square");

squares.forEach((square) => {
    square.addEventListener("mouseenter", () => {
        squares.forEach((item) => {
            if (item !== square) {
                item.style.backgroundColor = "#6F4E37";
            } else {
                item.style.backgroundColor = "#E6E6FA";
            }
        });
    });

    square.addEventListener("mouseleave", () => {
        squares.forEach((item) => {
            item.style.backgroundColor = "#E6E6FA";
        });
    });
});