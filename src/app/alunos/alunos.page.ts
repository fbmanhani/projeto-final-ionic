import { Component, OnInit } from '@angular/core';
import { Aluno } from './aluno.model';
import { AlunosService } from './alunos.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.page.html',
  styleUrls: ['./alunos.page.scss'],
})
export class AlunosPage implements OnInit {
  alunos: Aluno[] = []

  constructor(
    private service: AlunosService,
    private alertController: AlertController) { }

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.service.consultaTodos().subscribe(
      (alunos: Aluno[]) => {
        this.alunos = alunos;
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

  async excluir(aluno: Aluno) {
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
            this.service.excluir(aluno.id).subscribe(
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
