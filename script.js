
// // Removes connection requests
// function remove1() {
//     document.getElementById("req1").remove()
// }
// function remove2() {
//     document.getElementById("req2").remove()
// }



// // change name
function name() {
    document.querySelector("#username");
    username.innerText = "Lumine :D";
}

// // decrease connection requests picture
function requests() {
    if (request.src.includes("icons/2.png")) {
        request.src = "icons/1.png";
    } else {
        request.src = "icons/0.png";
    }
}

// //  increase my connections picture
function connections() {
    if (friends.src.includes("icons/7.png")) {
        friends.src = "icons/8.jpg";
    }
    else {
        friends.src = "icons/9.png";
    }
}

//  Clicking accept will remove the request, decrease connections request number, and increase connections number
function accept(id) {
    var element = document.querySelector(id)
    element.remove()
    requests()
    connections()
}

//  Clicking reject will remove the request, and decrease connections reuqest number
function reject(id) {
    var element = document.querySelector(id)
    element.remove()
    requests()
}