import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
numero1 : any = 0;
numero2 : any = 0;
resultado : number = 0;
resultados : any = [];
  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.numero1 = parseFloat(this.route.snapshot.params['num1'] ?? 0);
    this.numero2 = parseFloat(this.route.snapshot.params['num2'] ?? 0);
  }
somar(){
  this.resultado = this.numero1 + this.numero2;
  this.resultados.push(this.numero1 + "+" + this.numero2 + "=" + this.resultado)
}
}
