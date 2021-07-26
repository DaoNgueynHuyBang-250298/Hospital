import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { NgxDatatableModule } from '@swimlane/ngx-datatable'
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgxSpinnerModule } from 'ngx-spinner'
import { NgxLocalStorageModule } from 'ngx-localstorage'

import { ErrorInterceptor } from './_interceptor/error.interceptor'
import { LoadingInterceptor } from './_interceptor/loading.interceptor'
import { NgxDropzoneModule } from 'ngx-dropzone'
import { SharedModule } from './shared/shared.module'
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown'
import { NavComponent } from './shared/component/nav/nav.component'


import {
  GrpcConsoleLoggerInterceptor,
  GRPC_CLIENT_FACTORY,
  GRPC_CONSOLE_LOGGER_ENABLED,
  GRPC_INTERCEPTORS,
} from '@ngx-grpc/core'
import { GrpcClientSettings } from '@ngx-grpc/common'
import { GrpcWebClientFactory } from '@ngx-grpc/grpc-web-client'
import { GrpcWorkerClientFactory, GRPC_WORKER } from '@ngx-grpc/worker-client'
import { environment } from 'src/environments/environment'
import {
  GRPC_ACCOUNT_CLIENT_SETTINGS,
} from 'src/app/_proto/client.pbconf'
import {
  GRPC_ADMINISTRATOR_CLIENT_SETTINGS
} from 'src/app/_proto/administrator.pbconf'
import { TextInputComponent } from './_forms/text-input/text-input.component'
import { UserLayoutComponent } from './_layout/user-layout/user-layout.component';
import { ModalModule } from 'ngx-bootstrap/modal'
import { GRPC_MY_STORE_FILE_CLIENT_SETTINGS } from './_proto/filestore.pbconf';
import {ProgressBarModule} from "angular-progress-bar"
import { DxChartModule, DxDataGridModule, DxDateBoxModule, DxPivotGridModule, DxSelectBoxModule } from 'devextreme-angular';
import { ImagecodeComponent } from './_presentation/_component/imagecode/imagecode.component';

import { NavbarComponent } from './_presentation/_component/navbar/navbar.component';
import { ManagerBedMenuComponent } from './_presentation/_component/manager-bed-menu/manager-bed-menu.component';
import { ManagerBedRoomListComponent } from './_presentation/_component/manager-bed-room-list/manager-bed-room-list.component';
import { ManagerBedComponent } from './_presentation/_screen/manager-bed/manager-bed.component';
import { FooterComponent } from './_presentation/_component/footer/footer.component';
import { SynthesisReportComponent } from './_presentation/_component/synthesis-report/synthesis-report.component';
import { SynthesisRPTComponent } from './_presentation/_screen/synthesis-rpt/synthesis-rpt.component';
import { DashboardComponent } from './_presentation/_screen/dashboard/dashboard.component';




// import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';
@NgModule({
  declarations: [
    AppComponent,
    UserLayoutComponent,
    TextInputComponent,
    NavComponent,
    ImagecodeComponent,
    ManagerBedMenuComponent,
    ManagerBedRoomListComponent,
    ManagerBedComponent,
    NavbarComponent,
    FooterComponent,
    SynthesisReportComponent,
    SynthesisRPTComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSpinnerModule,
    NgxLocalStorageModule.forRoot(),
    NgxDropzoneModule,
    ProgressBarModule,
    DxPivotGridModule,
    DxDateBoxModule,
    DxDataGridModule,
    DxChartModule,
    DxSelectBoxModule,
    NgxDatatableModule.forRoot({
      messages: {
        emptyMessage: 'No data to display', // Message to show when array is presented, but contains no values
        totalMessage: 'total', // Footer total message
        selectedMessage: 'selected', // Footer selected message
      },
    }),
    ModalModule.forRoot()
  ],
  providers: [
    {
      provide: BsDropdownConfig,
      useValue: { isAnimated: true, autoClose: true },
    },
    { provide: GRPC_CLIENT_FACTORY, useClass: GrpcWebClientFactory },
    {
      provide: GRPC_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
    // {
    //   provide: GRPC_MY_STORE_FILE_CLIENT_SETTINGS,
    //   useValue: {
    //     host: 'http://192.168.1.241:51004',
    //     format: 'binary'
    //   } as GrpcClientSettings,
    // },

    {
      provide: GRPC_MY_STORE_FILE_CLIENT_SETTINGS,
      useValue: {
        host: 'https://storesrv.stvg.vn:51002',
      } as GrpcClientSettings,
    },
    {
      provide: GRPC_ACCOUNT_CLIENT_SETTINGS,
      useValue: {
        host: 'https://office.stvg.vn:59067'
      } as GrpcClientSettings,
    },
    {
      provide: GRPC_ADMINISTRATOR_CLIENT_SETTINGS,
      useValue: {
        host: 'https://office.stvg.vn:59067'
      } as GrpcClientSettings,
    },
    {
      provide: GRPC_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
    {
      provide: GRPC_INTERCEPTORS,
      useClass: GrpcConsoleLoggerInterceptor,
      multi: true,
    },
    {
      provide: GRPC_CONSOLE_LOGGER_ENABLED,
      useFactory: () =>
        localStorage.getItem('GRPC_CONSOLE_LOGGER_ENABLED') === 'true' ||
        !environment.production,
    },
    {
      provide: GRPC_WORKER,
      useFactory: () => new Worker('./grpc.worker', { type: 'module' }),
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
