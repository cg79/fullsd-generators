
import Xhr from './Xhr';
export class XhrService {
  private privateUrl = 'http://localhost:4200';

  constructor() {  }

  async get(url): Promise<any> {
    try {
      const response = await Xhr.get(url);
      return {
        data: response,
        success: true,
      };
    } catch (e) {
      return {
        data: null,
        success: false,
        error: e,
      };
    }
  }

  async post(data, route  = ''): Promise<any> {
    const headers = this.createHeader();

    route = route? `${this.privateUrl}${route}` : this.privateUrl;
    try {
      const axiosResponse = await Xhr.post(route, JSON.stringify(data), headers);

      return Promise.resolve(axiosResponse.message);
        
    }
    catch (error) {
      return {
        data: error,
        success: false,
      };
    }
  }


  private createHeader(): any {

    // const headers = new HttpHeaders(
    //   {
    //     'Content-Type': 'application/json;charset=UTF-8',
    //     Authorization: user ? user.token ? user.token : '' : ''
    //   } );

    const headers = {
      'Content-Type': 'application/json;charset=UTF-8',
    };

    return headers;

  }

}

// export default XhrService;
