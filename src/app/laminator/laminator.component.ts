import { Component } from '@angular/core';

@Component({
  selector: 'app-laminator',
  templateUrl: './laminator.component.html',
  styleUrls: ['./laminator.component.css']
})
export class LaminatorComponent {
  isPopupVisible = false;
  selectedpics:any;
  
  showPopup(data:any) {
    this.isPopupVisible = true;
    this.selectedpics=data;
  }

  hidePopup() {
    this.isPopupVisible = false;
  }

  setData(data:any){
    this.selectedpics=data;
  }

  getData():any{
    return this.selectedpics
  }
}
