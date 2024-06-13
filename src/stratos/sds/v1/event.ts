/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "stratos.sds.v1";
/** EventPrePay is emitted on Msg/MsgPrepay */
export interface EventPrePay {
  sender: string;
  beneficiary: string;
  amount: string;
  purchasedNoz: string;
}
/** EventFileUpload is emitted on Msg/MsgFileUpload */
export interface EventFileUpload {
  sender: string;
  reporter: string;
  uploader: string;
  fileHash: string;
}
function createBaseEventPrePay(): EventPrePay {
  return {
    sender: "",
    beneficiary: "",
    amount: "",
    purchasedNoz: "",
  };
}
export const EventPrePay = {
  typeUrl: "/stratos.sds.v1.EventPrePay",
  encode(message: EventPrePay, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.beneficiary !== "") {
      writer.uint32(18).string(message.beneficiary);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.purchasedNoz !== "") {
      writer.uint32(34).string(message.purchasedNoz);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventPrePay {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPrePay();
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
          message.amount = reader.string();
          break;
        case 4:
          message.purchasedNoz = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventPrePay {
    const obj = createBaseEventPrePay();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.beneficiary)) obj.beneficiary = String(object.beneficiary);
    if (isSet(object.amount)) obj.amount = String(object.amount);
    if (isSet(object.purchasedNoz)) obj.purchasedNoz = String(object.purchasedNoz);
    return obj;
  },
  toJSON(message: EventPrePay): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.beneficiary !== undefined && (obj.beneficiary = message.beneficiary);
    message.amount !== undefined && (obj.amount = message.amount);
    message.purchasedNoz !== undefined && (obj.purchasedNoz = message.purchasedNoz);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventPrePay>, I>>(object: I): EventPrePay {
    const message = createBaseEventPrePay();
    message.sender = object.sender ?? "";
    message.beneficiary = object.beneficiary ?? "";
    message.amount = object.amount ?? "";
    message.purchasedNoz = object.purchasedNoz ?? "";
    return message;
  },
};
function createBaseEventFileUpload(): EventFileUpload {
  return {
    sender: "",
    reporter: "",
    uploader: "",
    fileHash: "",
  };
}
export const EventFileUpload = {
  typeUrl: "/stratos.sds.v1.EventFileUpload",
  encode(message: EventFileUpload, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.reporter !== "") {
      writer.uint32(18).string(message.reporter);
    }
    if (message.uploader !== "") {
      writer.uint32(26).string(message.uploader);
    }
    if (message.fileHash !== "") {
      writer.uint32(34).string(message.fileHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventFileUpload {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventFileUpload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.reporter = reader.string();
          break;
        case 3:
          message.uploader = reader.string();
          break;
        case 4:
          message.fileHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventFileUpload {
    const obj = createBaseEventFileUpload();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.reporter)) obj.reporter = String(object.reporter);
    if (isSet(object.uploader)) obj.uploader = String(object.uploader);
    if (isSet(object.fileHash)) obj.fileHash = String(object.fileHash);
    return obj;
  },
  toJSON(message: EventFileUpload): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.reporter !== undefined && (obj.reporter = message.reporter);
    message.uploader !== undefined && (obj.uploader = message.uploader);
    message.fileHash !== undefined && (obj.fileHash = message.fileHash);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventFileUpload>, I>>(object: I): EventFileUpload {
    const message = createBaseEventFileUpload();
    message.sender = object.sender ?? "";
    message.reporter = object.reporter ?? "";
    message.uploader = object.uploader ?? "";
    message.fileHash = object.fileHash ?? "";
    return message;
  },
};
