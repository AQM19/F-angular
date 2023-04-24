import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, delay, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class EmailValidator implements AsyncValidator {

    validate(control: AbstractControl<any, any>): Observable<ValidationErrors | null> {

        const email = control.value;
        console.log({ email });

        return new Observable<ValidationErrors | null>((subscriber) => {
            console.log({ email });

            if (email === 'korbatos@gmail.com') {
                subscriber.next({ emailTaken: true });
                subscriber.complete();
            }

            subscriber.next(null);
            subscriber.complete();

        });

    }

}