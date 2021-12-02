import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { UserRegistrationService } from '../../user-registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: User = new User("","","");
  message: string | undefined;

  constructor(private service:UserRegistrationService) { }

  ngOnInit(): void {
  }

  public registerNow(){
    let resp = this.service.doRegister(this.user);
    resp.subscribe((data:any) => {this.message = data})
  }

}
