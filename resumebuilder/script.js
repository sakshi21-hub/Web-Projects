document.getElementById('resume-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Get the form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const skills = document.getElementById('skills').value.split(',').map(skill => skill.trim());
    const experience = document.getElementById('experience').value;
  
    // Hide the form and show the resume section
    document.getElementById('form-section').classList.add('hidden');
    document.getElementById('resume-section').classList.remove('hidden');
  
    // Fill in the resume
    const resumeSection = document.getElementById('resume');
    resumeSection.innerHTML = `
      <h2>${name}</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <h3>Skills</h3>
      <ul>
        ${skills.map(skill => `<li>${skill}</li>`).join('')}
      </ul>
      <h3>Work Experience</h3>
      <p>${experience}</p>
    `;
  });
  
  function goBackToForm() {
    // Hide the resume section and show the form again
    document.getElementById('form-section').classList.remove('hidden');
    document.getElementById('resume-section').classList.add('hidden');
  
    // Reset the form
    document.getElementById('resume-form').reset();
  }
  