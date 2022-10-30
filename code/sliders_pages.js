export function mount_splide_subpages () {
    
    // Activate gallery in hero
    const selectors = [
        ".card-page.eficiencia .splide",
        ".card-page.epc .splide",
        ".card-page.mantenimiento .splide",
    ]

    for (const selector of selectors) {
        var elem = document.querySelector (selector)
        if (elem) {
            let splides = new Splide(selector)
            splides.mount()
        }
    }

    // // Get slides
    // const slides = Array.from(document.querySelectorAll (".hero .splide__slide"))

    // // Looop for each slide
    // for (const [index, slide] of slides.entries()) {
        
    //     // Get bg image
    //     const image_num = index + 1
    //     const image_file = `url(./imgs/gallery-${image_num}.jpg)`

    //     // set background image
    //     slide.style.backgroundImage = image_file
    // }

}
