import { Component, OnInit } from '@angular/core';
import { Owner } from 'src/app/models/Owner';
import { OwnerService } from 'src/app/services/owner.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {

  public ownerList: Array<Owner>;

  constructor(private ownerService: OwnerService) { }

  ngOnInit(): void {

    this.ownerService.findAll().subscribe(response => {
      if(response.status === 200) {
        this.ownerList = response.body;
      } else throw Error(`Couldnt get owners from the database status code: ${response.status}`)
    },
    (err) => console.log(err),
    () => {
      console.log(this.ownerList);
    });
  }

}
