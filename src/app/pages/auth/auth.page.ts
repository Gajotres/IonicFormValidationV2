import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

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
            
        this.router.navigateByUrl('/home');
    }

    onReset() {
        this.submitted = false;
        this.authForm.reset();
    }    

	get frm() { return this.authForm.controls; }    
}