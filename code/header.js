export function header_events () {
    const header_btn_open = document.querySelector ("#header .btn.menu.open")
    const header_btn_close = document.querySelector ("#header .btn.menu.close")
    const header_nav = document.querySelector('#header nav')

    header_btn_open.addEventListener ("click", function (e) {
        header_nav.classList.remove ("clossed")
    })
    
    header_btn_close.addEventListener ("click", function (e) {
        header_nav.classList.add ("clossed")
    })
}
