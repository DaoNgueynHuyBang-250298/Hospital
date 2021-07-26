import { Injectable } from '@angular/core'
import { Observable, throwError } from 'rxjs'
import { GrpcEvent, GrpcMessage, GrpcRequest } from '@ngx-grpc/common'
import { GrpcHandler, GrpcInterceptor } from '@ngx-grpc/core'
import { BusyService } from '../_services/busy.service'
import { catchError, delay, finalize, map } from 'rxjs/operators'

@Injectable()
export class LoadingInterceptor implements GrpcInterceptor {
  constructor(private busyService: BusyService) {}
  intercept<Q extends GrpcMessage, S extends GrpcMessage>(
    request: GrpcRequest<Q, S>,
    next: GrpcHandler,
  ): Observable<GrpcEvent<S>> {
    switch (request.requestClass.name) {
      case 'NotificationRequest':
      case 'MultiDownloadRequest':
      case 'DownloadRequest': 
      case 'SendRequest': 

        return next.handle(request)
      default:
        this.busyService.busy()
        return next.handle(request).pipe(
          delay(1000),
          finalize(() => {
            this.busyService.idle()
          }),
        )
    }
  }
}
