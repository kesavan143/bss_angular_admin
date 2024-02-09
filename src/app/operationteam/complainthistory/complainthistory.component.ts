import { Component, OnInit } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-complainthistory',
  templateUrl: './complainthistory.component.html',
  styleUrls: ['./complainthistory.component.scss']
})
export class ComplainthistoryComponent implements OnInit {
datas:any;
  constructor(private http: HttpClient ) { }

  ngOnInit() {
// this.data=[
// {
// name:"tamil",
// age:"30"
// },
// {
//   name:"tamil",
//   age:"30"
//   },
//   {
//     name:"tamil",
//     age:"30"
//     }
// ]
this.http.post('https://bssservice.herokuapp.com/issue/listissues',{"LoginKey":"vishnu.m@tritonadc.in"}).subscribe(datas => {
  this.datas = datas;
  this.datas=this.datas.issue;      
  console.log(datas);
});


console.log(this.datas)








  }

}
