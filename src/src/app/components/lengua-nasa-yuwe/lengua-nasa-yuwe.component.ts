import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface VocabularyItem {
  spanish: string;
  nasaYuwe: string;
  pronunciation: string;
}

@Component({
  selector: 'app-lengua-nasa-yuwe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lengua-nasa-yuwe.component.html',
  styleUrls: ['./lengua-nasa-yuwe.component.css']
})
export class LenguaNasaYuweComponent {
  playingAudio: string | null = null;

  vocabulary: VocabularyItem[] = [
    { spanish: 'Buenos días', nasaYuwe: "Pura we'", pronunciation: 'pura ué' },
    { spanish: 'Gracias', nasaYuwe: "Pura we' fxi'zenxi", pronunciation: 'pura ué fshi\'zenshi' },
    { spanish: 'Madre', nasaYuwe: "U' us", pronunciation: 'u us' },
    { spanish: 'Tierra', nasaYuwe: "Yu'", pronunciation: 'iu' },
    { spanish: 'Agua', nasaYuwe: "We'", pronunciation: 'ué' },
    { spanish: 'Sol', nasaYuwe: 'Wejxa', pronunciation: 'uéjsha' },
    { spanish: 'Luna', nasaYuwe: "A'", pronunciation: 'a' },
    { spanish: 'Casa', nasaYuwe: 'Ja', pronunciation: 'ja' }
  ];

  playAudio(item: VocabularyItem): void {
    this.playingAudio = item.nasaYuwe;
    
    // Simular reproducción de audio usando síntesis de voz
    const utterance = new SpeechSynthesisUtterance(item.pronunciation);
    utterance.lang = 'es-CO';
    utterance.rate = 0.7;
    utterance.pitch = 1;
    
    utterance.onend = () => {
      this.playingAudio = null;
    };
    
    window.speechSynthesis.speak(utterance);
  }

  isPlaying(item: VocabularyItem): boolean {
    return this.playingAudio === item.nasaYuwe;
  }
}
