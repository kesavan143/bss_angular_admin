import { Component, OnInit } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-assignsitelist',
  templateUrl: './assignsitelist.component.html',
  styleUrls: ['./assignsitelist.component.scss']
})
export class AssignsitelistComponent implements OnInit {
  titles = [];
  datas: any;
  cliid:string;
  model: form1model;
  employee_id:string;

  constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router) {
    this.model = new form1model();
    
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.employee_id = params['id']; // (+) converts string 'id' to a number
      console.log('this id: ' + this.employee_id);
      this.http.post('https://bssservice.herokuapp.com/client/sitelist',{client_id:""+this.employee_id}).subscribe((data:any)  => {
       this.datas = data.data;
       console.log(this.datas);
      });
  });
    }
    
    view($event, data){
      console.log(data.id);
      this.router.navigate(['main/assignemployeelist/'+ data.id]) 
    }
}


class form1model {
  Email_id: "1";
}

