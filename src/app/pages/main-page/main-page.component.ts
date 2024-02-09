import { Component, HostListener, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { ResizeService } from '../../resize/resize.service';
import { TranslateService } from '@ngx-translate/core';
import { routerTransition } from '../../utils/page.animation';
import { Router } from '@angular/router';

import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';

;

/**
 * This page wraps all other pages in application, it contains header, side menu and router outlet for child pages
 */
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  animations: [routerTransition],
  encapsulation: ViewEncapsulation.None
})
export class MainPageComponent {
  type: string;
  id: number;
  name: string;
  count: string;

  // Model for side menu
  menuModel = [
    {
      title: 'BSS Dashboard',
      routerUrl: '/main/dashboard',
      iconClass: 'material-icons',
      iconCode: 'dashboard',
    },


    {
      title: 'Attendance',
      iconClass: 'material-icons',
      iconCode: 'payment',
      children: [
        {
          title: 'Attendance',
          iconClass: 'material-icons',

          routerUrl: '/main/Attendanceall',
        },

      ]
    }

  ];
  // Side menu options
  isSmallMenuMode = false;
  isMenuCollapsed = false;
  isMenuClosed = this.isSmallWidth();
  isOverlayMenuMode = this.isSmallWidth();
  // Side menu animation value. Is used for delay to render content after side panel changes
  sideNavTransitionDuration = 300;
  // Open/close options window
  isOptionsClosed = true;
  // Box layout option
  isBoxedLayout = false;
  // Fixed header option
  isFixedHeader = true;


  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService, private resizeService: ResizeService, translateService: TranslateService, private router: Router) {



    this.type = this.getFromLocal('usertype');
    this.id = this.getFromLocal('user_id');
    this.name = this.getFromLocal('Name');
    this.count = this.getFromLocal('notificount');
    console.log(this.type, this.id, this.name)
    if (this.type === 'Operation Team') {
      this.menuModel = [
        {
          title: 'Operation Management',
          iconClass: 'material-icons',
          iconCode: 'people',
          children: [

            {
              title: 'Complaints',
              iconClass: 'material-icons',
              routerUrl: '/main/Operationcomlist'
            },
            {
              title: 'Training Materials',
              iconClass: 'material-icons',
              routerUrl: '/main/settraininglist',
            },
            {
              title: 'FAQ',
              iconClass: 'material-icons',
              routerUrl: '/main/FAQ',
            },
            {
              title: 'Configure Number',
              iconClass: 'material-icons',
              routerUrl: '/main/Configurenumber',
            },
            {
              title: 'SMS',
              iconClass: 'material-icons',
              routerUrl: '/main/sms'
            },
            {
              title: 'Closed Issues',
              iconClass: 'material-icons',
              routerUrl: '/main/Closedissues'
            },
            {
              title: 'Attendance',
              iconClass: 'material-icons',
              routerUrl: '/main/Attendanceall'
            },
            // {
            //   title: 'Point Tracking',
            //   iconClass: 'material-icons',
            //   routerUrl: '/main/Pointtracking'
            // },
            // {
            //   title: 'Employee Tracking',
            //   iconClass: 'material-icons',
            //   routerUrl: '/main/employeetracking'
            // },
          ]
        },
      ];
    }






    else if (this.type === 'Sales Team') {

      this.menuModel = [
        {
          title: 'Sales Team',
          iconClass: 'material-icons',
          iconCode: 'assignment_ind',
          children: [
            {
              title: 'View Site',
              iconClass: 'material-icons',
              // iconCode: 'work',
              routerUrl: '/main/clientsite'
            },
            {
              title: 'Contract',
              iconClass: 'material-icons',
              // iconCode: 'work',
              routerUrl: '/main/contractpage'
            },

          ]
        }
      ];






    } else if (this.type === 'Finance Team') {

      this.menuModel = [

      ];






    } else if (this.type === 'Human Resource') {
      this.menuModel = [
        {
          title: 'BSS Dashboard',
          routerUrl: '/main/dashboard',
          iconClass: 'material-icons',
          iconCode: 'dashboard',
        },
        {
          title: 'Human Resource',
          iconClass: 'material-icons',
          iconCode: 'person_outline',
          children: [
            {
              title: 'Resigned Employees',
              iconClass: 'material-icons',
              // iconCode: 'work',
              routerUrl: '/main/resignedemployees'
            },
            {
              title: 'Left Employees',
              iconClass: 'material-icons',
              // iconCode: 'work',
              routerUrl: '/main/leftemployee'
            },
            {
              title: 'View Employees',
              iconClass: 'material-icons',
              // iconCode: 'work',
              routerUrl: '/main/viewemployees'
            },
            {
              title: 'Add Employees',
              iconClass: 'material-icons',
              // iconCode: 'work',
              routerUrl: '/main/addemployee'
            },
            {
              title: 'Uniforms',
              iconClass: 'material-icons',
              // iconCode: 'work',
              routerUrl: '/main/uniformlist'
            },
            {
              title: 'Add Uniforms',
              iconClass: 'material-icons',
              // iconCode: 'work',
              routerUrl: '/main/adduniform'
            },
            {
              title: 'Create QR',
              iconClass: 'material-icons',
              // iconCode: 'work',
              routerUrl: '/main/Createqr'
            },
            {
              title: 'Add Items',
              iconClass: 'material-icons',
              // iconCode: 'work',
              routerUrl: '/main/items'
            },
            {
              title: 'Add Employee Type',
              iconClass: 'material-icons',
              // iconCode: 'work',
              routerUrl: '/main/employee_type'
            }
          ]
        },

      ];






    } else if (this.type === 'Payroll Management') {
      this.menuModel = [
        {
          title: 'Payroll Management',
          iconClass: 'material-icons',
          iconCode: 'subtitles',
          children: [
            {
              title: 'Employee List',
              iconClass: 'material-icons',
              // iconCode: 'work',
              routerUrl: '/main/payrollemployeestatus'
            },
            {
              title: 'Advance',
              iconClass: 'material-icons',
              // iconCode: 'work',
              routerUrl: '/main/advance'
            },
            {
              title: 'Salary Process',
              iconClass: 'material-icons',
              // iconCode: 'work',
              routerUrl: '/main/salaryprocess'
            },
            {
              title: 'Manual unit Entry',
              iconClass: 'material-icons',
              // iconCode: 'work',
              routerUrl: '/main/unitentry'
            }, {
              title: 'Manual Salary Entry',
              iconClass: 'material-icons',
              // iconCode: 'work',
              routerUrl: '/main/Manualentry'
            },
            {
              title: 'Payment Process Check',
              iconClass: 'material-icons',
              // iconCode: 'work',
              routerUrl: '/main/paymentprocessstatus'
            }
          ]
        }
      ];
    }

    else if (this.type === 'User Management') {
      this.menuModel = [
        {
          title: 'User Management',
          iconClass: 'material-icons',
          iconCode: 'group',
          children: [
            {
              title: 'View Users',
              iconClass: 'material-icons',
              // iconCode: 'work',
              routerUrl: '/main/viewuser'
            }

          ]
        },
      ];
    }


    else if (this.type === 'Uniform') {
      this.menuModel = [
        {
          title: 'Uniform Management',
          iconClass: 'material-icons',
          iconCode: 'group',
          children: [
            {
              title: 'Uniform List',
              iconClass: 'material-icons',
              // iconCode: 'work',
              routerUrl: '/main/uniformlist'
            }
          ]
        },
      ];
    }

    else if (this.type === 'Finance Team') {
      this.menuModel = [
        {
          title: 'Finance Management',
          iconClass: 'material-icons',
          iconCode: 'group',
          children: [
            {
              title: 'Finance List',
              iconClass: 'material-icons',
              // iconCode: 'work',
              routerUrl: '/main/listdetails'
            },
            {
              title: 'New Income',
              iconClass: 'material-icons',
              // iconCode: 'work',
              routerUrl: '/main/createbill'
            }
          ]
        },
      ];
    }































    else if (this.type === 'Admin') {
      this.menuModel = [
        {
          title: 'BSS Dashboard',
          routerUrl: '/main/dashboard',
          iconClass: 'material-icons',
          iconCode: 'dashboard',
        },
        {
          title: 'Operation Management',
          iconClass: 'material-icons',
          iconCode: 'settings_applications',
          children: [
            {
              title: 'Complaints',
              iconClass: 'material-icons',

              routerUrl: '/main/Operationcomlist'
            },
            {
              title: 'Closed Complaints',
              iconClass: 'material-icons',

              routerUrl: '/main/Closedissues'
            },
            {
              title: 'Training Materials',
              iconClass: 'material-icons',

              routerUrl: '/main/settraininglist',
            },
            {
              title: 'FAQ',
              iconClass: 'material-icons',

              routerUrl: '/main/FAQ',
            },
            {
              title: 'SMS',
              iconClass: 'material-icons',

              routerUrl: '/main/sms'
            },
            // {
            //   title: 'Client Details',
            //   iconClass: 'material-icons',
            //   routerUrl: '/main/opsclient'
            // },
            {
              title: 'Attendance',
              iconClass: 'material-icons',
              routerUrl: '/main/Attendanceall'
            },
            {
              title: 'Configure Number',
              iconClass: 'material-icons',

              routerUrl: '/main/Configurenumber',
            },
          ]
        },
        // {
        //   title: 'Point Tracking',
        //   iconClass: 'material-icons',
        //   iconCode: 'my_location',
        //   routerUrl: '/main/Pointtracking'
        // },
        // {
        //   title: 'Employee Tracking',
        //   iconClass: 'material-icons',
        //   iconCode: 'location_on',
        //   routerUrl: '/main/employeetracking'
        // },
        {
          title: 'User Management',
          iconClass: 'material-icons',
          iconCode: 'group',
          children: [
            {
              title: 'View Users',
              iconClass: 'material-icons',
              // iconCode: 'work',
              routerUrl: '/main/viewuser'
            }
          ]
        },
        {
          title: 'Payroll Management',
          iconClass: 'material-icons',
          iconCode: 'subtitles',
          children: [
            {
              title: 'Advance',
              iconClass: 'material-icons',
              // iconCode: 'work',
              routerUrl: '/main/advance'
            },
            {
              title: 'Manual unit Entry',
              iconClass: 'material-icons',
              // iconCode: 'work',
              routerUrl: '/main/unitentry'
            },
            {
              title: 'Manual Salary Entry',
              iconClass: 'material-icons',
              // iconCode: 'work',
              routerUrl: '/main/Manualentry'
            },
            {
              title: 'Salary Process',
              iconClass: 'material-icons',
              // iconCode: 'work',
              routerUrl: '/main/salaryprocess'
            },
            // {
            //   title: 'Reports',
            //   iconClass: 'material-icons',
            //   // iconCode: 'work',
            //   routerUrl: '/main/reportsall'
            // },
            {
              title: 'Employee List',
              iconClass: 'material-icons',
              // iconCode: 'work',
              routerUrl: '/main/payrollemployeestatus'
            },
            // {
            //   title: 'Payment Process Check',
            //   iconClass: 'material-icons',
            //   // iconCode: 'work',
            //   routerUrl: '/main/paymentprocessstatus'
            // }
          ]
        },
        {
          title: 'Human Resoucre',
          iconClass: 'material-icons',
          iconCode: 'person_outline',
          children: [
            {
              title: 'Add Employees',
              iconClass: 'material-icons',
              // iconCode: 'work',
              routerUrl: '/main/addemployee'
            },
            {
              title: 'View Employees',
              iconClass: 'material-icons',
              // iconCode: 'work',
              routerUrl: '/main/viewemployees'
            },
            {
              title: 'Employees Reports',
              iconClass: 'material-icons',
              // iconCode: 'work',
              routerUrl: '/main/employeereportss'
            },
            {
              title: 'Resigned Employees',
              iconClass: 'material-icons',
              // iconCode: 'work',
              routerUrl: '/main/resignedemployees'
            },
            {
              title: 'Left Employees',
              iconClass: 'material-icons',
              // iconCode: 'work',
              routerUrl: '/main/leftemployee'
            },
            {
              title: 'Add Uniforms',
              iconClass: 'material-icons',
              // iconCode: 'work',
              routerUrl: '/main/adduniform'
            },
            {
              title: 'Uniforms',
              iconClass: 'material-icons',
              // iconCode: 'work',
              routerUrl: '/main/uniformlist'
            },
            {
              title: 'Create QR',
              iconClass: 'material-icons',
              // iconCode: 'work',
              routerUrl: '/main/Createqr'
            }

          ]
        },
        {
          title: 'Sales Team',
          iconClass: 'material-icons',
          iconCode: 'add_shopping_cart',
          children: [
            {
              title: 'View Site',
              iconClass: 'material-icons',
              // iconCode: 'work',
              routerUrl: '/main/clientsite'
            },
            {
              title: 'Contract',
              iconClass: 'material-icons',
              // iconCode: 'work',
              routerUrl: '/main/contractpage'
            },
          ]
        },
        {
          title: 'Master Tables',
          iconClass: 'material-icons',
          iconCode: 'format_list_bulleted',
          children: [
            {
              title: 'Add Company',
              iconClass: 'material-icons',
              // iconCode: 'work',
              routerUrl: '/main/addcompany'
            },
            {
              title: 'Add Items',
              iconClass: 'material-icons',
              // iconCode: 'work',
              routerUrl: '/main/items'
            },
            {
              title: 'Add Employee Type',
              iconClass: 'material-icons',
              // iconCode: 'work',
              routerUrl: '/main/employee_type'
            }
          ]
        },
        {
          title: 'Reports',
          iconClass: 'material-icons',
          iconCode: 'note',
          children: [
            {
              title: 'Employee List',
              iconClass: 'material-icons',
              // iconCode: 'work',
              routerUrl: '/main/reportemplist'
            },
            {
              title: 'Designation',
              iconClass: 'material-icons',
              // iconCode: 'work',
              routerUrl: '/main/reportdesignation'
            },
            {
              title: 'Unit Master',
              iconClass: 'material-icons',
              // iconCode: 'work',
              routerUrl: '/main/reportunitmaster'
            },
            {
              title: 'EMI Voucher',
              iconClass: 'material-icons',
              // iconCode: 'work',
              routerUrl: '/main/reportemivoucher'
            },
            {
              title: 'EMI Recovery',
              iconClass: 'material-icons',
              // iconCode: 'work',
              routerUrl: '/main/recovery'
            },
            {
              title: 'Loan & Advance Outstanding',
              iconClass: 'material-icons',
              // iconCode: 'work',
              routerUrl: '/main/reportloanadvance'
            },
            {
              title: 'Total Pay',
              iconClass: 'material-icons',
              // iconCode: 'work',
              routerUrl: '/main/reporttotalpay'
            },
            {
              title: 'PAY SLIP',
              iconClass: 'material-icons',
              // iconCode: 'work',
              routerUrl: '/main/payslip'
            },
            {
              title: 'Wage Sheet',
              iconClass: 'material-icons',
              // iconCode: 'work',
              routerUrl: '/main/reportwagesheet'
            },
            {
              title: 'CASH & BANK STATEMENT',
              iconClass: 'material-icons',
              // iconCode: 'work',
              routerUrl: '/main/reportcashandbankstatement'
            },
            {
              title: 'PF ECR FORMAT',
              iconClass: 'material-icons',
              // iconCode: 'work',
              routerUrl: '/main/reportpfecrformat'
            },
            {
              title: 'ESI FORMAT',
              iconClass: 'material-icons',
              // iconCode: 'work',
              routerUrl: '/main/reportesiformat'
            },
            {
              title: 'PROF TAX Form - 6',
              iconClass: 'material-icons',
              // iconCode: 'work',
              routerUrl: '/main/reportproftaxform-6'
            },
            {
              title: 'Form - D',
              iconClass: 'material-icons',
              // iconCode: 'work',
              routerUrl: '/main/reportform-d'
            },
            {
              title: 'Form - 36 B',
              iconClass: 'material-icons',
              // iconCode: 'work',
              routerUrl: '/main/reportform-36b'
            },
            {
              title: 'FORM No. XXVIII',
              iconClass: 'material-icons',
              // iconCode: 'work',
              routerUrl: '/main/reportform-XXVIII'
            },
            {
              title: 'FORM No. XXIX',
              iconClass: 'material-icons',
              // iconCode: 'work',
              routerUrl: '/main/reportform-XXIX'
            },
            {
              title: 'FORM No. XXVI',
              iconClass: 'material-icons',
              // iconCode: 'work',
              routerUrl: '/main/reportform-XXVI'
            },
            {
              title: 'FORM No. XXVII',
              iconClass: 'material-icons',
              // iconCode: 'work',
              routerUrl: '/main/reportform-XXVII'
            }
          ]
        },
        {
          title: 'Bulk Upload',
          iconClass: 'material-icons',
          iconCode: 'upload',
          children: [
            {
              title: 'Add New Employee',
              iconClass: 'material-icons',
              // iconCode: 'work',
              routerUrl: '/main/addNewEmployee'
            },
            {
              title: 'Add New Master Unit Rate',
              iconClass: 'material-icons',
              // iconCode: 'work',
              routerUrl: '/main/addNewMasterUnitRate'
            },
            {
              title: 'Add New Unit Master Sales Details',
              iconClass: 'material-icons',
              // iconCode: 'work',
              routerUrl: '/main/addNewUnitMasterSalesDetails'
            },
            {
              title: 'Add New Emi Voucher',
              iconClass: 'material-icons',
              // iconCode: 'work',
              routerUrl: ''
            },
          ]
        },
        {
          title: 'Notification',
          iconClass: 'material-icons',
          iconCode: 'notifications',
          children: [
            {
              title: 'New Notification',
              iconClass: 'material-icons',
              // iconCode: 'work',
              routerUrl: '/main/notificationnew'
            },
            {
              title: 'View Notification',
              iconClass: 'material-icons',
              // iconCode: 'work',
              routerUrl: '/main/notificationread'
            }
          ]
        }





















      ];
    }




    this.onResize();
    // this language will be used as a fallback when a translation isn't found in the current language
    translateService.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translateService.use('en');















  }


  /**
   * Window resize listener
   */
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.resizeService.resizeInformer$.next();
    if (this.isSmallWidth()) {
      this.isOverlayMenuMode = true;
      this.isMenuClosed = true;
      setTimeout(() => this.resizeService.resizeInformer$.next(), this.sideNavTransitionDuration + 700);
    }
  }

  /**
   * Call resize service after side panel mode changes
   */
  onSideNavModeChange() {
    setTimeout(() => {
      this.resizeService.resizeInformer$.next();
    }, this.sideNavTransitionDuration)
  }

  ngOnInit(): void {
  }


  addapi1() {
    alert("No Notification Found");
  }

  onclick() {
    this.router.navigate(['']);
  }
  /**
   * Call resize service after box mode changes
   */
  toggleBoxed() {
    this.isBoxedLayout = !this.isBoxedLayout;
    setTimeout(() => {
      this.resizeService.resizeInformer$.next()
    }, 0);
  }

  toggleCompactMenu() {
    this.isSmallMenuMode = !this.isSmallMenuMode;
    setTimeout(() => {
      this.resizeService.resizeInformer$.next()
    }, this.sideNavTransitionDuration);
  }

  notifi() {
    this.router.navigate(['main/notificationnew'])
  }

  /**
   * Call resize service after side panel mode changes
   */
  toggleOverlayMode() {
    this.isOverlayMenuMode = !this.isOverlayMenuMode;
    setTimeout(() => {
      this.resizeService.resizeInformer$.next()
    }, this.sideNavTransitionDuration);
  }

  /**
   * Changes header mode
   */
  toggleFixedHeader() {
    this.isFixedHeader = !this.isFixedHeader;
  }
  4
  /**
   * Return url as state, that will trigger animation when url changes
   * @param outlet
   * @returns {string}
   */
  getState(outlet) {
    return this.router.url;
  }
  private isSmallWidth() {
    return window.innerWidth < 700;
  }

  getFromLocal(key): any {
    // console.log('recieved= key:' + key);
    return this.storage.get(key);
  }
}
