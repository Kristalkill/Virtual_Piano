const keys = document.querySelectorAll('kbd');
keys.forEach(x => addEventListener('click', play_note(x.innerText)))

document.addEventListener("keypress", function(event) {
    if(['a', 's', 'd', 'f', 'g', 'h', 'j'].includes(event.key)){
        play_note((event.key).toUpperCase())
    }
});
function play_note(key) {
    console.log(key)
    return new Audio(`sounds/${key}.mp3`).play()
}
