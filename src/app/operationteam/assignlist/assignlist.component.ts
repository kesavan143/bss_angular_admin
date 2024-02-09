import { Component, OnInit } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-assignlist',
  templateUrl: './assignlist.component.html',
  styleUrls: ['./assignlist.component.scss']
})
export class AssignlistComponent implements OnInit {
  titles = [];
  datas: any;
  cliid:string;
  model: form1model;

  constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router) {
    this.model = new form1model();
    
  }

  ngOnInit() {
    this.http.post('https://bssservice.herokuapp.com/authentication/clientlist', this.model).subscribe(data => {
      this.datas = data;
      console.log(data);
    });
    }
  
    addassign(){
      this.router.navigate(['main/addassign']) 
    }

    view($event, data){
      console.log(data.id);
      this.router.navigate(['main/viewassign/'+ data.id]) 
    }
}


class form1model {
  Email_id: "1";
}

