import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginPageComponent {
  user_name: string;
  showbutton: boolean;

  datas: any;

  adduser: Adduser;
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService, private http: HttpClient, private route: ActivatedRoute, private router: Router) {
    this.adduser = new Adduser();
    this.showbutton = true;
  }



  addapi(Email_id, password) {
    this.showbutton = false;
    if ((Email_id !== '') || (password !== '')) {
      console.log(this.adduser);
      this.adduser.Email_id = Email_id;
      this.adduser.password = password;
      this.http.post('https://bssservice.herokuapp.com/authentication/bsslogin', this.adduser).subscribe(data => {
        this.datas = data;
        console.log(this.datas.data[0]);
        if (this.datas.data == "Invalid Account") {
          alert(this.datas.data);
          this.showbutton = true;
        } else {

          this.saveInLocal('Name', this.datas.data[0].Name);
          this.saveInLocal('user_id', this.datas.data[0].user_id);
          this.saveInLocal('usertype', this.datas.data[0].Designation);
          this.http.post('https://bssservice.herokuapp.com/notification/notificationcount', { "user_id": "" + this.datas.data[0].user_id }).subscribe((data: any) => {
            let Count = data.data[0].count;
            this.saveInLocal('notificount', Count);
            alert("Login Successfully");
            this.router.navigate(['mainpage'])
          });



        }
      });

    } else {
      alert("Enter the Login-id And Password");
      this.showbutton = true;
    }
  }
  forgot() {
    this.router.navigate(['forgotpassword']);
  }






  saveInLocal(key, val): void {
    console.log('recieved= key:' + key + 'value:' + val);
    this.storage.set(key, val);
  }
  getFromLocal(key): any {
    console.log('recieved= key:' + key);
    return this.storage.get(key);
  }


}

class Adduser {
  Email_id: string;
  password: string;
}

