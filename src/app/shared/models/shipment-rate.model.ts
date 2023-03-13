export class ShipmentRateVm implements IShipmentRateVm {
    shipmentRateId?: number;
    shipmentRateClass?: string | undefined;
    shipmentRateDescription?: string | undefined;

    constructor(data?: IShipmentRateVm) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.shipmentRateId = _data["shipmentRateId"];
            this.shipmentRateClass = _data["shipmentRateClass"];
            this.shipmentRateDescription = _data["shipmentRateDescription"];
        }
    }

    static fromJS(data: any): ShipmentRateVm {
        data = typeof data === 'object' ? data : {};
        let result = new ShipmentRateVm();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["shipmentRateId"] = this.shipmentRateId;
        data["shipmentRateClass"] = this.shipmentRateClass;
        data["shipmentRateDescription"] = this.shipmentRateDescription;
        return data;
    }
}

export interface IShipmentRateVm {
    shipmentRateId?: number;
    shipmentRateClass?: string | undefined;
    shipmentRateDescription?: string | undefined;
}
