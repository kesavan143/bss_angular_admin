import { Component, OnInit ,Inject} from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';
import {LOCAL_STORAGE,  WebStorageService } from 'angular-webstorage-service';
import {  ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-adduniform',
  templateUrl: './adduniform.component.html',
  styleUrls: ['./adduniform.component.scss']
})
export class AdduniformComponent implements OnInit {

titles = [];
  datass:any;
  datas: any;
  empid:string;
  model: form1model;
  advancedPage = 1;
  sizePage = 10;
  pagedata: any;
  totalcount: number;
  collsize: number;
  datasss:any;

  public displayedColumns = ['Empid','Company','employee_type', 'Name', 'gender', 'Mobile_No', 'date_joining', 'Email_ID', 'Address',  'view'];
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

    find(data){
      console.log(data)
      this.getUserList(data);
    }

    ngAfterViewInit(): void {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
   }

    getUserList(data): any {
      this.userService.getUserList(data)
        .subscribe(
          response => {
            this.dataSource.data = response.data as User[];
          },
          errorResponse => {
            console.log(errorResponse.error.error);
          });
    }
    public view(event, item) {
      console.log(item);
      this.router.navigate(['main/uniform/'+item])
      // this.router.navigate(['main/payrollcalenderlist/' + item.id])
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




// this.router.navigate(['main/uniform/'+id])