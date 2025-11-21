import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-origen-nasa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './origen-nasa.component.html',
  styleUrls: ['./origen-nasa.component.css']
})
export class OrigenNasaComponent {
  heroImage = 'https://images.unsplash.com/photo-1587490693792-52d6b2d9b191?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZSUyMGNvbG9tYmlhfGVufDF8fHx8MTc2Mzc0NDE4NXww&ixlib=rb-4.1.0&q=80&w=1080';
  
  pueblos = ['Guanacos', 'Misak', 'Coconucos', 'Puracé'];
}
