import { Component, Input } from '@angular/core';
import { ReceitaCompleta } from '../../models/ReceitaCompleta';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-receita-completa',
  templateUrl: './receita-completa.component.html',
  styleUrls: ['./receita-completa.component.css']
})
export class ReceitaCompletaComponent {
  @Input() routerBack: string = '';
  // @Input() receita: ReceitaCompleta = {
  //   titulo: '',
  //   descricao: '',
  //   itens: []
  // };

  constructor(private route: ActivatedRoute, private router: Router) { }

  // ngOnInit(): void {
  //   this.route.data.subscribe(({ receita }) => {
  //     this.receita = receita;
  //   });
  // }

  voltar() {
    this.router.navigate([`/${this.routerBack}`]);
  }
}
