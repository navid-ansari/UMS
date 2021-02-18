export class HttpModel{
    url: string;
    request: string;
    data: any;
    params: any

    constructor(
        url: string = '',
        request: string = '',
        data: any = '',
        params: any = ''
    ) {
        this.url = url;
        this.request = request;
        this.data = data;
        this.params = params; 
    }
}

export class HttpFileUploadModel {
    url: string;
    request: string;
    data: any;
    file: File
    constructor(
        url: string = '',
        request: string = '',
        data: any = '',
        file: any = null
    ) {
        this.url = url;
        this.request = request;
        this.data = data;
        this.file = file; 
    }
}

export const ReqType = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE'
}