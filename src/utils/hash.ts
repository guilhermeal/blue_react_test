import CryptoJS from 'crypto-js'

export const md5HashGenerator = (value: string) => {
  
  if(!value) {
    return;
  }
  
  return CryptoJS.MD5(value);
};