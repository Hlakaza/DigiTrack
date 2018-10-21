import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../helpers';
import { ScriptLoaderService } from '../../../../_services/script-loader.service';


@Component({
    selector: '.m-grid__item.m-grid__item--fluid.m-wrapper',
    templateUrl: './trackbase.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class TrackbaseComponent implements OnInit, AfterViewInit {

    show: boolean;
    sList = [
      {
        'id': 1,
         'sName': 'liquam tincidunt mauris eu risus',
         'sType': 'Donsectetur adipisci',
         'owner': 'Donsectetur adipisci',
         'manager': 'Donsectetur adipisci',
         'link': '',
      },
      {
        'id': 2,
         'sName': 'liquam tincidunt mauris eu risus',
         'sType': 'Donsectetur adipisci',
         'owner': 'Donsectetur adipisci',
         'manager': 'Donsectetur adipisci',
         'link': '',
      },
      {
        'id': 3,
         'sName': 'liquam tincidunt mauris eu risus',
         'sType': 'Donsectetur adipisci',
         'owner': 'Donsectetur adipisci',
         'manager': 'Donsectetur adipisci',
         'link': '',
      },
      {
        'id': 4,
         'sName': 'liquam tincidunt mauris eu risus',
         'sType': 'Donsectetur adipisci',
         'owner': 'Donsectetur adipisci',
         'manager': 'Donsectetur adipisci',
         'link': '',
      },
      {
        'id': 5,
         'sName': 'liquam tincidunt mauris eu risus',
         'sType': 'Donsectetur adipisci',
         'owner': 'Donsectetur adipisci',
         'manager': 'Donsectetur adipisci',
         'link': '',
      },
      {
        'id': 6,
         'sName': 'liquam tincidunt mauris eu risus',
         'sType': 'Donsectetur adipisci',
         'owner': 'Donsectetur adipisci',
         'manager': 'Donsectetur adipisci',
         'link': '',
      }
    ];
    constructor(private _script: ScriptLoaderService) {}
    ngOnInit() {

    }
    ngAfterViewInit() {
        this._script.load('.m-grid__item.m-grid__item--fluid.m-wrapper',
            'assets/app/js/dashboard.js');
    }

}
