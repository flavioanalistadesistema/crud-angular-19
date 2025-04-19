import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderService } from './header.service';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, RouterModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(
    private headerService: HeaderService
  ) { }

  get title() {
    return this.headerService.headerData.title;
  }

  get icon() {
    return this.headerService.headerData.icon;
  }

  get routeUrl() {
    return this.headerService.headerData.routeUrl;
  }
 
}
