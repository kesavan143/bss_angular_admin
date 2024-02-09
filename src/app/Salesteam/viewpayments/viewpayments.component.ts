import { Component, OnInit } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-viewpayments',
  templateUrl: './viewpayments.component.html',
  styleUrls: ['./viewpayments.component.scss']
})
export class ViewpaymentsComponent implements OnInit {


  datass:any;
  payment_id:any;

  constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router) {

    this.route.params.subscribe(params => {
      this.payment_id = params['id']; // (+) converts string 'id' to a number
      console.log('this id: ' + this.payment_id);
      this.http.post('https://bssservice.herokuapp.com/payment/payfetch',{"id":""+this.payment_id}).subscribe((data:any)  => {
        this.datass = data.data[0];
        console.log(this.datass);
        });
  });
  }

  ngOnInit() {

  }

}
