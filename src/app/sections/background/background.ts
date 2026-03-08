import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';
import { ReverseAnimatedText } from '../../shared/components/reverse-animated-text/reverse-animated-text';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    MatChipsModule,
    ReverseAnimatedText
  ],
  templateUrl: './background.html',
  styleUrls: ['./background.css']
})
export class BackgroundComponent {
  protected experiences: ExperienceItem[] = [
    {
      organization: 'BAM Technologies',
      logo: 'Bam.jpg',
      subject: 'Senior Software Engineer',
      startDate: new Date(2022, 3),
      endDate: undefined,
      description: [
        'Led architectural migration from monolithic ASP.NET MVC to containerized microservices, deploying 6 .NET APIs and Angular TypeScript client to AWS ECS with zero downtime',
        'Architected OAuth2 B2B authentication for College Board and Prometric integrations using JWT/JWKS with automatic key rotation, eliminating manual processing for 100,000+ records',
        'Migrated production database from MSSQL to PostgreSQL, achieving 60% query performance improvement through schema redesign, query refactoring, and indexing strategies',
        'Built AWS infrastructure with Terraform including ECS clusters, ECR repositories, RDS instances, S3 storage, SNS/SQS messaging, and CI/CD pipelines via GitHub Actions',
        'Provided technical leadership through code reviews, architecture discussions, and cross-team coordination with DevOps and security teams'
      ]
    },
    {
      organization: 'United States Air Force',
      logo: 'USAF.jpg',
      subject: 'Software Engineer Intern',
      startDate: new Date(2020, 4),
      endDate: new Date(2022, 3),
      description: [
        'Developed full stack ASP.NET MVC applications supporting mission-critical operations through full software development lifecycle',
        'Created feedback tracking system using jQuery and Bootstrap, enabling systematic issue analysis for 500+ users',
        'Optimized SQL queries in Microsoft SQL Server, reducing report generation time by 40%',
        'Collaborated in Agile Scrum team, participating in sprint planning, daily stand-ups, and code reviews'
      ]
    },
    {
      organization: 'Oklahoma State University',
      logo: 'OkState.jpg',
      subject: 'Front End Developer',
      startDate: new Date(2020, 7),
      endDate: new Date(2022, 3),
      description: [
        'Developed and maintained university web applications using modern web technologies'
      ]
    },
  ];

  protected education: ExperienceItem[] = [
    {
      organization: 'Georgia Institute of Technology',
      logo: 'GaTech.jpg',
      subject: 'Master of Science in Computer Science',
      startDate: new Date(2025, 0),
      endDate: undefined,
      description: [
        'Specializing in Artificial Intelligence'
      ]
    },
    {
      organization: 'Oklahoma State University',
      logo: 'OkState.jpg',
      subject: 'Bachelor of Science in Computer Science',
      startDate: new Date(2018, 7),
      endDate: new Date(2022, 4),
      description: []
    }
  ];
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    this.setupObserver();
    setTimeout(() => this.observeAllItems(), 100);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  protected calculateDuration(startDate: Date, endDate?: Date): string {
    const end = endDate ?? new Date();

    const totalMonths = (end.getFullYear() - startDate.getFullYear()) * 12
                      + (end.getMonth() - startDate.getMonth())
                      + 1;

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    const parts: string[] = [];
    if (years > 0)
      parts.push(this.pluralize(years, 'year'));
    if (months > 0)
      parts.push(this.pluralize(months, 'month'));

    return parts.length > 0 ? parts.join(' ') : '1 month';
  }

  private pluralize(count: number, unit: string): string {
    return `${count} ${unit}${count === 1 ? '' : 's'}`;
  }

  onTabChange(_index: number): void {
    setTimeout(() => this.observeAllItems(), 100);
  }

  private setupObserver(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            this.observer?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '0px'
      }
    );
  }

  private observeAllItems(): void {
    const items = document.querySelectorAll('.experience-item');
    items.forEach(item => {
      this.observer?.observe(item);
    });
  }
}

interface ExperienceItem {
  organization: string;
  logo: string;
  subject: string;
  startDate: Date;
  endDate?: Date;
  description: string[];
}
