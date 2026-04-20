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
    'Angular',
    'TypeScript',
    'Python',
    'Django',
    'SQL',
    'Git/GitHub',
    'Power Apps',
    'SharePoint',
    'Postman',
    'HTML',
    'CSS',
    'JavaScript'
  ];

  experiences = [
    {
      role: 'Software Developer (Volunteer)',
      company: 'Data Nexus Initiative',
      period: 'March 2026 - Present',
      points: [
        'Developing a mentorship management platform for program coordination and tracking.',
        'Integrating frontend and backend features across the application.',
        'Supporting testing, debugging, and deployment activities.'
      ]
    },
    {
      role: 'Industrial Attache - Risk Management and Cybersecurity',
      company: 'Telone Pvt Ltd',
      period: 'Dec 2023 - Aug 2024',
      points: [
        'Assisted with security control reviews and access management practices.',
        'Conducted vulnerability assessments and supported validation testing.',
        'Contributed to compliance documentation and cybersecurity awareness initiatives.'
      ]
    },
    {
      role: 'Software Engineering Intern',
      company: 'Digital Geeks',
      period: 'Aug 2023 - Dec 2023',
      points: [
        'Contributed to backend development for an event management system.',
        'Supported API development, testing, and endpoint validation.',
        'Worked with GitHub workflows and Postman during development.'
      ]
    }
  ];

  projects = [
    {
      title: 'MedGuard IoT',
      description:
        'A healthcare IoT project focused on secure and reliable system design.',
      tech: ['Angular', 'IoT', 'Security'],
      liveLink: 'https://audrey-medguard-io-t.vercel.app',
      githubLink: '#'
    },
    {
      title: 'Donations Platform',
      description:
        'A donation platform built with usability and accessibility in mind.',
      tech: ['Angular', 'Firebase', 'Web App'],
      liveLink: 'https://audreydonations.web.app',
      githubLink: '#'
    },
    {
      title: 'Mentorship Management Platform',
      description:
        'A platform for managing mentorship programs and participant activities.',
      tech: ['Angular', 'Django', 'Full Stack'],
      liveLink: '#',
      githubLink: '#'
    }
  ];

  contacts = {
    email: 'audreykatan@gmail.com',
    phone1: '+263 774618818',
    phone2: '+263 782996282',
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
