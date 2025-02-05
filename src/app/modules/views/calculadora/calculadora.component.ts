import { Component, OnInit } from '@angular/core';
import { DadosCalcularoraTDEERequest } from 'src/app/shared/models/DadosCalcularoraTDEERequest';
import { DadosCalcularoraTDEEResponse } from 'src/app/shared/models/DadosCalcularoraTDEEResponse';
import { DadosPessoasCalculadora } from 'src/app/shared/models/DadosPessoasCalculadora';
import { CalculadoraService } from 'src/app/shared/services/CalculadoraSevice';
@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent implements OnInit{
  textButton: string = "Salvar e enviar";
  requestCalculadora: DadosCalcularoraTDEERequest = { objetivo: "",biotipo: "",altura: "", peso: "", 
    nivelAtividadeFisica: "", idade: "", taxaMetabolica: 0, tdee: 0}

    dadosPessoas: DadosPessoasCalculadora = { objetivo: "",biotipo: "",altura: "", peso: "", 
      nivelAtividadeFisica: "", idade: "", taxaMetabolica:0, tdee: 0}
  // responseCalculador: DadosCalcularoraTDEEResponse = { }


  constructor(private calculadoraService: CalculadoraService) {}

ngOnInit(): void {
    this.carregarDadosPessasCalculadora();
  }

carregarDadosPessasCalculadora(): void {
    this.calculadoraService.getDadosPessoasCalculadora().subscribe({
      next: (data) => {
        this.requestCalculadora = data
      },
      error: (err) => {
        console.error("Erro ao carregar os cardápios:", err);
      },
    });
  }

enviarFormulario(){

  this.dadosPessoas = this.requestCalculadora;

  this.calculadoraService.postDadosTdee(this.dadosPessoas).subscribe({
        next: (response: DadosCalcularoraTDEEResponse ) => {
          
          this.requestCalculadora.objetivo = response.objetivo;
          this.requestCalculadora.biotipo = response.biotipo;
          this.requestCalculadora.tdee = response.tdee;
          this.requestCalculadora.taxaMetabolica = response.caloriasDiarias;
          

        },
        error: (error) => {
          console.error('Erro:', error);
          alert('Erro ao realizar o calculo. Verifique os dados e tente novamente.');
        }
       
      
      });

  
  console.log(this.requestCalculadora);
   
  }
}
