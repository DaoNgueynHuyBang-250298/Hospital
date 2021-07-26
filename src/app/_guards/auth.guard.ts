import { Injectable } from '@angular/core'
import {
  ActivatedRouteSnapshot,
  CanActivate, Router, RouterStateSnapshot
} from '@angular/router'
import { ToastrService } from 'ngx-toastr'
import { Observable } from 'rxjs'
import { AuthService } from '../_services/auth.service'

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const user = this.authService.getUser();
    console.log('check can active',user);
    if (user) return true;
    else {
      console.log('check');
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
    }
  }
}
