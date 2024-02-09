import { Component, OnInit } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';
import {formatDate } from '@angular/common';



@Component({
  selector: 'app-operacominprogresslist',
  templateUrl: './operacominprogresslist.component.html',
  styleUrls: ['./operacominprogresslist.component.scss']
})
export class OperacominprogresslistComponent implements OnInit {

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

  selectedfile:any;
  selectedfile1:any;
  selectedfile2:any;
  selectedfile3:any;



  
title:string;
description:string;
status:string;
complaint_ids:string;
updated_at:string;
taken_by:string;

today:any;
jstoday:any;
datasss:any;


  titles = [];
  datas = [];
  datass:any;
  complaint_id:number;
  data:any;
  cliid:string;
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
   this.selectedfile;
   this.selectedfile1;
   this.selectedfile2;
   this.selectedfile3;
  

  }

  ngOnInit() {
    this.http.post('https://bssservice.herokuapp.com/issue/listissues',{"LoginKey":"vishnu.m@tritonadc.in"}).subscribe(data => {
      this.datas=[];
      let dat = <Issuelist>data;
      for (let index = 0; index < dat.issue.length; index++) {
        const element = dat.issue[index];
        if(element.status === 'Inprogress')
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


 


  public assign1(event, item) {
    console.log(item.complaint_id);
    this.http.post('https://bssservice.herokuapp.com/issue/issuedetails',{complaint_id:item.complaint_id}).subscribe((data:any)  => {
    console.log(data);
    this.datass = data;
    });
  }

  public assign3(event, item) {
    console.log(item.complaint_id);
    this.http.post('https://bssservice.herokuapp.com/issue/issuedetails',{complaint_id:item.complaint_id}).subscribe((data:any)  => {
    console.log(data);
    this.datass = data;
    });
  }

  onfileselected(event) {
    console.log(event);
    this.selectedfile = event.target.files[0];
    }
    onfileselected1(event) {
      console.log(event);
      this.selectedfile1 = event.target.files[0];
      }

    public attach(complaint_ids,title,description,take_by) {
      console.log(this.selectedfile)
      if(this.selectedfile == undefined){
        this.attach1(complaint_ids,title,description,take_by,"") 
      }else{
        const fd = new FormData();
        fd.append('filetoupload', this.selectedfile, this.selectedfile.name);
        console.log(fd);
        this.http.post('https://bssservice.herokuapp.com/upload/file', fd)
        .subscribe((data: any) => {
        this.attach1(complaint_ids,title,description,take_by,data.data.path)
        console.log(complaint_ids,title,description,take_by,data.data.path); 

        });  
      }
    }
    public attach1(complaint_ids,title,description,take_by,photo1) {
    console.log(this.selectedfile3)
    this.taken_by = take_by;
    console.log(this.taken_by);
    this.complaint_ids = complaint_ids;
    this.title = title;
    this.description = description;
    this.status = "completed";
    this.today = new Date();
    console.log(this.complaint_ids,this.title,this.description,this.updated_at,this.status,photo1)
    this.updated_at = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
    this.http.post('https://bssservice.herokuapp.com/issue/report',{
      "complaint_id":this.complaint_ids,
      "title":this.title,
      "description":this.description,
      "taken_by":this.taken_by,
      "updated_at":this.updated_at,
      "status":this.status,
      "photo1":"https://bssservice.herokuapp.com"+photo1,
      "photo2":'',
      "photo3":'',
      "photo4":''
    }).subscribe((data:any)  => {
      console.log(data);
      alert(data.message);
      this.ngOnInit();
      });
      this.ngOnInit();
  }
  public assign(taken_by,complaint_id) {
    this.taken_by = taken_by;
    this.complaint_id = complaint_id;
    this.today = new Date();
    this.updated_at = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
    this.http.post('https://bssservice.herokuapp.com/issue/taken_by',{"complaint_id":complaint_id,"taken_by":taken_by,"updated_at":this.updated_at}).subscribe((data:any)  => {
      console.log(data);
      alert(data.message);
      });
      this.ngOnInit();
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