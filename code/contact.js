// activate focus styles in form inputs


// Get inputs
const inputs = document.querySelectorAll (".input")

// Add or remove class "active" for fields (inputs wrappers)
function field_update (input_elem, add=true) {

    console.log (input_elem)

    // Get parent element
    const field = input_elem.parentNode

    // Add or remove active class
    if (add) {
        field.classList.add ("active")
    } else {
        field.classList.remove ("active")
    }
    
}

function add_contact_listeners () {
    // Loop for each input for apply listeners
    for (const input of inputs) {
        input.addEventListener ("focus", (e) => {
            // remove active class from other inputs
            Array.from(inputs).map ((input) => field_update(input, false))
    
            // Add active class to current input
            field_update (e.target, true)
    
        })
    }
}

// Main function
add_contact_listeners ()