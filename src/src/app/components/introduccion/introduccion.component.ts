import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-introduccion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './introduccion.component.html',
  styleUrls: ['./introduccion.component.css']
})
export class IntroduccionComponent {
  heroImage = 'https://images.unsplash.com/photo-1635991062422-b3e2f8c36dce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpZ2Vub3VzJTIwY29tbXVuaXR5JTIwY29sb21iaWElMjBtb3VudGFpbnN8ZW58MXx8fHwxNzYzNzQ0MTg0fDA&ixlib=rb-4.1.0&q=80&w=1080';
  eldersImage = 'https://images.unsplash.com/photo-1665708468457-08c52d98cada?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpZ2Vub3VzJTIwZWxkZXJzJTIwd2lzZG9tfGVufDF8fHx8MTc2Mzc0NDE4NHww&ixlib=rb-4.1.0&q=80&w=1080';
}
