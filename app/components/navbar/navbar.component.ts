import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'navbar',
  templateUrl: "navbar.component.html"
})
export class NavbarComponent  {
  private projectname:String;

  constructor() {
    this.projectname = "A2Website";
  }
}
