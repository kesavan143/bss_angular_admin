import { NgModule,Pipe,Component, OnInit ,Attribute,Inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {formatDate } from '@angular/common';
import { ActivatedRoute ,Router} from '@angular/router';
import {LOCAL_STORAGE,  WebStorageService } from 'angular-webstorage-service';



@Component({
  selector: 'app-uniform',
  templateUrl: './uniform.component.html',
  styleUrls: ['./uniform.component.scss']
})
export class UniformComponent implements OnInit {
  cliid:number;
  title:string;
  employee_id:string;
  data:any;
  datas: any;
  items:any;
  adduniform: adduniform;
  employee_details:any;
  total:number;
  emp_name:string;
  emp_id:string;

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService,private http: HttpClient ,private route: ActivatedRoute, private router: Router) { 
    this.adduniform = new adduniform();
    this.route.params.subscribe(params => {
      this.employee_id = params['id']; // (+) converts string 'id' to a number
      console.log('this id: ' + this.employee_id);

  });

    this.http.post('https://bssservice.herokuapp.com/uniform/itemslists', {"id":0}).subscribe((data:any) => {
      this.items = data.data;
      console.log(this.datas);
    });


    this.http.post('https://bssservice.herokuapp.com/authentication/employee_id', {"employee_id":""+this.employee_id}).subscribe((data:any) => {
      this.employee_details = data.data;
      console.log(this.employee_details);
      this.emp_id =  this.employee_details.id;
      this.emp_name =  this.employee_details.Name;
    });
    }


    
  
  ngOnInit() {
     this.adduniform.employee_id = "";
     this.adduniform.item = "";
     this.adduniform.au = "";
     this.adduniform.rate = null;
     this.adduniform.remarks = "";
     this.total = null;

  this.http.post('https://bssservice.herokuapp.com/uniform/uniformlist', {"employee_id":""+this.employee_id}).subscribe((data:any) => {
    this.datas = data.data;
    console.log(this.datas);
      
    for(let i=0;i< this.datas.length;i++){
     this.total = this.total + this.datas[i].total_amount;
    }
     console.log(this.total)
  });
  }


  saveInLocal(key, val): void {
    console.log('recieved= key:' + key + 'value:' + val);
    this.storage.set(key, val);
   }
   getFromLocal(key): any {
    console.log('recieved= key:' + key);
    return this.storage.get(key);
   }


 


print()
{
  this.router.navigate(['main/print/'+this.employee_id])
}

dateChange1(value){

console.log(value);
  this.http.post('https://bssservice.herokuapp.com/uniform/fetchitems',{"id":+value}).subscribe((data:any) => {
    this.data = data.data;
    this.adduniform.rate = +this.data[0].rates;
    this.title = this.data[0].items;
  });




}
  


    adduniforms(){


     this.adduniform.item = this.title;
      this.adduniform.employee_id = ""+this.employee_id;
      console.log(this.adduniform);
      this.http.post('https://bssservice.herokuapp.com/uniform/uniformadd',this.adduniform).subscribe(data => {
        console.log(this.datas);
        this.ngOnInit();
      });
    }



    delete($event, data){

      this.http.post('https://bssservice.herokuapp.com/uniform/uniformdelete',{"id":data.id}).subscribe(data => {
        console.log(this.datas);
        this.ngOnInit();
      });
    }

    addapi(){
      this.router.navigate(['main/viewemployees'])
    }

    cal(){
     this.adduniform.total_amount  =  +this.adduniform.au * this.adduniform.rate;
    }


}



class adduniform{
  employee_id: string;
  item: string;
  au: string;
  rate: number;
  remarks:string;
  total_amount:number;
}
