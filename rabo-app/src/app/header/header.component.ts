import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';
import { Subscription }      from 'rxjs';
import { User } from '../model/User.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userservice : UsersService) { }
  userLogin:String='';

  setUserLogin(uname:String){
    this.userLogin =uname;
  }
  ngOnInit(): void {
     this.userservice.getUserData().subscribe(
      userData$=>{
        if(userData$ != null)
        this.setUserLogin(userData$.userName);
        return userData$;
      });

      
  }

}
