
document.addEventListener('DOMContentLoaded',() => {
    const keys = document.querySelectorAll('kbd');
    keys.forEach(x => addEventListener('click', play_note(x.innerText)))

    document.addEventListener("keypress", function (event) {
        if (['a', 's', 'd', 'f', 'g', 'h', 'j', 'w', 'e', 't','y', 'u'].includes(event.key)) {
            play_note((event.key).toUpperCase())
        }
    });

    function play_note(key) {
        return new Audio(`sounds/${key}.mp3`).play()
    }

})
