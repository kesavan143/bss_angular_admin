import { Component, OnInit } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';
@Component({
  selector: 'app-leftemployee',
  templateUrl: './leftemployee.component.html',
  styleUrls: ['./leftemployee.component.scss']
})
export class LeftemployeeComponent implements OnInit {

 
  titles = [];
  datass:any;
  datas: any;
  empid:string;
  model: form1model;
  constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router) {
    this.model = new form1model();  
  }
  ngOnInit() {
    this.http.post('https://bssservice.herokuapp.com/authentication/employeelist', this.model).subscribe((data:any) => {
      this.datas = data.data;
      this.datass=[];
      for (let index = 0; index < this.datas.length; index++){
        const element = this.datas[index];
        if(element.resigned =='left')
          this.datass.push(element);
      }
      console.log(this.datass)
    });   
    }
    public view(event, item) {
      console.log(item.id);
      this.router.navigate(['main/employeedetails/' + item.id])
    }
    public edit(event, item) {
      console.log(item.id);
      this.router.navigate(['main/updateemployee/' + item.id])
    }
    public qrcode(event, item) {
      console.log(item.id);
      this.router.navigate(['main/qrcode/' + item.id])
    }
    public open($event, item){
      var stringForm = item.id.toString();
      this.empid = stringForm;
      console.log();
      this.http.post('https://bssservice.herokuapp.com/authentication/deleteemployee',{empid:this.empid}).subscribe(data  => {
      console.log(data);
      alert("Employee deleted Successfully");
      this.ngOnInit();
      });
    }
    add(){
      this.router.navigate(['main/addemployee'])

    }
}


class form1model {
  Email_id: "1";
}

