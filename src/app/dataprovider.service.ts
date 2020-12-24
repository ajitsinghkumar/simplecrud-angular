import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataproviderService {

  constructor(private http:HttpClient) { }
  
  getHomePageData(){
    return this.http.get("http://localhost:3000/details");
  }

  createdata(createdata){
    console.log(createdata);
    return this.http.post("http://localhost:3000/details",createdata);
  }

  getdatafromserver(id){
    return this.http.get("http://localhost:3000/details/"+id);
  }
  updatedetils(updatedata,id){
    return this.http.put("http://localhost:3000/details/"+id.id,updatedata);
  }

  deltedetails(id){
    return this.http.delete("http://localhost:3000/details/"+id);
  }
}
