import { TemplateRef } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core'
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { DownloadRequest } from 'src/app/_proto/filestore.pb'
import { FileService } from 'src/app/_services/files.service'

@Component({
  selector: 'app-imagecode',
  templateUrl: './imagecode.component.html',
  styleUrls: ['./imagecode.component.css'],
})
export class ImagecodeComponent implements OnInit {
  @Input() code: string = "";
  @Input() key: string = "";
  @Input() height: string = '64px'
  @Input() width: string = '64px'
  image: string = ""
  constructor(private fileService: FileService, private modalService: BsModalService) {}

  ngOnInit(): void {
    this._download()
  }

  _download() {
    let request: DownloadRequest = new DownloadRequest()
    request.name = this.key
    request.code = this.code
    console.log(request)
    this.fileService.downloadFile(request).subscribe((base64) => {
      if (base64 != null) {
        this.image = base64.length > 0 ? base64 : './assets/images/no-image.png'
      }
    })
  }
  modalRef!: BsModalRef

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template)
    this.modalRef.setClass('modal-lg');
  }

}
