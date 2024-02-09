import { Component, OnInit } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-assignalllist',
  templateUrl: './assignalllist.component.html',
  styleUrls: ['./assignalllist.component.scss']
})
export class AssignalllistComponent implements OnInit {

  titles = [];
  datas: any;
  cliid:string;
  model: form1model;

  constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router) {
    this.model = new form1model();
    this.http.post('https://bssservice.herokuapp.com/assigningemployee/assignlists', {"id":"1"}).subscribe((data:any) => {
      this.datas = data.data;
      console.log(this.datas);
    });
    
  }

  ngOnInit() {

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

