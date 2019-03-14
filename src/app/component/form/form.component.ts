import { Component, OnInit } from '@angular/core';
import { Form } from '../form';
import { FormService } from '../../service/form/form.service';
// import { FormData } from '../../schema/formSchema';
import {NgForm} from '@angular/forms';
import { FormDataSet, Test } from '../../schema/formSchema';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formDataSet = new FormDataSet();
  test = new Test();
  // test.section1.header = 'asd';
  section1: object[];
  header: object[];

  constructor(private formService: FormService) {
    this.formService.getFormData().subscribe( (formDataSet: any) => {
      this.formDataSet = formDataSet.result;
      console.log(JSON.stringify(this.formDataSet));
    });
   }

    // model = new Form(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
    submitted = false;
    onSubmit() { this.submitted = true; }

  ngOnInit() {
  }

}
