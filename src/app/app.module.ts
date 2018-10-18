import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { AccountManagementComponent } from './pages/account-management/account-management.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TrackbaseComponent } from './pages/trackbase/trackbase.component';
import { ModalsComponent } from './components/modals/modals.component';
import { ModalDirective } from './components/modals/modal.directive';
import { TrackitComponent } from './pages/trackit/trackit.component';
import { StepFormComponent } from './pages/trackbase/step-form/step-form.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TabComponent } from './components/tabs/tab.component';
import { TrackbaseDashboardComponent } from './pages/trackbase/trackbase-dashboard/trackbase-dashboard.component';
import { ActiveTrackComponent } from './pages/trackbase/active-track/active-track.component';


const routes = [
  { path: '', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'account-management', component: AccountManagementComponent },
  { path: 'trackbase', component: TrackbaseComponent },
  { path: 'trackit', component: TrackitComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    FooterComponent,
    LoginComponent,
    AccountManagementComponent,
    DashboardComponent,
    TrackbaseComponent,
    ModalsComponent,
    ModalDirective,
    TrackitComponent,
    StepFormComponent,
    TabsComponent,
    TabComponent,
    TrackbaseDashboardComponent,
    ActiveTrackComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule,
    RouterModule.forRoot(
      routes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
