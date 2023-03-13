import { HttpStatusCode } from "./httpStatusCode";
import { Quotable } from "./random.model";

export class QuotableList implements IQuotableList {
    isSuccessfull?: boolean;
    statusCode?: HttpStatusCode;
    count?: number;
    totalCount?: number;
    page?: number;
    totalPages?: number;
    lastItemIndex?: number;
    results?: Quotable[] | undefined;

    constructor(data?: IQuotableList) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.isSuccessfull = _data["isSuccessfull"];
            this.statusCode = _data["statusCode"];
            this.count = _data["count"];
            this.totalCount = _data["totalCount"];
            this.page = _data["page"];
            this.totalPages = _data["totalPages"];
            this.lastItemIndex = _data["lastItemIndex"];
            if (Array.isArray(_data["results"])) {
                this.results = [] as any;
                for (let item of _data["results"])
                    this.results!.push(Quotable.fromJS(item));
            }
        }
    }

    static fromJS(data: any): QuotableList {
        data = typeof data === 'object' ? data : {};
        let result = new QuotableList();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["isSuccessfull"] = this.isSuccessfull;
        data["statusCode"] = this.statusCode;
        data["count"] = this.count;
        data["totalCount"] = this.totalCount;
        data["page"] = this.page;
        data["totalPages"] = this.totalPages;
        data["lastItemIndex"] = this.lastItemIndex;
        if (Array.isArray(this.results)) {
            data["results"] = [];
            for (let item of this.results)
                data["results"].push(item.toJSON());
        }
        return data;
    }
}

export interface IQuotableList {
    isSuccessfull?: boolean;
    statusCode?: HttpStatusCode;
    count?: number;
    totalCount?: number;
    page?: number;
    totalPages?: number;
    lastItemIndex?: number;
    results?: Quotable[] | undefined;
}