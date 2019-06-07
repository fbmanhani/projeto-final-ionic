import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';
import { Curso } from './curso.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cursos',
  templateUrl: 'cursos.page.html',
  styleUrls: ['cursos.page.scss']
})
export class CursosPage implements OnInit {
  public cursos: Curso[] = [];

  constructor(
    private cursosService: CursosService,
    private alertController: AlertController
  ) {
  }

  consultar() {
    this.cursosService.consultaCursos().subscribe(
      (cursos: Curso[]) => {
        this.cursos = cursos;
      },
      async error => {
        await this.alertController.create({
          message: error.message,
          subHeader: 'Erro na consulta',
          buttons: ['Ok']
        }).then(alert => alert.present());
      }
    );
  }

  ngOnInit(): void {
    this.consultar();
  }

  async excluir(curso: Curso) {
    const indice: number = this.cursos.findIndex(
      item => item.id === curso.id
    );

    await this.alertController.create({
      header: 'Confirmar!',
      message: 'Confirma a exclusão do item?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Ok',
          handler: () => {
            this.cursosService.excluir(curso.id).subscribe(
              async () => {
                await this.alertController.create({
                  message: 'Item excluído com sucesso!',
                  subHeader: 'Sucesso',
                  buttons: ['Ok']
                }).then(alert => {
                  this.consultar();
                  alert.present();
                });
              },
              async error => {
                await this.alertController.create({
                  message: error.message,
                  subHeader: 'Erro ao excluir',
                  buttons: ['Ok']
                }).then(alert => alert.present);
              }
            );
          }
        }
      ]
    }).then(alert => alert.present());
  }
}
