import { Component, OnInit,Inject } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';
import {formatDate } from '@angular/common';
import {LOCAL_STORAGE,  WebStorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-operacomcompleteview',
  templateUrl: './operacomcompleteview.component.html',
  styleUrls: ['./operacomcompleteview.component.scss']
})
export class OperacomcompleteviewComponent implements OnInit {
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

  titles = [];
  datas0: any;
  datas1: any;
  datas2: any;
  datas3: any;
  datas4: any;

  complaint_ids:number;
  
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
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService,private http: HttpClient ,private route: ActivatedRoute, private router: Router) { 
    this.model = new form1model();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.complaint_ids = +params['id']; // (+) converts string 'id' to a number
      console.log('this id: ' + this.complaint_ids);
      this.http.post('https://bssservice.herokuapp.com/issue/issuetrack',{complaint_id:this.complaint_ids}).subscribe((data:any)  => {
        console.log(data);
     this.datas0= data.issue[0];
     this.datas1= data.issue[1];
     this.datas2= data.issue[2];
     this.datas3= data.issue[3];
     this.datas4= data.issue[4];

     console.log(this.datas0);
     console.log(this.datas1);
     console.log(this.datas2);
     console.log(this.datas3);
     console.log(this.datas2.photo1);
        });
   });
  }
  public view(event, item) {
    console.log(item.cliid);
    this.router.navigate(['main/clientdetails/' + item.cliid])
  }
  public edit(event, item) {
    console.log(item.cliid);
    this.router.navigate(['main/updateclient/' + item.cliid])
  }
  public open($event, item){
    alert("Complaint disable successfully");
  }

  getFromLocal(key): any {
    // console.log('recieved= key:' + key);
    return this.storage.get(key);
   }


  closed(){





    let user_id = this.getFromLocal('user_id');
    let user_name = this.getFromLocal('Name');
     let date = formatDate(new Date(), 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
    console.log(date)
    
    this.http.post('https://bssservice.herokuapp.com/issue/updateissues',{"complaint_id":""+this.complaint_ids,"moved_by":"id"+user_id+"&& Name:"+user_name,"moved_to":"","updated_at":date,"status":"closed"}).subscribe((data:any)  => {
      console.log(data);
      alert("Complaint Moved to Closed");
      this.router.navigate(['main/operacomcompletelist']);
      });
    // this.http.post('https://bssservice.herokuapp.com/complaints/updateStatus',{"complaint_id":""+this.complaint_ids,"status":"closed"}).subscribe((data:any)  => {
    //   console.log(data);
    //   alert("Complaint Moved to Closed");
    //   this.router.navigate(['main/operacomcompletelist']);
    //   });
  }

  reopen1(){
    this.http.post('https://bssservice.herokuapp.com/complaints/newcomplaints',{"LoginKey":this.datas0.poster_id,"complaint_from":this.datas0.complaint_from,"title":this.datas0.title,"description":this.datas0.description,"status":"open","posted_on":this.datas0.posted_on,"complaint_type":this.datas0.complaint_type}).subscribe((data:any)  => {
      console.log(data);
      alert("Complaints Moved to Open");
      this.router.navigate(['main/operacomcompletelist']);
      });
  }

  repone(){
    this.http.post('https://bssservice.herokuapp.com/issue/clearissue',{"complaint_id":+this.complaint_ids}).subscribe((data:any)  => {
      console.log(data);
       this.reopen1()
      });
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