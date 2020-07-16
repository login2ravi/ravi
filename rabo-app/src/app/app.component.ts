import { Component, ViewChild ,AfterViewInit, ElementRef} from '@angular/core';
import { User } from './model/User.model';

import { UserLoginComponent } from './user-login/user-login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements AfterViewInit{
  userDetails = null;
  title = 'rabo-app';
  loginDetails:User;
  constructor(){}

  @ViewChild(UserLoginComponent) loginChildRef :ElementRef;
  
  ngAfterViewInit()  {
   
  }

  setUserDetails(userdtl){
      
  }

}

