import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  //user defined event creation
  //to share data from child to parent - @Output()
  @Output() onMenuBtnClick = new EventEmitter()

  menubtnClicked(): void {
    //to occur  an user defined event
    this.onMenuBtnClick.emit()

    //to resize screen
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      )
    }, 100)
  }
}
