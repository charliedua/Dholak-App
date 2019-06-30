var sound = new Howl({
    src: ["Dholak.mp3"],
    loop: true,
    rate: 1.0
});

var btn = document.querySelector("#btn");
var input = document.querySelector('input[type="range"]');
var shower = document.querySelector('#show');

shower.innerHTML = "Normal ( 1.0 )";

btn.addEventListener("click", () => {
    if (sound.playing())
    {
        sound.stop();
        btn.innerHTML = "Play Sound";
    }
    else
    {
        sound.rate(input.value);
        sound.play();
        btn.innerHTML = "Stop Sound";
    }
});

input.oninput = () => {
    sound.rate(input.value);
    if(input.value == 1.0)
    {
        shower.innerHTML = "Normal";
    }
    else if (input.value > 1.0)
    {
        shower.innerHTML = "Fast";
    }
    else if (input.value < 1.0)
    {
        shower.innerHTML = "Slow";
    }

    shower.innerHTML += " ( " + input.value + " )";
}