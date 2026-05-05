import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "./firebase.init";

const imageUploadHandler =async (file)=>{
    // image exists ===>
    const storageRef = 
    ref( storage, `users/${new Date().getTime()}-${file.name}` );
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    console.log("Download URL:", downloadURL);
    return downloadURL;
}
export {imageUploadHandler}


