import {show_alert} from './alerts.js'
import {update_form_redirect} from './contact_form.js'
import {mount_splide} from './hero.js'

function sleep(s) {
    // Wait specific seconds
    return new Promise(resolve => setTimeout(resolve, s*1000));
}

window.onload = async function () {
    // Show alerts and update contact form
    const thanks_altert = show_alert()
    
    // Update redirect link in contact form
    update_form_redirect ()

    // Maon gallery
    mount_splide ()


}

window.onresize = function() {
    console.log ("Resize")
}