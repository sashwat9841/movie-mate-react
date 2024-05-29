const formSubmission = () => {
  const formData = document.getElementById('contactForm');
  console.log(formData);
  const newFormData = new FormData(formData);

  for (const value of newFormData.values()) {
    console.log(value);
  }
};
