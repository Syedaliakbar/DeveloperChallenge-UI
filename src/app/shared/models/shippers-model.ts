
export class ShipperVm implements IShipperVm {
    shipperId?: number;
    shipperName?: string | undefined;

    constructor(data?: IShipperVm) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.shipperId = _data["shipperId"];
            this.shipperName = _data["shipperName"];
        }
    }

    static fromJS(data: any): ShipperVm {
        data = typeof data === 'object' ? data : {};
        let result = new ShipperVm();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["shipperId"] = this.shipperId;
        data["shipperName"] = this.shipperName;
        return data;
    }
}

export interface IShipperVm {
    shipperId?: number;
    shipperName?: string | undefined;
}
