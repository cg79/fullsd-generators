import {Injectable} from '@angular/core';
import {IFile} from '../../components/file-component/IFile';
import HttpWrapperService from '../../services/http/httpService';
import {IFileStatus} from './IFileStatus';

@Injectable()
export class FileService {

  constructor(
    ) {
  }

  async setImageForEntity(file: IFile, collectionName, collectionId)  {
    const picturesData: FormData = new FormData();

    picturesData.append('data', JSON.stringify({
      collectionName,
      collectionId,
      filePath: file.filePath ? file.filePath : null
    }));

    file.addFileToForm(picturesData);

    // const route = `api/private/formdir/${collectionId}/logos`;

    const proxy: any = {
      module: 'images',
      method: 'setImageForEntity',
      fileOptions: {
        directory: collectionId
      }
    };

    picturesData.append('proxy', JSON.stringify(proxy));

    const respPictures = await HttpWrapperService.postFormData('api/private', picturesData);
    return respPictures;
  }

  // async saveArrayOfFiles(ifiles, directoryId) {

  //   const deletedFiles = [];
  //   const iDeletedFiles = ifiles.filter(el => el.status === IFileStatus.DeletedFile);

  //   iDeletedFiles.forEach(el => deletedFiles.push(el.toDb()));

  //   const uiReplacedFiles = [];
  //   ifiles.filter(el => el.status === IFileStatus.ReplacedFile)
  //     .forEach(el => uiReplacedFiles.push(el.toDb()));

  //   const picturesData: FormData = new FormData();

  //   let count = 0;
  //   for (let i = 0; i < ifiles.length; i++) {
  //     const p = ifiles[i];

  //     if (p.addFileToForm(picturesData)) {
  //       count ++;
  //     }
  //   }
  //   if (count === 0 && !deletedFiles.length) {
  //     return null;
  //   }

  //   picturesData.append('data', JSON.stringify({
  //     directory: directoryId
  //   }));

  //   // const route = `api/private/formdir/${directoryId}/images`;

  //   const proxy: any = {
  //     module: 'main',
  //     method: 'updateOne',
  //     fileOptions: {
  //       directory: `${directoryId}`,
  //       deletedFiles,
  //       replacedFiles: uiReplacedFiles
  //     }
  //   };

  //   picturesData.append('data', JSON.stringify({
  //     entityId: directoryId,
  //   }));

  //   picturesData.append('proxy', JSON.stringify(proxy));

  //   const respPictures = await HttpWrapperService.postFormData('api/private', picturesData);
  //   if (!respPictures.success) {
  //     return null;
  //   }

  //   const { files, replacedFiles } = respPictures.data;

  //   const fileResult = [];
  //   for (let i = 0; i < ifiles.length; i++) {
  //     const currentFile = ifiles[i];
  //     let savedFile = null;
  //     if (files) {
  //       savedFile = files.find(el => el._id === currentFile._id);
  //       if (savedFile) {
  //         currentFile.updateFilePath(savedFile);
  //       }
  //     }
  //     if (replacedFiles) {
  //       savedFile = replacedFiles.find(el => el._id === currentFile._id);
  //       if (savedFile) {
  //         currentFile.updateFilePath(savedFile);
  //       }
  //     }

  //     if (deletedFiles && deletedFiles.length) {
  //       savedFile = deletedFiles.find(el => el._id === currentFile._id);
  //       if (savedFile) {
  //         currentFile.deleteFilePath();
  //       }
  //     }
  //     currentFile.updateStatus(IFileStatus.ExistentFile);
  //     fileResult.push(currentFile.toDb());
  //   }

  //   return files;
  // }
}
