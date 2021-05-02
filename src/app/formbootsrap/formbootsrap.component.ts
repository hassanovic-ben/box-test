import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-formbootsrap',
  templateUrl: './formbootsrap.component.html',
  styleUrls: ['./formbootsrap.component.scss']
})
export class FormbootsrapComponent implements OnInit {

  @Input()
  soldBegin;
  @Input()
  encaisseBk;
  @Input()
  inNat;
  @Input()
  frais;
  @Input()
  fawatir;
  @Input()
  inIntern;
  @Input()
  outNat;
  @Input()
  outInter;
  @Input()
  annulation;
  totalCaisse;
  positivTotal;
  negatifTotal;
  diffBetweenPosAndNega;
  resultTotal;

  constructor() { }

  ngOnInit(): void {
  }

  onSave(): void {
    this.totalCaisse =  this.soldBegin + this.encaisseBk;
    this.positivTotal = this.inNat + this.fawatir + this.inIntern + this.frais;
    this.negatifTotal = this.outInter + this.outNat + this.annulation;
    this.diffBetweenPosAndNega = this.positivTotal - this.negatifTotal;
    this.resultTotal = this.totalCaisse + this.diffBetweenPosAndNega;
  }
  reset(): void {
    this.soldBegin = 0;
    this.encaisseBk = 0;
    this.inNat = 0;
    this.frais = 0;
    this.fawatir = 0;
    this.inIntern = 0;
    this.outNat = 0;
    this.outInter = 0;
    this.annulation = 0;
    this.resultTotal = 0;
  }
}
