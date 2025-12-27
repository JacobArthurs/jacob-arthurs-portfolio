import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MinimaxComponent } from '../../shared/components/minimax/minimax';
import { AnimatedText } from '../../shared/components/animated-text/animated-text';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFileLines, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrls: ['./hero.css'],
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatChipsModule, MinimaxComponent, MatCardModule, AnimatedText, FontAwesomeModule],
})
export class HeroComponent {
  protected faFileLines: IconDefinition = faFileLines;

  protected scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const scrollContainer = document.querySelector('mat-sidenav-content');
      const headerOffset = 150;

      if (scrollContainer) {
        const elementPosition = element.offsetTop - headerOffset;
        scrollContainer.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }
  }
}
