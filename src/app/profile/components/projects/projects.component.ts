import { faAngular, faPython, faGithub, faWindows } from '@fortawesome/free-brands-svg-icons';
import {faCloud, faDatabase, } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {

  projects = [
    {
      id: '1',
      projectName: 'Enterprise Chat bot',
      fromDate: '01/2020 ',
      endDate: '08/2020',
      role: 'Full Stack Developer',
      client: 'EY',
      description: [
        'Designing and Implementing enterprise wide chat bot using python \
        and azure\'s cognitive services to resolve employees queries.',
        'Designed to eﬀectively use azure cloud services to handle threshold of 200 users at a time.'
      ],
      technologiesUsed: ['Azure Web Services', 'Bot Framework API', 'Azure Cloud', 'Angular', 'Python'],
      technicalIcons: ['azure', 'python', 'angular', 'github']
    },
    {
      id: '2',
      projectName: 'Retail Management',
      fromDate: '03/2020',
      endDate: '05/2020',
      role: 'Full Stack Developer',
      client: 'Personal Project',
      description: [
        'Windows Application to handle retail management which includes sale control, inventory management,accounting, human resources. ',
        'Designed with ASP.NET three layered architecture'
      ],
      technologiesUsed: ['C#', 'WPF', 'SQL Server', 'Git hub', 'MVC API'],
      technicalIcons: ['asp', 'sqlserver', 'github', 'csharp']
    },
    {
      id: '3',
      projectName: 'Cash Application',
      fromDate: '10/2019',
      endDate: '12/2019',
      role: 'Backend Developer',
      client: 'Infosys',
      description: [
        'Python application for identifying patterns for extraction of required data\
         from daily bank transactions and reconciliation with master data to clear payments. ',
         'Received Appreciation from client for designing eﬀective application which helped them in automating 6 employees work. '
      ],
      technologiesUsed: ['Python', 'Automation Anywhere'],
      technicalIcons: ['python']
    },
    {
      id: '4',
      projectName: 'PayRoll',
      fromDate: '11/2018',
      endDate: '02/2019',
      role: 'Database Developer',
      client: 'Infosys',
      description: [
        'Developed Database layer to handle automation of payment reconciliation of salary components for employees in 24 countries.',
         'Automated work of 4 employees and received appreciation for being innovative to quickly ramp up the project',
      ],
      technologiesUsed: ['C#', 'SQL Server', 'Internal Tool'],
      technicalIcons: ['asp', 'sqlserver', 'csharp']
    },

  ];

  fabIcons = {
    angular: faAngular,
    python: faPython,
    azure: faCloud,
    github: faGithub,
    windows: faWindows,
    sqlserver: faDatabase,
    // asp: 'devicon-dot-net-plain',
  };

  devIcons = {
    asp: 'devicon-dot-net-plain-wordmark',
    csharp: 'devicon-csharp-plain',
  };

  iconDescription = {
    angular: 'Angular',
    python: 'Python',
    azure: 'Azure',
    github: 'Github',
    windows: 'Windows',
    sqlserver: 'Sql Server',
    asp: 'Asp.net',
    csharp: 'C#',
  };

  icon: '';

  headers = ['Description', 'Technologies', 'Duration'];
  displayIcons = true;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    // tslint:disable-next-line:forin
    for (const key in this.fabIcons) {
      iconRegistry.addSvgIcon(
        key,
        sanitizer.bypassSecurityTrustResourceUrl(this.fabIcons[key])
      );
    }
  }
  ngOnInit(): void {}

  fetchFabIcon(name: string) {
    this.icon = this.fabIcons[name];
    console.log(this.iconDescription);
    return this.icon;
  }

  isFabIcon(name: string) {
    if (name in this.fabIcons) {
      return true;
    }
    return false;
  }

  fetchDevIcon(name: string) {
    this.icon = this.devIcons[name];
    return this.icon;
  }

}
