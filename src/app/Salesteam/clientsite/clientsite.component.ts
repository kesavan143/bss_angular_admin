import { Component, OnInit } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';

import {  ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';


import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-clientsite',
  templateUrl: './clientsite.component.html',
  styleUrls: ['./clientsite.component.scss']
})
export class ClientsiteComponent implements OnInit {

  titles = [];
  datas: any;
  cliid:string;
  model: form1model;
  employee_id:string;
  datasss:any;

  selectedfile:any;

  public displayedColumns = ['Company_Name','Site_Name','Address', 'Billing_Name', 'Contact_Number', 'Area_Name', 'UState', 'UDistrict', 'Duty_type', 'View', 'Edit', 'Detele'];
  public dataSource = new MatTableDataSource<User>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private userService: EmployeeService,private http: HttpClient ,private route: ActivatedRoute, private router: Router) {
    this.model = new form1model();
    
  }

  ngOnInit() {

    
    this.http.post('https://bssservice.herokuapp.com/company/companylists', {"id":0}).subscribe((data:any) => {
    this.datasss = data.data;
    console.log(this.datasss);
    });

    
    }


    find(data){
      console.log(data)
      this.getUnitList(data);
    }

    public doFilter = (value: string) => {
      this.dataSource.filter = value.trim().toLocaleLowerCase();
    }
  


    ngAfterViewInit(): void {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
     }

   getUnitList(name): any {
      this.userService.getUnitList(name)
        .subscribe(
          response => {
            this.dataSource.data = response.data as User[];
            console.log(this.dataSource.data)
          },
          errorResponse => {
            console.log(errorResponse.error.error);
          });
    }

    public attach() {  
      const fd = new FormData();
      fd.append('filetoupload', this.selectedfile, this.selectedfile.name);
      console.log(fd);
      this.http.post('https://bssservice.herokuapp.com/client/addclientbulk', fd)
      .subscribe((data: any) => {
      console.log(data.data); 
      });      
    }
    
      onfileselected(event) {
        console.log(event);
        this.selectedfile = event.target.files[0];
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
      this.router.navigate(['main/addclientsite']) 
    }
}


class form1model {
  Email_id: "1";
}


export interface User {
 
}

