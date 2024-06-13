/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact, bytesFromBase64, base64FromBytes } from "../../../helpers";
export const protobufPackage = "stratos.sds.v1";
/** Params defines the parameters for the sds module. */
export interface Params {
  bondDenom: string;
}
export interface FileInfo {
  height: string;
  reporters: Uint8Array;
  uploader: string;
}
function createBaseParams(): Params {
  return {
    bondDenom: "",
  };
}
export const Params = {
  typeUrl: "/stratos.sds.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bondDenom !== "") {
      writer.uint32(10).string(message.bondDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bondDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    const obj = createBaseParams();
    if (isSet(object.bondDenom)) obj.bondDenom = String(object.bondDenom);
    return obj;
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.bondDenom !== undefined && (obj.bondDenom = message.bondDenom);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.bondDenom = object.bondDenom ?? "";
    return message;
  },
};
function createBaseFileInfo(): FileInfo {
  return {
    height: "",
    reporters: new Uint8Array(),
    uploader: "",
  };
}
export const FileInfo = {
  typeUrl: "/stratos.sds.v1.FileInfo",
  encode(message: FileInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== "") {
      writer.uint32(10).string(message.height);
    }
    if (message.reporters.length !== 0) {
      writer.uint32(18).bytes(message.reporters);
    }
    if (message.uploader !== "") {
      writer.uint32(26).string(message.uploader);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FileInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.string();
          break;
        case 2:
          message.reporters = reader.bytes();
          break;
        case 3:
          message.uploader = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FileInfo {
    const obj = createBaseFileInfo();
    if (isSet(object.height)) obj.height = String(object.height);
    if (isSet(object.reporters)) obj.reporters = bytesFromBase64(object.reporters);
    if (isSet(object.uploader)) obj.uploader = String(object.uploader);
    return obj;
  },
  toJSON(message: FileInfo): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = message.height);
    message.reporters !== undefined &&
      (obj.reporters = base64FromBytes(
        message.reporters !== undefined ? message.reporters : new Uint8Array(),
      ));
    message.uploader !== undefined && (obj.uploader = message.uploader);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<FileInfo>, I>>(object: I): FileInfo {
    const message = createBaseFileInfo();
    message.height = object.height ?? "";
    message.reporters = object.reporters ?? new Uint8Array();
    message.uploader = object.uploader ?? "";
    return message;
  },
};
