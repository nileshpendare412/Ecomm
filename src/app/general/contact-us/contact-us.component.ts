import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  iframeSrc: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.1368225078586!2d75.92121147508122!3d22.68594997941118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x49ca303dd8957eb9%3A0xab127299c7214114!2sSparkup%20Technology%20Private%20Limited!5e0!3m2!1sen!2sin!4v1729855049166!5m2!1sen!2sin');
  }
}
