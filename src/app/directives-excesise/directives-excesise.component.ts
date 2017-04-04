import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-excesise',
  templateUrl: './directives-excesise.component.html',
  styleUrls: ['./directives-excesise.component.css']
})
export class DirectivesExcesiseComponent implements OnInit {
  showParagraph: boolean = true;
  buttonClicks: Array<Date> = [];

  constructor() { }

  ngOnInit() {
  }

  toggleParagraph() {
    this.buttonClicks.push(new Date());
    this.showParagraph = !this.showParagraph;
  }
}
