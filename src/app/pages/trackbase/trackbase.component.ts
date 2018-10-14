import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/components/modals/modal.service';

@Component({
  selector: 'app-trackbase',
  templateUrl: './trackbase.component.html',
  styleUrls: ['./trackbase.component.scss']
})
export class TrackbaseComponent implements OnInit {
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
  constructor(private modal: ModalService) { }
  
  ngOnInit() {
  }

  modalOpen(id) {
     this.modal.open(id);
  }
}
