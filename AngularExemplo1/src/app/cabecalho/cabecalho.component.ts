import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {
  num1:any = 5;
  num2:any = 10;
  constructor() { }

  ngOnInit(): void {
  }

}
