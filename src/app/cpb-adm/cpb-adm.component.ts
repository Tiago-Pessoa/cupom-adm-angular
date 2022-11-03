import { Component, OnInit } from '@angular/core';
import { Cupom } from './cupom.model';
import { CUPONS } from './mock-cupons';

@Component({
  selector: 'app-cpb-adm',
  templateUrl: './cpb-adm.component.html',
  styleUrls: ['./cpb-adm.component.scss'],
})
export class CpbAdmComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'cupom',
    'dataI',
    'dataF',
    'tipo',
    'valor',
    'ativo',
  ];
  cupons = CUPONS;
  selectedCupom?: Cupom;

  constructor() {}

  ngOnInit(): void {}

  onSelect(cupons: Cupom): void {
    this.selectedCupom = cupons;
    console.log('fui clicado', this.selectedCupom.id);
  }
}
