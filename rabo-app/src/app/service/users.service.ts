import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {User} from '../model/User.model';


@Injectable({
  providedIn: 'root'
})
export class UsersService {


  userDetails = 
[{
    Username :'admin',
	  Password :'admin123',
	  isAdminUser :false,
    isLoggedIn :false
  },
  {
    Username :'test',
	  Password :'test123',
	  isAdminUser :false,
    isLoggedIn :false
  }
];

currentUser:User;

private userData$:BehaviorSubject<User>;

  constructor() {
    this.userData$ = new BehaviorSubject(null);
   }

   getUserData(){
     return this.userData$.asObservable();
   }

   setUserData(userDetails:User){
     
     this.userData$.next(userDetails);
   }



  public validateUserDetails( userName:String, password:String){
    var newUser = new User();
    for(var usr of this.userDetails){
      
      if(usr.Username===userName && usr.Password === password){
        usr.isLoggedIn = true;
        if(usr.Username === 'admin'){
          usr.isAdminUser = true;
        }
        
        
        newUser.userName = usr.Username;
        newUser.password = usr.Password;
        newUser.isAdminUser = usr.isAdminUser;
        newUser.isLoggedIn = usr.isLoggedIn;

        
        break;
      }else{
        
      }
    }
    return newUser;
  }
}
