function mount_splide_pages(parent_selector) {
    const parent = document.querySelector (parent_selector)
    
    if (parent) {
      var splide = new Splide(`${parent_selector} .splide`, {
          type: 'loop',
          perPage: 5,
          perMove: 1,
      })
  
      splide.mount()
    }
}

export function mount_splide_partners () {
  mount_splide_pages (".partners")
}
export function mount_splide_clientes () {
  mount_splide_pages (".clients")
}
