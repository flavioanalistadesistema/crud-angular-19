import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ForDirective } from '../../Directive/for.directive';
import { HeaderService } from '../../components/template/header/header.service';

@Component({
  selector: 'app-home',
  imports: [MatCardModule, ForDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(
    private headerService: HeaderService
  ){
    headerService.headerData = {
      title: 'Home',
      icon: 'home',
      routeUrl: '/'
    }
  }

}
