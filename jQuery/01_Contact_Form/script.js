
$("form").submit(function (e) {
    e.preventDefault()
});

$("#send").click(function (e) {
let name=$("#name")[0].name
let nameValue=$("#name").val()
let email=$("#email")[0].name
let emailValue=$("#email").val()
let message=$("#message")[0].name
let messageValue=$("#message").val()

window.localStorage.setItem(`${name}`, `${nameValue}`);
window.localStorage.setItem(`${email}`, `${emailValue}`);
window.localStorage.setItem(`${message}`, `${messageValue}`);
});

$("#reset").click(function (e) {
    $("#name").val(" ")
    $("#email").val(" ")
    $("#message").val(" ")
    window.localStorage.clear();
});