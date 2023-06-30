import { Component, Output, EventEmitter } from '@angular/core';
import { LaminatorComponent } from '../laminator.component';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  data:any;

  @Output() closePopup = new EventEmitter<void>();

  constructor(public laminator:LaminatorComponent){}
  ngOnInit(){
    this.data=this.laminator.getData()
  }
}
