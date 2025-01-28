/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { register } from 'module';
import { register as registerSwiperElements } from 'module';


// registerSwiperElements();
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
