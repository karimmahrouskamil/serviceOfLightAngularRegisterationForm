import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { MakhdouminServiceService } from './makhdoumin-service/makhdoumin-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  makhdouminForm: FormGroup;

constructor(public router: Router, public makhdoumServ: MakhdouminServiceService) {

}

ngOnInit() {
this.makhdouminForm = new FormGroup({
  personalInfo : new FormGroup({
    name : new FormControl(''),
    address : new FormGroup({
      buildingNumber : new FormControl(''),
      streetName : new FormControl(''),
      floorNumber: new FormControl(''),
      flatNumber: new FormControl(''),
      zone: new FormControl(''),
      remarks: new FormControl('')
    }),
    Mobiles: new FormGroup({
      MobilePhone : new FormControl(''),
      HomePhone : new FormControl(''),
      fatherPhone : new FormControl(''),
      motherPhone : new FormControl('')
    }),
    school: new FormControl(''),
    birthDate: new FormControl(''),
    onlineInfo: new FormGroup({
      facebook : new FormControl(''),
      email : new FormControl('')
    })
  }),
  churchAndSpiritualInfo: new FormGroup({
    class : new FormControl(''),
    fatherOfConfession : new FormControl(''),
    servantFollowing : new FormControl(''),
    chomosya : new FormControl(''),
    Notes : new FormControl('')
  })
});
}
fromJsonDate(jDate): Date {
  const bDate: Date = new Date(jDate);
  return bDate ;
}
// tslint:disable-next-line:no-trailing-whitespace
onSubmit() {
console.log(this.makhdouminForm.value);
this.makhdoumServ.createNewMakhdoum(this.makhdouminForm.value).subscribe(res => {
  console.log(res);
}, (err) => {
  console.log(err);
});
}
}

  // const vovo = {

  //   'personalInfo': {
  //     'name': 'margo',
  //     'address': {
  //       'buildingNumber': 5,
  //       'streetName': 'Lololoalaoao',
  //       'floorNumber': 32,
  //       'flatNumber': 12,
  //       'zone': 'B',
  //       'remarks': 'left'
  //     },
  //     'Mobiles': {
  //       'MobilePhone': [123123, 432403284],
  //       'HomePhone': [5345345, 56546],
  //       'fatherPhone': [23424, 654623],
  //       'motherPhone': [234234, 54545]
  //     },
  //     'school': 'de la salle',
  //     'birthDate': '2017-08-24T00:00:00.000Z',
  //     'onlineInfo': {
  //       'facebook': 'karim ',
  //       'email': 'kkamil@eg'
  //     }
  //   },
  //   'churchAndSpiritualInfo': {
  //     'class': 1,
  //     'fatherOfConfession': 'father youssef',
  //     'servantFollowing': 'karim kamil',
  //     'chomosya': 'esbaltos',
  //     'Notes': 'quick note'
  //   }
  //   ,
  //   'DateOfCreation': '2017-08-24T00:00:00.000Z'
  // }
