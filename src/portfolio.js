const header = {
    // all the properties are optional - can be left empty or deleted
    homepage: 'https://veshek.github.io/portfolio-minimal',
    title: 'JS.',
}

const about = {
    // all the properties are optional - can be left empty or deleted
    name: 'Keshav Gopinath',
    role: 'Full-Stack Developer',
    description:
        'A Computer Science and Physics Major in the University of British Columbia. ' +
        'Focussed on building seamless web applications from the ground up, for businesses and startups',
    resume: 'https://example.com',
    social: {
        linkedin: 'https://www.linkedin.com/in/keshav-gopinath/',
        github: 'https://github.com/Veshek',
    },
}

const projects = [
    // projects can be added and removed
    // if there are no projects, Projects section won't show up
    {
        name: 'US Visa Rescheduling Bot',
        description:
            'Built a bot to automatically book and schedule an appointment for a US Visitor Visa',
        stack: ['Selenium', 'Python','PyCharm'],
        sourceCode: 'https://github.com/Veshek/US-B2-VisaRescheduler',
        livePreview: null,
        infoPage:'VisaRescheduler'
    },
    {
        name: 'Korotu Technology Co-op',
        description:
            'Initiated Dev-Ops transformation and facilitated migration of development environment to the cloud',
        stack: ['Azure', 'Linux', 'Anaconda','Node'],
        sourceCode: null,
        livePreview: null,
        infoPage:'Korotu'
    },
    {
        name: 'UBC Astronomy Department Co-op',
        description:
            'Built automate the analysis of spectral-data collected from the Atacama Desert in Chile',
        stack: ['ML', 'Sklearn', 'ML', 'Pandas'],
        sourceCode: null,
        livePreview: null,
        infoPage: 'ExtragalacticCo-op'
    },
    {
        name: 'Custom ML Models',
        description:
            'Built Machine Learning models from first principles',
        stack: ['ML', 'Knn', 'Ensemble', 'Pandas'],
        sourceCode: null,
        livePreview: null,
        infoPage: 'ML'
    },


]

const skills = [
    // skills can be added or removed
    // if there are no skills, Skills section won't show up
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Git',
    'CI/CD',
]

const contact = {
    // email is optional - if left empty Contact section won't show up
    email: 'keshavkarthikk@gmail.com',
}

export {header, about, projects, skills, contact}
