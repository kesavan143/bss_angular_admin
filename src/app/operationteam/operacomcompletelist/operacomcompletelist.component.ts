import { Component, OnInit } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-operacomcompletelist',
  templateUrl: './operacomcompletelist.component.html',
  styleUrls: ['./operacomcompletelist.component.scss']
})
export class OperacomcompletelistComponent implements OnInit {

 
  onlyThumbnailsGalleryOptions = [
    {
      'image': false,
      'height': '100px',
      'thumbnailSize': 'contain',
      'arrowPrevIcon': 'fa fa-angle-left',
      'arrowNextIcon': 'fa fa-angle-right',
      'width': '100%'
    }
  ];

  galleryImages = [
    {
      small: 'assets/images/ecommerce/how-to-handle-guest-with-complaints-in-hotel-1-638.jpg',
      medium: 'assets/images/ecommerce/how-to-handle-guest-with-complaints-in-hotel-1-638.jpg',
      big: 'assets/images/ecommerce/how-to-handle-guest-with-complaints-in-hotel-1-638.jpg'
    },
    {
      small: 'assets/images/ecommerce/images.jpeg',
      medium: 'assets/images/ecommerce/images.jpeg',
      big: 'assets/images/ecommerce/images.jpeg'
    },
    {
      small: 'assets/images/ecommerce/original_6_Hotel_Pet_Peeves_And_How_Hotels_Should_Solve_Them.jpg',
      medium: 'assets/images/ecommerce/original_6_Hotel_Pet_Peeves_And_How_Hotels_Should_Solve_Them.jpg',
      big: 'assets/images/ecommerce/original_6_Hotel_Pet_Peeves_And_How_Hotels_Should_Solve_Them.jpg'
    }
  ];

  Open:any;
  Inprogree: any;
  Complete:any;
  All:any;
  counts:any;

  titles = [];
  datas = [];
  data:any;
  complaint_id:string;
  model: form1model;

  urls = new Array<string>();
  detectFiles(event) {
    this.urls = [];
    let files = event.target.files;
    if (files) {
      for (let file of files) {
        let reader = new FileReader();
        reader.onload = (e: any) => {
          this.urls.push(e.target.result);
        }
        reader.readAsDataURL(file);
      }
    }
  }
  constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router) { 
    this.model = new form1model();
  }
  ngOnInit() {
    this.http.post('https://bssservice.herokuapp.com/issue/listissues',{"LoginKey":"vishnu.m@tritonadc.in"}).subscribe(data => {
    this.datas=[];  
    let dat = <Issuelist>data;
      for (let index = 0; index < dat.issue.length; index++){
        const element = dat.issue[index];
        if(element.status === 'completed')
          this.datas.push(element);
      }
      console.log(this.datas);

      

    });


    this.http.post('https://bssservice.herokuapp.com/issue/issuecount',{"Employee_id":1}).subscribe((data:any) => {
    this.counts = data.data;
    this.Open = this.counts[0].count;
    this.Inprogree = this.counts[1].count;
    this.Complete = this.counts[2].count;
    this.All = this.counts[3].count;
    });


  }
  public view(event, item) {
    console.log(item.complaint_id);
    this.router.navigate([ "main/operacomcompleteview/" + item.complaint_id])
  }
  
  public edit(event, item) {
    console.log(item.complaint_id);
    this.router.navigate(['main/updateclient/' + item.cliid])
  }
  public open($event, item){
    console.log(item.complaint_id);
    this.http.post('https://bssservice.herokuapp.com/issue/issuedetails',{complaint_id:item.complaint_id}).subscribe(data  => {
    console.log(data);
    });
  }

  addapi1(){
    this.router.navigate(['main/Operationcomplaintlist'])
  }


  addapi2(){
    this.router.navigate(['main/operacominprogresslist'])
  }

  addapi3(){
    this.router.navigate(['main/operacomcompletelist'])
  }

  addapi4(){
    this.router.navigate(['main/Operationcomlist'])
  }
}

class form1model {
  Email_id: "1";
}

class Issue {
  complaint_from: string;
  poster_id: string;
  complaint_type: string;
  title: string;
  description: string;
  status: string;
  posted_on: string;
  created_at: Date;
  updated_at: Date;
  moved_by: string;
  moved_to: string;
  taken_by: string;
  complaint_id: number;
}

class Issuelist {
  issue: Issue[];
  attachments: any[];
  message: string;
  status: string;
  code: number;
}
