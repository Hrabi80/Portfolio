import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactService } from '../_services/contact.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  form!:FormGroup;
  constructor(private fb : FormBuilder,
              private service : ContactService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      mail:  ['', [Validators.required,Validators.email]],
      message : ['',[Validators.required]]
    });
  }

  send(){
    if (this.form.valid) {
  

      this.service.AddToContact(this.form.value).then(res=>{
        console.log(res);
        console.log("anny");
        swal.fire(
          'Thank you!',
          'i will respond to your message upon my return',
          'success'
        )
      }).catch(error => {
        console.log(error);
        swal.fire(
          'Opss!',
          'server error ,plase try an other time',
          'success'
        )
      })
      
    } else {
      if(!this.form.get('mail')!.valid){
        swal.fire('Oops...', 'Verify you adress mail!', 'error')
      }else if (!this.form.get('message')!.valid){
        swal.fire('Oops...', 'You forget to send me a message !', 'error')
      }
     
    }
  
    
  }

}
