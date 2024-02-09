import { Component, OnInit } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';


@Component({
  selector: 'app-uniformlist',
  templateUrl: './uniformlist.component.html',
  styleUrls: ['./uniformlist.component.scss']
})
export class UniformlistComponent implements OnInit {
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
  
  constructor(private http: HttpClient ,private route: ActivatedRoute, private router: Router) {
    this.model = new form1model();  
  }
  ngOnInit() {
   this.deliver();
  }


    



    newsync() {
      const startval = (this.advancedPage - 1) * this.sizePage;
      let endval = this.advancedPage * this.sizePage;
      if (this.datass.length > endval) {
      }else {
        endval = this.datass.length
      }
      this.pagedata = [];
      for (let index = startval; index < endval; index++) {
  
        this.pagedata.push(this.datass[index]);
  
  
      }
  
    }


    delivered(){

      this.http.post('https://bssservice.herokuapp.com/uniform/deliverd', this.model).subscribe((data:any) => {
      this.datas = data.data;
      console.log(this.datas);
      
      this.datass=[];
      for (let index = 0; index < this.datas.length; index++) {
        const element = this.datas[index];
        if(element.resigned !== 'resigned')
          this.datass.push(element);
      }
      console.log(this.datass)
      this.newsync();
    });   




    }
    deliver(){

      this.http.post('https://bssservice.herokuapp.com/uniform/undeliverd', this.model).subscribe((data:any) => {
      this.datas = data.data;
      console.log(this.datas);
      this.datass=[];
      for (let index = 0; index < this.datas.length; index++) {
        const element = this.datas[index];
        if(element.resigned !== 'resigned')
          this.datass.push(element);
      }
      console.log(this.datass)
      this.newsync();
    });   




    }
    


    item($event, data){
      this.router.navigate(['main/viewuniform/'+data.id])
    }
}


class form1model {
  id:1;
}

