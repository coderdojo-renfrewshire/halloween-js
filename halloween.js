
function error(msg) {
    alert(msg);
}

function waitFor(ms, callback) {
    if(isNaN(ms)) {
        error('waitFor() ms was not a number');
    } else if(typeof callback !== "function") {
        error('waitFor callback was not a function');
    } else {
        setTimeout(function() {
            if(callback) {
                callback();
            }
        }, ms);
    }
}

function play(audioFile, volume, finished) {
    if(audioFile && volume) {
        var audio = new Audio(audioFile);
        audio.volume = volume;
        audio.onended = function() {
            if(finished) {
                finished();
            }
        }

        audio.play();
        return audio;
    } else {
        error('play() takes 2+ parameters');
    }
}

function clear()
{
    var body = document.body;
    body.style.padding = "0";
    body.style.margin = "0";
    body.style.overflow = 'hidden';
    body.innerHTML = '';
}

function draw(filename) {
    clear();

    var image = document.createElement("img");
    image.setAttribute('src', filename);
    image.setAttribute('alt', 'na');
    image.setAttribute('height', window.innerHeight + 'px');
    image.setAttribute('width', window.innerWidth + 'px');
    image.style.overflow = 'hidden';
    image.style.padding = "0";
    image.style.margin = "0";

    document.body.appendChild(image);
    return image;
}