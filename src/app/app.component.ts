import { Component } from '@angular/core';
import { HeaderComponent } from "./components/template/header/header.component";
import { FooterComponent } from "./components/template/footer/footer.component";
import { NavComponent } from './components/template/nav/nav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [HeaderComponent, FooterComponent, NavComponent],  
})

export class AppComponent {  
  
}
