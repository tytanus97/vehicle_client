import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Owner } from '../models/Owner';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  private ownerApiUrl = "http://localhost:8080/api/owners/"
  private currentOwner = new BehaviorSubject<Owner>(null);

  constructor(private httpClient: HttpClient) { }

  public findById(ownerId: number):Observable<HttpResponse<Owner>> {
    return this.httpClient.get<Owner>(this.ownerApiUrl + `${ownerId}`,{observe:'response'});
  }

  public findAll(): Observable<HttpResponse<Array<Owner>>> {
    return this.httpClient.get<Array<Owner>>(this.ownerApiUrl,{observe:'response'});
  }

  public addOwner(owner: Owner):Observable<HttpResponse<Owner>> {
    return this.httpClient.post<Owner>(this.ownerApiUrl,owner,{observe:'response'});
  }

  public updateOwner(owner: Owner): Observable<HttpResponse<Owner>> {
   return this.httpClient.put<Owner>(this.ownerApiUrl,owner,{observe:'response'}); 
  }


  public deleteOwner(ownerId: number) {
    return this.httpClient.delete(this.ownerApiUrl + `${ownerId}`,{observe: 'response'});
  }

  public getCurrentOwner() {
    return this.currentOwner;
  }

  public setCurrentOwner(owner: Owner) {
    this.currentOwner.next(owner);
  }
}
