
export class CarrierVm implements ICarrierVm {
    carrierId?: number;
    carrierName?: string | undefined;
    carrierMode?: string | undefined;

    constructor(data?: ICarrierVm) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.carrierId = _data["carrierId"];
            this.carrierName = _data["carrierName"];
            this.carrierMode = _data["carrierMode"];
        }
    }

    static fromJS(data: any): CarrierVm {
        data = typeof data === 'object' ? data : {};
        let result = new CarrierVm();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["carrierId"] = this.carrierId;
        data["carrierName"] = this.carrierName;
        data["carrierMode"] = this.carrierMode;
        return data;
    }
}

export interface ICarrierVm {
    carrierId?: number;
    carrierName?: string | undefined;
    carrierMode?: string | undefined;
}