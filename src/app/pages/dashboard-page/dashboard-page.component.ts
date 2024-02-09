import { Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewEncapsulation, Inject } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';


@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class DashboardPageComponent implements OnInit, OnDestroy {

  type: any;
  dashboard: boolean;


  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService, private http: HttpClient, private route: ActivatedRoute, private router: Router) {

    let u_type = this.getFromLocal('usertype');
    console.log(u_type);
  }
  ngOnInit() {
    this.type = this.getFromLocal('usertype');
    if (this.type === 'Admin') {
      this.dashboard = true;
    } else if (this.type === 'Human Resource') {
      this.dashboard = true;
    } else {
      this.dashboard = false;
    }
    console.log(this.dashboard)
  }




  employee1() {
    this.router.navigate(['main/viewemployees'])
  }
  employee2() {
    this.router.navigate(['main/addemployee'])
  }
  client1() {
    this.router.navigate(['main/clientsite'])
  }
  client2() {
    this.router.navigate(['main/addclientsite'])
  }
  attendance1() {
    this.router.navigate(['main/Attendanceall'])
  }
  attendance2() {
    this.router.navigate(['main/Attendanceall'])
  }
  assign1() {
    this.router.navigate(['main/advance'])
  }
  assign2() {
    this.router.navigate(['main/Manualentry'])
  }
  issue() {
    this.router.navigate(['main/Operationcomlist'])
  }
  ngOnDestroy() {
  }

  getFromLocal(key): any {
    // console.log('recieved= key:' + key);
    return this.storage.get(key);
  }
}
