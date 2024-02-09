import { Component, OnInit,Inject } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';
import {formatDate } from '@angular/common';

import {LOCAL_STORAGE,  WebStorageService } from 'angular-webstorage-service';


@Component({
  selector: 'app-operationcomplaintlist',
  templateUrl: './operationcomplaintlist.component.html',
  styleUrls: ['./operationcomplaintlist.component.scss']
})
export class OperationcomplaintlistComponent implements OnInit {

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

  galleryImages = [];
  
  Open:any;
  Inprogree: any;
  Complete:any;
  All:any;
  counts:any;
  today:any;
  datasss:any;

  advancedPage = 1;
  sizePage = 10;
  pagedata: any;
  totalcount: number;
  collsize: number;



  titles = [];
  datas = [];
  complaint_id:number;
  datass:any;
  data:any;
  cliid:string;
  model: form1model;

  your_id:string;
  moved_to:string;
  updated_at:string;
  status:string;
  id:number;
  name:string;

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
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService,private http: HttpClient ,private route: ActivatedRoute, private router: Router) { 
    this.model = new form1model();
    this.id = this.getFromLocal('user_id');
    this.name = this.getFromLocal('Name');
  }

  ngOnInit() {
    this.id = this.getFromLocal('user_id');
    this.name = this.getFromLocal('Name');
    this.http.post('https://bssservice.herokuapp.com/issue/listissues',{"LoginKey":"vishnu.m@tritonadc.in"}).subscribe(data => {
      this.datas=[];
      let dat = <Issuelist>data;
      for (let index = 0; index < dat.issue.length; index++) {
        const element = dat.issue[index];
        if(element.status === 'open')
          this.datas.push(element);
      }
      console.log(this.datas);
      this.newsync()
    });

    
    this.http.post('https://bssservice.herokuapp.com/issue/issuecount',{"Employee_id":1}).subscribe((data:any) => {
      this.counts = data.data;
      this.Open = this.counts[0].count;
      this.Inprogree = this.counts[1].count;
      this.Complete = this.counts[2].count;
      this.All = this.counts[3].count;
      });
  }

  newsync() {
    const startval = (this.advancedPage - 1) * this.sizePage;
    let endval = this.advancedPage * this.sizePage;
    if (this.datas.length > endval) {
    }else {
      endval = this.datas.length
    }
    this.pagedata = [];
    for (let index = startval; index < endval; index++) {
      this.pagedata.push(this.datas[index]);
    }
  }

  public view(event, item) {
    console.log(item.cliid);
    this.router.navigate(['main/clientdetails/' + item.cliid])
  }
 public submit(complaint_id,your_id,moved_to){
   console.log(this.status);
  if(moved_to === "completed"){
    this.complaint_id = complaint_id;
    this.your_id = your_id;
    this.moved_to = moved_to;
    this.today = new Date();
    this.updated_at = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
    this.status = moved_to;
    console.log(this.complaint_id ,this.your_id,this.moved_to,this.today,this.updated_at,this.status);
     this.http.post('https://bssservice.herokuapp.com/issue/updateissues',{"complaint_id":this.complaint_id,"moved_by":this.your_id,"moved_to":this.moved_to,"updated_at":this.updated_at,"status":this.status}).subscribe((data:any)  => {
     console.log(data);
     this.submitted(complaint_id,your_id,moved_to);
     });
  }else{
    this.submitted(complaint_id,your_id,moved_to);
  }
  }
  submitted(complaint_id,your_id,moved_to){
    this.complaint_id = complaint_id;
    this.your_id = your_id;
    this.moved_to = moved_to;
    this.today = new Date();
    this.updated_at = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
    this.status = moved_to;
    console.log(this.complaint_id ,this.your_id,this.moved_to,this.today,this.updated_at,this.status);
     this.http.post('https://bssservice.herokuapp.com/issue/updateissues',{"complaint_id":this.complaint_id,"moved_by":this.your_id,"moved_to":this.moved_to,"updated_at":this.updated_at,"status":this.status}).subscribe((data:any)  => {
       console.log(data);
       alert(data.message);
       this.ngOnInit();
       });

  }
  public Move(event, item) {
    console.log(item.complaint_id);
    this.galleryImages = [];
    this.http.post('https://bssservice.herokuapp.com/issue/issuedetails',{complaint_id:item.complaint_id}).subscribe((data:any)  => {
    console.log(data);
    this.datass = data;
    this.datasss = data.issue;
    let a = {
       "small": this.datasss.photo1, 
       "medium": this.datasss.photo1,
       "big": this.datasss.photo1
     }
     this.galleryImages.push(a)

     let b = {
       "small" : this.datasss.photo2, 
       "medium": this.datasss.photo2,
       "big": this.datasss.photo2
     }
     this.galleryImages.push(b)
     let  c =
     {
       "small": this.datasss.photo3, 
       "medium": this.datasss.photo3,
       "big": this.datasss.photo3
     }
     this.galleryImages.push(c)
     let d = 
     {
       "small": this.datasss.photo4, 
       "medium": this.datasss.photo4,
       "big": this.datasss.photo4
     }
     this.galleryImages.push(d)
    });
    console.log(this.galleryImages);
  }
  public open($event, item){
    console.log(item.complaint_id);
    this.galleryImages = [];
    this.http.post('https://bssservice.herokuapp.com/issue/issuedetails',{complaint_id:item.complaint_id}).subscribe((data:any)  => {
    console.log(data);
    this.datass = data;
    this.datasss = data.issue;
    let a = {
       "small": this.datasss.photo1, 
       "medium": this.datasss.photo1,
       "big": this.datasss.photo1
     }
     this.galleryImages.push(a)

     let b = {
       "small" : this.datasss.photo2, 
       "medium": this.datasss.photo2,
       "big": this.datasss.photo2
     }
     this.galleryImages.push(b)
     let  c =
     {
       "small": this.datasss.photo3, 
       "medium": this.datasss.photo3,
       "big": this.datasss.photo3
     }
     this.galleryImages.push(c)
     let d = 
     {
       "small": this.datasss.photo4, 
       "medium": this.datasss.photo4,
       "big": this.datasss.photo4
     }
     this.galleryImages.push(d)
    });
    console.log(this.galleryImages);
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
  getFromLocal(key): any {
    // console.log('recieved= key:' + key);
    return this.storage.get(key);
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