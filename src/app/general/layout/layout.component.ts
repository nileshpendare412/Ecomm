import { Component ,CUSTOM_ELEMENTS_SCHEMA, ViewChild} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { Carousel } from 'primeng/carousel';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LayoutComponent {
 
}


