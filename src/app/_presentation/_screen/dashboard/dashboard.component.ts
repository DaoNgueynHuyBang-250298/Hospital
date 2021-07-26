import { Component, OnInit } from '@angular/core';
import { forceFillColumnWidths } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  

  constructor() 
  {
    this.kq=this.sumdt();
    this.kq2=this.sumdt2();
  }
  now: Date = new Date();
  public kq = 0;
  public kq2=0;
  ListBed = [
    {"KHOA":"Khoa Răng Hàm Mặt", "TRONG":3, "COBENH":2},
    {"KHOA":"Khoa Tai Mũi Họng", "TRONG":3, "COBENH":2},
    {"KHOA":"Khoa Nội Tổng Quát", "TRONG":3, "COBENH":2},
    {"KHOA":"Khoa Ngoại Tổng Quát", "TRONG":3, "COBENH":2},
    {"KHOA":"Khoa Sản", "TRONG":3, "COBENH":2},
  ]

  ListLate = [
    {"KHOA":"Khoa Răng Hàm Mặt", "TREC1":3, "TREC2":2, "TREC3":1},
    {"KHOA":"Khoa Tai Mũi Họng", "TREC1":3, "TREC2":2, "TREC3":1},
    {"KHOA":"Khoa Nội Tổng Quát", "TREC1":3, "TREC2":1, "TREC3":1},
    {"KHOA":"Khoa Ngoại Tổng Quát", "TREC1":0, "TREC2":3, "TREC3":1},
    {"KHOA":"Khoa Sản", "TREC1":3, "TREC2":4, "TREC3":0},
  ]
  ListLate2 = [
    {"NGAY":"01/06", "SOM":46, "TRE":9},
    {"NGAY":"02/06", "SOM":30, "TRE":20},
    {"NGAY":"03/06", "SOM":36, "TRE":24},
    {"NGAY":"04/06", "SOM":35, "TRE":15},
    {"NGAY":"05/06", "SOM":40, "TRE":8},
    {"NGAY":"06/06", "SOM":48, "TRE":0},
    {"NGAY":"07/06", "SOM":38, "TRE":6},
    {"NGAY":"08/06", "SOM":46, "TRE":9},
    {"NGAY":"09/06", "SOM":30, "TRE":20},
    {"NGAY":"10/06", "SOM":36, "TRE":24},
    {"NGAY":"11/06", "SOM":35, "TRE":15},
    {"NGAY":"12/06", "SOM":40, "TRE":8},
    {"NGAY":"13/06", "SOM":48, "TRE":0},
    {"NGAY":"14/06", "SOM":38, "TRE":6},
  ]
  
  sumValue(rowData:any) 
  {
    return rowData.TRONG + rowData.COBENH;
  }
  sumdt() 
  {
    var total = 0;
    for(var i = 0; i < this.ListBed.length; i++)
    {
      var cur=this.ListBed[i];
      total += cur.TRONG;
    }     
    return total;
  }
  sumdt2() 
  {
    var total = 0;
    for(var i = 0; i < this.ListBed.length; i++)
    {
      var cur=this.ListBed[i];
      total += (cur.TRONG+cur.COBENH);
    }     
    return total;
  }

  ngOnInit(): void {
  }

}
