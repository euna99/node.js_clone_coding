let page3_grid_right=document.querySelector(".page3_grid_right")
let page3_box=document.querySelector(".page3_box")

window.addEventListener('scroll', () => { 
    let top=document.documentElement.scrollTop
    console.log(top)
    if (top>300&&top<1700){
        // page3_grid_right.style.position="absolute"
        page3_box.style.position="fixed"

    }
    // console.log(window.scrollX, window.scrollY);
    if (top<300) {
        page3_box.style.display="block"
    }

    if (top>1700){
        page3_box.style.display="none"
    }
});

