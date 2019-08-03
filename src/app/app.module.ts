import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SignedPipe } from './core/pipes/signed.pipe';
import { AbsPipe } from './core/pipes/abs.pipe';
import { FilterPipe } from './core/pipes/filter.pipe';
import { EditComponent } from './pages/edit/edit.component';
import { OptionsComponent } from './pages/edit/options/options.component';
import { StatsComponent } from './pages/edit/stats/stats.component';
import { PersonalComponent } from './pages/edit/personal/personal.component';

const routes: Routes = [
  { path: '', redirectTo: '/edit/options', pathMatch: 'full' },
  { 
    path: 'edit', component: EditComponent,
    children: [
      { path: 'options', component: OptionsComponent },
      { path: 'stats', component: StatsComponent },
      { path: 'personal', component: PersonalComponent },
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SignedPipe,
    AbsPipe,
    FilterPipe,
    EditComponent,
    OptionsComponent,
    StatsComponent,
    PersonalComponent,
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
