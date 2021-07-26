
import { Component, OnChanges, OnInit,  } from '@angular/core';

import { BedInfo, MasterRequest } from 'src/app/_proto/client.pb';//
import { AdministratorService } from 'src/app/_services/administrator.service';//

import { Input, Output, EventEmitter } from '@angular/core';//
import { SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-manager-bed-menu',
  templateUrl: './manager-bed-menu.component.html',
  styleUrls: ['./manager-bed-menu.component.css']
})
export class ManagerBedMenuComponent implements OnInit,OnChanges {
  // @Input() product!: Product;
  @Output() filterValue = new EventEmitter();
  @Input()  rawData :BedInfo[] = [];
  public data:{branch:string,block:string[],floor:{block:string,floor:string}[],faculty:{block:string,floor:string,faculty:string,filter:string}[]}[]=[]
  array=[
    {
      branchName:'Chi Nhanh Long1',
      blockName:'Khoi A',
      floorName:'Tang 1',
      facultyName:'Khoa Ngoai'
    },
    {
      branchName:'Chi Nhanh Long1',
      blockName:'Khoi A',
      floorName:'Tang 1',
      facultyName:'Khoa Noi'
    },
    {
      branchName:'Chi Nhanh Long1',
      blockName:'Khoi B',
      floorName:'Tang 1',
      facultyName:'Khoa Tai'
    },
    {
      branchName:'Chi Nhanh Long1',
      blockName:'Khoi B',
      floorName:'Tang 2',
      facultyName:'Khoa Hong'
    },
    {
      branchName:'Chi Nhanh Long2',
      blockName:'Khoi B',
      floorName:'Tang 1',
      facultyName:'Khoa Mui'
    },
    {
      branchName:'Chi Nhanh Long2',
      blockName:'Khoi B',
      floorName:'Tang 1',
      facultyName:'Khoa Tai'
    },
    {
      branchName:'Chi Nhanh Long2',
      blockName:'Khoi B',
      floorName:'Tang 1',
      facultyName:'Khoa Hong'
    },
  ]
  changeWrap(event:any){
    console.log(event)
    let elmChild=event.target.children[0]
    console.log(elmChild)
    const classList = elmChild.classList;
    const classes = elmChild.className;
    if(classes.includes('hiden')){// hiden
      classList.remove('hiden')
      // classList.add('show');
    }else{
      // classList.remove('show')
      classList.add('hiden');
    }
    console.log(elmChild)
  }

  constructor() {
  }


  filter(filter: string, array: BedInfo[]){
    var res: string[] = [];
    array.forEach((itemArray:any) => {
        if (res.indexOf(itemArray[filter]) == -1)
        res.push(itemArray[filter]);

      });

    return res;
  };
  setFilterValue(event:any){
    this.filterValue.emit(event.target.dataset.filter);
  }

  groupBy(){
    // const data = this.rawData.filter(item => item.branchName.toString() == 'Hồng Đức 1');
  }

  test(){
    this.data=[]
    var branch=this.filter('branchName',this.rawData)
    branch.forEach(itemBranch=>{
      var block:string[]=[],floor:{block:string,floor:string}[]=[],faculty:{block:string,floor:string,faculty:string,filter:string}[]=[]
      var dataChild={
        branch:itemBranch,
        block:block,
        floor:floor,
        faculty:faculty
      }
      var arrayBranch=this.rawData.filter(itemArray=>{
        return itemArray.branchName==itemBranch
      })
      var block=this.filter('blockName',arrayBranch)
      dataChild.block=block
      block.forEach(itemBlock=>{
        var arrayBlock=arrayBranch.filter(itemArray=>{
          return itemArray.blockName==itemBlock
        })
        var floor=this.filter('floorName',arrayBlock)
        floor.forEach(itemFloor=>{
          let objFloor={
            block:itemBlock,
            floor:itemFloor
          }
          dataChild.floor.push(objFloor)
          var arrayFloor=arrayBlock.filter(itemArray=>{
            return itemArray.floorName==itemFloor
          })
          var faculty=this.filter('facultyNameUse',arrayFloor)
          faculty.forEach(itemFaculty=>{
            let objFaculty={
              block:itemBlock,
              floor:itemFloor,
              faculty:itemFaculty,
              filter:`${itemBranch}/${itemBlock}/${itemFloor}/${itemFaculty}`
            }
            dataChild.faculty.push(objFaculty)
          })
        })
      })
      this.data.push(dataChild)
    })
    console.log(this.data)
  }

  ngOnInit(): void {
    // this.test()
  }
  ngOnChanges(changes:SimpleChanges){
    this.test()
  }
}
