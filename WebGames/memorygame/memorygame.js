const $ = (selector) => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", ()=>{
    $("#easy_game").addEventListener("click", test)
})

function test() {
    shapes = ["HAT", "HAT", "BIRD", "BIRD", "RABBIT", "RABBIT", "GHOST", "GHOST", "WRATH", "WRATH", "EGG", "EGG","CHEESE","CHEESE","NUMBER","NUMBER"] 
}

function create_card() {}