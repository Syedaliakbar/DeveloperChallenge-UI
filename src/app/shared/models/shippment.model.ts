import { CarrierVm } from "./carrier.model";
import { ShipmentRateVm } from "./shipment-rate.model";
import { ShipperVm } from "./shippers-model";

export class ShipmentVm implements IShipmentVm {
    shipmentId?: number;
    shipperId?: number;
    shipmentDescription?: string | undefined;
    shipmentWeight?: number;
    shipmentRateId?: number;
    carrierId?: number;
    carrier?: CarrierVm;
    shipmentRate?: ShipmentRateVm;
    shipper?: ShipperVm;

    constructor(data?: IShipmentVm) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.shipmentId = _data["shipmentId"];
            this.shipperId = _data["shipperId"];
            this.shipmentDescription = _data["shipmentDescription"];
            this.shipmentWeight = _data["shipmentWeight"];
            this.shipmentRateId = _data["shipmentRateId"];
            this.carrierId = _data["carrierId"];
            this.carrier = _data["carrier"] ? CarrierVm.fromJS(_data["carrier"]) : <any>undefined;
            this.shipmentRate = _data["shipmentRate"] ? ShipmentRateVm.fromJS(_data["shipmentRate"]) : <any>undefined;
            this.shipper = _data["shipper"] ? ShipperVm.fromJS(_data["shipper"]) : <any>undefined;
        }
    }

    static fromJS(data: any): ShipmentVm {
        data = typeof data === 'object' ? data : {};
        let result = new ShipmentVm();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["shipmentId"] = this.shipmentId;
        data["shipperId"] = this.shipperId;
        data["shipmentDescription"] = this.shipmentDescription;
        data["shipmentWeight"] = this.shipmentWeight;
        data["shipmentRateId"] = this.shipmentRateId;
        data["carrierId"] = this.carrierId;
        data["carrier"] = this.carrier ? this.carrier.toJSON() : <any>undefined;
        data["shipmentRate"] = this.shipmentRate ? this.shipmentRate.toJSON() : <any>undefined;
        data["shipper"] = this.shipper ? this.shipper.toJSON() : <any>undefined;
        return data;
    }
}

export interface IShipmentVm {
    shipmentId?: number;
    shipperId?: number;
    shipmentDescription?: string | undefined;
    shipmentWeight?: number;
    shipmentRateId?: number;
    carrierId?: number;
    carrier?: CarrierVm;
    shipmentRate?: ShipmentRateVm;
    shipper?: ShipperVm;
}