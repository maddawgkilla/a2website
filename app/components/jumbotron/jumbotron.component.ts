import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'jumbotron',
    templateUrl: "jumbotron.component.html",
})
export class JumbotronComponent  {
    private jbtHeading:String;
    private jbtText:String;
    private jbtBtnText:String;
    private jbtBtnUrl:String;

    constructor() {
        this.jbtHeading = "Hello World!";
        this.jbtText = "This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.";
        this.jbtBtnText = "Read More";
        this.jbtBtnUrl = "http://test.com";
    }
}
