import { Injectable } from '@angular/core'

import { map } from 'rxjs/operators'
import { ToastrService } from 'ngx-toastr'
import { AccountService } from './account.service'
import { AuthService } from './auth.service'
import { ChartStackedModel } from '../_models/chart-stacked-model.model'
import Utils from '../_helper/utils'
import { TemperatureItemViewModel } from '../_models/temperature-item'

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  constructor(
    private toastr: ToastrService,
    private authService: AuthService,
  ) {}

  
  
}
