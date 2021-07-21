
import { observable } from 'mobx';
import { IFile } from './IFile';
import { IFileStatus } from './IFileStatus';
import HttpWrapperService from '../../services/http/httpService';
import EventsService from '../../services/pubsub/events.service';

export class IFiles {
  @observable pictures: IFile[] = [];
  entityId = null;

  constructor() {

    this.createSlot();
  }

  loadFiles(id) {

    // const body = {
    //   data: {
    //     entityId: id
    //   },
    //   proxy: {
    //     module: 'images',
    //     method: 'getFiles',
    //   }
    // };
    const body = {
      find: {
        _id: id,
      },
      collection: "users",
      method: "findOne"
    }
    HttpWrapperService.postJson('api/private/bullet', body).then((result) => {
      const { data } = result;
      debugger;

      if (!result.success || !result.data) {
        // this.pictures.push( new IFile( {}, this.serverUrl ) );
        return;
      }
      const { _id, files = {} } = data;
      this.entityId = _id;
      this.pictures = this.createFileListFromDB(files);
      this.pictures.push(new IFile({}));
      // files.forEach( file => {

      //   this.pictures.unshift( new IFile( file ) );
      // } );
      // this.pictures.push( new IFile( {}, this.serverUrl ) );

    });
  }

  loadData(obj) {
    const { _id, files = {} } = obj;
    this.entityId = _id;
    this.pictures = this.createFileListFromDB(files);
    this.pictures.push(new IFile({}));
  }

  createFileListFromDB(files: any = {}) {
    const { dir, list } = files;
    if (!dir || !list || !list.length) {
      return [];
    }
    const result = [];
    list.forEach(f => {
      const ifile = new IFile();

      ifile.originalFileName = f;
      ifile.filePath = `${dir}/${f}`;
      ifile.fileUrl = `${EventsService.serverUrl}/${dir}/${f}`;
      ifile.imageSrc = ifile.fileUrl;
      ifile.status = IFileStatus.ExistentFile;

      result.push(ifile)
    })

    return result;
  }

  async saveFiles(entityWithId, collection, fileOptions = {}, override = {}) {
    return this.saveFileList(this.pictures, entityWithId, collection, fileOptions, override);
  }

  async saveFileList(pictures: IFile[], entityWithId, collection, fileOptions: any = {}, override = {}) {
    const picturesData: FormData = new FormData();
    const deletedFiles = [];

    for (let i = 0; i < pictures.length; i++) {
      const imageFile = pictures[i];
      if (imageFile.status === IFileStatus.ReplacedFile) {
        imageFile.addFileToForm(picturesData);
        deletedFiles.push(imageFile.originalFileName);
      }

      if (imageFile.status === IFileStatus.AddedFile) {
        imageFile.addFileToForm(picturesData);
      }
    }

    // const route = `api/private/formdir/${ id }/images`;

    pictures.filter(el => el.status === IFileStatus.DeletedFile)
      .forEach(el => deletedFiles.push(el.originalFileName));

    // const replacedFiles = [];
    // pictures.filter( el => el.status === IFileStatus.ReplacedFile )
    //   .forEach( el => replacedFiles.push( {
    //     _id: el._id,
    //     filePath: el.filePath
    //   } ) );

    const mergedFileOptions = {
      directory: entityWithId.guid || entityWithId._id || '',
      prop: fileOptions.prop || 'files',
      keepFileNames: fileOptions.keepFileNames || true,
      deletedFiles,
      replacedFiles: [],
      ...fileOptions
    }
    const body: any = {
      body: entityWithId,
      method: 'insertOrUpdate',
      collection,
      ...override,
      fileOptions: mergedFileOptions
    };
    picturesData.append('data', JSON.stringify(body));
    // picturesData.append( 'body', JSON.stringify( body ) );

    const respPictures = await HttpWrapperService.postFormData('api/private/bullet', picturesData);
    return respPictures;
  }

  // addFileToForm(formInstance, fData: IFile) {
  //   if(!fData) {
  //     return false;
  //   }
  //   if(!fData.shouldBeSaved()) {
  //     return;
  //   }
  //   fData.addFileToForm(formInstance);
  //   return true;
  //
  //   // const info = `${fData._id},${fData.status}`;
  //   // formInstance.append(info, fData.fileContent, fData.fileContent.fileName);
  // }

  createSlot() {
    this.pictures.push(new IFile({}));
  }
}
