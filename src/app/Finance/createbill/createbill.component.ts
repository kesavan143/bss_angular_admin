
import {LOCAL_STORAGE,  WebStorageService } from 'angular-webstorage-service';
import {formatDate } from '@angular/common';
import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import { HttpErrorResponse , HttpClient} from '@angular/common/http';
import { ActivatedRoute , Router} from '@angular/router'
import {ViewEncapsulation, Inject} from '@angular/core';
import {NgbCalendar, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators , FormControl} from '@angular/forms';

@Component({
  selector: 'app-createbill',
  templateUrl: './createbill.component.html',
  styleUrls: ['./createbill.component.scss']
})
export class CreatebillComponent implements OnInit {



  addbill:addbill; 


  registerForm: FormGroup;
  submitted = false;
  activeloginuser: any;

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService , private httpService: HttpClient, private route: ActivatedRoute, private router: Router, calendar: NgbCalendar,private formBuilder: FormBuilder) {
    
    this.addbill = new addbill();


    
  


  


}

  ngOnInit() {


  }



  addapi(){
    console.log(this.addbill)
    this.httpService.post('https://bssservice.herokuapp.com/attachment/createattach',this.addbill).subscribe((data:any)  => {
    console.log(data.data.id);
    this.addapi1(data.data.id)
    });
  }

  addapi1(id){

    this.httpService.post('https://bssservice.herokuapp.com/attachment/createattach',this.addbill).subscribe((data:any)  => {
    console.log(data);    
    });
  }

}

export class addbill{
  title: string;
  descriptions: string;
  date: string;
  type: string;
  total_amount: string;
}


