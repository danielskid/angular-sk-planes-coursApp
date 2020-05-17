import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {User, UserInfo} from 'firebase';

export interface Credentials {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userInfo: User;
  readonly authState$ = this.fireAuth.authState;

  constructor(private fireAuth: AngularFireAuth) {}

  login(credentials: Credentials ) {
    return this.fireAuth
      .signInWithEmailAndPassword(credentials.email, credentials.password)
        .then(userCredential => this.userInfo = userCredential.user);
  }

  get getUserInfo(): User {
    return this.userInfo;
  }

  isLoggedIn(): boolean {
    return !!this.userInfo;
  }

  logout() {
    return this.fireAuth
      .signOut()
        .then(() => this.userInfo = null);
  }

  register(credentials: { email: string, password: string }) {
    return this.fireAuth
      .createUserWithEmailAndPassword(credentials.email, credentials.password)
        .then(userCredentials => this.userInfo = userCredentials.user);
  }
}
