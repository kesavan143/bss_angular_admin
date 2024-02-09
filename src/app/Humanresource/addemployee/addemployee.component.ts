import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { formatDate } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
const now = new Date();
const equals = (one: NgbDateStruct, two: NgbDateStruct) =>
  one && two && two.year === one.year && two.month === one.month && two.day === one.day;

const before = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day < two.day : one.month < two.month : one.year < two.year;

const after = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day > two.day : one.month > two.month : one.year > two.year;

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.scss']
})
export class AddemployeeComponent {

  registerForm: FormGroup;
  submitted = false;
  site_names: any;

  ecodetext: string;
  ecodenumber: number;






  date1: any;
  attachment: attachment;

  date2: any;
  // Model for basic datepicker
  basicModel: NgbDateStruct;
  basicDate: { year: number, month: number };
  // Model for datepicker with popup
  popupModel;
  // Model for multi month datepicker
  displayMonths = 1;
  navigation = 'select';
  // Model for range selection
  hoveredDate: NgbDateStruct;
  fromDate: NgbDateStruct;
  toDate: NgbDateStruct;
  // Model for disabled datepiker
  disabledModel: NgbDateStruct = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };
  disabled = true;

  id: any;
  titles = [];
  datas: any;
  email_id: any;
  adduser: Adduser;
  details: string;
  qrs: any;
  datass: any[] = [];
  selectedfile: any;
  companylist: any;



  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, calendar: NgbCalendar, private formBuilder: FormBuilder) {
    this.fromDate = calendar.getToday();
    this.attachment = new attachment();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
    this.adduser = new Adduser();
    this.adduser.attach = "";
    this.http.post('https://bssservice.herokuapp.com/employee/emptypelist', { "id": 0 }).subscribe((data: any) => {
      this.datass = data.data;
      console.log(this.datass);
    });

    this.http.post('https://bssservice.herokuapp.com/advance/fetchloan_number1', { "id": 0 }).subscribe((data: any) => {
      this.ecodenumber = +data.data[0].max;
      this.ecodenumber = this.ecodenumber + 1;
    });

    this.http.post('https://bssservice.herokuapp.com/company/companylists', { "id": 0 }).subscribe((data: any) => {
      this.companylist = data.data;
      console.log(this.companylist);
    });
  }


  fetchsite(data) {
    console.log(data);
    if (data === 'BSS') {
      this.ecodetext = 'S'
    } else if (data === 'BSSPL') {
      this.ecodetext = 'P'
    } else if (data === 'MMSPL') {
      this.ecodetext = 'M'
    } else if (data === 'BSST') {
      this.ecodetext = 'T'
    } else if (data === 'BSSC') {
      this.ecodetext = 'C'
    } else if (data === 'BSSR') {
      this.ecodetext = 'R'
    } else if (data === 'BSTR') {
      this.ecodetext = 'H'
    } else if (data === 'BSSK') {
      this.ecodetext = 'K'
    } else if (data === 'BSSB') {
      this.ecodetext = 'B'
    }
    this.http.post('https://bssservice.herokuapp.com/company/fetchcompanysite', { 'company_name': data }).subscribe((data: any) => {
      this.site_names = data.data;
      console.log(this.site_names);
    });
    let code = this.ecodetext + this.ecodenumber;
    console.log(code);
    this.http.post('https://bssservice.herokuapp.com/company/fetchemployeeid', { 'employee_code': code }).subscribe((data: any) => {
      console.log(code);
      if (data.data[0].ecode === code) {
        alert('ECODE:' + ' ' + data.data[0].ecode + ' ' + 'already exist')
      }
    });
  }

  onfileselected(event) {
    console.log(event);
    this.selectedfile = event.target.files[0];
  }


  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      employee_types: ['', Validators.required,],
      father_names: ['', Validators.required,],
      genders: ['', Validators.required,],
      material_statuss: ['', Validators.required,],
      Edqs: ['', Validators.required,],
      nationalitys: ['', Validators.required,],
      date_joinings: ['', Validators.required,],
      driving_licences: ['', Validators.required,],
      Email_IDs: ['', Validators.required,],
      Mobile_Nos: ['', Validators.required,],
      Names: ['', Validators.required,],
      Date_of_births: ['', Validators.required,],
      Passwords: ['', Validators.required,],
      aadhar_cards: ['', Validators.required,],
      voter_ids: ['', Validators.required,],
      Addresss: ['', Validators.required,],
      attachs: ['', Validators.required,],
      qrcodes: ['', Validators.required,],
      workstatuss: ['', Validators.required,],
      resigneds: ['', Validators.required,],
      createdtimes: ['', Validators.required,],
      contacts: ['', Validators.required,],
      ifscs: ['', Validators.required,],
      a_cs: ['', Validators.required,],
      banknames: ['', Validators.required,],
      accounts: ['', Validators.required,],
      prom_ins: ['', Validators.required,],
      pans: ['', Validators.required,],
      weights: ['', Validators.required,],
      heights: ['', Validators.required,],
      permentaddresss: ['', Validators.required,],
      idtypes: ['', Validators.required,],
    });



  }

  get f() { return this.registerForm.controls; }
  onSubmit(mobile, Password) {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    } else {
      this.addapi(mobile, Password)
    }
  }

  selectToday() {
    this.basicModel = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };
  }




  addapi(mobile, Password) {
    if (mobile === '' && Password === '') {
      alert('Enter the Loign Name and Password')
    } else if (this.selectedfile == undefined) {
      this.selectedfile = '';
    } else {
      // if(this.adduser.pf_action == Yes){
      //   this.adduser.pf_action = true;
      // } else if (this.adduser.pf_action == No) {
      //   this.adduser.pf_action = false;
      // }
      // if(this.adduser.esi_action == Yes){
      //   this.adduser.esi_action = true;
      // } else if (this.adduser.esi_action == No) {
      //   this.adduser.esi_action = false;
      // }
      this.adduser.esi_action = this.adduser.esi_action;
      this.adduser.pf_action = this.adduser.pf_action;
      this.adduser.prof_action = this.adduser.prof_action;
      this.adduser.work_status_action = this.adduser.work_status_action;

      this.adduser.prom_in1 = this.adduser.prom_in1;
      this.adduser.prom_in_mobile_no = this.adduser.prom_in_mobile_no;
      this.adduser.prom_in_mobile_no1 = this.adduser.prom_in_mobile_no1;
      this.adduser.work_exp = this.adduser.work_exp;
      this.adduser.chest = this.adduser.chest;
      this.adduser.area = this.adduser.area;
      this.adduser.fcontact1 = this.adduser.fcontact1;
      this.adduser.fcontact2 = this.adduser.fcontact2;
      this.adduser.fcontact3 = this.adduser.fcontact3;
      this.adduser.fcontact4 = this.adduser.fcontact4;
      this.adduser.fcontact5 = this.adduser.fcontact5;


      this.adduser.id = this.ecodenumber;
      this.adduser.ecode = this.ecodetext + this.ecodenumber;
      this.adduser = this.adduser;
      this.adduser.Mobile_No = "" + this.adduser.Mobile_No;
      this.adduser.attach = "";
      this.adduser.createdtime = formatDate(new Date(), 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
      this.adduser.workstatus = "";
      this.adduser.resigned = "unresigned";
      this.adduser.employee_type = this.adduser.employee_type;
      this.adduser.father_name = this.adduser.father_name;
      this.adduser.gender = this.adduser.gender;
      this.adduser.material_status = this.adduser.material_status;
      this.adduser.Edq = this.adduser.Edq;
      this.adduser.nationality = this.adduser.nationality;
      this.adduser.languages = this.adduser.languages;
      this.adduser.date_joining = this.adduser.date_joining;
      this.adduser.driving_licence = this.adduser.driving_licence;
      this.adduser.Email_ID = this.adduser.Email_ID;
      this.adduser.Mobile_No = this.adduser.Mobile_No;
      this.adduser.Name = this.adduser.Name;
      this.adduser.Date_of_birth = this.adduser.Date_of_birth;
      this.adduser.Password = this.adduser.Password;
      this.adduser.aadhar_card = this.adduser.aadhar_card;
      this.adduser.voter_id = this.adduser.voter_id;
      this.adduser.Address = this.adduser.Address;
      this.adduser.attach = this.adduser.attach;
      this.adduser.qrcode = this.adduser.qrcode;
      this.adduser.workstatus = this.adduser.workstatus;
      this.adduser.resigned = this.adduser.resigned;
      this.adduser.createdtime = this.adduser.createdtime;
      this.adduser.contact = this.adduser.contact;
      this.adduser.ifsc = this.adduser.ifsc;
      this.adduser.a_c = this.adduser.a_c;
      this.adduser.bankname = this.adduser.bankname;
      this.adduser.account = this.adduser.account;
      this.adduser.prom_in = this.adduser.prom_in;
      this.adduser.pan = this.adduser.pan;
      this.adduser.weight = this.adduser.weight;
      this.adduser.height = this.adduser.height;
      this.adduser.mother_tongue = this.adduser.mother_tongue;
      this.adduser.permentaddress = this.adduser.permentaddress;
      this.adduser.idtype = this.adduser.idtype;
      this.adduser.fname1 = this.adduser.fname1;
      this.adduser.fsex1 = this.adduser.fsex1;
      this.adduser.frelationship1 = this.adduser.frelationship1;
      this.adduser.fdateofbirth1 = this.adduser.fdateofbirth1;
      this.adduser.fage1 = this.adduser.fage1;
      this.adduser.foccupation1 = this.adduser.foccupation1;
      this.adduser.faadharcard1 = this.adduser.faadharcard1;
      this.adduser.fname2 = this.adduser.fname2;
      this.adduser.fsex2 = this.adduser.fsex2;
      this.adduser.frelationship2 = this.adduser.frelationship2;
      this.adduser.fdateofbirth2 = this.adduser.fdateofbirth2;
      this.adduser.fage2 = this.adduser.fage2;
      this.adduser.foccupation2 = this.adduser.foccupation2;
      this.adduser.faadharcard2 = this.adduser.faadharcard2;
      this.adduser.fname3 = this.adduser.fname3;
      this.adduser.fsex3 = this.adduser.fsex3;
      this.adduser.frelationship3 = this.adduser.frelationship3;
      this.adduser.fdateofbirth3 = this.adduser.fdateofbirth3;
      this.adduser.fage3 = this.adduser.fage3;
      this.adduser.foccupation3 = this.adduser.foccupation3;
      this.adduser.faadharcard3 = this.adduser.faadharcard3;
      this.adduser.fname4 = this.adduser.fname4;
      this.adduser.fsex4 = this.adduser.fname4;
      this.adduser.frelationship4 = this.adduser.frelationship4;
      this.adduser.fdateofbirth4 = this.adduser.fdateofbirth4;
      this.adduser.fage4 = this.adduser.fage4;
      this.adduser.foccupation4 = this.adduser.foccupation4;
      this.adduser.faadharcard4 = this.adduser.faadharcard4;
      this.adduser.fname5 = this.adduser.fname5;
      this.adduser.fsex5 = this.adduser.fsex5;
      this.adduser.frelationship5 = this.adduser.frelationship5;
      this.adduser.fdateofbirth5 = this.adduser.fdateofbirth5;
      this.adduser.fage5 = this.adduser.fage5;
      this.adduser.fdateofbirth5 = this.adduser.fdateofbirth5;
      this.adduser.faadharcard5 = this.adduser.faadharcard5;

      this.adduser.nname1 = this.adduser.fname1;
      this.adduser.nsex1 = this.adduser.fsex1;
      this.adduser.nrelationship1 = this.adduser.frelationship1;
      this.adduser.ndateofbirth1 = this.adduser.fdateofbirth1;
      this.adduser.nage1 = this.adduser.fage1;
      this.adduser.noccupation1 = this.adduser.foccupation1;
      this.adduser.naadharcard1 = this.adduser.faadharcard1;

      this.adduser.nname2 = this.adduser.nname2;
      this.adduser.nsex2 = this.adduser.nsex2;
      this.adduser.nrelationship2 = this.adduser.nrelationship2;
      this.adduser.ndateofbirth2 = this.adduser.ndateofbirth2;
      this.adduser.nage2 = this.adduser.nage2;
      this.adduser.noccupation2 = this.adduser.noccupation2;
      this.adduser.naadharcard2 = this.adduser.naadharcard2;
      this.adduser.nname3 = this.adduser.nname3;
      this.adduser.nsex3 = this.adduser.nsex3;
      this.adduser.nrelationship3 = this.adduser.nrelationship3;
      this.adduser.ndateofbirth3 = this.adduser.ndateofbirth3;
      this.adduser.nage3 = this.adduser.nage3;
      this.adduser.noccupation3 = this.adduser.noccupation3;
      this.adduser.naadharcard3 = this.adduser.naadharcard3;
      this.adduser.nname4 = this.adduser.nname4;
      this.adduser.nsex4 = this.adduser.nsex4;
      this.adduser.nrelationship4 = this.adduser.nrelationship4;
      this.adduser.ndateofbirth4 = this.adduser.ndateofbirth4;
      this.adduser.nage4 = this.adduser.nage4;
      this.adduser.noccupation4 = this.adduser.noccupation4;
      this.adduser.naadharcard4 = this.adduser.naadharcard4;
      this.adduser.nname5 = this.adduser.nname5;
      this.adduser.nsex5 = this.adduser.nsex5;
      this.adduser.nrelationship5 = this.adduser.nsex5;
      this.adduser.ndateofbirth5 = this.adduser.ndateofbirth5;
      this.adduser.nage5 = this.adduser.nage5;
      this.adduser.noccupation5 = this.adduser.noccupation5;
      this.adduser.naadharcard5 = this.adduser.naadharcard5;
      this.adduser.site_name = this.adduser.site_name;
      this.adduser.company_name = this.adduser.company_name;
      this.adduser.pf1 = this.adduser.pf1;
      this.adduser.pf2 = this.adduser.pf2;
      this.adduser.pf3 = this.adduser.pf3;
      this.adduser.uan = this.adduser.uan;
      if (this.adduser.employee_type == undefined) {
        this.adduser.employee_type = "";
      }
      if (this.adduser.father_name == undefined) {
        this.adduser.father_name = "";
      }
      if (this.adduser.gender == undefined) {
        this.adduser.gender = "";
      }
      if (this.adduser.material_status == undefined) {
        this.adduser.material_status = "";
      }
      if (this.adduser.nationality == undefined) {
        this.adduser.nationality = "";
      }
      if (this.adduser.languages == undefined) {
        this.adduser.languages = "";
      }
      if (this.adduser.date_joining == undefined) {
        this.adduser.date_joining = "";
      }
      if (this.adduser.driving_licence == undefined) {
        this.adduser.driving_licence = "";
      }
      if (this.adduser.Email_ID == undefined) {
        this.adduser.Email_ID = "";
      }
      if (this.adduser.Mobile_No == undefined) {
        this.adduser.Mobile_No = "";
      }
      if (this.adduser.Name == undefined) {
        this.adduser.Name = "";
      }
      if (this.adduser.Date_of_birth == undefined) {
        this.adduser.Date_of_birth = "";
      }
      if (this.adduser.Password == undefined) {
        this.adduser.Password = "";
      }
      if (this.adduser.aadhar_card == undefined) {
        this.adduser.aadhar_card = "";
      }
      if (this.adduser.voter_id == undefined) {
        this.adduser.voter_id = "";
      }
      if (this.adduser.Address == undefined) {
        this.adduser.Address = "";
      }

      if (this.adduser.company_name == undefined) {
        this.adduser.company_name = "";
      }
      if (this.adduser.pf1 == undefined) {
        this.adduser.pf1 = "";
      } if (this.adduser.pf2 == undefined) {
        this.adduser.pf2 = "";
      } if (this.adduser.pf3 == undefined) {
        this.adduser.pf3 = "";
      }
      if (this.adduser.uan == undefined) {
        this.adduser.uan = "";
      }

      if (this.adduser.qrcode == undefined) {
        this.adduser.qrcode = "";
      }
      if (this.adduser.attach == undefined) {
        this.adduser.attach = "";
      }
      if (this.adduser.workstatus == undefined) {
        this.adduser.workstatus = "";
      }
      if (this.adduser.resigned == undefined) {
        this.adduser.resigned = "";
      }
      if (this.adduser.createdtime == undefined) {
        this.adduser.createdtime = "";
      }
      if (this.adduser.contact == undefined) {
        this.adduser.contact = "";
      }
      if (this.adduser.ifsc == undefined) {
        this.adduser.ifsc = "";
      }
      if (this.adduser.a_c == undefined) {
        this.adduser.a_c = "";
      }
      if (this.adduser.bankname == undefined) {
        this.adduser.bankname = "";
      }
      if (this.adduser.account == undefined) {
        this.adduser.account = "";
      }
      if (this.adduser.prom_in == undefined) {
        this.adduser.prom_in = "";
      }
      if (this.adduser.pan == undefined) {
        this.adduser.pan = "";
      }
      if (this.adduser.weight == undefined) {
        this.adduser.weight = "";
      }
      if (this.adduser.height == undefined) {
        this.adduser.height = "";
      }
      if (this.adduser.permentaddress == undefined) {
        this.adduser.permentaddress = "";
      }
      if (this.adduser.idtype == undefined) {
        this.adduser.idtype = "";
      }
      if (this.adduser.fname1 == undefined) {
        this.adduser.fname1 = "";
      }
      if (this.adduser.fsex1 == undefined) {
        this.adduser.fsex1 = "";
      }
      if (this.adduser.frelationship1 == undefined) {
        this.adduser.frelationship1 = "";
      }
      if (this.adduser.fdateofbirth1 == undefined) {
        this.adduser.fdateofbirth1 = "";
      }
      if (this.adduser.fage1 == undefined) {
        this.adduser.fage1 = "";
      }
      if (this.adduser.foccupation1 == undefined) {
        this.adduser.foccupation1 = "";
      }
      if (this.adduser.faadharcard1 == undefined) {
        this.adduser.faadharcard1 = "";
      }
      if (this.adduser.fname2 == undefined) {
        this.adduser.fname2 = "";
      }
      if (this.adduser.fsex2 == undefined) {
        this.adduser.fsex2 = "";
      }
      if (this.adduser.frelationship2 == undefined) {
        this.adduser.frelationship2 = "";
      }
      if (this.adduser.fdateofbirth2 == undefined) {
        this.adduser.fdateofbirth2 = "";
      }
      if (this.adduser.fage2 == undefined) {
        this.adduser.fage2 = "";
      }
      if (this.adduser.foccupation2 == undefined) {
        this.adduser.foccupation2 = "";
      }
      if (this.adduser.faadharcard2 == undefined) {
        this.adduser.faadharcard2 = "";
      }
      if (this.adduser.fname3 == undefined) {
        this.adduser.fname3 = "";
      }
      if (this.adduser.fsex3 == undefined) {
        this.adduser.fsex3 = "";
      }
      if (this.adduser.frelationship3 == undefined) {
        this.adduser.frelationship3 = "";
      }
      if (this.adduser.fdateofbirth3 == undefined) {
        this.adduser.fdateofbirth3 = "";
      }
      if (this.adduser.fage3 == undefined) {
        this.adduser.fage3 = "";
      }
      if (this.adduser.foccupation3 == undefined) {
        this.adduser.foccupation3 = "";
      }
      if (this.adduser.faadharcard3 == undefined) {
        this.adduser.faadharcard3 = "";
      }
      if (this.adduser.fname4 == undefined) {
        this.adduser.fname4 = "";
      }
      if (this.adduser.fsex4 == undefined) {
        this.adduser.fsex4 = "";
      }
      if (this.adduser.frelationship4 == undefined) {
        this.adduser.frelationship4 = "";
      }
      if (this.adduser.fdateofbirth4 == undefined) {
        this.adduser.fdateofbirth4 = "";
      }
      if (this.adduser.fage4 == undefined) {
        this.adduser.fage4 = "";
      }
      if (this.adduser.foccupation4 == undefined) {
        this.adduser.foccupation4 = "";
      }
      if (this.adduser.faadharcard4 == undefined) {
        this.adduser.faadharcard4 = "";
      }
      if (this.adduser.fname5 == undefined) {
        this.adduser.fname5 = "";
      }
      if (this.adduser.fsex5 == undefined) {
        this.adduser.fsex5 = "";
      }
      if (this.adduser.frelationship5 == undefined) {
        this.adduser.frelationship5 = "";
      }
      if (this.adduser.fdateofbirth5 == undefined) {
        this.adduser.fdateofbirth5 = "";
      }
      if (this.adduser.fage5 == undefined) {
        this.adduser.fage5 = "";
      }
      if (this.adduser.foccupation5 == undefined) {
        this.adduser.foccupation5 = "";
      }
      if (this.adduser.faadharcard5 == undefined) {
        this.adduser.faadharcard5 = "";
      }
      if (this.adduser.nname1 == undefined) {
        this.adduser.nname1 = "";
      }
      if (this.adduser.nsex1 == undefined) {
        this.adduser.nsex1 = "";
      }
      if (this.adduser.nrelationship1 == undefined) {
        this.adduser.nrelationship1 = "";
      }
      if (this.adduser.ndateofbirth1 == undefined) {
        this.adduser.ndateofbirth1 = "";
      }
      if (this.adduser.nage1 == undefined) {
        this.adduser.nage1 = "";
      }
      if (this.adduser.noccupation1 == undefined) {
        this.adduser.noccupation1 = "";
      }
      if (this.adduser.naadharcard1 == undefined) {
        this.adduser.naadharcard1 = "";
      }
      if (this.adduser.nname2 == undefined) {
        this.adduser.nname2 = "";
      }
      if (this.adduser.nsex2 == undefined) {
        this.adduser.nsex2 = "";
      }
      if (this.adduser.nrelationship2 == undefined) {
        this.adduser.nrelationship2 = "";
      }
      if (this.adduser.ndateofbirth2 == undefined) {
        this.adduser.ndateofbirth2 = "";
      }
      if (this.adduser.nage2 == undefined) {
        this.adduser.nage2 = "";
      }
      if (this.adduser.noccupation2 == undefined) {
        this.adduser.noccupation2 = "";
      }
      if (this.adduser.naadharcard2 == undefined) {
        this.adduser.naadharcard2 = "";
      }
      if (this.adduser.nname3 == undefined) {
        this.adduser.nname3 = "";
      }
      if (this.adduser.nsex3 == undefined) {
        this.adduser.nsex3 = "";
      }
      if (this.adduser.nrelationship3 == undefined) {
        this.adduser.nrelationship3 = "";
      }
      if (this.adduser.ndateofbirth3 == undefined) {
        this.adduser.ndateofbirth3 = "";
      }
      if (this.adduser.nage3 == undefined) {
        this.adduser.nage3 = "";
      }
      if (this.adduser.noccupation3 == undefined) {
        this.adduser.noccupation3 = "";
      }
      if (this.adduser.naadharcard3 == undefined) {
        this.adduser.naadharcard3 = "";
      }
      if (this.adduser.nname4 == undefined) {
        this.adduser.nname4 = "";
      }
      if (this.adduser.nsex4 == undefined) {
        this.adduser.nsex4 = "";
      }
      if (this.adduser.nrelationship4 == undefined) {
        this.adduser.nrelationship4 = "";
      }
      if (this.adduser.ndateofbirth4 == undefined) {
        this.adduser.ndateofbirth4 = "";
      }
      if (this.adduser.nage4 == undefined) {
        this.adduser.nage4 = "";
      }
      if (this.adduser.noccupation4 == undefined) {
        this.adduser.noccupation4 = "";
      }
      if (this.adduser.naadharcard4 == undefined) {
        this.adduser.naadharcard4 = "";
      }
      if (this.adduser.nname5 == undefined) {
        this.adduser.nname5 = "";
      }
      if (this.adduser.nsex5 == undefined) {
        this.adduser.nsex5 = "";
      }
      if (this.adduser.nrelationship5 == undefined) {
        this.adduser.nrelationship5 = "";
      }
      if (this.adduser.ndateofbirth5 == undefined) {
        this.adduser.ndateofbirth5 = "";
      }
      if (this.adduser.nage5 == undefined) {
        this.adduser.nage5 = "";
      }
      if (this.adduser.noccupation5 == undefined) {
        this.adduser.noccupation5 = "";
      }
      if (this.adduser.naadharcard5 == undefined) {
        this.adduser.naadharcard5 = "";
      }
      if (this.adduser.mother_tongue == undefined) {
        this.adduser.mother_tongue = "";
      }
      if (this.adduser.mother_tongue_state == undefined) {
        this.adduser.mother_tongue_state = "";
      }
      if (this.adduser.Edq == undefined) {
        this.adduser.Edq = "";
      }
      if (this.adduser.site_name == undefined) {
        this.adduser.site_name = "";
      } if (this.adduser.company_name == undefined) {
        this.adduser.company_name = "";
      } if (this.adduser.pf1 == undefined) {
        this.adduser.pf1 = "";
      } if (this.adduser.pf2 == undefined) {
        this.adduser.pf2 = "";
      } if (this.adduser.pf3 == undefined) {
        this.adduser.pf3 = "";
      } if (this.adduser.uan == undefined) {
        this.adduser.uan = "";
      } if (this.adduser.pf_action == null) {
        this.adduser.pf_action = false;
      } if (this.adduser.esi_action == null) {
        this.adduser.esi_action = false;
      } if (this.adduser.prof_action == null) {
        this.adduser.prof_action = false;
      } if (this.adduser.work_status_action == null) {
        this.adduser.work_status_action = false;
      } if (this.adduser.prom_in1 == null) {
        this.adduser.prom_in1 = '';
      } if (this.adduser.prom_in_mobile_no == null) {
        this.adduser.prom_in_mobile_no = '';
      } if (this.adduser.prom_in_mobile_no1 == null) {
        this.adduser.prom_in_mobile_no1 = '';
      } if (this.adduser.work_exp == null) {
        this.adduser.work_exp = '';
      } if (this.adduser.chest == null) {
        this.adduser.chest = '';
      } if (this.adduser.area == null) {
        this.adduser.area = '';
      } if (this.adduser.fcontact1 == null) {
        this.adduser.fcontact1 = '';
      } if (this.adduser.fcontact2 == null) {
        this.adduser.fcontact2 = '';
      } if (this.adduser.fcontact3 == null) {
        this.adduser.fcontact3 = '';
      } if (this.adduser.fcontact4 == null) {
        this.adduser.fcontact4 = '';
      } if (this.adduser.fcontact5 == null) {
        this.adduser.fcontact5 = '';
      } if (this.adduser.age == null) {
        this.adduser.age = '';
      }

      console.log(this.adduser);
      this.http.post('https://bssservice.herokuapp.com/authentication/addemployee', this.adduser).subscribe((data: any) => {
        this.datas = data.data;
        this.id = this.datas.id;
        if (this.datas.message == "This Mobile No already exits!") {
          alert("This Mobile No already exits!");
        } else {
          console.log(this.datas);
          this.qrcode(this.datas.Empid, this.datas.Name, this.datas.Email_ID, this.datas.Mobile_No);
        }
      });
    }
  }

  public dateChange1(value) {
    console.log(value)
    let a = formatDate(value, 'yyyy', 'en-US', '+0530');
    let b = formatDate(new Date(), 'yyyy', 'en-US', '+0530');
    console.log(a, b)
    let c = +b - +a
    this.adduser.fage1 = "" + c
  }
  public dateChange2(value) {
    console.log(value)
    let a = formatDate(value, 'yyyy', 'en-US', '+0530');
    let b = formatDate(new Date(), 'yyyy', 'en-US', '+0530');
    console.log(a, b)
    let c = +b - +a
    this.adduser.fage2 = "" + c
  }
  public dateChange3(value) {
    console.log(value)
    let a = formatDate(value, 'yyyy', 'en-US', '+0530');
    let b = formatDate(new Date(), 'yyyy', 'en-US', '+0530');
    console.log(a, b)
    let c = +b - +a
    this.adduser.fage3 = "" + c
  }
  public dateChange4(value) {
    console.log(value)
    let a = formatDate(value, 'yyyy', 'en-US', '+0530');
    let b = formatDate(new Date(), 'yyyy', 'en-US', '+0530');
    console.log(a, b)
    let c = +b - +a
    this.adduser.fage4 = "" + c
  }
  public dateChange5(value) {
    console.log(value)
    let a = formatDate(value, 'yyyy', 'en-US', '+0530');
    let b = formatDate(new Date(), 'yyyy', 'en-US', '+0530');
    console.log(a, b)
    let c = +b - +a
    this.adduser.fage5 = "" + c
  }
  public dateChange6(value) {
    console.log(value)
    let a = formatDate(value, 'yyyy', 'en-US', '+0530');
    let b = formatDate(new Date(), 'yyyy', 'en-US', '+0530');
    console.log(a, b)
    let c = +b - +a
    this.adduser.nage1 = "" + c
  }
  public dateChange7(value) {
    console.log(value)
    let a = formatDate(value, 'yyyy', 'en-US', '+0530');
    let b = formatDate(new Date(), 'yyyy', 'en-US', '+0530');
    console.log(a, b)
    let c = +b - +a
    this.adduser.nage2 = "" + c
  }
  public dateChange8(value) {
    console.log(value)
    let a = formatDate(value, 'yyyy', 'en-US', '+0530');
    let b = formatDate(new Date(), 'yyyy', 'en-US', '+0530');
    console.log(a, b)
    let c = +b - +a
    this.adduser.nage3 = "" + c
  }
  public dateChange9(value) {
    console.log(value)
    let a = formatDate(value, 'yyyy', 'en-US', '+0530');
    let b = formatDate(new Date(), 'yyyy', 'en-US', '+0530');
    console.log(a, b)
    let c = +b - +a
    this.adduser.nage4 = "" + c
  }
  public dateChange10(value) {
    console.log(value)
    let a = formatDate(value, 'yyyy', 'en-US', '+0530');
    let b = formatDate(new Date(), 'yyyy', 'en-US', '+0530');
    console.log(a, b)
    let c = +b - +a
    this.adduser.nage5 = "" + c
  }








  onChange(value) {

    if (value == "1") {
      this.adduser.permentaddress = this.adduser.Address;
    } else {
      this.adduser.permentaddress = "";
    }

  }

  public attach() {
    if (this.selectedfile == '') {
      this.attachment.Emp_id = "" + this.id;
      this.attachment.path = '';
      this.attachment.title = "photo"
      console.log(this.attachment)
      this.http.post('https://bssservice.herokuapp.com/attachment/createattach', this.attachment).subscribe((data: any) => {
        console.log(data);
        this.router.navigate(['main/addemployee2/' + this.id])
      });
    } else if (this.selectedfile == this.selectedfile) {
      const fd = new FormData();
      fd.append('filetoupload', this.selectedfile, this.selectedfile.name);
      console.log(fd);
      this.http.post('https://bssservice.herokuapp.com/upload/file', fd)
        .subscribe((data: any) => {
          console.log(data.data);
          this.next1(data.data.path)
        });
    }
  }


  next1(path) {
    this.attachment.Emp_id = "" + this.id;
    this.attachment.path = path;
    this.attachment.title = "photo"
    console.log(this.attachment)
    this.http.post('https://bssservice.herokuapp.com/attachment/createattach', this.attachment).subscribe((data: any) => {
      console.log(data);
      this.router.navigate(['main/addemployee2/' + this.id])
    });
  }
  public dateChange(value) {
    console.log(value)
    let a = formatDate(value, 'yyyy', 'en-US', '+0530');
    let b = formatDate(new Date(), 'yyyy', 'en-US', '+0530');
    console.log(a, b)
    let c = +b - +a
    this.adduser.age = '' + c
    console.log(this.adduser.age)

  }
  qrcode(Empid, name, email_id, mobile) {
    console.log(Empid, name, email_id, mobile);
    var j = { "ID": Empid, "Name": name, "Email_id": email_id, "Mobile": mobile }
    this.details = JSON.stringify(j); // '{"name":"binchen"}'
    console.log(this.details);
    this.http.post('https://bssservice.herokuapp.com/authentication/updateqr', { "empid": Empid, "qrcode": this.details }).subscribe((data: any) => {
      this.datas = data.data[0];
      this.attach();
    });
  }


}


