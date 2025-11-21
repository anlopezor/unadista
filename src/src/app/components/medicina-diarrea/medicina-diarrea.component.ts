import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-medicina-diarrea',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './medicina-diarrea.component.html',
  styleUrls: ['./medicina-diarrea.component.css']
})
export class MedicinaDiarreaComponent {
  heroImage = 'https://images.unsplash.com/photo-1694035449534-076f6ef78d33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2luYWwlMjBwbGFudHMlMjBoZXJic3xlbnwxfHx8fDE3NjM3MzczNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080';
  
  plantasCalientes = ['Apio', 'Limoncillo', 'Ajenjo', 'Yerbabuena', 'Hinojo', 'Mejorana', 'Perejil'];
  plantasFrescas = [
    'Linaza hervida',
    'Cebada hervida',
    'Escoba real machacado o licuado',
    'Sumo o ponche de sábila con clara de huevo',
    'Sumo de verdolaga'
  ];
  plantasEmpacho = ['Apio', 'Yerba de chivo con coca', 'Alcachofa', 'Sauco', 'Mejorana', 'Perejil'];
}
