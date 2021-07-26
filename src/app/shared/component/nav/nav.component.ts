import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr'
import { AccountService } from '../../../_services/account.service'
import { AuthService } from '../../../_services/auth.service'
import { LocalStorageService } from 'ngx-localstorage'
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  public model: any = {}
  public menus = [
    // {
    //   link: 'report',
    //   name: 'Thông báo chấm công'
    // },
    // {
    //   link: 'attendance',
    //   name: 'Báo cáo chấm công'
    // },
    // {
    //   link: 'temperature',
    //   name: 'Thông báo kiểm soát nhiệt độ'
    // },
    {
      link: 'dashboard',
      name: 'Thống kê',
    },
    {
      link: 'history',
      name: 'Báo cáo',
    },
    {
      link: ''
    }
  ]
  // loggedIn: boolean = false
  constructor(
    private accountService: AccountService,
    private router: Router,
    private toastr: ToastrService,
    public authService: AuthService,
    private localStorage: LocalStorageService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    console.log('nav')
    // this.menus = this.localStorage.get('menu');
    this.menus.forEach((m) => {})
    console.log('local', this.localStorage.get('menu'))
    console.log('menus', this.menus)
    // this.loggedIn = this.authService.getUser() ? true : false
  }

  logOut() {
    this.authService.logOut()
    // this.loggedIn = false
    this.router.navigateByUrl('/')
  }
  getCurrentUser() {
    return this.authService.getUser()
  }
}
