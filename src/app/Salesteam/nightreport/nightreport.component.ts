import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse , HttpClient} from '@angular/common/http';
import { ActivatedRoute , Router} from '@angular/router';
import {ViewEncapsulation, Inject} from '@angular/core';
import {LOCAL_STORAGE,  WebStorageService } from 'angular-webstorage-service';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import * as _ from 'lodash'

@Component({
  selector: 'app-nightreport',
  templateUrl: './nightreport.component.html',
  styleUrls: ['./nightreport.component.scss']
})
export class NightreportComponent implements OnInit {
  
  site_id:any;
  listdetails:any;
  userFilter: any ;
  listdetail: listdetail;
  datas:any;
  myForm: FormGroup;
  delete;
  isDisable = false;
  datas_exp: any;

  advancedPage = 1;
  sizePage = 10;
  pagedata: any;
  totalcount: number;
  collsize: number;


    //sorting
  key: string = 'name';
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
  p: number = 1;

  

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService,  private httpService: HttpClient, private route: ActivatedRoute, private router: Router,private fb: FormBuilder) {
    this.listdetail = new listdetail();
    this.delete =[];
   }

   



  ngOnInit() {
  this.route.params.subscribe(params => {
      this.site_id = params['id']; // (+) converts string 'id' to a number
      console.log('this id: ' + this.site_id);
      this.httpService.post('https://bssservice.herokuapp.com/night_check/listnightreport',{id:+this.site_id}).subscribe((data:any)  => {
       this.datas = data.data;
       console.log(this.datas);
      });
  });
  }


  newsync() {
    const startval = (this.advancedPage - 1) * this.sizePage;
    let endval = this.advancedPage * this.sizePage;
    if (this.datas.length > endval) {
    }else {
      endval = this.datas.length
    }
    this.pagedata = [];
    for (let index = startval; index < endval; index++) {
      this.pagedata.push(this.datas[index]);
    }
  }





  view(event, item){
    this.router.navigate(['main/viewnightreport/' + item.id])
  }



//Checker action

  onChange(id:string, isChecked: boolean) {
    const emailFormArray = <FormArray>this.myForm.controls.useremail;
    if(isChecked) {
      emailFormArray.push(new FormControl(id));
    } else {
      let index = emailFormArray.controls.findIndex(x => x.value == id)
      emailFormArray.removeAt(index);
    }
    console.log(emailFormArray.value);
    this.delete = emailFormArray.value;
  }



  

  















//Local Storage Get and Post

  saveInLocal(key, val): void {
    console.log('recieved= key:' + key + 'value:' + val);
    this.storage.set(key, val);
   }
   getFromLocal(key): any {
    console.log('recieved= key:' + key);
    return this.storage.get(key);
   }



  }

//Class Declarations
  export class listdetail{
    id: number;
    title: string;
    updatedate: string;
  }


 
  










 


  







