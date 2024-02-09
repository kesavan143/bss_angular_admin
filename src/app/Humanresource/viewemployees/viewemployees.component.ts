import { Component, OnInit ,Inject} from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';
import {LOCAL_STORAGE,  WebStorageService } from 'angular-webstorage-service';

import {  ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

import { EmployeeService } from '../../services/employee.service';


@Component({
  selector: 'app-viewemployees',
  templateUrl: './viewemployees.component.html',
  styleUrls: ['./viewemployees.component.scss']
})
export class ViewemployeesComponent {

  titles = [];
  datass:any;
  datas: any;
  empid:string;
  selectedfile:any;
  model: form1model;
  advancedPage = 1;
  sizePage = 10;
  pagedata: any;
  totalcount: number;
  collsize: number;
  datasss:any;

  public displayedColumns = ['ecode','Company','employee_type', 'Name', 'gender', 'Mobile_No', 'date_joining', 'site_name',  'report', 'view', 'edit'];
  public dataSource = new MatTableDataSource<User>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(private userService: EmployeeService,@Inject(LOCAL_STORAGE) private storage: WebStorageService,private http: HttpClient ,private route: ActivatedRoute, private router: Router) {
    this.model = new form1model();  
  }
  
  ngOnInit() {
   
    this.http.post('https://bssservice.herokuapp.com/company/companylists', {"id":0}).subscribe((data:any) => {
      this.datasss = data.data;
    console.log(this.datasss);
  });
    }
    public attach() {
      const fd = new FormData();
      fd.append('filetoupload', this.selectedfile, this.selectedfile.name);
      console.log(fd);
      this.http.post('https://bssservice.herokuapp.com/employee/addemployeebulk', fd)
      .subscribe((data: any) => {
      console.log(data.data);
      });
    }
    
      onfileselected(event) {
        console.log(event);
        this.selectedfile = event.target.files[0];
        }

    
    find(data){
      console.log(data)
      this.getUserList(data);
    }

    ngAfterViewInit(): void {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
   }

    getUserList(name): any {
      this.userService.getUserList(name)
        .subscribe(
          response => {
            this.dataSource.data = response.data as User[];
            console.log(this.dataSource.data)
          },
          errorResponse => {
            console.log(errorResponse.error.error);
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
      this.router.navigate(['main/report/' + item.id])
    }

    public doFilter = (value: string) => {
      this.dataSource.filter = value.trim().toLocaleLowerCase();
    }
  
    onClickAddUser(): void {
      // tslint:disable-next-line:quotemark
      console.log("Add user clicked");
      this.router.navigateByUrl('/add-user');
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

    item($event, data){
      this.saveInLocal('emp_name',data.Name);
      this.saveInLocal('emp_id',data.Empid);
      this.router.navigate(['main/uniform/'+data.id])
    }


    saveInLocal(key, val): void {
      console.log('recieved= key:' + key + 'value:' + val);
      this.storage.set(key, val);
     }
     getFromLocal(key): any {
      console.log('recieved= key:' + key);
      return this.storage.get(key);
     }

}


class form1model {
  Email_id: "1";
}

export interface User {
 
}

