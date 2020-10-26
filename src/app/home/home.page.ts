import { Component } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx';
import { ToastController } from '@ionic/angular';

function dataURLtoFile(dataurl, filename) {
  let arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
  while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, {type: mime});
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  imgUrl: any;
  captionGenerated: any;

  constructor(
    private camera: Camera,
    private toastCtrl: ToastController
  ) {}

  captureImageFromCamera() {
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.DATA_URL
    }).then((res) => {
      this.imgUrl = 'data:image/jpeg;base64,' + res;
    }).catch((error) => {
      console.log(error);
    });
  }

  captureImageFromGallery() {
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL
    }).then((res) => {
      this.imgUrl = 'data:image/jpeg;base64,' + res;
    }).catch((error) => {
      console.log(error);
    });
  }

  async generateCaption() {
    // if(!this.imgUrl) { return; }
    // this.imgUrl = dataURLtoFile(this.imgUrl, 'caption-img.jpeg');
    // let toast = await this.toastCtrl.create({
    //   message: this.imgUrl,
    //   duration: 3000,
    //   position: 'top'
    // });
  
    // toast.onDidDismiss().then(() => {
    //   console.log('Dismissed toast');
    // });
  
    // toast.present();  
    console.log('Hello');
    this.captionGenerated = true;
  }

  hideCaption() {
    this.captionGenerated = false;
  }
}
