import { Component, OnInit,VERSION ,Inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';
import {formatDate } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ng4LoadingSpinnerModule, Ng4LoadingSpinnerService  } from 'ng4-loading-spinner';
import {LOCAL_STORAGE,  WebStorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-reprotscollection',
  templateUrl: './reprotscollection.component.html',
  styleUrls: ['./reprotscollection.component.scss']
})
export class ReprotscollectionComponent implements OnInit {

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService,private http: HttpClient ,private route: ActivatedRoute, private router: Router,private formBuilder: FormBuilder,private ng4LoadingSpinnerService: Ng4LoadingSpinnerService) {



  }

  unitwise(){
    this.router.navigate(['main/unitwise']);
  }


  printall(){
    this.router.navigate(['main/gettalll']);
  }


  ngOnInit() {


  }

}
