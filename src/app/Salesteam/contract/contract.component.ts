import { Component, OnInit } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.scss']
})
export class ContractComponent implements OnInit {

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

    public view(event, item) {
      console.log(item.id);
      this.router.navigate(['main/clientdetails/' + item.id])
    }
    
    public edit(event, item) {
      console.log(item.id);
      this.router.navigate(['main/updateclient/' + item.id])
    }

    public open($event, item){
      console.log(item.id);
      this.http.post('https://bssservice.herokuapp.com/authentication/deleteclient',{"cliid":item.id}).subscribe(data  => {
      console.log(data);
      alert("Deleted Successfully");
      this.ngOnInit();
      });
    }

    addclients(){
      this.router.navigate(['main/addclient']) 
    }
}


class form1model {
  Email_id: "1";
}

