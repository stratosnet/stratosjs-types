/* eslint-disable */
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact, Rpc } from "../../../helpers";
export const protobufPackage = "stratos.sds.v1";
export interface MsgFileUpload {
  fileHash: string;
  from: string;
  reporter: string;
  uploader: string;
}
export interface MsgFileUploadResponse {}
export interface MsgPrepay {
  sender: string;
  beneficiary: string;
  amount: Coin[];
}
export interface MsgPrepayResponse {}
function createBaseMsgFileUpload(): MsgFileUpload {
  return {
    fileHash: "",
    from: "",
    reporter: "",
    uploader: "",
  };
}
export const MsgFileUpload = {
  typeUrl: "/stratos.sds.v1.MsgFileUpload",
  encode(message: MsgFileUpload, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fileHash !== "") {
      writer.uint32(10).string(message.fileHash);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    if (message.reporter !== "") {
      writer.uint32(26).string(message.reporter);
    }
    if (message.uploader !== "") {
      writer.uint32(34).string(message.uploader);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFileUpload {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFileUpload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fileHash = reader.string();
          break;
        case 2:
          message.from = reader.string();
          break;
        case 3:
          message.reporter = reader.string();
          break;
        case 4:
          message.uploader = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgFileUpload {
    const obj = createBaseMsgFileUpload();
    if (isSet(object.fileHash)) obj.fileHash = String(object.fileHash);
    if (isSet(object.from)) obj.from = String(object.from);
    if (isSet(object.reporter)) obj.reporter = String(object.reporter);
    if (isSet(object.uploader)) obj.uploader = String(object.uploader);
    return obj;
  },
  toJSON(message: MsgFileUpload): unknown {
    const obj: any = {};
    message.fileHash !== undefined && (obj.fileHash = message.fileHash);
    message.from !== undefined && (obj.from = message.from);
    message.reporter !== undefined && (obj.reporter = message.reporter);
    message.uploader !== undefined && (obj.uploader = message.uploader);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgFileUpload>, I>>(object: I): MsgFileUpload {
    const message = createBaseMsgFileUpload();
    message.fileHash = object.fileHash ?? "";
    message.from = object.from ?? "";
    message.reporter = object.reporter ?? "";
    message.uploader = object.uploader ?? "";
    return message;
  },
};
function createBaseMsgFileUploadResponse(): MsgFileUploadResponse {
  return {};
}
export const MsgFileUploadResponse = {
  typeUrl: "/stratos.sds.v1.MsgFileUploadResponse",
  encode(_: MsgFileUploadResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFileUploadResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFileUploadResponse();
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
  fromJSON(_: any): MsgFileUploadResponse {
    const obj = createBaseMsgFileUploadResponse();
    return obj;
  },
  toJSON(_: MsgFileUploadResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgFileUploadResponse>, I>>(_: I): MsgFileUploadResponse {
    const message = createBaseMsgFileUploadResponse();
    return message;
  },
};
function createBaseMsgPrepay(): MsgPrepay {
  return {
    sender: "",
    beneficiary: "",
    amount: [],
  };
}
export const MsgPrepay = {
  typeUrl: "/stratos.sds.v1.MsgPrepay",
  encode(message: MsgPrepay, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.beneficiary !== "") {
      writer.uint32(18).string(message.beneficiary);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPrepay {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPrepay();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.beneficiary = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgPrepay {
    const obj = createBaseMsgPrepay();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.beneficiary)) obj.beneficiary = String(object.beneficiary);
    if (Array.isArray(object?.amount)) obj.amount = object.amount.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: MsgPrepay): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.beneficiary !== undefined && (obj.beneficiary = message.beneficiary);
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgPrepay>, I>>(object: I): MsgPrepay {
    const message = createBaseMsgPrepay();
    message.sender = object.sender ?? "";
    message.beneficiary = object.beneficiary ?? "";
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};
function createBaseMsgPrepayResponse(): MsgPrepayResponse {
  return {};
}
export const MsgPrepayResponse = {
  typeUrl: "/stratos.sds.v1.MsgPrepayResponse",
  encode(_: MsgPrepayResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPrepayResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPrepayResponse();
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
  fromJSON(_: any): MsgPrepayResponse {
    const obj = createBaseMsgPrepayResponse();
    return obj;
  },
  toJSON(_: MsgPrepayResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgPrepayResponse>, I>>(_: I): MsgPrepayResponse {
    const message = createBaseMsgPrepayResponse();
    return message;
  },
};
/** Msg defines the sds module Msg service. */
export interface Msg {
  /** CreateResourceNode defines a method for creating a new resource node. */
  HandleMsgFileUpload(request: MsgFileUpload): Promise<MsgFileUploadResponse>;
  HandleMsgPrepay(request: MsgPrepay): Promise<MsgPrepayResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.HandleMsgFileUpload = this.HandleMsgFileUpload.bind(this);
    this.HandleMsgPrepay = this.HandleMsgPrepay.bind(this);
  }
  HandleMsgFileUpload(request: MsgFileUpload): Promise<MsgFileUploadResponse> {
    const data = MsgFileUpload.encode(request).finish();
    const promise = this.rpc.request("stratos.sds.v1.Msg", "HandleMsgFileUpload", data);
    return promise.then((data) => MsgFileUploadResponse.decode(new BinaryReader(data)));
  }
  HandleMsgPrepay(request: MsgPrepay): Promise<MsgPrepayResponse> {
    const data = MsgPrepay.encode(request).finish();
    const promise = this.rpc.request("stratos.sds.v1.Msg", "HandleMsgPrepay", data);
    return promise.then((data) => MsgPrepayResponse.decode(new BinaryReader(data)));
  }
}
