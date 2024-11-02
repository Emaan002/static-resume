// Select the skills section and the toggle button
var skillsSection = document.getElementById('skills-section');
var toggleSkillsButton = document.getElementById('toggleSkillsButton');
// Add a click event listener to the toggle button
toggleSkillsButton.addEventListener('click', function () {
    if (skillsSection.style.display === 'none') {
        toggleSkillsButton.innerHTML = "Hide Skills";
        skillsSection.style.display = 'block';
    }
    else {
        skillsSection.style.display = 'none';
        toggleSkillsButton.innerHTML = "Show Skills";
    }
});
