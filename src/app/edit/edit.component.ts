import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public stuID ='';
  public productData = {};
  public sat: any;
  constructor(private apidata:ApiService, private route: ActivatedRoute, private router: Router) {
    this.stuID = route.snapshot.params['id'];
   }

  ngOnInit() {
    this.apidata.editProduct(this.stuID ).subscribe(data => {
      this.productData = data;
      console.log(this.productData)
    },error =>{
      alert("Error Message");
    })
  }

  editProduct11(){
    this.apidata.updateProduct(this.productData,this.stuID).subscribe(data => {
      this.sat = data;
      this.router.navigate(['']);
      console.log(this.sat)
    },error => {
      alert('Error Message');
    })
  }
}
