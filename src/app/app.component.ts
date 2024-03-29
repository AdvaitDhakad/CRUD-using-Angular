import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { EmpAddEditComponent } from "./emp-add-edit/emp-add-edit.component";
import { EmployeeService } from "./services/employee.service";
import { OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {
  title = "crud-app";
  constructor(
    private _dialog: MatDialog,
    private _empService: EmployeeService
  ) {}

  ngOnInit() {
    this.getEmployees();
  }

  openAddEditEmpForm() {
    this._dialog.open(EmpAddEditComponent);
  }
  getEmployees() {
    this._empService.getEmployees().subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: console.log,
    });
  }
}
