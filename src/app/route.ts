import { DashboardComponent } from './dashboard/dashboard.component';
import { SuccessComponent } from './success/success.component';
import { ErrorComponent } from './error/error.component';
export const route = [
	{
		path: '',
		component: DashboardComponent
	},
	{
		path: 'success',
		component: SuccessComponent
	},
	{
		path: 'error',
		component: ErrorComponent
	},
	{
		path: '**',
		component: DashboardComponent
	}
];
