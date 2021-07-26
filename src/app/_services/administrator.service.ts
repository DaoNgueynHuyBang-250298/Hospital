import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AdministratorClient } from '../_proto/administrator.pbsc';
import { BedResponse, MasterRequest, ResponseState } from '../_proto/client.pb';

@Injectable({
  providedIn: 'root'
})
export class AdministratorService {

  constructor(
    private administratorClient: AdministratorClient
  ) { }
  getListBed(request: MasterRequest) {
    return this.administratorClient.getListBed(request).pipe(
      map((reply: BedResponse) => {
        if (reply.response?.state == ResponseState.SUCCESS)
          return reply.data;
        else return [];
      })
    );
  }
}
