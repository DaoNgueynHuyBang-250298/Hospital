import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { UserLayoutComponent } from './_layout/user-layout/user-layout.component'
import { AuthGuard } from './_guards/auth.guard'
import { ManagerBedComponent } from './_presentation/_screen/manager-bed/manager-bed.component'
import { ManagerBedRoomListComponent } from './_presentation/_component/manager-bed-room-list/manager-bed-room-list.component'
import { SynthesisRPTComponent } from './_presentation/_screen/synthesis-rpt/synthesis-rpt.component'
import { DashboardComponent } from './_presentation/_screen/dashboard/dashboard.component'

const routes: Routes = [
  {path: 'home',component: ManagerBedComponent},
  {path: 'synthesisReport',component: SynthesisRPTComponent},
  {path: 'dashboard',component: DashboardComponent},
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
