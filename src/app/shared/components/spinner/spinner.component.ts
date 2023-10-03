import { Component } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  imports: [NgxSpinnerModule],
  standalone: true
})
export class SpinnerComponent {

}
