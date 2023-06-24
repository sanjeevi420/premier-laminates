import { Component } from '@angular/core';

@Component({
  selector: 'app-laminator',
  templateUrl: './laminator.component.html',
  styleUrls: ['./laminator.component.css']
})
export class LaminatorComponent {
  isPopupVisible = false;
  
  showPopup() {
    this.isPopupVisible = true;
    alert("isPopupVisible : " + this.isPopupVisible);
  }

  hidePopup() {
    this.isPopupVisible = false;
    alert("isPopupVisible : " + this.isPopupVisible);
  }
}
