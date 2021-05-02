import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-calcul',
  templateUrl: './calcul.component.html',
  styleUrls: ['./calcul.component.scss']
})
export class CalculComponent implements OnInit {

  @Input()
  soldBegin = 0;
  @Input()
  encaisseBk = 0;
  @Input()
  inNat = 0;
  @Input()
  frais = 0;
  @Input()
  fawatir = 0;
  @Input()
  inIntern = 0;
  @Input()
  outNat = 0;
  @Input()
  outInter = 0;
  @Input()
  annulation = 0;
  totalCaisse;
  positivTotal;
  negatifTotal;
  diffBetweenPosAndNega;
  resultTotal;
  constructor() {
  }

  numericOnly(event): boolean {
    const patt = /^([0-9])$/;
    const result = patt.test(event.key);
    return result;
  }

  ngOnInit(): void {
  }
  onSave(): void {
    this.totalCaisse =  this.soldBegin + this.encaisseBk;
    alert(this.totalCaisse);
    this.positivTotal = this.inNat + this.fawatir + this.inIntern + this.frais;
    this.negatifTotal = this.outInter + this.outNat + this.annulation;
    this.diffBetweenPosAndNega = this.positivTotal - this.negatifTotal;
    alert('diffBetween : ' + this.diffBetweenPosAndNega);
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
