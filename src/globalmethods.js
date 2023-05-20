import CryptoJS from 'crypto-js';
export default {
    $AES_secret_key:"lalithIsGay@9999!",
    encryptData(data){
        console.log("encrypting data");
        console.log(this.$AES_secret_key)
        const encryptedData=CryptoJS.AES.encrypt(data,this.$AES_secret_key).toString();
        const hash=CryptoJS.SHA256(encryptedData).toString();
        return {data:encryptedData,hash:hash}
    },
    decryptData(edata){
        console.log("decrypting data");
        const { data,hash } = edata;
        console.log(data)
        console.log(hash)
        const calculatedHash = CryptoJS.SHA256(data).toString();
        console.log(calculatedHash)
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
  