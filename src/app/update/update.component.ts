import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {DataproviderService}  from '../dataprovider.service';
import {Detials } from '../details';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id;
  getupdatedata=new Detials("","","","");
  data;
  constructor(private route:ActivatedRoute,private service:DataproviderService) { }

  ngOnInit(): void {
   this.route.params.subscribe(id=>{
   this.id=id;
   console.log(this.id.id);
     this.service.getdatafromserver(this.id.id).subscribe(data=>{
        this.data=data;
        this.getupdatedata.firstname=this.data.firstname;
        this.getupdatedata.lastname=this.data.lastname;
        this.getupdatedata.email=this.data.email;
           
      
     });
   });
  }

  updatedetils(updatedata){
   // let Form = JSON.stringify(updatedata.value);
   // console.log(Form);
   let updatatoserver={
     id:this.id.id,
     firstname:updatedata.value.firstname,
     lastname:updatedata.value.lastname,
     email:updatedata.value.email,
   }
   console.log(updatatoserver);
     this.service.updatedetils(updatatoserver,this.id).subscribe(); 
  }

}
