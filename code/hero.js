export function mount_splide_hero () {


    const hero = document.querySelector ('.home .hero .splide')
    if (hero) {

        // Activate gallery in hero
        var splide = new Splide('.home .hero .splide')
        var bar = splide.root.querySelector('.progress-bar')
        
        // Updates the bar width whenever the carousel moves:
        splide.on('mounted move', function () {
            var end = splide.Components.Controller.getEnd() + 1
            var rate = Math.min((splide.index + 1) / end, 1)
            bar.style.width = String(100 * rate) + '%'
        })
        
        splide.mount()
    
        // Get slides
        const slides = Array.from(document.querySelectorAll (".hero .splide__slide"))
    
        // Looop for each slide
        for (const [index, slide] of slides.entries()) {
            
            // Get bg image
            const image_num = index + 1
            const image_file = `url(./imgs/gallery-${image_num}.jpg)`
    
            // set background image
            slide.style.backgroundImage = image_file
        }
    }

}
