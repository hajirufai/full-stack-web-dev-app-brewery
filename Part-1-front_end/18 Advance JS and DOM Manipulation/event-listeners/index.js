// Add Event listeners to keystrokes
document.addEventListener("keydown", docKeyListener)

// Define the callback function docKeyListener
function docKeyListener(event) {
    // print details about the event listener
    console.log("Event Details: ", event)
}