class Adduser {
  id: number;
  employee_type: string;
  father_name: string;
  gender: string;
  material_status: string;
  Edq: string;
  nationality: string;
  languages: string;
  date_joining: string;
  driving_licence: string;
  Email_ID: string;
  Mobile_No: string;
  Name: string;
  Date_of_birth: string;
  Password: string;
  aadhar_card: string;
  voter_id: string;
  Address: string;
  attach: string;
  qrcode: string;
  workstatus: string;
  resigned: string;
  createdtime: string;
  contact: string;
  ifsc: string;
  a_c: string;
  bankname: string;
  account: string;
  prom_in: string;
  pan: string;
  weight: string;
  height: string;
  mother_tongue: string;
  permentaddress: string;
  idtype: string;
  fname1: string;
  fsex1: string;
  frelationship1: string;
  fdateofbirth1: string;
  fage1: string;
  foccupation1: string;
  faadharcard1: string;
  fname2: string;
  fsex2: string;
  frelationship2: string;
  fdateofbirth2: string;
  fage2: string;
  foccupation2: string;
  faadharcard2: string;
  fname3: string;
  fsex3: string;
  frelationship3: string;
  fdateofbirth3: string;
  fage3: string;
  foccupation3: string;
  faadharcard3: string;
  fname4: string;
  fsex4: string;
  frelationship4: string;
  fdateofbirth4: string;
  fage4: string;
  foccupation4: string;
  faadharcard4: string;
  fname5: string;
  fsex5: string;
  frelationship5: string;
  fdateofbirth5: string;
  fage5: string;
  foccupation5: string;
  faadharcard5: string;
  nname1: string;
  nsex1: string;
  nrelationship1: string;
  ndateofbirth1: string;
  nage1: string;
  noccupation1: string;
  naadharcard1: string;
  nname2: string;
  nsex2: string;
  nrelationship2: string;
  ndateofbirth2: string;
  nage2: string;
  noccupation2: string;
  naadharcard2: string;
  nname3: string;
  nsex3: string;
  nrelationship3: string;
  ndateofbirth3: string;
  nage3: string;
  noccupation3: string;
  naadharcard3: string;
  nname4: string;
  nsex4: string;
  nrelationship4: string;
  ndateofbirth4: string;
  nage4: string;
  noccupation4: string;
  naadharcard4: string;
  nname5: string;
  nsex5: string;
  nrelationship5: string;
  ndateofbirth5: string;
  nage5: string;
  noccupation5: string;
  naadharcard5: string;
  site_name: string;
  company_name: string;
  pf1: string;
  pf2: string;
  pf3: string;
  uan: string;
  ecode: string;
  pf_action: boolean;
  esi_action: boolean;
  prof_action: boolean;
  work_status_action: boolean;

  prom_in1: string;
  prom_in_mobile_no: string;
  prom_in_mobile_no1: string;
  work_exp: string;
  chest: string;
  area: string;
  fcontact1: string;
  fcontact2: string;
  fcontact3: string;
  fcontact4: string;
  fcontact5: string;

  age: string;
  mother_tongue_state: string
}


class attachment {

  Emp_id: string;
  title: string;
  path: string;
}