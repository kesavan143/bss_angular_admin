import { NgModule,Pipe,Component, OnInit ,Attribute} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {formatDate } from '@angular/common';
import { ActivatedRoute ,Router} from '@angular/router'

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  items_id:number;
  isactive:boolean;
  employee_id:string;
  datas: any;
  additems: additems;
  total:number;
  ngOnInit() {
    this.isactive = true;

     
     this.additems.rates = "";
     this.additems.items = "";
    this.route.params.subscribe(params => {
      this.employee_id = params['id']; // (+) converts string 'id' to a number
      console.log('this id: ' + this.employee_id);

  });
  this.http.post('https://bssservice.herokuapp.com/uniform/itemslists', {"id":0}).subscribe((data:any) => {
    this.datas = data.data;
    console.log(this.datas);
      
    for(let i=0;i< this.datas.length;i++){
     this.total = this.total + this.datas[i].rate;
    }
     console.log(this.total)
  });
  }
  constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router) { 
    this.additems = new additems();
 
    }



  


additem(){
      console.log(this.additems);
      this.http.post('https://bssservice.herokuapp.com/uniform/additems',this.additems).subscribe(data => {
        console.log(this.datas);
        this.ngOnInit();
      });
    }



    delete($event, data){
      this.http.post('https://bssservice.herokuapp.com/uniform/itemsdeletes',{"id":data.id}).subscribe(data => {
        console.log(this.datas);
        this.ngOnInit();
      });
    }

    fetch($event, data){
      this.additems.items = "";
      this.additems.rates = "";
      this.isactive = false;
      this.items_id = data.id;
      this.http.post('https://bssservice.herokuapp.com/uniform/fetchitems',{"id":data.id}).subscribe((data:any) => {
        this.additems.items = data.data[0].items;
        this.additems.rates = data.data[0].rates;
      });
    }

    update(){
     let a = this.additems.items;
     let b = this.additems.rates;
      this.http.post('https://bssservice.herokuapp.com/uniform/updateitems',{"id":this.items_id,"items":a,"rates":b}).subscribe(data => {
        this.ngOnInit();
      });
    }




}



class additems{
  items: string;
  rates: string;
}
