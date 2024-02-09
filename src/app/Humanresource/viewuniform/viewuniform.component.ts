import { Component, OnInit } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-viewuniform',
  templateUrl: './viewuniform.component.html',
  styleUrls: ['./viewuniform.component.scss']
})
export class ViewuniformComponent implements OnInit {

  employee_id: string;
  data1:any[]=[];
  data2:any[]=[];
  adduser:any;
  datas:any;
  datass:any; 
  items:any;
  total:number;
  photo:any;
  public adduniform: adduniform;

  


  constructor( private httpClient:HttpClient, private route: ActivatedRoute, private router: Router ) {
    this.total = 0;
    this.adduniform = new adduniform();
    this.route.params.subscribe(params => {
     this.employee_id = params['id']; // (+) converts string 'id' to a number
     console.log('this id: ' + this.employee_id);
     this.adduniform.id = +this.employee_id;
     this.httpClient.post('https://bssservice.herokuapp.com/authentication/employee_id',{employee_id:this.employee_id}).subscribe((data:any)  => {
      this.adduser = data.data;
      console.log(this.adduser);   
      });
  });
  this.httpClient.post('https://bssservice.herokuapp.com/attachment/mylistattach',{"Emp_id":""+this.employee_id}).subscribe((data:any) => {
    this.datas = data.data;
    for(let i=0; i< this.datas.length;i++){
      if(this.datas[i].title == "photo"){
        console.log(this.datas[i].path)
        this.photo = "https://bssservice.herokuapp.com/"+this.datas[i].path
      }
    }
  });  
   }

  ngOnInit() {
    this.data2=[];
    this.data1=[];
    this.httpClient.post('https://bssservice.herokuapp.com/uniform/uniformlist', {"employee_id":""+this.employee_id}).subscribe((data:any) => {
      this.items = data.data;
      console.log(this.items); 
      for(let i=0;i< this.items.length;i++){
        if(this.items[i].status == null){
          this.items[i].status = "not_received";
        }
      }
      for(let i=0;i< this.items.length;i++){
        if(this.items[i].status == "not_received"){
          this.data1.push(this.items[i])
          
        }
      }
      for(let i=0;i< this.items.length;i++){
        if(this.items[i].status == "received"){
          this.data2.push(this.items[i])
        }
      }
       console.log(this.data1,this.data2)
    });

  }


  printComponent(cmpName) {
    let printContents = document.getElementById(cmpName).innerHTML;
    let originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
}

update1(data){

  this.adduniform.id  = data.id;
  this.adduniform.employee_id = data.employee_id;
  this.adduniform.item = data.item;
  this.adduniform.au = data.au;
  this.adduniform.rate = data.rate;
  this.adduniform.remarks = data.remarks;
  this.adduniform.status = "not_received";
  this.httpClient.post('https://bssservice.herokuapp.com/uniform/uniformupdate',this.adduniform).subscribe((data:any) => {
    console.log(data);
    this.ngOnInit();
  });

}


  update2(data){
    this.adduniform.id  = data.id;
    this.adduniform.employee_id = data.employee_id;
    this.adduniform.item = data.item;
    this.adduniform.au = data.au;
    this.adduniform.rate = data.rate;
    this.adduniform.remarks = data.remarks;
    this.adduniform.status = "received";
    this.httpClient.post('https://bssservice.herokuapp.com/uniform/uniformupdate', this.adduniform).subscribe((data:any) => {
      console.log(data);
      this.ngOnInit();
    });

  }






  




}
class adduniform{
  id:number;
  employee_id: string;
  item: string;
  au: string;
  rate: number;
  remarks:string;
  status:string;
}