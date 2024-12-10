// Get form and display elements
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplay = document.getElementById('resume-display') as HTMLDivElement;

// Attach event listener to the generate button
document.getElementById('generate-resume')?.addEventListener('click', () => {
  // Get form input values
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const education = (document.getElementById('education') as HTMLTextAreaElement).value;
  const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
  const skills = (document.getElementById('skills') as HTMLInputElement).value;

  // Validate fields
  if (!name || !email || !phone || !education || !experience || !skills) {
    alert('Please fill out all fields.');
    return;
  }

  // Generate resume HTML
  resumeDisplay.innerHTML = `
    <h2>${name}</h2>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <h3>Education</h3>
    <p>${education}</p>
    <h3>Experience</h3>
    <p>${experience}</p>
    <h3>Skills</h3>
    <p>${skills.split(',').map(skill => `<span>${skill.trim()}</span>`).join(', ')}</p>
  `;

  // Reset the form
  form.reset();
});
