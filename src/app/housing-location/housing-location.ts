import { Component,input } from '@angular/core';
import { Housinglocationinfo } from '../housinglocationinfo';


@Component({
  selector: 'app-housing-location',
  imports: [],
  templateUrl: './housing-location.html',
  styleUrl: './housing-location.css',
})
export class HousingLocation {
housinglocation= input.required<Housinglocationinfo>();
}
