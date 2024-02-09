import { Component, OnInit } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.scss']
})
export class ViewuserComponent  {
  titles = [];
  datas: any;
  userid:string;
  moral:string;
  model: form1model;

  constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router) {
    this.datas=[];
  }

  ngOnInit() {
    this.model = new form1model();
    this.http.post('https://bssservice.herokuapp.com/authentication/userlist', this.model).subscribe(data => {
      this.datas = data;
      console.log(data);
    });
    
    }

    public view(event, item) {
      console.log(item.userid);
    
      this.router.navigate(['main/viewdetails/' + item.user_id])
    }
    
    public edit(event, item) {
      console.log(item.cliid);
      this.router.navigate(['main/userdetails/' + item.user_id])
    }

    public open($event, item){
      console.log(item.user_id);
      this.moral = (item.user_id);
      this.http.post('https://bssservice.herokuapp.com/authentication/deleteuser',{userid:this.moral,}).subscribe(data  => {
      console.log(data);
      alert("User Deleted Successfull");
      this.ngOnInit();
      });
    }

    add(){
      this.router.navigate(['main/addusers'])
    }
}


class form1model {
  Email_id: "1";
}

