import mongoose from "mongoose";
export declare const urlModel: mongoose.Model<{
    fullUrl: string;
    shortUrl: string;
    clicks: number;
} & mongoose.DefaultTimestampProps, {}, {}, {}, mongoose.Document<unknown, {}, {
    fullUrl: string;
    shortUrl: string;
    clicks: number;
} & mongoose.DefaultTimestampProps, {}, {
    timestamps: true;
}> & {
    fullUrl: string;
    shortUrl: string;
    clicks: number;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    fullUrl: string;
    shortUrl: string;
    clicks: number;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    fullUrl: string;
    shortUrl: string;
    clicks: number;
} & mongoose.DefaultTimestampProps>, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>> & mongoose.FlatRecord<{
    fullUrl: string;
    shortUrl: string;
    clicks: number;
} & mongoose.DefaultTimestampProps> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=shortUrl.d.ts.map