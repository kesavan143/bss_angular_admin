import { Component, OnInit } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-settrainingvideos',
  templateUrl: './settrainingvideos.component.html',
  styleUrls: ['./settrainingvideos.component.scss']
})
export class SettrainingvideosComponent implements OnInit {

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
      for (let index = 0; index < dat.trainingvideos.length; index++) {
        const element = dat.trainingvideos[index];
        if(element.videos_id === this.lesson_id)
          this.datas.push(element);
      }
      console.log(this.datas);
    });
  });
  }

  public assign(url,title,description) {


    if ((title == "")||(description ==""))
    {
      alert("Fields should not be empty ");
    }else{
    console.log("in");
    this.http.post('https://bssservice.herokuapp.com/authentication/trainingvideos',{"videos_id":this.lesson_id,"title":title,"descriptions":description,"video_url":url}).subscribe((data:any)  => {
      console.log(data);
      alert(data.status);
      });
      this.ngOnInit();
    }
  }
}

class Issue {
  videos_id: string;
  title: string;
  descriptions: string;
  video_url: string;
}

class Issuelist {
  trainingvideos: Issue[];
}

