import { HeaderService } from './header/header.service';
import { FooterService } from './footer/footer.service';

import { LanguagesListService } from './languages-list/languages-list.service';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StoriesListComponent } from './stories-list/stories-list.component';
import { LanguagesListComponent } from './languages-list/languages-list.component';
import { StoryComponent } from './story/story.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    StoriesListComponent,
    LanguagesListComponent,
    StoryComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    NoopAnimationsModule,
    NgSelectModule, 
    FormsModule,
    PdfViewerModule,
    NgxExtendedPdfViewerModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    HeaderService,
    FooterService,
    LanguagesListService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
