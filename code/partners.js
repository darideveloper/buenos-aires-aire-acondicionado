export function mount_splide_partners () {
    var splide = new Splide( '.partners .splide', {
        type   : 'loop',
        perPage: 5,
        perMove: 1,
      } );
      
      splide.mount();
}