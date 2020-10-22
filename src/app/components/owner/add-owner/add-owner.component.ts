import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { take } from 'rxjs/operators';
import { OwnerService } from 'src/app/services/owner.service';
import { Owner } from 'src/app/models/Owner';
import { Vehicle } from 'src/app/models/Vehicle';
import { SimpleOuterSubscriber } from 'rxjs/internal/innerSubscribe';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-add-owner',
  templateUrl: './add-owner.component.html',
  styleUrls: ['./add-owner.component.css']
})
export class AddOwnerComponent implements OnInit {

  public ownerForm;
  public currentOwner;
  private action;
  public btnLabel = 'Submit';

  constructor(private fb: FormBuilder,private router: Router, private route: ActivatedRoute
    ,private ownerService: OwnerService) { 
      this.action = this.route.snapshot.queryParamMap.get('action');
      console.log(this.action);
    }

  ngOnInit(): void {

      this.ownerForm = this.fb.group({
        firstName:[this.currentOwner?.firstName,{
         validators: [Validators.minLength(3),Validators.required]
        }],
        lastName: [this.currentOwner?.lastName,{
          validators: [Validators.minLength(3),Validators.required]
        }]
      })

      if(this.action === 'update') {
        console.log('action update');
          this.ownerService.getCurrentOwner().pipe(take(1)).subscribe(owner => {
            this.currentOwner = owner;
            this.ownerForm.get('firstName').patchValue(owner.firstName);
            this.ownerForm.get('lastName').setValue(owner.lastName);
            this.btnLabel = 'Update'
          })
      }
  }

  public submitOwnerForm() {
    if(this.ownerForm.valid && !this.ownerForm.pending) {
      console.log(this.currentOwner)
      const ownerId = typeof this.currentOwner === 'undefined' ? 0 : this.currentOwner.ownerId;
      const ownerVehicles = typeof this.currentOwner === 'undefined'? new Array<Vehicle>() : this.currentOwner.ownedVehicles;

      const owner: Owner = new Owner(ownerId,this.ownerForm.get('firstName').value,
      this.ownerForm.get('lastName').value,ownerVehicles);
      if(this.action === 'add') {
      this.ownerService.addOwner(owner).subscribe(response => {
        if(response.status === 201) {
          console.log(response.body);
          this.router.navigate(['/owners']);
        } else throw Error('Couldn\'t add new owner');
      },
      err => console.log(err));
    } else if(this.action === 'update') {
      this.ownerService.updateOwner(owner).subscribe(response => {
        if(response.status === 201) {
          this.router.navigate(['/owners']);
        } else throw Error('Couldn\'t update owner');
        },
        err => console.log(err));
    }
  } else {
    alert("Invalid form");
  }
  }

  get firstName() {
    return this.ownerForm.get('firstName');
  }

  get lastName() {
    return this.ownerForm.get('lastName');
  }

}
