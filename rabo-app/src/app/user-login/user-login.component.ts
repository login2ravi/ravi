import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { UsersService } from '../service/users.service';
import { Subscription }      from 'rxjs';
import { User } from '../model/User.model';



@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
  
})
export class UserLoginComponent implements OnInit {
//@ViewChild('f')  loginForm ;
public userData$: Subscription;
public invalidUserMessage:String;
user:User = new User();

constructor(private userservice : UsersService,private router: Router) {  
}

  ngOnInit(): void {
  }

  onSubmit(form :NgForm){
    
    var userDtl = this.userservice.validateUserDetails(form.value.userData.username,form.value.userData.password);
    
    this.userservice.setUserData(userDtl);
    
    if(userDtl.isLoggedIn){
      
      this.router.navigateByUrl('/search');  
    }else{
      
      this.invalidUserMessage="Invalid Username/Password";
    } 
  }
}
