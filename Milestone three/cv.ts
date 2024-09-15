document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const contactElement = document.getElementById('contact') as HTMLInputElement;
    const addressElement = document.getElementById('address') as HTMLInputElement;
    const summaryElement = document.getElementById('summ') as HTMLTextAreaElement;
     const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;

    if (nameElement && emailElement && contactElement && addressElement && educationElement && experienceElement && skillsElement) {
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = contactElement.value;
        const address = addressElement.value;
        const summary= summaryElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;
        

        const resumeOutpt = `
        <div class="box">
            <h2>${name}</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Contact:</strong> ${phone}</p>
            <p><strong>Address:</strong> ${address}</p>
        
            <h3>Education</h3>
            <p>${education}</p>
            <h4>Experience</h4>
            <p>${experience}</p>
            <h5>Skills</h5>
            <p>${skills}</p>
            </div>
        `;
        
        const resumeOutptElement = document.getElementById('resumeOutput');
        if (resumeOutptElement) {
            resumeOutptElement.innerHTML = resumeOutpt;
        } else {
            console.error('Element with ID "resumeOutput" is missing');
        }
    } else {
        console.error('One or more form elements are missing');
    }
});
