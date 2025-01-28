import { CarouselModule } from 'primeng/carousel';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
// import { MediaDemoRoutingModule } from './../../media/mediademo-routing.module';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MediaComponent } from './media.component';




@NgModule({
	imports: [
		// CommonModule,
		// MediaDemoRoutingModule,
		// ButtonModule,
		// ImageModule,
		// GalleriaModule,
		CarouselModule
	],
	// declarations: [MediaComponent]
})


export class MediaModule{

}