
import { Component, OnInit } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';
import {formatDate } from '@angular/common';

@Component({
  selector: 'app-forgotpswd',
  templateUrl: './forgotpswd.component.html',
  styleUrls: ['./forgotpswd.component.scss']
})
export class ForgotpswdComponent implements OnInit {
  datas:any;

  constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router) { 
    
  }

  ngOnInit() {
  }

  sub(email){
    if (email !== '') {
      this.http.post('https://bssservice.herokuapp.com/authentication/checkuser', {"Email_id":email}).subscribe(data => {
      this.datas = data;
      console.log(this.datas);
      if(this.datas.message == "Invalid Account"){
        alert(this.datas.message);
    }else{
      alert("The password Will send to your are Mail-ID");
      alert("U R Password---"+this.datas.data.Password);
      this.router.navigate(['']);
    }
    });
    
    }else{
      alert("Enter the Login-id");
    } 
   }

}
