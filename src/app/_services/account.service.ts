import { Injectable } from '@angular/core'
import { ToastrService } from 'ngx-toastr'
import { map } from 'rxjs/operators'
import { UserInfo } from '../_proto/client.pb'
import { AccountClient } from '../_proto/client.pbsc'

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private accountClient: AccountClient) {}

  logIn(request: UserInfo) {
    return this.accountClient.signIn(request)
  }
}
