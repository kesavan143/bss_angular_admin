import { Component, OnInit,Inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute ,Router} from '@angular/router';
import {formatDate } from '@angular/common';
import {LOCAL_STORAGE,  WebStorageService } from 'angular-webstorage-service';



@Component({
  selector: 'app-contract-page',
  templateUrl: './contract-page.component.html',
  styleUrls: ['./contract-page.component.scss']
})
export class ContractPageComponent implements OnInit {
  client_details:any;
  site_detailss:any;
  contract_list:any
  companylist:any;
  site_id:any;
  id:any;
  titles = [];
  datas: any;
  email_id:any;
  details:string;
  qrs:any;
  datass:any[]=[];
  selectedfile:any;
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService,private http: HttpClient ,private route: ActivatedRoute, private router: Router) {
    this.http.post('https://bssservice.herokuapp.com/company/companylists', {"id":0}).subscribe((data:any) => {
      this.companylist = data.data;
    console.log(this.companylist);
    });
    }
  ngOnInit() {
   let a = this.getFromLocal('Contract_id');
    this.http.post('https://bssservice.herokuapp.com/client/contractlist', {"site_id":a}).subscribe((data:any) => {
      this.contract_list = data.data;
      console.log(this.contract_list);
    });
    this.site_id = "";
  }
  site(data){
console.log(data)
    if(data === ''){
      alert("Select Company");
    }else{
      console.log(data)
      this.http.post('https://bssservice.herokuapp.com/company/fetchcompanysite', {"company_name":data}).subscribe((data:any) => {
        this.datas = data.data;
      console.log(this.datas);
    });
    }
  }

  saveInLocal(key, val): void {
    console.log('recieved= key:' + key + 'value:' + val);
    this.storage.set(key, val);
   }
   getFromLocal(key): any {
    console.log('recieved= key:' + key);
    return this.storage.get(key);
   }

  site_details(ids){
    this.site_id = "";
    if(ids === '0'){
      alert("Select Client");
    }else{ 
    console.log(ids)
    this.http.post('https://bssservice.herokuapp.com/client/fetchsite', {"id":""+ids}).subscribe((data:any) => {
      this.site_detailss = data.data;
      this.saveInLocal('site_detailss',this.site_detailss);
    });
  
    this.site_id = ids;
    this.saveInLocal('Contract_id',this.site_id);
    this.http.post('https://bssservice.herokuapp.com/client/contractlist', {"site_id":ids}).subscribe((data:any) => {
      this.contract_list = data.data;
      console.log(this.contract_list);
    });
  }
 
  }

  
 public edit(event, item){
    console.log(item.id);
    this.router.navigate(['main/updatecontracts/' + item.id])
  }
  
  
  public viewcontract(event, item){
    console.log(item.id);
    this.router.navigate(['main/viewcontractpage/' + item.id])
  }
  public requiredment(event, item){
    console.log(item.id);
    this.router.navigate(['main/addrequirement/' + item.id])
  }
  public payment(event, item){
    console.log(item.id);
    this.router.navigate(['main/paymentpage/' + item.id])
  }

  public attachment(event, item){
    console.log(item.id);
    this.router.navigate(['main/clientattachment/' + item.id])
  }

  public open(event, item){
    console.log(item.id);
    this.http.post('https://bssservice.herokuapp.com/client/deletclientcontract', {"id":+item.id}).subscribe((data:any) => {
      this.contract_list = data.data;
      console.log(this.contract_list);
      alert("Contract Deleted")
      this.ngOnInit();
    });
  }


  addcontract(){
    if(this.site_id == ""){
      alert("Please Select Site First")
    }else{
      console.log(this.site_id)
      this.router.navigate(['main/addcontractpage/'+this.site_id])
    }
  }

}
