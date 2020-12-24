import { Component, OnInit } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
import {DataproviderService} from '../dataprovider.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   datalist;
  constructor(private service:DataproviderService) { }

  ngOnInit(): void {
    this.service.getHomePageData().subscribe(data=>{
   this.datalist=data;
      
    })
  }

  deltedetails(id){
    this.service.deltedetails(id).subscribe();
  }

}
