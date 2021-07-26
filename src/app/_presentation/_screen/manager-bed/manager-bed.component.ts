import { Component, OnInit, OnChanges } from '@angular/core';
import { BedInfo, MasterRequest } from 'src/app/_proto/client.pb';
import { AdministratorService } from 'src/app/_services/administrator.service';

@Component({
  selector: 'app-manager-bed',
  templateUrl: './manager-bed.component.html',
  styleUrls: ['./manager-bed.component.css']
})
export class ManagerBedComponent implements OnInit{
  public rawData :BedInfo[] = [];
  public key:string='Hồng Đức 1/Khối 1/CN01K1_Lau1/Khoa Nội';

  constructor(private administratorService: AdministratorService) { }

  ngOnInit(): void {
    this._download();
  }

  setKey(value:string) {
    this.key = value;
    console.log(this.key)
  }

  _download(){
    let request: MasterRequest = new MasterRequest();
    this.administratorService.getListBed(request).subscribe(data =>{
       this.rawData = data!
        console.log(this.rawData);
      });
  }

}
