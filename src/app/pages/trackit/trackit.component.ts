import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trackit',
  templateUrl: './trackit.component.html',
  styleUrls: ['./trackit.component.scss']
})
export class TrackitComponent implements OnInit {
  show: boolean;
  trackingList = [
    {
      'id': 1,
       'sName': 'liquam tincidunt mauris eu risus',
       'description': 'Donsectetur adipisci',
       'sType': 'Donsectetur adipisci',
       'owner': 'Donsectetur adipisci',
       'link': '',
    },
    {
      'id': 2,
       'sName': 'liquam tincidunt mauris eu risus',
       'description': 'Donsectetur adipisci',
       'sType': 'Donsectetur adipisci',
       'owner': 'Donsectetur adipisci',
       'link': '',
    },
    {
      'id': 3,
       'sName': 'liquam tincidunt mauris eu risus',
       'description': 'Donsectetur adipisci',
       'sType': 'Donsectetur adipisci',
       'owner': 'Donsectetur adipisci',
       'link': '',
    },
    {
      'id': 4,
       'sName': 'liquam tincidunt mauris eu risus',
       'description': 'Donsectetur adipisci',
       'sType': 'Donsectetur adipisci',
       'owner': 'Donsectetur adipisci',
       'link': '',
    },
    {
      'id': 5,
       'sName': 'liquam tincidunt mauris eu risus',
       'description': 'Donsectetur adipisci',
       'sType': 'Donsectetur adipisci',
       'owner': 'Donsectetur adipisci',
       'link': '',
    },
    {
      'id': 6,
       'sName': 'liquam tincidunt mauris eu risus',
       'description': 'Donsectetur adipisci',
       'sType': 'Donsectetur adipisci',
       'owner': 'Donsectetur adipisci',
       'link': '',
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
