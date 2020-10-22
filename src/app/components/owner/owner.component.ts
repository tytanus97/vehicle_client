import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators'
import { Owner } from 'src/app/models/Owner';
import { OwnerService } from 'src/app/services/owner.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {

  public ownerList: Array<Owner>;

  constructor(private ownerService: OwnerService,private router: Router,private route: ActivatedRoute) { }

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

  public deleteOwner(ownerId: number) {
    
    this.ownerService.deleteOwner(ownerId).subscribe(response => {
      if(response.status === 200) {
        console.log("Owner deletion confirmed");
        window.location.reload();
      } else throw Error('Something went wrong when deleting owner');
    }),  
    err => console.log(err)
    }

  public addOwner() {
      this.router.navigate(['addOwner'],{queryParams: {action:'add'},relativeTo:this.route.parent})
  }

  public updateOwner(owner: Owner) {
    this.ownerService.setCurrentOwner(owner);
    this.router.navigate(['addOwner'],{queryParams: {action:'update'},relativeTo:this.route.parent});
  }
}
