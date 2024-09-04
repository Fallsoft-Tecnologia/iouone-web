import { Component } from '@angular/core';

@Component({
  selector: 'app-pix',
  templateUrl: './pix.component.html',
  styleUrls: ['./pix.component.css']
})
export class PixComponent {

  textButton: string = 'Pix';
  cardLogos: string[] = ['/assets/images/pix.png'];
  redireciona: string = '';

}
