import { Component, OnInit,Inject } from '@angular/core';
import {LOCAL_STORAGE,  WebStorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-saleryprocessprint',
  templateUrl: './saleryprocessprint.component.html',
  styleUrls: ['./saleryprocessprint.component.scss']
})
export class SaleryprocessprintComponent implements OnInit {

  reports:any;

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) { }

  ngOnInit() {



    this.reports = this.getFromLocal('Reports');
    console.log(this.reports)
  }

  printComponent(cmpName) {
    let printContents = document.getElementById(cmpName).innerHTML;
    let originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
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
