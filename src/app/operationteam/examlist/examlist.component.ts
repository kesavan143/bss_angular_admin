import { Component, OnInit } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-examlist',
  templateUrl: './examlist.component.html',
  styleUrls: ['./examlist.component.scss']
})
export class ExamlistComponent implements OnInit {

  constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router) {



  }

  ngOnInit() {
   
    
  }
  view(event,data){
    this.router.navigate(['main/questionpaper'])
  }


  public assign(title,no_question,tot_marks,tot_time) {
    // this.http.post('https://bssservice.herokuapp.com/authentication/addquestions',{"questions":questionss,"answers":answerss}).subscribe((data:any)  => {
    //   console.log(data);
    //   alert("asdf");
    //   this.ngOnInit()
    //   });
   
  }

}
