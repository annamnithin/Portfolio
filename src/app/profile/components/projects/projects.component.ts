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
      projectName: 'Retail Management',
      fromDate: '03/2020',
      endDate: '05/2020',
      role: 'Full Stack Developer',
      client: 'Personal Project',
      description: [
        'Designing Window Application to handle retail management for stores using object oriented design.',
      ],
      technologiesUsed: ['C#', 'WPF', 'SQL Server', 'Git hub', 'MVC API'],
      technicalIcons: ['asp', 'sqlserver', 'github']
    },
    {
      projectName: 'PayRoll',
      fromDate: '11/2018',
      endDate: '02/2019',
      role: 'Database Developer',
      client: 'Infosys',
      description: [
        'Application for reconciliation of salaries components for employees for 24 countries',
      ],
      technologiesUsed: ['C#', 'SQL Server', 'Internal Tool'],
      technicalIcons: ['asp', 'sqlserver']
    },
    {
      projectName: 'Cash Application',
      fromDate: '10/2019',
      endDate: '12/2019',
      role: 'Backend Developer',
      client: 'Infosys',
      description: [
        'Programming Algorithms for identifying patterns \
         and Extraction of required data from daily bank transactions) and reconciliation with master data ',
      ],
      technologiesUsed: ['Python', 'Automation Anywhere'],
      technicalIcons: ['python']
    },
    {
      projectName: 'Enterprise Chat bot',
      fromDate: '01/2020 ',
      endDate: '',
      role: 'Full Stack Developer',
      client: 'EY',
      description: [
        'Designing and Implementing enterprise wide chat bot \
        using azure cognitive services to resolve employees queries. using object oriented designs.',
      ],
      technologiesUsed: ['Azure Web Services', 'Bot Framework API', 'Azure Cloud', 'Angular', 'Python'],
      technicalIcons: ['azure', 'python', 'angular']
    },
  ];

  icons = {
    angular: './././assets/images/angular.svg',
    python: './././assets/images/python.svg',
    azure: './././assets/images/azure.svg',
    github: './././assets/images/github.svg',
    windows: './././assets/images/windows.svg',
    sqlserver: './././assets/images/sql-server.svg',
    asp: './././assets/images/asp-net.svg',
  };

  headers = ['Description', 'Technologies', 'Duration'];
  displayIcons = true;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {

    // tslint:disable-next-line:forin
    for (const key in this.icons) {
      iconRegistry.addSvgIcon(
        key,
        sanitizer.bypassSecurityTrustResourceUrl(this.icons[key])
      );
    }
  }
  ngOnInit(): void {}

}
