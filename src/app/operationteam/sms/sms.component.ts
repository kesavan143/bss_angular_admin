import { Component, OnInit } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import {formatDate } from '@angular/common';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.scss']
})
export class SmsComponent implements OnInit {

  titles = [];
  datas: any;
  datass:any = {};
  faq_id:string;
  date:string;
  name="";
  
  
  
  constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router) {
    
    this.datass.questions="";
    this.datass.answers="";
   

  }
  ngOnInit(){
    this.http.post('https://bssservice.herokuapp.com/authentication/listsms',{"id":1}).subscribe((data:any) => {
      this.datas = data.data;
      console.log(this.datas);
    });   
    }


    public delete($event, item){
      this.faq_id  = item.id
      console.log(this.faq_id);
      this.http.post('https://bssservice.herokuapp.com/authentication/deletesms',{"id":this.faq_id}).subscribe((data:any) => {
        this.datass = data.data;
        console.log(this.datass.questions);
        alert("Deleted Successfully");
        this.ngOnInit();
      });  
    }


    public assign(questionss) {
       this.date = formatDate(new Date(), 'yyyy-MM-dd', 'en');
      if((questionss == ""))
      {
        alert("Fields Should not be empty");
      }else{
        this.http.post('https://bssservice.herokuapp.com/authentication/addsms',{"sms":questionss,"updatedtime":this.date}).subscribe((data:any)  => {
          console.log(data);
          alert("add Successfully");
          this.ngOnInit()
        
          });
      }
    }

}