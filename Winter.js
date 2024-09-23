let promptList = ["Aurora Borealis",
    "Can’t Get Warm",
    "Creatures Under The Frozen Lake",
    "Cryptids In Winter",
    "Elves Infestation",
    "Figures In The Snow Storm",
    "Frostbite",
    "Frost Webs ",
    "Gifts",
    "He see you when you sleeping",
    "Icicles",
    "I found the body inside the snowman",
    "It's cold outside. Let them in",
    "Jack Frost",
    "Krampus",
    "Mall Santa",
    "Man Eating Wreath",
    "Monsters Go Caroling",
    "Red Nose",
    "Reindeer",
    "Snowball Fight",
    "Snowfall",
    "Skiing",
    "Up On The Roof Top",
    "Yeti",
    "Yule Cat",
]

function random(prompts) {
    let n = Math.floor(Math.random() * (prompts.length))
    console.log(n)
    document.getElementById("prompt").innerHTML=prompts[n]
}
