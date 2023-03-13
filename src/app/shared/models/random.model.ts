import { HttpStatusCode } from "./httpStatusCode";


export class Quotable implements IQuotable {
    isSuccessfull?: boolean;
    statusCode?: HttpStatusCode;
    id?: string | undefined;
    content?: string | undefined;
    author?: string | undefined;
    tags?: string[] | undefined;
    authorSlug?: string | undefined;
    length?: number;
    dateAdded?: string | undefined;
    dateModified?: string | undefined;
    groupName?: string | undefined;

    constructor(data?: IQuotable) {
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
            this.id = _data["id"];
            this.content = _data["content"];
            this.author = _data["author"];
            if (Array.isArray(_data["tags"])) {
                this.tags = [] as any;
                for (let item of _data["tags"])
                    this.tags!.push(item);
            }
            this.authorSlug = _data["authorSlug"];
            this.length = _data["length"];
            this.dateAdded = _data["dateAdded"];
            this.dateModified = _data["dateModified"];
            this.groupName = _data["groupName"];
        }
    }

    static fromJS(data: any): Quotable {
        data = typeof data === 'object' ? data : {};
        let result = new Quotable();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["isSuccessfull"] = this.isSuccessfull;
        data["statusCode"] = this.statusCode;
        data["id"] = this.id;
        data["content"] = this.content;
        data["author"] = this.author;
        if (Array.isArray(this.tags)) {
            data["tags"] = [];
            for (let item of this.tags)
                data["tags"].push(item);
        }
        data["authorSlug"] = this.authorSlug;
        data["length"] = this.length;
        data["dateAdded"] = this.dateAdded;
        data["dateModified"] = this.dateModified;
        data["groupName"] = this.groupName;
        return data;
    }
}

export interface IQuotable {
    isSuccessfull?: boolean;
    statusCode?: HttpStatusCode;
    id?: string | undefined;
    content?: string | undefined;
    author?: string | undefined;
    tags?: string[] | undefined;
    authorSlug?: string | undefined;
    length?: number;
    dateAdded?: string | undefined;
    dateModified?: string | undefined;
    groupName?: string | undefined;
}