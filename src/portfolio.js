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
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
        name: 'US Visa Rescheduling Bot',
        description:
            'Wait times to get an appointment for a US Visa are incredibly long in Canada, ' +
            'This bot regularly checks for open appointment slots and reschedules to earlier slots if available',
        stack: ['Selenium', 'Python'],
        sourceCode: 'https://github.com/Veshek/US-B2-VisaRescheduler',
        livePreview: null,
        infoPage:'VisaRescheduler'
    },
    {
        name: 'Quantum Tunneling Webpage',
        description:
            'This webpage is visual project to communicate the core concepts of Quantum Tunneling',
        stack: ['SASS', 'TypeScript', 'React'],
        sourceCode: 'https://github.com',
        livePreview: 'https://github.com',
    },
    {
        name: 'Project 3',
        description:
            'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
        stack: ['SASS', 'TypeScript', 'React'],
        sourceCode: 'https://github.com',
        livePreview: 'https://github.com',
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
    'Redux',
    'Git',
    'CI/CD',
]

const contact = {
    // email is optional - if left empty Contact section won't show up
    email: 'keshavkarthikk@gmail.com',
}

export {header, about, projects, skills, contact}
