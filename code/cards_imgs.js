export function set_cards_bg_imgs () {
    // set background images for the cards group in the section "experience"
    
    // Get elemnts
    const cards = document.querySelectorAll (".cards-imgs .card")
    for (const card of cards) {
        // Get background div
        const bg = card.querySelector (".bg")

        // Get background image
        const image_name = card.classList[1]
        const image_path = `url("./imgs/${image_name}.jpg")`

        // Set background
        bg.style.backgroundImage = image_path
    }
}

export function update_cards_imgs () {
    // Change cards images groups with menu buttons
    const menu_buttons = document.querySelectorAll (".tabs button")
    const cards_sections = document.querySelectorAll(".cards-imgs")
    for (const menu_button of menu_buttons) {
        menu_button.addEventListener("click", (event) => {
            // Get identifier class
            const group_class = event.target.classList[0]

            // Disbale all cards sections
            cards_sections.forEach ((card_section) => {card_section.classList.add ("hidden")})

            // Activate current cards sectio
            const section_card_section = `.cards-imgs.${group_class}`
            const card_section = document.querySelector (section_card_section)
            card_section.classList.remove ("hidden")
        })
    }

}