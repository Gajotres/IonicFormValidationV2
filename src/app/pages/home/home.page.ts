import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    submitted = false;
	authForm: FormGroup;

	constructor(private router: Router, private formBuilder: FormBuilder) { }

	ngOnInit() {
        this.authForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        }, {});
	}

    onSubmit(value: any): void { 
        this.submitted = true;

        // Stop if the form validation has failed
        if (this.authForm.invalid) {
            return;
        }

        this.router.navigateByUrl('/auth');
    }

    onReset() {
        this.submitted = false;
        this.authForm.reset();
    }    

	get frm() { return this.authForm.controls; }    
}
