import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  makhdouminForm: FormGroup;

constructor(public router: Router) {

}

ngOnInit() {
this.makhdouminForm = new FormGroup({
    name : new FormControl(''),
    address:  new FormControl('')
});
}

// tslint:disable-next-line:no-trailing-whitespace
onSubmit() {
console.log(this.makhdouminForm.value);

}
}
