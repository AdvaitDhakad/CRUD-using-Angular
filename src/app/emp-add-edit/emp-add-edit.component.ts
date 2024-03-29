import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { EmployeeService } from "../services/employee.service";
import { Dialog, DialogRef } from "@angular/cdk/dialog";
@Component({
  selector: "app-emp-add-edit",
  templateUrl: "./emp-add-edit.component.html",
  styleUrl: "./emp-add-edit.component.scss",
})
export class EmpAddEditComponent {
  empForm: FormGroup;
  education: string[] = ["Matric", "Diploma", "Graduate", "Post Graduate"];

  constructor(
    private _fb: FormBuilder,
    private empService: EmployeeService,
    private dialogRef: DialogRef<EmpAddEditComponent>
  ) {
    this.empForm = this._fb.group({
      firstName: "",
      lastName: "",
      email: "",
      dob: "",
      gender: "",
      education: "",
      company: "",
      exp: "",
      package: "",
    });
  }
  onFormSubmit() {
    if (this.empForm.valid) {
      this.empService.addEmployee(this.empForm.value).subscribe({
        next: (res: any) => {
          alert("Employee added successfully");
          this.dialogRef.close();
        },
      });
    } else {
      console.log("Please fill all the fields");
    }
  }
}
