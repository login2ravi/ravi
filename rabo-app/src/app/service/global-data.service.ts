import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UsersService } from './users.service';


@Injectable({
  providedIn: 'root'
})
export class GlobalDataService {

  private dataSource = new BehaviorSubject<UsersService>(new UsersService());
  //data = this.dataSource.asObservable();

  constructor() { }

  updatedDataSelection(data: any){
    this.dataSource.next(data);
  }

  getDataSelection(){
    return this.dataSource.asObservable();
  }
}
