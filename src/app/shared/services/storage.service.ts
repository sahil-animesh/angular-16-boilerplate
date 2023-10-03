import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/enviroments/enviroment';
import { STORAGE_TYPE } from '../constant-files/constant';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  /**
   * below function is implemented to set items to the browser storage
   */
  setItemToStorage(key: string,data: string) {
    data = this.encryptData(data);
    environment.storageType === STORAGE_TYPE.LOCAL_STORAGE ? localStorage.setItem(key,data) : sessionStorage.setItem(key,data);
  }

  /**
   * below implementation is done extract data from the browser storage 
   */
  getFromStorage(key: string) {
    const data = (environment.storageType === STORAGE_TYPE.LOCAL_STORAGE ? localStorage.getItem(key) : sessionStorage.getItem(key)) || '';
    return this.decryptData(data);
  }

  /**
   * 
   * @param data | is data to be encrypted,
   * @param secretKey | secretKey is key encrypt and decrypt the data,
   * @returns | encrypted string,
   */
  encryptData(data: string): string {
    return CryptoJS.AES.encrypt(data, environment.secretKey).toString();
  }
  
  /**
   * 
   * @param encryptedData | encrypted data,
   * @param secretKey | secretKey is key encrypt and decrypt the data,
   * @returns | decrypted string
   */
  decryptData(encryptedData: string): string {
    return encryptedData ? CryptoJS.AES.decrypt(encryptedData, environment.secretKey).toString(CryptoJS.enc.Utf8) : '';
  }
  
}
