import { Component, OnInit } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-paymentpage',
  templateUrl: './paymentpage.component.html',
  styleUrls: ['./paymentpage.component.scss']
})
export class PaymentpageComponent implements OnInit {


  datas: any;
  datass: any[]=[];
  cliid:string;
  model: form1model;
  client_id:string;

  constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router) {
    this.model = new form1model();
    this.datass = [];
    
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.client_id = params['id']; // (+) converts string 'id' to a number
      console.log('this id: ' + this.client_id);
      this.http.post('https://bssservice.herokuapp.com/payment/paylist',{"site_id":""+this.client_id}).subscribe((data:any)  => {
       this.datas = data.data;
       this.datass = data.data[0];
       console.log(this.datass);
       console.log(this.datas);
      });
  });
    }


    public print(){
      this.router.navigate(['main/viewfullpayments/' +this.client_id])
      
    }

    public view(event, item) {
      this.router.navigate(['main/viewpayment/' + item.id])
    }
    
    public edit(event, item) {
      console.log(item.id);
      this.router.navigate(['main/updatepayment/' + item.id])
    }

    public delete($event, item){
      console.log(item.id);
      this.http.post('https://bssservice.herokuapp.com/payment/paydelete',{"id":+item.id}).subscribe(data  => {
      console.log(data);
      alert("Deleted Successfully");
      this.ngOnInit();
      });
    }


    addclients(){
      this.router.navigate(['main/addpayment/'+this.client_id]) 
    }
}


class form1model {
  Email_id: "1";
}

