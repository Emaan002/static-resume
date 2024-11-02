// Select the skills section and the toggle button
const skillsSection = document.getElementById('skills-section') as HTMLElement;
const toggleSkillsButton = document.getElementById('toggleSkillsButton') as HTMLButtonElement;

// Add a click event listener to the toggle button
toggleSkillsButton.addEventListener('click', () => {
    if (skillsSection.style.display === 'none') {
        toggleSkillsButton.innerHTML = "Hide Skills"
        skillsSection.style.display = 'block';
    } else {
        skillsSection.style.display = 'none';
        toggleSkillsButton.innerHTML = "Show Skills"

    }
});
