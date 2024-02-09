import { Component, OnInit } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-site-details',
  templateUrl: './site-details.component.html',
  styleUrls: ['./site-details.component.scss']
})
export class SiteDetailsComponent implements OnInit {

  titles = [];
  datas: any;
  cliid:string;
  model: form1model;
  employee_id:string;

  constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router) {
    this.model = new form1model();
    
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.employee_id = params['id']; // (+) converts string 'id' to a number
      console.log('this id: ' + this.employee_id);
      this.http.post('https://bssservice.herokuapp.com/client/sitelist',{client_id:""+this.employee_id}).subscribe((data:any)  => {
       this.datas = data.data;
       console.log(this.datas);
      });
  });
    }

    public view(event, item) {
      console.log(item.id);
      this.router.navigate(['main/viewclientsite/' + item.id])
    }
    
    public edit(event, item) {
      console.log(item.id);
      this.router.navigate(['main/editclientsite/' + item.id])
    }


    public payment(event, item){
      console.log(item.id);
      this.router.navigate(['main/paymentpage/' + item.id])
    }


    public attachment(event, item){
      console.log(item.id);
      this.router.navigate(['main/clientattachment/' + item.id])
    }
    
    public requiredment(event, item){
      console.log(item.id);
      this.router.navigate(['main/addrequirement/' + item.id])
    }

    

    public trainingcheck(event, item){
      console.log(item.id);
      this.router.navigate(['main/TrainingReoprt/' + item.id])
    }
    public qualitycheck(event, item){
      console.log(item.id);
      this.router.navigate(['main/qualitycheck/' + item.id])
    }
    public nightcheck(event, item){
      console.log(item.id);
      this.router.navigate(['main/nightreport/' + item.id])
    }


    

    public delete($event, item){
      console.log(item.id);
      this.http.post('https://bssservice.herokuapp.com/client/deletclientsite',{"id":+item.id}).subscribe(data  => {
      console.log(data);
      alert("Deleted Successfully");
      this.ngOnInit();
      });
    }


    enable($event, item){
      if(item.status == "enable"){
       let a = "disable";
       this.http.post('https://bssservice.herokuapp.com/client/sitestatus',{"id":""+item.id,"status":a}).subscribe(data  => {
        console.log(data);
        alert("Status Updated");
        this.ngOnInit();
        });
      }else{
        let a = "enable";
        this.http.post('https://bssservice.herokuapp.com/client/sitestatus',{"id":""+item.id,"status":a}).subscribe(data  => {
          console.log(data);
          alert("Status Updated");
          this.ngOnInit();
          });
      }
    }

    addclients(){
      this.router.navigate(['main/addclientsite/'+this.employee_id]) 
    }
}


class form1model {
  Email_id: "1";
}

