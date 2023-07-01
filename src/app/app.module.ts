import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { LaminatorComponent } from './laminator/laminator.component';
import { PhotoComponent } from './photo/photo.component';
import { PopupComponent } from './laminator/popup/popup.component';
import { ImageListComponentComponent } from './laminator/image-list-component/image-list-component.component';
import { ImageComponentComponent } from './laminator/image-list-component/image-component/image-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    ContactComponent,
    PopupComponent,
    PhotoComponent,
    LaminatorComponent,
    ImageListComponentComponent,
    ImageComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
