import { Component, OnInit } from '@angular/core';

import { BedInfo, MasterRequest } from 'src/app/_proto/client.pb';//
import { AdministratorService } from 'src/app/_services/administrator.service';//

import { Input } from '@angular/core';//
import { Output, EventEmitter } from '@angular/core';//
import { SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-manager-bed-room-list',
  templateUrl: './manager-bed-room-list.component.html',
  styleUrls: ['./manager-bed-room-list.component.css']
})
export class ManagerBedRoomListComponent implements OnInit {
  // @Input() product!: Product;
  // @Output() notify = new EventEmitter();
  @Input()  rawData :BedInfo[] = [];
  @Input() key!: string;
  // public data:BedInfo[] = []
  public data:any[] = []

  public roomInfo: {roomName:string,listBed:BedInfo[]}[] =[]

  filterRoomName(){
    var res:string[]=[]
    this.data.forEach((item:any)=>{
      if(res.indexOf(item.roomName)==-1) res.push(item.roomName)
    })
    return res
  }

  filterByFaculty(){
    this.data=[]
    this.roomInfo=[]
    var filterValues=this.key.split('/')
    console.log(filterValues)
    this.data=this.rawData.filter(item=>{
      return (
        item.branchName==filterValues[0]
        &&item.blockName==filterValues[1]
        &&item.floorName==filterValues[2]
        &&item.facultyNameUse==filterValues[3]
      )
    })
    this.data=this.data.map((item:any)=>{
      let bedNames=item.bedName.split(' ')
      let roomNames=item.roomName.split(' ')

      return{
        ...item,
        bedName:`${bedNames[1]}`,
        roomName:`${roomNames[0]} ${roomNames[1]}`,
        isAvailable:item.isAvailable

      }
    })
    console.log('data',this.data)
    let roomName=this.filterRoomName()
    console.log('roomName',roomName)
    roomName.forEach(itemRoomName=>{
      let roomName:string='',listBed:BedInfo[] = []
      let obj={roomName,listBed}
      obj.roomName=itemRoomName
      let dataByRoom=this.data.filter(item=>{
        return item.roomName==itemRoomName
      })
      obj.listBed=dataByRoom
      this.roomInfo.push(obj)
    })
    console.log('roomInfo',this.roomInfo)
  }


  constructor() { }

  ngOnChanges(changes:SimpleChanges){
    this.filterByFaculty()
  }
  ngOnInit(): void {
    this.filterByFaculty()
  }
}
