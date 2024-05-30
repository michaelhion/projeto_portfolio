import { Component, signal } from '@angular/core';
import { IExperience } from '../../interface/iExperence';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  public arrayExperience = signal<IExperience[]>([
    {
      sumary:{
      strong:"Full Stack Developer",
      p:"Fiserv | Out 2023 - Present"
    },text: '<p>Desde outubro de 2023, atuo na empresa fiserv com desenvolvedor full stack</p>'
    },
    {
      sumary:{
      strong:"Full Stack Developer",
      p:"Zallpy | Jan 2022 - Fev 2023"
    },text: '<p>Desde Janeiro de 2022, atuo na empresa zallpy com desenvolvedor full stack</p>'
    },
    {
      sumary:{
      strong:"Full Stack Developer",
      p:"Fiserv | Jun 2021 - Dez 2021"
    },text: '<p>Desde Junho de 2021, atuo na empresa fiserv com desenvolvedor full stack</p>'
    },
  ]);
}
