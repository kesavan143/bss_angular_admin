import { Component, OnInit } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-settraininglessons',
  templateUrl: './settraininglessons.component.html',
  styleUrls: ['./settraininglessons.component.scss']
})
export class SettraininglessonsComponent implements OnInit {

  datas:any;
  lesson_id:string;

  constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router) { 
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.lesson_id = params['id']
      console.log(this.lesson_id);
    this.http.post('https://bssservice.herokuapp.com/authentication/traininglist',{"emp_id":"1"}).subscribe((data:any)=> {
      this.datas=[];
      let dat = <Issuelist>data;
      for (let index = 0; index < dat.traininglessons.length; index++) {
        const element = dat.traininglessons[index];
        if(element.lesson_id === this.lesson_id)
          this.datas.push(element);
      }
      console.log(this.datas);
    });

  });
  }

  open($event, data){
    this.router.navigate(['main/settrainingvideos/' + data.videos_id])
   }


   public assign(title,description) {
    if ((title == "")||(description ==""))
    {
      alert("Fields should not be empty ");
    }else{
    this.http.post('https://bssservice.herokuapp.com/authentication/traininglessons',{"lesson_id":this.lesson_id,"title":title,"descriptions":description}).subscribe((data:any)  => {
      console.log(data);
      alert(data.status);
      });
      this.ngOnInit();
    }
  }
}

class Issue {
  lesson_id: string;
  title: string;
  descriptions: string;
  videos_id: string;
}

class Issuelist {
  traininglessons: Issue[];
}
