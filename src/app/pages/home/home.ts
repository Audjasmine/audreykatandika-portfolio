import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  menuOpen = false;
  currentYear = new Date().getFullYear();

  skills = [
    'Python',
    'Django',
    'Django REST Framework',
    'RESTful APIs',
    'API Development',
    'PostgreSQL',
    'MongoDB',
    'Data Modelling',
    'Git/GitHub',
    'Bitbucket',
    'Docker',
    'CI/CD',
    'Postman',
    'Pandas',
    'XlsxWriter',
    'AWS',
    'Cloudflare',
    'Containerization',
    'Vulnerability Assessment',
    'ISO 27001/27002',
    'ISO 22301',
    'CEH Concepts',
    'TypeScript',
    'Angular',
    'Power Apps',
    'SharePoint',
    'Agile',
    'Code Reviews',
    'SQL',
    'HTML',
    'CSS',
    'JavaScript'
  ];

  experiences = [
    {
      role: 'Software Developer Graduate Trainee',
      company: 'Tano Digital Solutions, Harare',
      period: 'Jun 2026 - Present',
      points: [
        'Develop and maintain backend applications using Python, Django and Django REST Framework for 4 production systems.',
        'Design and implement RESTful APIs with MongoDB and PostgreSQL, building reusable backend components for scalable applications.',
        'Build reporting solutions, including dynamic Excel reports using Pandas and XlsxWriter.',
        'Collaborate with cross-functional teams using Git, GitHub and Agile development practices.',
        'Configure and deploy backend systems using Docker and AWS, including environment setup, Cloudflare integration, and production troubleshooting.',
        'Participate in CI/CD workflows using Bitbucket, conduct code reviews, debug production issues, and maintain technical documentation.'
      ]
    },
    {
      role: 'Software Developer (Volunteer)',
      company: 'Data Nexus Initiative, Harare',
      period: 'Mar 2026 - Present',
      points: [
        'Designed and built a full-stack mentorship platform using Django and Angular, integrating frontend and backend components with RESTful APIs.',
        'Deployed and tested the application to support mentorship programs and opportunity tracking.'
      ]
    },
    {
      role: 'Industrial Attaché - Risk Management and Cybersecurity',
      company: 'Telone Pvt Ltd, Zimbabwe',
      period: 'Dec 2023 - Aug 2024',
      points: [
        'Conducted vulnerability assessments and system validation testing to support telco infrastructure security.',
        'Reviewed security controls, access management practices, and incident records.',
        'Contributed to ISO 27001/27002 and ISO 22301 compliance documentation.'
      ]
    },
    {
      role: 'Software Engineering Intern (Remote)',
      company: 'Digital Geeks, Harare',
      period: 'Aug 2023 - Dec 2023',
      points: [
        'Developed backend features for an Event Management System using Django and Django REST Framework as part of a small Agile team.',
        'Built and tested RESTful APIs, including a QR-based ticket validation endpoint for event check-ins.',
        'Collaborated through GitHub version control using branching, commits, and merge workflows.',
        'Assisted in preparing backend documentation and validating endpoints using Postman.'
      ]
    }
  ];

  educations = [
    {
      institution: 'University Of Zimbabwe',
      credential: 'Bachelor’s (Hons) Degree in Software Engineering (2.1 Degree class)',
      period: '2021 - 2025'
    },
    {
      institution: 'St David’s Girls’ High Bonda',
      credential: '11 O-level passes (incl. Maths & English) | 3 A-level passes (14 points)',
      period: '2015 - 2021'
    }
  ];

  projects = [
    {
      title: 'Imago Marketplace Platform',
      description: 'A digital marketplace where sellers create online shops and manage product listings in a centralized environment.',
      tech: ['Next.js', 'Django', 'REST APIs', 'Docker', 'Github Actions'],
      liveLink: 'http://www.imago.co.zw',
      githubLink: ''
    },
    {
      title: 'Fiscit Fiscalization Platform',
      description: 'Developed a landing page and frontend interface for fiscalization platform designed to help businesses comply with ZIMRA fiscalization requirements. Containerized and deployed using Docker and CI/CD workflows.',
      tech: ['Next.js', 'Django', 'Docker', 'Github Actions'],
      liveLink: 'http://www.fiscit.co.zw',
      githubLink: ''
    },
    {
      title: 'MedGuard.io - Healthcare Data Management Platform',
      description: 'Built a secure patient records system using Django REST Framework and PostgreSQL, with Angular frontend. Deployed on Vercel with role-based access control and HIPAA-aligned data handling.',
      tech: ['Django REST Framework', 'PostgreSQL', 'Angular', 'Vercel'],
      liveLink: 'https://audrey-medguard-io-t.vercel.app',
      githubLink: ''
    },
    {
      title: 'Donations Platform',
      description: 'Developing a full-stack donation tracking application with real-time updates and payment gateway integration. Built with Django backend and Firebase hosting.',
      tech: ['Django', 'Firebase'],
      liveLink: 'https://audreydonations.web.app',
      githubLink: ''
    }
  ];

  contacts = {
    email: 'audreykatan@gmail.com',
    phone1: '+263 774618818',
    phone2: '+263 771350375',
    location: 'Harare, Zimbabwe',
    linkedin: 'https://linkedin.com/in/audrey-katandika',
    github: 'https://github.com/Audjasmine'
  };

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
}
