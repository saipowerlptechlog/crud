import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public sss : any = "";
  public productData = {};
   formdata:FormGroup;
  constructor(public apiData:ApiService, private router: Router,) { }

  ngOnInit() {

}
addNewProduct(){

  this.apiData.addAPIData(this.productData).subscribe(data => {
    this.sss = data;
    console.log(this.sss);
   
    this.router.navigate(['']);
  })
}


}
