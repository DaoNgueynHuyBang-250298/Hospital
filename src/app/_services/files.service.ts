import { Injectable } from '@angular/core'
import { map } from 'rxjs/operators'
import { ToastrService } from 'ngx-toastr'
import { MyStoreFileClient } from '../_proto/filestore.pbsc'
import { DownloadBase64Rely, DownloadRequest } from '../_proto/filestore.pb'

@Injectable({
  providedIn: 'root',
})
export class FileService {
  constructor(
    private fileClient: MyStoreFileClient,
    private toastr: ToastrService,
  ) {

  }

  downloadFile(request: DownloadRequest){
      return this.fileClient.downloadBase64(request).pipe(
          map((reply: DownloadBase64Rely)=> {
              return reply.data;
          })
      );
  }
}
