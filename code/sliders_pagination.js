let splide_partners = null
let splide_clientes = null

function mount_splide_pages(parent_selector) {
    const parent = document.querySelector(parent_selector)

    if (parent) {
        let splide = new Splide(`${parent_selector} .splide`, {
            type: 'loop',
            perPage: 5,
            perMove: 1,
        })

        splide.mount()

        return splide
    }
}

export function mount_splide_partners() {
    splide_partners = mount_splide_pages('.partners')
}
export function mount_splide_clientes() {
    splide_clientes = mount_splide_pages('.clients')
}

export function update_partners_clients_splides () {
    let slides_page 
    if (window.matchMedia('(max-width: 400px)').matches) {
        slides_page = 1
    } else if (window.matchMedia('(max-width: 650px)').matches) {
        slides_page = 2
    } else if (window.matchMedia('(max-width: 1000px)').matches) {
        slides_page = 3
    } else {
        slides_page = 5
    }

    if (splide_partners) {
        splide_partners.options.perPage = slides_page
        splide_partners.refresh()
    }

    if (splide_clientes) {
        splide_clientes.options.perPage = slides_page
        splide_clientes.refresh()
    }
}
