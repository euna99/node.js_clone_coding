let dev_fliter=document.querySelector(".dev_fliter")
let dev_article=document.querySelector(".dev_article")
let bookmark=document.querySelector(".bookmark")
window.addEventListener('scroll', () => { 
    let top=document.documentElement.scrollTop
    console.log(top)
    if (top>300){
        dev_fliter.style.position="fixed"
        dev_article.style.display="none"

    }
    // console.log(window.scrollX, window.scrollY);
    else{
        dev_fliter.style.position="unset"
        dev_article.style.display="block"
    }
});