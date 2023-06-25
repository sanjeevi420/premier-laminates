import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { LaminatorComponent } from './laminator/laminator.component';
import { PhotoComponent } from './photo/photo.component';
import { PopupComponent } from './laminator/popup/popup.component';

const routes: Routes = [
  {path: '', redirectTo: '/aboutus', pathMatch: 'full'},
  { path: 'aboutus', component: AboutusComponent },
  { path: 'laminator', component: LaminatorComponent },
  { path: 'popup', component: PopupComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
