import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private API_URL: string = "http://localhost:3000/posts";

  constructor(private  http: HttpClient) { }
  getAPIData(){
    return this.http.get(this.API_URL);
  }
  addAPIData(productData){
    return this.http.post(this.API_URL,productData);
  }
  delete(id: number) {
    return this.http.delete(this.API_URL + "/" + id);
  }
  editProduct(id){
    return this.http.get(this.API_URL + "/" + id);
  }
  updateProduct(productData,id){
    return this.http.put(this.API_URL + "/" + id, productData)
  }
}
