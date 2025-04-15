import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RedDirective } from '../../../Directive/red.redirective';

@Component({
  selector: 'app-footer',
  imports: [MatToolbarModule, RedDirective],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
