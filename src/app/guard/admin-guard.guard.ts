import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthUserService } from '../service/auth/auth-user.service';
import { map } from 'rxjs';

export const adminGuardGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);
  const authService: AuthUserService = inject(AuthUserService);
  return authService.getAllUsers().pipe(
    map((users) => {
      console.log(users);
      if(users.length > 0){
        const isAdmin = users.some((user : any)  => user.data.role === 'admin')
        if (isAdmin) {
          localStorage.setItem('role', users.data.role);
          console.log('đc vào admin nhé');
          return true;
        } else {
          console.log('ko dc vào admin');
        }
      }
      return router.createUrlTree(['/']);
    })
  );
  // return true;
};
