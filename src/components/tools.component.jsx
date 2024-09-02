import Embed from '@editorjs/embed'
import List from '@editorjs/list'
import Image from '@editorjs/image'
import Header from '@editorjs/header'
import Quote from '@editorjs/quote'
import Marker from '@editorjs/marker'
import InLineCode from '@editorjs/inline-code'
import { uploadImage } from '../common/aws'


const uploadImageByFile = (e) => {
    return uploadImage(e).then(url => {
        if (url) {
            return {
                success: 1,
                file: { url }
            };
        } else {
            return {
                success: 0,
                message: 'Image upload failed'
            };
        }
    }).catch(error => {
        return {
            success: 0,
            message: error.message
        };
    });
}

const uploadImageByURL = (url) => {
    return new Promise((resolve, reject) => {
        try {
            resolve(url);
        } catch (error) {
            reject(error);
        }
    }).then(url => {
        return {
            success: 1,
            file: { url }
        };
    }).catch(error => {
        return {
            success: 0,
            message: error.message
        };
    });
}


export const tools = {
    embed: Embed,   
    list: {
        class: List,
        inlineToolbar: true
    },
    image: {
        class: Image,
        config: {
            uploader: {
                uploadByUrl: uploadImageByURL,
                uploadByFile: uploadImageByFile,
            }
        }
    },
    header: {
        class: Header,
        config: {
            placeholder: "Type Heading...",
            levels: [2, 3],
            defaultLevel: 2 
        }
    },
    quote: {
        class: Quote,
        inlineToolbar: true
    },
    marker: Marker,
    inLineCode: InLineCode
}
