import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LayoutModule } from '../../../layouts/layout.module';
import { DefaultComponent } from '../default.component';
import { TrackbaseComponent } from './trackbase.component';
import { ActiveTrackComponent } from './active-track/active-track.component';
import { StepFormComponent } from './step-form/step-form.component';
import { TrackbaseDashboardComponent } from './trackbase-dashboard/trackbase-dashboard.component';


const routes: Routes = [
    {
        'path': '',
        'component': DefaultComponent,
        'children': [
            {
                'path': '',
                'component': TrackbaseComponent
            }
        ]
    }
];
@NgModule({
    imports: [
        CommonModule, RouterModule.forChild(routes), LayoutModule
    ], exports: [
        RouterModule,
        ActiveTrackComponent,
        StepFormComponent,
        TrackbaseDashboardComponent
    ], declarations: [
        TrackbaseComponent,
        ActiveTrackComponent,
        StepFormComponent,
        TrackbaseDashboardComponent
    ]
})
export class TrackbaseModule {



}
