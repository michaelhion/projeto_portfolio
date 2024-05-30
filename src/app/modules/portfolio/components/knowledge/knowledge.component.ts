import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/iKnowledge';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/java.svg',
      alt: 'icone de conhecimento em java'
    },
    {
      src: 'assets/icons/knowledge/spring-boot2.svg',
      alt: 'icone de conhecimento em spring boot'
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'icone de conhecimento em angular'
    }
  ]);
}
