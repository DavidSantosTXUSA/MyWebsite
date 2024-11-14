function sendEmail(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    // Create the email subject and body
    const subject = `Message from ${name}`;
    const body = encodeURIComponent(message);

    // Create mailto link
    const mailtoLink = `mailto:dsantos4148@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

    // Open the mailto link
    window.location.href = mailtoLink;
}
function typeWriterEffect(element, text) {
    let i = 0;
    element.textContent = ""; 
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, 20); 
        }
    }
    type();
}

function showSection(sectionId) {
    document.querySelectorAll("section").forEach((section) => {
        section.style.display = "none";
    });
    const activeSection = document.getElementById(sectionId);
    activeSection.style.display = "block";
    if (!sessionStorage.getItem(sectionId)) {
        sessionStorage.setItem(sectionId, true);
        activeSection.querySelectorAll("p, h2").forEach((element) => {
            typeWriterEffect(element, element.textContent);
        });
    }
}
document.addEventListener("DOMContentLoaded", () => {
    showSection("about"); 
});