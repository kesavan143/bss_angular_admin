import { Component, OnInit } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';
@Component({
  selector: 'app-assignclientlist',
  templateUrl: './assignclientlist.component.html',
  styleUrls: ['./assignclientlist.component.scss']
})
export class AssignclientlistComponent implements OnInit {

  titles = [];
  datas: any;
  cliid:string;
  model: form1model;

  constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router) {
    this.model = new form1model();
    
  }

  ngOnInit() {
    this.http.post('https://bssservice.herokuapp.com/authentication/clientlist', this.model).subscribe((data:any) => {
      this.datas = data.data;
      console.log(this.datas);
    });
    }
  
    addassign(){
      this.router.navigate(['main/addassign']) 
    }

    view($event, data){
      console.log(data.id);
      this.router.navigate(['main/assignsitelist/'+ data.id]) 
    }
}


class form1model {
  Email_id: "1";
}

