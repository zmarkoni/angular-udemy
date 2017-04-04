import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-excesise',
  templateUrl: './directives-excesise.component.html',
  styleUrls: ['./directives-excesise.component.css']
})
export class DirectivesExcesiseComponent implements OnInit {
  showParagraph: boolean = true;
  buttonClicks: Array<number> = [];
  click: number = 0;

  constructor() { }

  ngOnInit() {
  }

  toggleParagraph() {
    this.click += 1;
    this.buttonClicks.push(this.click);
    this.showParagraph = !this.showParagraph;
    console.log('this.showParagraph: ' + this.showParagraph);
  }
}
