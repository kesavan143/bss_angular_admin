import { Component, OnInit } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-settraining',
  templateUrl: './settraining.component.html',
  styleUrls: ['./settraining.component.scss']
})
export class SettrainingComponent implements OnInit {

  datas:any;

  constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router) { 

    this.http.post('https://bssservice.herokuapp.com/authentication/traininglist',{"emp_id":"1"}).subscribe((data:any) => {
   this.datas = data.traininglist;
   console.log(this.datas);
    });
  }

  ngOnInit() {
  }

}
