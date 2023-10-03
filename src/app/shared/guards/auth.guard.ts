import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  return isLoggedIn();
};

/**
 * 
 * @returns | true if token is present in session storage
 */
function isLoggedIn() {
  const token = sessionStorage.getItem('token');
  return token ? true : false;
}
