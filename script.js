// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// Job listings
const jobs = [
    { title: "Instrument Technician", location: "Oman" },
    { title: "Electrical Technician", location: "Qatar" },
    { title: "Mechanical Supervisor", location: "UAE" },
    { title: "Pipe Fitter", location: "Saudi Arabia" }
];

const jobList = document.getElementById("jobList");

jobs.forEach(job => {
    const jobDiv = document.createElement("div");
    jobDiv.classList.add("job");
    jobDiv.innerHTML = `
        <h3>${job.title}</h3>
        <p>Location: ${job.location}</p>
    `;
    jobList.appendChild(jobDiv);
});

// Contact form message
const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    message.textContent = "Message sent successfully!";
    form.reset();
});