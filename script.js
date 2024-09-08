document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("resumeForm");
    const generatedResume = document.getElementById("generatedResume");

    const addEducationBtn = document.getElementById("addEducation");
    const educationContainer = document.getElementById("educationContainer");

    const addExperienceBtn = document.getElementById("addExperience");
    const experienceContainer = document.getElementById("experienceContainer");

    const addSkillBtn = document.getElementById("addSkill");
    const skillsContainer = document.getElementById("skillsContainer");

    // Add more education fields
    addEducationBtn.addEventListener("click", () => {
        const educationItem = document.createElement("div");
        educationItem.classList.add("education-item");
        educationItem.innerHTML = `
            <label for="degree">Degree:</label>
            <input type="text" class="degree" required><br><br>

            <label for="institution">Institution:</label>
            <input type="text" class="institution" required><br><br>

            <label for="year">Year:</label>
            <input type="text" class="year" required><br><br>
        `;
        educationContainer.appendChild(educationItem);
    });

    // Add more experience fields
    addExperienceBtn.addEventListener("click", () => {
        const experienceItem = document.createElement("div");
        experienceItem.classList.add("experience-item");
        experienceItem.innerHTML = `
            <label for="jobTitle">Job Title:</label>
            <input type="text" class="jobTitle" required><br><br>

            <label for="company">Company:</label>
            <input type="text" class="company" required><br><br>

            <label for="expYear">Years:</label>
            <input type="text" class="expYear" required><br><br>
        `;
        experienceContainer.appendChild(experienceItem);
    });

    // Add more skill fields
    addSkillBtn.addEventListener("click", () => {
        const skillItem = document.createElement("input");
        skillItem.type = "text";
        skillItem.classList.add("skill");
        skillItem.placeholder = "Enter a skill";
        skillsContainer.appendChild(skillItem);
    });

    // Handle form submission
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const title = document.getElementById("title").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;

        // Collect education
        const educationItems = Array.from(document.getElementsByClassName("education-item"));
        const educationList = educationItems.map(item => {
            const degree = item.querySelector(".degree").value;
            const institution = item.querySelector(".institution").value;
            const year = item.querySelector(".year").value;
            return `<li>${degree}, ${institution} (${year})</li>`;
        }).join("");

        // Collect work experience
        const experienceItems = Array.from(document.getElementsByClassName("experience-item"));
        const experienceList = experienceItems.map(item => {
            const jobTitle = item.querySelector(".jobTitle").value;
            const company = item.querySelector(".company").value;
            const year = item.querySelector(".expYear").value;
            return `<li>${jobTitle} at ${company} (${year})</li>`;
        }).join("");

        // Collect skills
        const skillItems = Array.from(document.getElementsByClassName("skill"));
        const skillList = skillItems.map(item => `<li>${item.value}</li>`).join("");

        // Generate the resume HTML
        generatedResume.innerHTML = `
            <h2>${name}</h2>
            <h3>${title}</h3>
            <p>Phone: ${phone}</p>
            <p>Email: ${email}</p>

            <h3>Education</h3>
            <ul>${educationList}</ul>

            <h3>Work Experience</h3>
            <ul>${experienceList}</ul>

            <h3>Skills</h3>
            <ul>${skillList}</ul>
        `;
    });
});
