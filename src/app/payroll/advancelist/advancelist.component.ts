import { Component, OnInit, VERSION } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { formatDate } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ng4LoadingSpinnerModule, Ng4LoadingSpinnerService } from 'ng4-loading-spinner';


@Component({
    selector: 'app-advancelist',
    templateUrl: './advancelist.component.html',
    styleUrls: ['./advancelist.component.scss']
})
export class AdvancelistComponent implements OnInit {

    datass: any;
    loan_number: number;
    datasss: any;
    adduser: Adduser;
    list: any;
    count: any;
    amount: number;
    pending: number;
    balance: number;
    lists: any;
    udate: any;
    uamount: any;
    ustatus: any;
    selectedfile: any;


    deleteoneid: number;
    deleteallid: number;


    updateoneid: number;
    updateallid: number;


    checkno: number;


    upayment: string;


    addbutton: boolean;
    updatebutton: boolean;


    name: string;
    mdate: any;



    // loanNumber: any;





    constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder, private ng4LoadingSpinnerService: Ng4LoadingSpinnerService) {
        this.name = `Angular! v${VERSION.full}`

        this.adduser = new Adduser();
        this.addbutton = false;
        this.updatebutton = false;

        this.http.post('https://bssservice.herokuapp.com/company/companylists', { "id": 0 }).subscribe((data: any) => {
            this.datass = data.data;
            console.log(this.datass);
        });

        this.http.post('https://bssservice.herokuapp.com/advance/fetchloan_number', { "id": 0 }).subscribe((data: any) => {
            if (data.data[0].max == null) {
                this.loan_number = 0;
            } else {
                this.loan_number = data.data[0].max + 1;
            }
            console.log(this.loan_number);

        });


    }
    ngOnInit() {
        var dt = new Date();
        dt.setMonth(dt.getMonth() - 1);
        console.log(dt);
        this.adduser.advance_type = "";
        this.adduser.company_name = "";
        this.adduser.employee_id = "";
        this.adduser.employee_name = "";
        this.adduser.site = "";
        this.adduser.bank = "";
        this.adduser.pamount = 0;
        this.adduser.pbalanceamount = 0;
        this.adduser.pinstalment = 0;
        this.adduser.ppendinginstalment = 0;
        this.adduser.dfullcash = false;
        this.adduser.dpaytype = "Bank";
        this.adduser.ddate = formatDate(new Date(), ' yyyy-MM-dd ', 'en-US', '+0530');
        console.log(this.adduser.ddate);
        this.adduser.damount = 0;
        this.adduser.daddi = "";
        this.adduser.dnaration = "";
    }
    click() {
        this.http.post('https://bssservice.herokuapp.com/advance/fetchloan_number', { "id": 0 }).subscribe((data: any) => {
            if (data.data[0].max == null) {
                this.loan_number = 0;
            } else {
                this.loan_number = data.data[0].max + 1;
            }
        });
        this.adduser.pamount = 0;
        this.adduser.pbalanceamount = 0;
        this.adduser.pinstalment = 0;
        this.adduser.ppendinginstalment = 0;
        this.http.post('https://bssservice.herokuapp.com/authentication/employee_id1', { employee_id: "" + this.adduser.employee_id }).subscribe((data: any) => {
            if (data.data == null) {
                alert('Enter valid Employee ID')
            } else if (data.data == data.data) {
                this.datasss = data.data;
            }
            this.adduser.employee_name = this.datasss.Name;
            this.adduser.bank = this.datasss.a_c;
            this.adduser.site = this.datasss.site_name;
            this.adduser.company_name = this.datasss.company_name;
            if (this.datasss.a_c == null) {
                this.adduser.bank = "";
            }
            console.log(this.datasss)
        });

        console.log(this.adduser.employee_id, this.adduser.company_name, this.adduser.advance_type)
        this.http.post('https://bssservice.herokuapp.com/advance/advancefetch', { "employee_id": "" + this.adduser.employee_id, "advance_type": "" + this.adduser.advance_type, "company_name": "" + this.adduser.company_name }).subscribe((data: any) => {
            this.list = data.data;
            console.log(this.list)
            // this.loanNumber = this.list.map(data => {
            //     return data.loan_number;
            // });
            // console.log(this.loanNumber);

            this.lists = []
            for (let i = 0; i < this.list.length; i++) {
                if (this.list[i].status == 'Pending') {
                    this.lists.push(this.list[i])
                    this.adduser.ppendinginstalment = this.adduser.ppendinginstalment + 1;
                    this.adduser.pbalanceamount = this.adduser.pbalanceamount + this.list[i].pbalanceamount;
                }
                this.adduser.pamount = Math.round(this.adduser.pamount + this.list[i].pamount);
            }
            this.adduser.pinstalment = this.list.length;
        });
        console.log(this.lists);
    }
    newclear() {
        this.adduser.pamount = 0;
        this.adduser.pbalanceamount = 0;
        this.adduser.pinstalment = 0;
        this.adduser.ppendinginstalment = 0;
        this.adduser.dfullcash = false;
        this.adduser.dpaytype = "Bank";
        this.adduser.ddate = formatDate(new Date(), ' yyyy-MM-dd ', 'en-US', '+0530');
        console.log(this.adduser.ddate);
        this.adduser.damount = 0;
        this.adduser.daddi = "";
        this.adduser.dnaration = "";
        this.list = [];
        this.addbutton = true;
    }

    check() {
        this.http.post('https://bssservice.herokuapp.com/authentication/employee_id1', { employee_id: "" + this.adduser.employee_id }).subscribe((data: any) => {
            if (data.data == null) {
                alert('Enter valid Employee ID')
            } else if (data.data == data.data) {
                this.addapi();
            }
        });
    }
    date(data) {
        this.mdate = data;
        var dt = new Date(data);
        dt.setMonth(dt.getMonth() - 1);
        console.log(dt);
        var z = new Date(data);
        var y = z.getFullYear();
        var d = z.getDate();
        const monthNames = ["01", "02", "03", "04", "05", "06",
            "07", "08", "09", "10", "11", "12"
        ];
        const m = monthNames[z.getMonth() - 1];
        console.log(m);
        var rr = y + '-' + m + '-' + d;
        this.adduser.ddate = rr;
        console.log(this.adduser.ddate);
        // this.adduser.ddate = formatDate(rr,'yyyy-MM-dd', 'en-US', '+0530');
        alert('You have selected current month');
    }

    addapi() {
        // this.adduser.ddate = formatDate(this.adduser.ddate, ' yyyy-MM-dd ', 'en-US', '+0530');
        let currentDate = formatDate(new Date(), ' yyyy-MM-dd ', 'en-US', '+0530');
        console.log(this.adduser.ddate, currentDate)
        // if (this.adduser.ddate == currentDate) {
        //     this.adduser.ddate = this.adduser.ddate;
        //     console.log(this.adduser.ddate);
        // } else {
        //     var z = new Date();
        //     var y = z.getFullYear();
        //     var d = z.getDate();
        //     const monthNames = ["12", "01", "02", "03", "04", "05", "06",
        //         "07", "08", "09", "10", "11"
        //     ];
        //     const m = monthNames[z.getMonth()];
        //     console.log(m);
        //     var rr = y + '-' + m + '-' + d;
        //     this.adduser.ddate = rr;
        //     console.log(this.adduser.ddate);
        //     // this.adduser.ddate = formatDate(rr,'yyyy-MM-dd', 'en-US', '+0530');
        //     alert('You have selected current month');
        // }
        console.log(this.adduser.ddate);
        console.log(this.adduser)
        this.http.post('https://bssservice.herokuapp.com/advance/fetchloan_number', { "id": 0 }).subscribe((data: any) => {
            if (data.data[0].max == null) {
                this.adduser.loan_number = 0;
            } else {
                this.adduser.loan_number = data.data[0].max;
            }
            this.adduser.loan_number = this.adduser.loan_number + 1;
            console.log(this.adduser.loan_number);
        });
        console.log(this.adduser)
        this.http.post('https://bssservice.herokuapp.com/advances/advanceadd', this.adduser).subscribe((data: any) => {
            this.adduser.ddate = formatDate(new Date(), ' yyyy-MM-dd ', 'en-US', '+0530');
            this.mdate = '';
            console.log(data);
            console.log(this.datasss)
            alert("Added successfully");
            this.click();
        });

    }

    update() {
        // console.log(this.loanNumber);
        this.http.post('https://bssservice.herokuapp.com/advance/deleteadvance', { "id": this.deleteallid }).subscribe((data: any) => {
            this.adduser.loan_number = this.deleteallid;
            console.log(this.adduser.loan_number);
            console.log(this.adduser)
            this.http.post('https://bssservice.herokuapp.com/advance/advanceadd', this.adduser).subscribe((data: any) => {
                console.log(this.datasss)
                alert("Updated successfully");
                this.click();
            });
        });
    }

    updateone() {
        this.udate = formatDate(this.udate, 'yyyy-MM-dd', 'en-US', '+0530');
        console.log(this.uamount, this.udate, this.upayment, this.ustatus)
        this.http.post('https://bssservice.herokuapp.com/advance/updateoneinstalment', {
            "id": this.deleteoneid,
            "date": this.udate,
            "amount": +this.uamount,
            "dpaytype": this.upayment,
            "status": this.ustatus
        }).subscribe((data: any) => {
            alert("Updated This Instalment");
            this.click();
        });

    }


    updateall() {

        this.http.post('https://bssservice.herokuapp.com/advance/fetchadvance', { "id": this.deleteallid }).subscribe((data: any) => {
            let lists = data.data;
            console.log(lists)
            this.checkno = 0;
            for (let i = 0; i < lists.length; i++) {
                if (lists[i].status == 'clear') {
                    this.checkno = 1;
                }
            }
            this.checkupdate();
        });
    }
    checkupdate() {
        if (this.checkno == 0) {
            this.adduser.pamount = 0;
            this.adduser.pbalanceamount = 0;
            this.adduser.pinstalment = 0;
            this.adduser.ppendinginstalment = 0;
            this.http.post('https://bssservice.herokuapp.com/advance/fetchadvance', { "id": this.deleteallid }).subscribe((data: any) => {
                let lists = data.data;
                console.log(lists)
                this.checkno = 0;
                let amount = 0;
                for (let i = 0; i < lists.length; i++) {
                    amount = amount + lists[i].pamount;
                }
                this.adduser.pamount = amount;
                this.adduser.pinstalment = lists.length;
                this.adduser.pbalanceamount = amount;
                this.adduser.ppendinginstalment = lists.length;
            });
        } else {
            alert("Unable to Update all Installment.Because this Installment under Processing")
        }
    }




    item(data) {
        console.log(data);
        this.udate = data.ddate;
        this.uamount = data.pamount;
        this.ustatus = data.status;
        this.upayment = data.dpaytype;
        console.log(this.udate, this.uamount)
        this.deleteoneid = data.id;
        this.deleteallid = data.loan_number;
    }












    deleteone() {
        this.http.post('https://bssservice.herokuapp.com/advance/deleteinstalment', { "id": this.deleteoneid }).subscribe((data: any) => {
            alert("Delete This Instalment");
            this.click();
        });

    }
    deleteall() {
        console.log(this.deleteallid);
        this.http.post('https://bssservice.herokuapp.com/advance/fetchadvance', { "id": this.deleteallid }).subscribe((data: any) => {
            let lists = data.data;
            console.log(lists)
            this.checkno = 0;
            for (let i = 0; i < lists.length; i++) {
                if (lists[i].status == 'clear') {
                    this.checkno = 1;
                }
            }
            this.chcekdelete();
        });
    }

    chcekdelete() {
        if (this.checkno == 0) {
            this.http.post('https://bssservice.herokuapp.com/advance/deleteadvance', { "id": this.deleteallid }).subscribe((data: any) => {
                alert("Delete all Instalment");
                this.click();
            });
        } else {
            alert("Unable to Delete all Installment.Because this Installment under Processing")
        }

    }






    public attach() {

        this.ng4LoadingSpinnerService.show();
        setTimeout(function () {
            alert("Uploaded Sccessfully");
            this.ng4LoadingSpinnerService.hide();
        }.bind(this), 6000);

        const fd = new FormData();
        fd.append('filetoupload', this.selectedfile, this.selectedfile.name);
        console.log(fd);
        this.http.post('https://bssservice.herokuapp.com/advance/advcancebulk', fd)
            .subscribe((data: any) => {
                console.log(data.data);
            });
    }

    onfileselected(event) {
        console.log(event);
        this.selectedfile = event.target.files[0];
    }



    deleteinstalment(data) {
        this.deleteoneid = data.id;
        this.deleteallid = data.loan_number;
    }
}

class Adduser {
    employee_id: string;
    employee_name: string;
    bank: string;
    pamount: number;
    pbalanceamount: number;
    pinstalment: number;
    ppendinginstalment: number;
    dfullcash: boolean;
    dpaytype: string;
    ddate: string;
    damount: number;
    daddi: string;
    dnaration: string;
    advance_type: string;
    company_name: string;
    site: string;
    loan_number: number;









}










