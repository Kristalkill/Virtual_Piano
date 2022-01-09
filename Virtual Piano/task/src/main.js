document.addEventListener("keypress", function(event) {
    if(['a', 's', 'd', 'f', 'g', 'h', 'j'].includes(event.key)){
        console.log(`The '${event.key}' key is pressed`)
    }
});
