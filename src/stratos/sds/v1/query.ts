/* eslint-disable */
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { FileInfo, Params } from "./sds";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact, Rpc } from "../../../helpers";
export const protobufPackage = "stratos.sds.v1";
/** QueryFileuploadRequest is request type for the Query/Fileupload RPC method */
export interface QueryFileUploadRequest {
  /** network_addr defines the node network address to query for. */
  fileHash: string;
}
/** QueryFileuploadResponse is response type for the Query/Fileupload RPC method */
export interface QueryFileUploadResponse {
  fileInfo?: FileInfo;
}
export interface QuerySimPrepayRequest {
  amount: Coin[];
}
export interface QuerySimPrepayResponse {
  noz: string;
}
export interface QueryNozPriceRequest {}
export interface QueryNozPriceResponse {
  price: string;
}
export interface QueryNozSupplyRequest {}
export interface QueryNozSupplyResponse {
  remaining: string;
  total: string;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}
function createBaseQueryFileUploadRequest(): QueryFileUploadRequest {
  return {
    fileHash: "",
  };
}
export const QueryFileUploadRequest = {
  typeUrl: "/stratos.sds.v1.QueryFileUploadRequest",
  encode(message: QueryFileUploadRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fileHash !== "") {
      writer.uint32(10).string(message.fileHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFileUploadRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFileUploadRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fileHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryFileUploadRequest {
    const obj = createBaseQueryFileUploadRequest();
    if (isSet(object.fileHash)) obj.fileHash = String(object.fileHash);
    return obj;
  },
  toJSON(message: QueryFileUploadRequest): unknown {
    const obj: any = {};
    message.fileHash !== undefined && (obj.fileHash = message.fileHash);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryFileUploadRequest>, I>>(object: I): QueryFileUploadRequest {
    const message = createBaseQueryFileUploadRequest();
    message.fileHash = object.fileHash ?? "";
    return message;
  },
};
function createBaseQueryFileUploadResponse(): QueryFileUploadResponse {
  return {
    fileInfo: undefined,
  };
}
export const QueryFileUploadResponse = {
  typeUrl: "/stratos.sds.v1.QueryFileUploadResponse",
  encode(message: QueryFileUploadResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fileInfo !== undefined) {
      FileInfo.encode(message.fileInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFileUploadResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFileUploadResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fileInfo = FileInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryFileUploadResponse {
    const obj = createBaseQueryFileUploadResponse();
    if (isSet(object.fileInfo)) obj.fileInfo = FileInfo.fromJSON(object.fileInfo);
    return obj;
  },
  toJSON(message: QueryFileUploadResponse): unknown {
    const obj: any = {};
    message.fileInfo !== undefined &&
      (obj.fileInfo = message.fileInfo ? FileInfo.toJSON(message.fileInfo) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryFileUploadResponse>, I>>(object: I): QueryFileUploadResponse {
    const message = createBaseQueryFileUploadResponse();
    if (object.fileInfo !== undefined && object.fileInfo !== null) {
      message.fileInfo = FileInfo.fromPartial(object.fileInfo);
    }
    return message;
  },
};
function createBaseQuerySimPrepayRequest(): QuerySimPrepayRequest {
  return {
    amount: [],
  };
}
export const QuerySimPrepayRequest = {
  typeUrl: "/stratos.sds.v1.QuerySimPrepayRequest",
  encode(message: QuerySimPrepayRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySimPrepayRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimPrepayRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySimPrepayRequest {
    const obj = createBaseQuerySimPrepayRequest();
    if (Array.isArray(object?.amount)) obj.amount = object.amount.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: QuerySimPrepayRequest): unknown {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySimPrepayRequest>, I>>(object: I): QuerySimPrepayRequest {
    const message = createBaseQuerySimPrepayRequest();
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};
function createBaseQuerySimPrepayResponse(): QuerySimPrepayResponse {
  return {
    noz: "",
  };
}
export const QuerySimPrepayResponse = {
  typeUrl: "/stratos.sds.v1.QuerySimPrepayResponse",
  encode(message: QuerySimPrepayResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.noz !== "") {
      writer.uint32(10).string(message.noz);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySimPrepayResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySimPrepayResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.noz = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySimPrepayResponse {
    const obj = createBaseQuerySimPrepayResponse();
    if (isSet(object.noz)) obj.noz = String(object.noz);
    return obj;
  },
  toJSON(message: QuerySimPrepayResponse): unknown {
    const obj: any = {};
    message.noz !== undefined && (obj.noz = message.noz);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySimPrepayResponse>, I>>(object: I): QuerySimPrepayResponse {
    const message = createBaseQuerySimPrepayResponse();
    message.noz = object.noz ?? "";
    return message;
  },
};
function createBaseQueryNozPriceRequest(): QueryNozPriceRequest {
  return {};
}
export const QueryNozPriceRequest = {
  typeUrl: "/stratos.sds.v1.QueryNozPriceRequest",
  encode(_: QueryNozPriceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNozPriceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNozPriceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryNozPriceRequest {
    const obj = createBaseQueryNozPriceRequest();
    return obj;
  },
  toJSON(_: QueryNozPriceRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryNozPriceRequest>, I>>(_: I): QueryNozPriceRequest {
    const message = createBaseQueryNozPriceRequest();
    return message;
  },
};
function createBaseQueryNozPriceResponse(): QueryNozPriceResponse {
  return {
    price: "",
  };
}
export const QueryNozPriceResponse = {
  typeUrl: "/stratos.sds.v1.QueryNozPriceResponse",
  encode(message: QueryNozPriceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.price !== "") {
      writer.uint32(10).string(message.price);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNozPriceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNozPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.price = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryNozPriceResponse {
    const obj = createBaseQueryNozPriceResponse();
    if (isSet(object.price)) obj.price = String(object.price);
    return obj;
  },
  toJSON(message: QueryNozPriceResponse): unknown {
    const obj: any = {};
    message.price !== undefined && (obj.price = message.price);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryNozPriceResponse>, I>>(object: I): QueryNozPriceResponse {
    const message = createBaseQueryNozPriceResponse();
    message.price = object.price ?? "";
    return message;
  },
};
function createBaseQueryNozSupplyRequest(): QueryNozSupplyRequest {
  return {};
}
export const QueryNozSupplyRequest = {
  typeUrl: "/stratos.sds.v1.QueryNozSupplyRequest",
  encode(_: QueryNozSupplyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNozSupplyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNozSupplyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryNozSupplyRequest {
    const obj = createBaseQueryNozSupplyRequest();
    return obj;
  },
  toJSON(_: QueryNozSupplyRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryNozSupplyRequest>, I>>(_: I): QueryNozSupplyRequest {
    const message = createBaseQueryNozSupplyRequest();
    return message;
  },
};
function createBaseQueryNozSupplyResponse(): QueryNozSupplyResponse {
  return {
    remaining: "",
    total: "",
  };
}
export const QueryNozSupplyResponse = {
  typeUrl: "/stratos.sds.v1.QueryNozSupplyResponse",
  encode(message: QueryNozSupplyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.remaining !== "") {
      writer.uint32(10).string(message.remaining);
    }
    if (message.total !== "") {
      writer.uint32(18).string(message.total);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNozSupplyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNozSupplyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.remaining = reader.string();
          break;
        case 2:
          message.total = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryNozSupplyResponse {
    const obj = createBaseQueryNozSupplyResponse();
    if (isSet(object.remaining)) obj.remaining = String(object.remaining);
    if (isSet(object.total)) obj.total = String(object.total);
    return obj;
  },
  toJSON(message: QueryNozSupplyResponse): unknown {
    const obj: any = {};
    message.remaining !== undefined && (obj.remaining = message.remaining);
    message.total !== undefined && (obj.total = message.total);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryNozSupplyResponse>, I>>(object: I): QueryNozSupplyResponse {
    const message = createBaseQueryNozSupplyResponse();
    message.remaining = object.remaining ?? "";
    message.total = object.total ?? "";
    return message;
  },
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/stratos.sds.v1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryParamsRequest {
    const obj = createBaseQueryParamsRequest();
    return obj;
  },
  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined,
  };
}
export const QueryParamsResponse = {
  typeUrl: "/stratos.sds.v1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    const obj = createBaseQueryParamsResponse();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
};
/** Query defines the gRPC querier service. */
export interface Query {
  /** Query uploaded file info by hash */
  Fileupload(request: QueryFileUploadRequest): Promise<QueryFileUploadResponse>;
  SimPrepay(request: QuerySimPrepayRequest): Promise<QuerySimPrepayResponse>;
  NozPrice(request?: QueryNozPriceRequest): Promise<QueryNozPriceResponse>;
  NozSupply(request?: QueryNozSupplyRequest): Promise<QueryNozSupplyResponse>;
  /** Params queries SDS module Params info. */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Fileupload = this.Fileupload.bind(this);
    this.SimPrepay = this.SimPrepay.bind(this);
    this.NozPrice = this.NozPrice.bind(this);
    this.NozSupply = this.NozSupply.bind(this);
    this.Params = this.Params.bind(this);
  }
  Fileupload(request: QueryFileUploadRequest): Promise<QueryFileUploadResponse> {
    const data = QueryFileUploadRequest.encode(request).finish();
    const promise = this.rpc.request("stratos.sds.v1.Query", "Fileupload", data);
    return promise.then((data) => QueryFileUploadResponse.decode(new BinaryReader(data)));
  }
  SimPrepay(request: QuerySimPrepayRequest): Promise<QuerySimPrepayResponse> {
    const data = QuerySimPrepayRequest.encode(request).finish();
    const promise = this.rpc.request("stratos.sds.v1.Query", "SimPrepay", data);
    return promise.then((data) => QuerySimPrepayResponse.decode(new BinaryReader(data)));
  }
  NozPrice(request: QueryNozPriceRequest = {}): Promise<QueryNozPriceResponse> {
    const data = QueryNozPriceRequest.encode(request).finish();
    const promise = this.rpc.request("stratos.sds.v1.Query", "NozPrice", data);
    return promise.then((data) => QueryNozPriceResponse.decode(new BinaryReader(data)));
  }
  NozSupply(request: QueryNozSupplyRequest = {}): Promise<QueryNozSupplyResponse> {
    const data = QueryNozSupplyRequest.encode(request).finish();
    const promise = this.rpc.request("stratos.sds.v1.Query", "NozSupply", data);
    return promise.then((data) => QueryNozSupplyResponse.decode(new BinaryReader(data)));
  }
  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("stratos.sds.v1.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new BinaryReader(data)));
  }
}
