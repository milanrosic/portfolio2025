document.addEventListener("DOMContentLoaded", function() {
    const timelineItems = document.querySelectorAll(".timeline-item");
    const sections = document.querySelectorAll(".experience-details");

    timelineItems.forEach(item => {
        item.addEventListener("click", function() {
            const targetId = this.getAttribute("data-target");
            sections.forEach(section => {
                section.style.display = section.id === targetId ? "block" : "none";
            });
        });
    });

    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Form submitted successfully!");
        });
    }
});
