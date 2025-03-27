document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll(".proyecto");
    
    projects.forEach(project => {
        project.addEventListener("mouseover", () => {
            project.style.boxShadow = "0px 0px 15px rgba(0, 195, 255, 0.6)";
        });

        project.addEventListener("mouseleave", () => {
            project.style.boxShadow = "0px 0px 10px rgba(0, 195, 255, 0.3)";
        });
    });
});
