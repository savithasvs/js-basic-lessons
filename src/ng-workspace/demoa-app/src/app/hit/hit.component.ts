import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hit',
  templateUrl: './hit.component.html',
  styleUrls: ['./hit.component.css']
})
export class HitComponent implements OnInit {
  @Input()
  label: number = 0;
  @Output()
  hit= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  btnclickHandler(){
    this.hit.emit(this.label);
  }

}
