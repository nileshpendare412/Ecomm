// import { SwiperModule } from './../../node_modules/swiper/types/shared.d';
// import { register } from 'module';
// import { NgModule } from '@angular/core';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AppComponent } from './app.component';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// @NgModule({
//   declarations: [
//   ],
//   imports: [
//     BrowserAnimationsModule
  
//     // other modules
//   ],
//   providers: [],
// //   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { ItemSearchComponent } from './item-search/item-search/item-search.component';
import { CartService } from './services.service';
import { FormsModule } from '@angular/forms';

@NgModule({

  imports: [BrowserModule,BrowserAnimationsModule,HttpClientModule,FormsModule],
  providers: [DatePipe,CartService],
})
export class AppModule {}
