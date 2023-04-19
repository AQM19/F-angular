import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {
  public nameLower: string = 'aaron';
  public nameUpper: string = 'AARON';
  public fullName: string = 'AaRoN';

  public customDate: Date = new Date();
}
