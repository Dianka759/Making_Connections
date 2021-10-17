// // Removes connection requests
function remove1() {
    document.getElementById("req1").remove()
}

function remove2() {
    document.getElementById("req2").remove()
}

// change name
function name(element) {
    element.innerText = "Lumine";
}


// decrease connection requests
function requests() {
    if (request.src.includes("icons/2.png")) {
        request.src = "icons/1.png";
    } else {
        request.src = "icons/0.png";
    }
}

//  increase my connections
function connections() {
    if (friends.src.includes("icons/7.png")) {
        friends.src = "icons/8.jpg";
    }
    else {
        friends.src = "icons/9.png";
    }
}