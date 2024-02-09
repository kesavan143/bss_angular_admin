import { Component, OnInit,VERSION ,Inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';
import {formatDate } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ng4LoadingSpinnerModule, Ng4LoadingSpinnerService  } from 'ng4-loading-spinner';
import {LOCAL_STORAGE,  WebStorageService } from 'angular-webstorage-service';


@Component({
  selector: 'app-unitwise',
  templateUrl: './unitwise.component.html',
  styleUrls: ['./unitwise.component.scss']
})
export class UnitwiseComponent implements OnInit {

  datass:any;
  datasss:any;

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService,private http: HttpClient ,private route: ActivatedRoute, private router: Router,private formBuilder: FormBuilder,private ng4LoadingSpinnerService: Ng4LoadingSpinnerService) {
    
    // this.http.get('https://bssservice.herokuapp.com/reports/getreportssssss').subscribe((data:any) => {
    // this.datass = data.data;
   

    this.datasss = this.getFromLocal('Reports');
      this.datass = []
    for(let i = 0 ; i < this.datasss.length;i++){
      if(this.datasss[i] == null){
      }else{
       this.datass.push(this.datasss[i])
      }
    }
     console.log(this.datass);
  

    
  }

  saveInLocal(key, val): void {
    console.log('recieved= key:' + key + 'value:' + val);
    this.storage.set(key, val);
   }
  
   getFromLocal(key): any {
    console.log('recieved= key:' + key);
    return this.storage.get(key);
   }

  printComponent(cmpName) {

    let printContents = document.getElementById(cmpName).innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
}

  ngOnInit() {
  }

}
