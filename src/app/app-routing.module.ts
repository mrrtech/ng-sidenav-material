import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActionlistComponent } from './components/actionlist/actionlist.component';
import { ClientprofileComponent } from './components/clientprofile/clientprofile.component';

const routes: Routes = [
  { path: 'actionlist', component: ActionlistComponent },
  { path: 'clientprofile', component: ClientprofileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
