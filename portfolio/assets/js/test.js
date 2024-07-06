// Function to update the skill bar with based on the slider value
function updateSkillLevel(sliderId, skillId) {
    const slider = document.getElementById(sliderId);
    const skill = document.getElementById(skillId);

    slider.addEventListener('input', () => {
        const value = slider.value;
        skill.style.width = `${value}%`;
        skill.textContent = `${value}%`;
    }
    );
}



// Update skill levels for each slider
updateSkillLevel('html-slider', 'html-skill');
updateSkillLevel('css-slider', 'css-skill');
updateSkillLevel('js-slider', 'js-skill');


