import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  lis: any;
  public dataAPI: any;
  public deleteAPI: any;
  constructor(public http:HttpClient,public apiData:ApiService) { }

  ngOnInit() {
this.sai() 
}
  sai(){
   this.apiData.getAPIData().subscribe(res=>{
     console.log('list',res)
     this.lis=res
   })
  }

  deleteProduct(id: number){
   
      this.apiData.delete(id).subscribe(data => {
        this.deleteAPI = data;
        this.apiData.getAPIData();
       
        window.location.reload();
      })
    
  }
  
}
