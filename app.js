function openGmail() {
    const myEmail = "islambek2613@gmail.com";

    const gmailUrl =
        `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(myEmail)}`;

    window.open(gmailUrl, "_blank");
}


function openGmail() {
    const myEmail = "islambek2613@gmail.com";

    const gmailUrl =
        `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(myEmail)}`;

    window.open(gmailUrl, "_blank");
}
document.getElementById("contactText").addEventListener("click", openGmail);