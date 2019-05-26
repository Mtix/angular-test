import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChannelTabComponent } from './tabs-content/channel-tab/channel-tab.component';
import { FirstTabComponent } from './tabs-content/first-tab/first-tab.component';
import { SecondTabComponent } from './tabs-content/second-tab/second-tab.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/channel',
    pathMatch: 'full',
  },
  {
    path: 'channel',
    component: ChannelTabComponent,
  },
  {
    path: 'first',
    component: FirstTabComponent,
  },
  {
    path: 'second',
    component: SecondTabComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
