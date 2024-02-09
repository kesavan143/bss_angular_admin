import { Component, OnInit } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router'

@Component({
  selector: 'app-operationfeedlist',
  templateUrl: './operationfeedlist.component.html',
  styleUrls: ['./operationfeedlist.component.scss']
})
export class OperationfeedlistComponent implements OnInit {

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
  datas: any;
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
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(data => {
      this.datas = data;
      console.log(data);
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
    this.router.navigate(['main/Operationfeedbacklist'])
  }


  addapi2(){
    this.router.navigate(['main/Operationfeedbackinprogress'])
  }

  addapi3(){
    this.router.navigate(['main/Operationfeedbackcompletedlist'])
  }
  addapi4(){
    this.router.navigate(['main/operationfeedlist'])
  }
}

class form1model {
  Email_id: "1";
}