const gif = document.querySelector('#gif');

let reactionsArray = ["angrystare",
        "bleh",
        "blush",
        "brofist",
        "celebrate",
        "cheers",
        "clap",
        "confused",
        "cool",
        "cry",
        "dance",
        "evillaugh",
        "facepalm",
        "happy",
        "headbang",
        "laugh",
        "mad",
        "nervous",
        "no",
        "roll",
        "run",
        "sad",
        "scared",
        "shout",
        "shrug",
        "sigh",
        "sip",
        "slap",
        "sleep",
        "slowclap",
        "smack",
        "smile",
        "smug",
        "sorry",
        "stop",
        "surprised",
        "thumbsup",
        "tired",
        "wave",
        "woah",
        "yawn",
        "yay",
        "yes"
    ];

document.querySelector("#gif-button").addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * reactionsArray.length);
    const randomElement = reactionsArray[randomIndex];

    fetch('https://api.otakugifs.xyz/gif?reaction=' + randomElement)
        .then(response => response.json())
        .then(data => {
            gif.src = data.url;
            gif.alt = 'A random gif';
        });
})

gif.addEventListener("click", function() {
    gif.src = "none";
    gif.alt = "";
})

