import { Component, OnInit } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-schoolmanagement',
  templateUrl: './schoolmanagement.component.html',
  styleUrls: ['./schoolmanagement.component.scss']
})
export class SchoolmanagementComponent  implements OnInit {
 
  titles = [];
  datas: any;
  cliid:string;
  model: form1model;

  constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router) {
    this.model = new form1model();
    
  }

  ngOnInit() {
    this.http.post('https://bssservice.herokuapp.com/authentication/clientlist', this.model).subscribe((data:any) => {
      this.datas = data;
      console.log(data);
    });
    }

    public view(event, item) {
      console.log(item.id);
      this.router.navigate(['main/viewclient/' + item.id])
    }
    
    public edit(event, item) {
      console.log(item.id);
      this.router.navigate(['main/updateclient/' + item.id])
    }

    public site(event, item){
      console.log(item.id);
      this.router.navigate(['main/clientsite/'+ item.id])
    }

    public payment(event, item){
      console.log(item.id);
      this.router.navigate(['main/paymentpage/'+ item.id])
    }

    public Documents(event, item){
      console.log(item.id);
      this.router.navigate(['main/clientattachment/'+item.id])

    }




    public open($event, item){
      console.log(item.id);
      this.http.post('https://bssservice.herokuapp.com/authentication/deleteclient',{"id":item.id}).subscribe(data  => {
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

