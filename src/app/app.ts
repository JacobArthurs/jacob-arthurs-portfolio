import { Component } from '@angular/core';
import { HeroComponent } from './sections/hero/hero';
import { AboutComponent } from './sections/about/about';
import { SkillsComponent } from './sections/skills/skills';
import { BackgroundComponent } from './sections/background/background';
import { ContactComponent } from './sections/contact/contact';
import { FooterComponent } from './sections/footer/footer';
import { LayoutComponent } from './sections/layout/layout';

@Component({
  selector: 'app-root',
  imports: [LayoutComponent, HeroComponent, AboutComponent, SkillsComponent, BackgroundComponent, ContactComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
