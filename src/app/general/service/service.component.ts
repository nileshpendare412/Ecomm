import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [RouterLink, ],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent {

}
