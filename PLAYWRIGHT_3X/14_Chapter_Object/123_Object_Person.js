
const user = {
    id: 101,
    name: "Chetana Sharma",
    age: 34,
    email: "chetana.sharma@example.com",
    phone: "+91-9876543210",
    gender: "female",
    isActive: true,
    role: "Frontend Developer",
    about:
        "I am a passionate web developer who enjoys coding, testing, and building modern user experiences.",

    address: {
        street: "123 Main Street",
        city: "Mumbai",
        state: "Maharashtra",
        country: "India",
        zipCode: "400001",
        coordinates: {
            lat: 19.076,
            lng: 72.8777,
        },
    },

    hobbies: ["reading", "traveling", "photography", "cycling", "coding"],

    skills: [
        { name: "JavaScript", level: "Advanced", years: 7 },
        { name: "Playwright", level: "Intermediate", years: 3 },
        { name: "React", level: "Intermediate", years: 4 },
        { name: "Node.js", level: "Intermediate", years: 5 },
    ],

    languages: ["English", "Hindi", "Marathi"],

    socialLinks: {
        github: "https://github.com/chetana",
        linkedin: "https://linkedin.com/in/chetana-sharma",
        twitter: "https://twitter.com/chetana_dev",
    },

    education: [
        {
            degree: "B.Tech",
            field: "Computer Science",
            college: "ABC Institute of Technology",
            year: 2014,
        },
        {
            degree: "MCA",
            field: "Computer Applications",
            college: "XYZ College",
            year: 2016,
        },
    ],

    experience: [
        {
            company: "TechNova",
            role: "Frontend Developer",
            years: "2020-Present",
            projects: ["E-commerce Platform", "Admin Dashboard"],
        },
        {
            company: "WebWorks",
            role: "Junior Developer",
            years: "2017-2020",
            projects: ["CRM Portal", "Landing Pages"],
        },
    ],

    preferences: {
        theme: "dark",
        notifications: {
            email: true,
            sms: false,
            push: true,
        },
        favoriteFood: ["Pizza", "Biryani", "Pasta"],
        travel: {
            country: "Italy",
            city: "Rome",
            reason: "Food and architecture",
        },
    },

    certifications: ["AWS Cloud Practitioner", "Playwright Certified"],

    projects: [
        {
            title: "Inventory Management App",
            tech: ["React", "Node.js", "MongoDB"],
            status: "Completed",
        },
        {
            title: "Automation Testing Suite",
            tech: ["Playwright", "JavaScript"],
            status: "In Progress",
        },
    ],

    tags: ["developer", "automation", "learning", "writer"],
    createdAt: "2024-01-15T10:30:00Z",
    updatedAt: "2026-08-10T09:00:00Z",
    profileImage: "https://example.com/images/chetana.jpg",
};

console.log(user);