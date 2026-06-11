import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-jobform4',
  templateUrl: './jobform4.component.html',
  styleUrls: ['./jobform4.component.scss']
})
export class Jobform4Component implements OnInit {

  @ViewChild('jobform') jobform !: NgForm

  constructor(private snackbar : MatSnackBar) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.jobform.valid){
      this.jobform.reset()

      this.OpenSnackbar(`job application form is submited successfully...`)
    }
  }


  OpenSnackbar(msg:string){
    this.snackbar.open(msg,'close',{
      duration:3000,
      verticalPosition:'top',
      horizontalPosition:'center'
    })
  }
}
