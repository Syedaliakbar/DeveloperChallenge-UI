
export class ResponseModel implements IResponseModel {
    statusCode?: number;
    messageEng?: string | undefined;
    messageAr?: string | undefined;
    data?: any | undefined;
    exception?: any | undefined;

    constructor(data?: IResponseModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.statusCode = _data["statusCode"];
            this.messageEng = _data["messageEng"];
            this.messageAr = _data["messageAr"];
            this.data = _data["data"];
            this.exception = _data["exception"];
        }
    }

    static fromJS(data: any): ResponseModel {
        data = typeof data === 'object' ? data : {};
        let result = new ResponseModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["statusCode"] = this.statusCode;
        data["messageEng"] = this.messageEng;
        data["messageAr"] = this.messageAr;
        data["data"] = this.data;
        data["exception"] = this.exception;
        return data;
    }
}

export interface IResponseModel {
    statusCode?: number;
    messageEng?: string | undefined;
    messageAr?: string | undefined;
    data?: any | undefined;
    exception?: any | undefined;
}