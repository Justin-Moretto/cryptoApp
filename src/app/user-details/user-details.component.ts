import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import * as firebase from 'firebase/app';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  wallets;

  constructor(public auth: AuthService, private http: HttpClient) { }

  ngOnInit(): void {
  }

  getWallet() {

  }
}
