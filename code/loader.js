import {show_alert} from './alerts.js'
import {update_form_redirect} from './contact_form.js'
import {mount_splide_hero} from './hero.js'
import {set_cards_bg_imgs, update_cards_imgs} from './cards_imgs.js'
import {mount_splide_partners, mount_splide_clientes} from './partners_clients.js'
import {mount_splide_subpages} from './sliders_pages.js'

function sleep(s) {
    // Wait specific seconds
    return new Promise(resolve => setTimeout(resolve, s*1000));
}

window.onload = async function () {
    // Show alerts and update contact form
    const thanks_altert = show_alert()
    
    // Update redirect link in contact form
    update_form_redirect ()

    // Maunt splites
    mount_splide_hero ()
    mount_splide_partners ()
    mount_splide_clientes ()
    mount_splide_subpages ()
    
    // Set cards background
    set_cards_bg_imgs ()

    // Activate buttons events for update cards images
    update_cards_imgs ()


}

window.onresize = function() {
    console.log ("Resize")
}