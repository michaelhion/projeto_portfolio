import { Component, inject, signal } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { IProjects } from '../../interface/iProjects';
import { EDialogPainelClass } from '../../enum/EDialogPainelClass';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog)
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/projects/controle_servico_web.jpg',
      alt: 'Projeto controle de serviços',
      title: 'Projeto controle de serviços',
      with: '100px',
      height: '51px',
      description: 'O Projeto faz três coisas: Controlar serviços, clientes e faturamento. Ou seja, vc pode cadastrar/editar seus cliente e serviços e alem disso cadastrar todos os serviços que vc prestou x clientes e gerar um faturamento.',
      links: [
        {
          name: 'conheça Controle serviços',
          href: 'https://controle-servicos-zzyz.vercel.app/login',
        },
      ],
    },
  ]);

  public openDialog(data:IProjects){
    this.#dialog.open(DialogProjectsComponent,{
      data,
      panelClass:EDialogPainelClass.PROJECTS
    })
  }
}
