import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroduccionComponent } from './components/introduccion/introduccion.component';
import { OrigenNasaComponent } from './components/origen-nasa/origen-nasa.component';
import { LenguaNasaYuweComponent } from './components/lengua-nasa-yuwe/lengua-nasa-yuwe.component';

interface Page {
  id: number;
  title: string;
  component: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    IntroduccionComponent,
    OrigenNasaComponent,
    LenguaNasaYuweComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;
  
  pages: Page[] = [
    { id: 1, title: 'Introducción', component: 'introduccion' },
    { id: 2, title: 'Origen del Pueblo Nasa', component: 'origen-nasa' },
    { id: 3, title: 'Lengua Nasa Yuwe', component: 'lengua-nasa-yuwe' },
    { id: 4, title: 'Medicina - Diarrea', component: 'medicina-diarrea' },
    { id: 5, title: 'Medicina - Fiebre', component: 'medicina-fiebre' },
    { id: 6, title: 'Uso Animal en Medicina', component: 'uso-animal' },
    { id: 7, title: 'Ritualidad y Cosmovisión', component: 'ritualidad' },
    { id: 8, title: 'Historias y Relatos', component: 'historias' },
    { id: 9, title: 'Cronología Histórica', component: 'cronologia' },
    { id: 10, title: 'Agradecimientos', component: 'agradecimientos' }
  ];

  goToNextPage(): void {
    if (this.currentPage < this.pages.length - 1) {
      this.currentPage++;
      this.scrollToTop();
    }
  }

  goToPreviousPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.scrollToTop();
    }
  }

  goToPage(index: number): void {
    this.currentPage = index;
    this.scrollToTop();
  }

  private scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  get currentPageComponent(): string {
    return this.pages[this.currentPage].component;
  }
}