var resumeData = {
    "name": "Mohamed Sheik Dawood",
    "phone": "+447417575084",
    "email": "sheikmohamed978@gmail.com",
    "objective": "To work in a firm with a professional work-driven environment where I can utilize and apply my knowledge and skills, enabling me as a fresh graduate to grow while fulfilling organizational goals.",
    "education": [
      {
        "degree": "MSc in Computer Science",
        "school": "University of Greenwich",
        "location": "Greenwich, Greater London",
        "graduation_year": 2022
      }
    ],
    "experience": [
      {
        "position": "Tesco Shift Leader",
        "company": "Tesco Supermarket",
        "location": "Southwark, Greater London",
        "duration": "1 Year",
        "responsibilities": [
          "Assisted customers in a courteous and friendly manner, resolving inquiries, and ensuring a positive shopping experience.",
          "Developed strong communication skills, actively listening to customer’s needs, and providing appropriate solutions.",
          "Collaborated with team members to meet and exceed sales targets while maintaining an organized and tidy store environment."
        ]
      },
      {
        "position": "Administration",
        "company": "London Accident Claims Limited",
        "location": "Croydon, Surrey",
        "duration": "7 Months",
        "responsibilities": [
          "Managed company correspondence, including handling phone calls, emails, letters, and packages efficiently.",
          "Played a key role in bookkeeping and budgeting, ensuring accurate financial records and billing cycles.",
          "Demonstrated excellent organizational skills by efficiently scheduling appointments, organizing meetings, and overseeing catering during company events."
        ]
      }
    ],
    "skills": [
      "Microsoft 365",
      "Customer Service",
      "Communication",
      "Administrative Support",
      "Problem-solving",
      "Computer Skills",
      "Time Management",
      "Multitasking",
      "Attention to Detail"
    ]
  };

 
for (let key in resumeData) {
    console.log(key, resumeData[key]);
  }

for (let skill of resumeData.skills) {
    console.log(skill);
  }
  
  resumeData.education.forEach(edu => {
    console.log(edu);
  });
  