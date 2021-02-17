import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

  user: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) {
    this.user = this.afAuth.authState
  }

  login() {
    const popup = window.open('htt[://localhost', '_blank', 'height=700, width=800')
  }

  customSignIn(token) {
    return this.afAuth.auth.singInWithCustomToken(token).then(() => window.close())
  }

}
