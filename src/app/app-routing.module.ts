import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { route } from './route';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IncomingdataComponent } from './incomingdata/incomingdata.component';
import { CommonModule } from '@angular/common';
import { KeysPipe } from './keypipe';
import { ErrorComponent } from './error/error.component';
import { SuccessComponent } from './success/success.component';

@NgModule({
	imports: [ CommonModule, FormsModule, RouterModule.forRoot(route) ],
	declarations: [ KeysPipe, DashboardComponent, IncomingdataComponent, SuccessComponent, ErrorComponent ],
	exports: [ KeysPipe, RouterModule, DashboardComponent, IncomingdataComponent ],
	entryComponents: [ IncomingdataComponent ]
})
export class AppRoutingModule {}
