import { Component, OnInit } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router'

@Component({
  selector: 'app-operationcomlist',
  templateUrl: './operationcomlist.component.html',
  styleUrls: ['./operationcomlist.component.scss']
})
export class OperationcomlistComponent implements OnInit {

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
  datas: any;
  data: any;
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
  }

  ngOnInit() {
    this.http.post('https://bssservice.herokuapp.com/issue/listissues',{"LoginKey":"vishnu.m@tritonadc.in"}).subscribe(data => {
      this.datas = data;
      this.data=this.datas.issue;      
      console.log(data);
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
    console.log(item.cliid);
    this.router.navigate(['main/clientdetails/' + item.cliid])
  }
  
  public edit(event, item) {
    console.log(item.cliid);
    this.router.navigate(['main/updateclient/' + item.cliid])
  }

  public open($event, item){
    console.log(item.cliid);
    this.http.post('https://bssservice.herokuapp.com/authentication/deleteclient',{cliid:item.cliid}).subscribe(data  => {
    console.log(data);
    alert("Deleted Successfully");
    this.ngOnInit();
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