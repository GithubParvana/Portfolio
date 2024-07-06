function updateSkillLevels () {
    // Get the scroll percentage
    const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);

    // Calculate new widths for each skill bar
    const htmlWidth =Math.min(100, scrollPercent * 100 + 50); // Min width 50%
    const cssWidth = Math.min(100, scrollPercent * 100 + 40); // Min width 40%
    const jsWidth = Math.min(100, scrollPercent * 100 + 30); // Min width 30%


    // Update skill bar widths and text content
    document.getElementById('html-skill').style.width = `${htmlWidth}%`;
    document.getElementById('html-skill').textContent = `${Math.round(htmlWidth)}%`


    document.getElementById('css-skill').style.width = `${cssWidth}%`;
    document.getElementById('css-skill').textContent = `${Math.round(cssWidth)}%`;


    document.getElementById('js-skill').style.width = `${jsWidth}%`;
    document.getElementById('js-skill').textContent = `${Math.round(jsWidth)}%`

    }


    // Listen for the scroll event and update skill levels
    window.addEventListener('scroll', updateSkillLevels);


    // Initial update on page load
    updateSkillLevels();