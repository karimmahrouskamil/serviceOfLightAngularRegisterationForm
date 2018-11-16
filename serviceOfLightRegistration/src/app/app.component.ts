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
    name : new FormControl('')
  })
});
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
