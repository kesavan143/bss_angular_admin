import { Component, OnInit } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';


@Component({
  selector: 'app-assignview',
  templateUrl: './assignview.component.html',
  styleUrls: ['./assignview.component.scss']
})
export class AssignviewComponent implements OnInit {

  titles = [];
  datas: any;
  cliid:number;
  model: form1model;

  constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router) {
    this.model = new form1model();
    
    
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.cliid = +params['id']; // (+) converts string 'id' to a number
      console.log('this id: ' + this.cliid);
      this.http.post('https://bssservice.herokuapp.com/authentication/listassign',{"client_id":this.cliid}).subscribe((data:any) => {
        console.log(data);
     this.datas= data.data;
        });
   });
    }
    
    delete($event,data){
      let a = +data.assign_id;
      this.http.post('https://bssservice.herokuapp.com/authentication/deleteassign',{"assign_id":a}).subscribe((data:any) => {
        alert("Deleted Successfully");
        this.ngOnInit();
      });
    }
}


class form1model {
  Email_id: "1";
}

