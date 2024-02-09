import { Component, OnInit } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';


@Component({
  selector: 'app-viewfullpayments',
  templateUrl: './viewfullpayments.component.html',
  styleUrls: ['./viewfullpayments.component.scss']
})
export class ViewfullpaymentsComponent implements OnInit {
  site_id:any;
  datass:any;

  constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router) {

    
    this.route.params.subscribe(params => {
      this.site_id = params['id']; // (+) converts string 'id' to a number
      console.log('this id: ' + this.site_id);
      this.http.post('https://bssservice.herokuapp.com/payment/paylist',{"site_id":""+this.site_id}).subscribe((data:any)  => {
       this.datass = data.data;
       console.log(this.datass);
      });
  });

  }

  printComponent(cmpName) {
    let printContents = document.getElementById(cmpName).innerHTML;
    let originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
}


  

  ngOnInit() {

    
  }

}
