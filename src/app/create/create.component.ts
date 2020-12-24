import { Component, OnInit } from '@angular/core';
import {DataproviderService}  from '../dataprovider.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private service:DataproviderService) { }

  ngOnInit(): void {
  }
  updatedetails(details){
    const detail={
      // "id":2,
      "firstname":details.form.value.firstname,
        "lastname":details.form.value.lastname,
        "email":details.form.value.email
    }
    console.log(details);
    this.service.createdata(detail).subscribe();
  }
}
