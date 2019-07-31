import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SignedPipe } from './core/pipes/signed.pipe';
import { AbsPipe } from './core/pipes/abs.pipe';
import { FilterPipe } from './core/pipes/filter.pipe';
import { EditComponent } from './pages/edit/edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/edit', pathMatch: 'full' },
  { path: 'edit', component: EditComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SignedPipe,
    AbsPipe,
    FilterPipe,
    EditComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
