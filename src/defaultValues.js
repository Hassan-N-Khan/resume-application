const defaultValues = {
    generalInformation : {
        firstName : "Hassan",
        lastName : "Khan",
        phoneNumber: "416-555-5555",
        emailAddress: "example@email.com",
        city: "Toronto",
    },
    resumeInformation: {
        educationalInformation: [
            {
                schoolName: "University of Ottawa",
                degree: "Bachelors of Applied Science in Computer Engineering",
                graduationDate: "2001",
                graduationCity: "Ottawa",
            }
        ],
        workExperience: [
            {
                companyName: "Microsoft",
                position: "Intern Software Developer",
                startDate: "2020",
                endDate: "2021",
                location: "Seattle",
                description: "Worked at microsoft."
            },
            {
                companyName: "AMD",
                position: "Intern Software Developer",
                startDate: "2021",
                endDate: "2022",
                location: "Toronto",
                description: "I wish I worked here man"
            }
        ],
    }
}

export default defaultValues;