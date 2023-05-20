import CryptoJS from 'crypto-js';
export default {
    $AES_secret_key:"lalithIsGay@9999!",
    encryptData(data){
        console.log("encrypting data");
        const encryptedData=CryptoJS.AES.encrypt(data,this.$AES_secret_key).toString();
        const hash=CryptoJS.SHA256(encryptedData).toString();
        return {data:encryptedData,hash:hash}
    },
    decryptData(edata){
        console.log("decrypting data");
        const { data,hash } = edata;
        const calculatedHash = CryptoJS.SHA256(data).toString();
        if (calculatedHash ==hash)
        {
            const bytes = CryptoJS.AES.decrypt(data, this.$AES_secret_key);
            const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
            return decryptedData;
        }
        else
        {
            console.log("Data was tampered");
            return "Rengaraj!!"
        }
    }
  };
  