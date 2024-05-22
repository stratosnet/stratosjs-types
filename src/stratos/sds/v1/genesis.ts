/* eslint-disable */
import { Params, FileInfo } from "./sds";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "stratos.sds.v1";
/** GenesisState defines the register module's genesis state. */
export interface GenesisState {
  params?: Params;
  files: GenesisFileInfo[];
}
export interface GenesisFileInfo {
  fileHash: string;
  fileInfo: FileInfo;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    files: [],
  };
}
export const GenesisState = {
  typeUrl: "/stratos.sds.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.files) {
      GenesisFileInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.files.push(GenesisFileInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    const obj = createBaseGenesisState();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    if (Array.isArray(object?.files)) obj.files = object.files.map((e: any) => GenesisFileInfo.fromJSON(e));
    return obj;
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.files) {
      obj.files = message.files.map((e) => (e ? GenesisFileInfo.toJSON(e) : undefined));
    } else {
      obj.files = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    message.files = object.files?.map((e) => GenesisFileInfo.fromPartial(e)) || [];
    return message;
  },
};
function createBaseGenesisFileInfo(): GenesisFileInfo {
  return {
    fileHash: "",
    fileInfo: FileInfo.fromPartial({}),
  };
}
export const GenesisFileInfo = {
  typeUrl: "/stratos.sds.v1.GenesisFileInfo",
  encode(message: GenesisFileInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fileHash !== "") {
      writer.uint32(10).string(message.fileHash);
    }
    if (message.fileInfo !== undefined) {
      FileInfo.encode(message.fileInfo, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisFileInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisFileInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fileHash = reader.string();
          break;
        case 2:
          message.fileInfo = FileInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisFileInfo {
    const obj = createBaseGenesisFileInfo();
    if (isSet(object.fileHash)) obj.fileHash = String(object.fileHash);
    if (isSet(object.fileInfo)) obj.fileInfo = FileInfo.fromJSON(object.fileInfo);
    return obj;
  },
  toJSON(message: GenesisFileInfo): unknown {
    const obj: any = {};
    message.fileHash !== undefined && (obj.fileHash = message.fileHash);
    message.fileInfo !== undefined &&
      (obj.fileInfo = message.fileInfo ? FileInfo.toJSON(message.fileInfo) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisFileInfo>, I>>(object: I): GenesisFileInfo {
    const message = createBaseGenesisFileInfo();
    message.fileHash = object.fileHash ?? "";
    if (object.fileInfo !== undefined && object.fileInfo !== null) {
      message.fileInfo = FileInfo.fromPartial(object.fileInfo);
    }
    return message;
  },
};
