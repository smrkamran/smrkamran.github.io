import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
};

type Education = {
  degree: string;
  field: string;
  institution: string;
  period: string;
  location: string;
  cgpa: string;
};

type Recommendation = {
  source: string;
  text: string;
  author: string;
  role: string;
};

type Certification = {
  title: string;
  issuer: string;
  date: string;
};

type ContactLink = {
  label: string;
  value: string;
  href: string;
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  readonly hero = {
    name: 'Sameer Kamran',
    title: 'Full Stack Web Developer',
    location: 'Frankfurt, Germany',
    phone: '(+49)-177-4052203',
    email: 'me@sameerkamran.de',
  };

  readonly statements = {
    personal:
      'Software Engineer with more than 6+ years of experience in industry. Worked as a lone-wolf as well as in Agile Teams. Expertise is design and development of Frontend Applications as well as WebApis from scratch. Also designed databases and have been part of requirement gathering teams. Always open to learn new tools and technologies.',
  };

  readonly blogLink = 'https://blog.sameerkamran.com';
  readonly contactMessage =
    "Let me know if you have any queries or if you'd like to discuss something";

  readonly skills: string[] = [
    '.Net Core',
    'Asp .Net MVC5',
    'FluentValidation',
    'SignalR',
    'RabbitMQ',
    'AutoMapper',
    'AutoFac',
    'NUnit',
    'EntityFramework',
    'NLog',
    'ExpressJS',
    'Laravel',
    'Angular',
    'RxJS',
    'ReactJS',
    'Blazor',
    'JQuery',
    'KnockoutJS',
    'Angular Material',
    'Material UI',
    'PrimeNG',
    'Bootstrap',
    'GIT',
    'AWS',
    'JIRA',
  ];

  readonly certifications: Certification[] = [
    {
      title: 'Certified .Net Specialist',
      issuer: 'EVS Learning',
      date: 'April 2017',
    },
  ];

  readonly experiences: Experience[] = [
    {
      role: 'Software Engineer',
      company: 'Schwarm Technologies GmbH',
      period: 'June 2021 - Present',
      location: 'Munich, Germany',
      highlights: [
        'Working on highly scalable IoT web platforms used by energy companies.',
        'Developing custom applications for E.On, Nordex, and other German energy organizations.',
        'Delivering solutions with Angular, Aurelia, and Java Spring.',
      ],
    },
    {
      role: 'Full Stack Developer',
      company: 'Boltech Solutions',
      period: 'June 2019 - June 2021',
      location: 'Lahore, Pakistan',
      highlights: [
        'Implemented a tax management system for the Government of Malawi (.Net MVC5, SQL Server, SignalR, AutoMapper, Autofac, Angular 6, Angular Material, PrimeNG).',
        'Delivered a UFC Gym International management platform (.Net Core 3.0, MySQL, SignalR, AutoMapper, Autofac, Angular 8, Angular Material, ZKTeco Access Gates).',
        'Built the Employee Service Catalogue and Digital Approvals System for Exceed IT Services (ExpressJS, Mongoose, MongoDB, Angular 7).',
      ],
    },
    {
      role: 'Web Developer (Part Time)',
      company: 'HighBit Technologies',
      period: 'February 2019 - June 2019',
      location: 'Lahore, Pakistan',
      highlights: [
        'Revamped a mobile repair shop POS system (NodeJS, Sequelize, GraphQL, Angular 7, Angular Material).',
      ],
    },
    {
      role: '.Net Developer',
      company: 'Codility Solutions',
      period: 'March 2018 - June 2019',
      location: 'Lahore, Pakistan',
      highlights: [
        'Built a purchase order management web application (.Net Core 2.1 WebAPI, SQL Server, .Net MVC5, KnockoutJS).',
        'Developed an inventory/point-of-sale desktop application (WPF, SQLite, MvvmCross, DevExpress).',
        'Implemented an office management system with attendance and task capabilities (.Net MVC5, SQL Server, SignalR, ZKTeco Biometric Integration).',
      ],
    },
    {
      role: 'Freelance Web Developer',
      company: 'Upwork',
      period: 'August 2017 - February 2018',
      location: 'Lahore, Pakistan',
      highlights: [
        'Built a digital magazine website (.Net MVC5, SQL Server, Bootstrap, JQuery).',
        'Resolved a RabbitMQ exchange issue within an HR portal.',
        'Created a custom chat experience for a NopCommerce website.',
      ],
    },
    {
      role: '.Net Developer (Internship)',
      company: 'Inseparable Technology',
      period: 'April 2017 - July 2017',
      location: 'Lahore, Pakistan',
      highlights: [
        'Worked on an ecommerce store (.Net MVC5, SQL Server, SignalR, OAuth, Social Media Integration).',
      ],
    },
  ];

  readonly education: Education[] = [
    {
      degree: 'Masters of Science',
      field: 'Web & Data Science',
      institution: 'Universitaet Koblenz - Landau, Koblenz',
      period: 'November 2020 - Present',
      location: 'Koblenz, Germany',
      cgpa: 'CGPA: N/A',
    },
    {
      degree: 'Bachelor of Science',
      field: 'Information Technology',
      institution: 'University of the Punjab, Lahore',
      period: 'November 2013 - December 2017',
      location: 'Lahore, Pakistan',
      cgpa: 'CGPA: 3.07',
    },
  ];

  readonly recommendations: Recommendation[] = [
    {
      source: 'Boltech Solutions',
      text: 'During his time with Boltech Solutions, Sameer Kamran remained dedicated and loyal to his work and responsibilities. His responsibilities included server and client side development as well as requirement gathering from clients.',
      author: 'Ahmed Jalil Qarshi',
      role: 'Director',
    },
    {
      source: 'Codility Solutions',
      text: 'We found him sincere, hardworking, technically sound, and result-oriented. Sameer has a friendly, outgoing personality, a good sense of humour, and works great as a part of the team.',
      author: 'Aqsa Ch',
      role: 'HR Manager',
    },
    {
      source: 'Highbit Technologies',
      text: 'He is an expert in application development using .Net Core, Angular, and Laravel. He developed multiple software solutions for our clients and proved himself an excellent software engineer.',
      author: 'Syed Ali Hamza Zaidi',
      role: 'CEO',
    },
    {
      source: 'EVS Learning',
      text: 'Mr. Sameer Kamran has always displayed a high degree of integrity, responsibility, and ambition. He proved to be self-motivated, competent, diligent, and punctual throughout the Certified .Net Specialist course.',
      author: 'Ali A Malik',
      role: 'Director Operations',
    },
  ];

  readonly contactLinks: ContactLink[] = [
    {
      label: 'Email',
      value: this.hero.email,
      href: `mailto:${this.hero.email}`,
    },
    {
      label: 'Phone',
      value: this.hero.phone,
      href: 'tel:+491774052203',
    },
    {
      label: 'Location',
      value: this.hero.location,
      href: 'https://maps.google.com/?q=Frankfurt,+Germany',
    },
  ];
}
