import { Component, OnInit,Inject } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';
import {formatDate } from '@angular/common';

import {LOCAL_STORAGE,  WebStorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-closedissues',
  templateUrl: './closedissues.component.html',
  styleUrls: ['./closedissues.component.scss']
})
export class ClosedissuesComponent implements OnInit {

 
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
        if(element.status === 'closed')
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
    this.router.navigate([ "main/Closedissuesview/" + item.complaint_id])
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
