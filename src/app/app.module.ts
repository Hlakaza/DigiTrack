import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

const routes = [
  // { path: 'add', component: AddComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule,
    RouterModule.forRoot(
      routes,
      {onSameUrlNavigation: 'reload'}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
