/* eslint-disable */
import { SingleWalletVolume } from "./pot";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact, bytesFromBase64, base64FromBytes, Rpc } from "../../../helpers";
export const protobufPackage = "stratos.pot.v1";
/** MsgVolumeReport encapsulates an VolumeReport transaction as an SDK message. */
export interface MsgVolumeReport {
  walletVolumes: SingleWalletVolume[];
  reporter: string;
  epoch: string;
  reportReference: string;
  reporterOwner: string;
  BLSSignature: BLSSignatureInfo;
}
/** MsgVolumeReportResponse defines the MsgVolumeReport response type */
export interface MsgVolumeReportResponse {}
/** MsgWithdraw encapsulates an withdraw transaction as an SDK message. */
export interface MsgWithdraw {
  amount: Coin[];
  walletAddress: string;
  targetAddress: string;
}
/** MsgWithdrawResponse defines the Msg/MsgWithdraw response type. */
export interface MsgWithdrawResponse {}
/** MsgLegacyWithdraw encapsulates an legacyWithdraw transaction as an SDK message. */
export interface MsgLegacyWithdraw {
  amount: Coin[];
  from: string;
  targetAddress: string;
}
/** MsgLegacyWithdrawResponse defines the Msg/MsgWithdraw response type. */
export interface MsgLegacyWithdrawResponse {}
/** MsgFoundationDeposit - encapsulates an FoundationDeposit transaction as an SDK message */
export interface MsgFoundationDeposit {
  amount: Coin[];
  from: string;
}
/** MsgFoundationDepositResponse defines the MsgFoundationDeposit response type */
export interface MsgFoundationDepositResponse {}
/** MsgRemoveMetaNode - encapsulates an MsgRemoveMetaNode transaction as an SDK message */
export interface MsgSlashingResourceNode {
  reporters: string[];
  reporterOwner: string[];
  networkAddress: string;
  walletAddress: string;
  slashing: string;
  suspend: boolean;
}
/** MsgSlashingResourceNodeResponse defines the Msg/MsgSlashingResourceNode response type. */
export interface MsgSlashingResourceNodeResponse {}
export interface BLSSignatureInfo {
  pubKeys: Uint8Array[];
  signature: Uint8Array;
  txData: Uint8Array;
}
function createBaseMsgVolumeReport(): MsgVolumeReport {
  return {
    walletVolumes: [],
    reporter: "",
    epoch: "",
    reportReference: "",
    reporterOwner: "",
    BLSSignature: BLSSignatureInfo.fromPartial({}),
  };
}
export const MsgVolumeReport = {
  typeUrl: "/stratos.pot.v1.MsgVolumeReport",
  encode(message: MsgVolumeReport, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.walletVolumes) {
      SingleWalletVolume.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.reporter !== "") {
      writer.uint32(18).string(message.reporter);
    }
    if (message.epoch !== "") {
      writer.uint32(26).string(message.epoch);
    }
    if (message.reportReference !== "") {
      writer.uint32(34).string(message.reportReference);
    }
    if (message.reporterOwner !== "") {
      writer.uint32(42).string(message.reporterOwner);
    }
    if (message.BLSSignature !== undefined) {
      BLSSignatureInfo.encode(message.BLSSignature, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgVolumeReport {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVolumeReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.walletVolumes.push(SingleWalletVolume.decode(reader, reader.uint32()));
          break;
        case 2:
          message.reporter = reader.string();
          break;
        case 3:
          message.epoch = reader.string();
          break;
        case 4:
          message.reportReference = reader.string();
          break;
        case 5:
          message.reporterOwner = reader.string();
          break;
        case 6:
          message.BLSSignature = BLSSignatureInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgVolumeReport {
    const obj = createBaseMsgVolumeReport();
    if (Array.isArray(object?.walletVolumes))
      obj.walletVolumes = object.walletVolumes.map((e: any) => SingleWalletVolume.fromJSON(e));
    if (isSet(object.reporter)) obj.reporter = String(object.reporter);
    if (isSet(object.epoch)) obj.epoch = String(object.epoch);
    if (isSet(object.reportReference)) obj.reportReference = String(object.reportReference);
    if (isSet(object.reporterOwner)) obj.reporterOwner = String(object.reporterOwner);
    if (isSet(object.BLSSignature)) obj.BLSSignature = BLSSignatureInfo.fromJSON(object.BLSSignature);
    return obj;
  },
  toJSON(message: MsgVolumeReport): unknown {
    const obj: any = {};
    if (message.walletVolumes) {
      obj.walletVolumes = message.walletVolumes.map((e) => (e ? SingleWalletVolume.toJSON(e) : undefined));
    } else {
      obj.walletVolumes = [];
    }
    message.reporter !== undefined && (obj.reporter = message.reporter);
    message.epoch !== undefined && (obj.epoch = message.epoch);
    message.reportReference !== undefined && (obj.reportReference = message.reportReference);
    message.reporterOwner !== undefined && (obj.reporterOwner = message.reporterOwner);
    message.BLSSignature !== undefined &&
      (obj.BLSSignature = message.BLSSignature ? BLSSignatureInfo.toJSON(message.BLSSignature) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgVolumeReport>, I>>(object: I): MsgVolumeReport {
    const message = createBaseMsgVolumeReport();
    message.walletVolumes = object.walletVolumes?.map((e) => SingleWalletVolume.fromPartial(e)) || [];
    message.reporter = object.reporter ?? "";
    message.epoch = object.epoch ?? "";
    message.reportReference = object.reportReference ?? "";
    message.reporterOwner = object.reporterOwner ?? "";
    if (object.BLSSignature !== undefined && object.BLSSignature !== null) {
      message.BLSSignature = BLSSignatureInfo.fromPartial(object.BLSSignature);
    }
    return message;
  },
};
function createBaseMsgVolumeReportResponse(): MsgVolumeReportResponse {
  return {};
}
export const MsgVolumeReportResponse = {
  typeUrl: "/stratos.pot.v1.MsgVolumeReportResponse",
  encode(_: MsgVolumeReportResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgVolumeReportResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVolumeReportResponse();
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
  fromJSON(_: any): MsgVolumeReportResponse {
    const obj = createBaseMsgVolumeReportResponse();
    return obj;
  },
  toJSON(_: MsgVolumeReportResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgVolumeReportResponse>, I>>(_: I): MsgVolumeReportResponse {
    const message = createBaseMsgVolumeReportResponse();
    return message;
  },
};
function createBaseMsgWithdraw(): MsgWithdraw {
  return {
    amount: [],
    walletAddress: "",
    targetAddress: "",
  };
}
export const MsgWithdraw = {
  typeUrl: "/stratos.pot.v1.MsgWithdraw",
  encode(message: MsgWithdraw, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.walletAddress !== "") {
      writer.uint32(18).string(message.walletAddress);
    }
    if (message.targetAddress !== "") {
      writer.uint32(26).string(message.targetAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdraw {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdraw();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.walletAddress = reader.string();
          break;
        case 3:
          message.targetAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWithdraw {
    const obj = createBaseMsgWithdraw();
    if (Array.isArray(object?.amount)) obj.amount = object.amount.map((e: any) => Coin.fromJSON(e));
    if (isSet(object.walletAddress)) obj.walletAddress = String(object.walletAddress);
    if (isSet(object.targetAddress)) obj.targetAddress = String(object.targetAddress);
    return obj;
  },
  toJSON(message: MsgWithdraw): unknown {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    message.walletAddress !== undefined && (obj.walletAddress = message.walletAddress);
    message.targetAddress !== undefined && (obj.targetAddress = message.targetAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgWithdraw>, I>>(object: I): MsgWithdraw {
    const message = createBaseMsgWithdraw();
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    message.walletAddress = object.walletAddress ?? "";
    message.targetAddress = object.targetAddress ?? "";
    return message;
  },
};
function createBaseMsgWithdrawResponse(): MsgWithdrawResponse {
  return {};
}
export const MsgWithdrawResponse = {
  typeUrl: "/stratos.pot.v1.MsgWithdrawResponse",
  encode(_: MsgWithdrawResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawResponse();
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
  fromJSON(_: any): MsgWithdrawResponse {
    const obj = createBaseMsgWithdrawResponse();
    return obj;
  },
  toJSON(_: MsgWithdrawResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgWithdrawResponse>, I>>(_: I): MsgWithdrawResponse {
    const message = createBaseMsgWithdrawResponse();
    return message;
  },
};
function createBaseMsgLegacyWithdraw(): MsgLegacyWithdraw {
  return {
    amount: [],
    from: "",
    targetAddress: "",
  };
}
export const MsgLegacyWithdraw = {
  typeUrl: "/stratos.pot.v1.MsgLegacyWithdraw",
  encode(message: MsgLegacyWithdraw, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    if (message.targetAddress !== "") {
      writer.uint32(26).string(message.targetAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgLegacyWithdraw {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLegacyWithdraw();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.from = reader.string();
          break;
        case 3:
          message.targetAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgLegacyWithdraw {
    const obj = createBaseMsgLegacyWithdraw();
    if (Array.isArray(object?.amount)) obj.amount = object.amount.map((e: any) => Coin.fromJSON(e));
    if (isSet(object.from)) obj.from = String(object.from);
    if (isSet(object.targetAddress)) obj.targetAddress = String(object.targetAddress);
    return obj;
  },
  toJSON(message: MsgLegacyWithdraw): unknown {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    message.from !== undefined && (obj.from = message.from);
    message.targetAddress !== undefined && (obj.targetAddress = message.targetAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgLegacyWithdraw>, I>>(object: I): MsgLegacyWithdraw {
    const message = createBaseMsgLegacyWithdraw();
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    message.from = object.from ?? "";
    message.targetAddress = object.targetAddress ?? "";
    return message;
  },
};
function createBaseMsgLegacyWithdrawResponse(): MsgLegacyWithdrawResponse {
  return {};
}
export const MsgLegacyWithdrawResponse = {
  typeUrl: "/stratos.pot.v1.MsgLegacyWithdrawResponse",
  encode(_: MsgLegacyWithdrawResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgLegacyWithdrawResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLegacyWithdrawResponse();
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
  fromJSON(_: any): MsgLegacyWithdrawResponse {
    const obj = createBaseMsgLegacyWithdrawResponse();
    return obj;
  },
  toJSON(_: MsgLegacyWithdrawResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgLegacyWithdrawResponse>, I>>(_: I): MsgLegacyWithdrawResponse {
    const message = createBaseMsgLegacyWithdrawResponse();
    return message;
  },
};
function createBaseMsgFoundationDeposit(): MsgFoundationDeposit {
  return {
    amount: [],
    from: "",
  };
}
export const MsgFoundationDeposit = {
  typeUrl: "/stratos.pot.v1.MsgFoundationDeposit",
  encode(message: MsgFoundationDeposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFoundationDeposit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFoundationDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.from = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgFoundationDeposit {
    const obj = createBaseMsgFoundationDeposit();
    if (Array.isArray(object?.amount)) obj.amount = object.amount.map((e: any) => Coin.fromJSON(e));
    if (isSet(object.from)) obj.from = String(object.from);
    return obj;
  },
  toJSON(message: MsgFoundationDeposit): unknown {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    message.from !== undefined && (obj.from = message.from);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgFoundationDeposit>, I>>(object: I): MsgFoundationDeposit {
    const message = createBaseMsgFoundationDeposit();
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    message.from = object.from ?? "";
    return message;
  },
};
function createBaseMsgFoundationDepositResponse(): MsgFoundationDepositResponse {
  return {};
}
export const MsgFoundationDepositResponse = {
  typeUrl: "/stratos.pot.v1.MsgFoundationDepositResponse",
  encode(_: MsgFoundationDepositResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFoundationDepositResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFoundationDepositResponse();
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
  fromJSON(_: any): MsgFoundationDepositResponse {
    const obj = createBaseMsgFoundationDepositResponse();
    return obj;
  },
  toJSON(_: MsgFoundationDepositResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgFoundationDepositResponse>, I>>(
    _: I,
  ): MsgFoundationDepositResponse {
    const message = createBaseMsgFoundationDepositResponse();
    return message;
  },
};
function createBaseMsgSlashingResourceNode(): MsgSlashingResourceNode {
  return {
    reporters: [],
    reporterOwner: [],
    networkAddress: "",
    walletAddress: "",
    slashing: "",
    suspend: false,
  };
}
export const MsgSlashingResourceNode = {
  typeUrl: "/stratos.pot.v1.MsgSlashingResourceNode",
  encode(message: MsgSlashingResourceNode, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.reporters) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.reporterOwner) {
      writer.uint32(18).string(v!);
    }
    if (message.networkAddress !== "") {
      writer.uint32(26).string(message.networkAddress);
    }
    if (message.walletAddress !== "") {
      writer.uint32(34).string(message.walletAddress);
    }
    if (message.slashing !== "") {
      writer.uint32(42).string(message.slashing);
    }
    if (message.suspend === true) {
      writer.uint32(48).bool(message.suspend);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSlashingResourceNode {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSlashingResourceNode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reporters.push(reader.string());
          break;
        case 2:
          message.reporterOwner.push(reader.string());
          break;
        case 3:
          message.networkAddress = reader.string();
          break;
        case 4:
          message.walletAddress = reader.string();
          break;
        case 5:
          message.slashing = reader.string();
          break;
        case 6:
          message.suspend = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSlashingResourceNode {
    const obj = createBaseMsgSlashingResourceNode();
    if (Array.isArray(object?.reporters)) obj.reporters = object.reporters.map((e: any) => String(e));
    if (Array.isArray(object?.reporterOwner))
      obj.reporterOwner = object.reporterOwner.map((e: any) => String(e));
    if (isSet(object.networkAddress)) obj.networkAddress = String(object.networkAddress);
    if (isSet(object.walletAddress)) obj.walletAddress = String(object.walletAddress);
    if (isSet(object.slashing)) obj.slashing = String(object.slashing);
    if (isSet(object.suspend)) obj.suspend = Boolean(object.suspend);
    return obj;
  },
  toJSON(message: MsgSlashingResourceNode): unknown {
    const obj: any = {};
    if (message.reporters) {
      obj.reporters = message.reporters.map((e) => e);
    } else {
      obj.reporters = [];
    }
    if (message.reporterOwner) {
      obj.reporterOwner = message.reporterOwner.map((e) => e);
    } else {
      obj.reporterOwner = [];
    }
    message.networkAddress !== undefined && (obj.networkAddress = message.networkAddress);
    message.walletAddress !== undefined && (obj.walletAddress = message.walletAddress);
    message.slashing !== undefined && (obj.slashing = message.slashing);
    message.suspend !== undefined && (obj.suspend = message.suspend);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSlashingResourceNode>, I>>(object: I): MsgSlashingResourceNode {
    const message = createBaseMsgSlashingResourceNode();
    message.reporters = object.reporters?.map((e) => e) || [];
    message.reporterOwner = object.reporterOwner?.map((e) => e) || [];
    message.networkAddress = object.networkAddress ?? "";
    message.walletAddress = object.walletAddress ?? "";
    message.slashing = object.slashing ?? "";
    message.suspend = object.suspend ?? false;
    return message;
  },
};
function createBaseMsgSlashingResourceNodeResponse(): MsgSlashingResourceNodeResponse {
  return {};
}
export const MsgSlashingResourceNodeResponse = {
  typeUrl: "/stratos.pot.v1.MsgSlashingResourceNodeResponse",
  encode(_: MsgSlashingResourceNodeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSlashingResourceNodeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSlashingResourceNodeResponse();
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
  fromJSON(_: any): MsgSlashingResourceNodeResponse {
    const obj = createBaseMsgSlashingResourceNodeResponse();
    return obj;
  },
  toJSON(_: MsgSlashingResourceNodeResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSlashingResourceNodeResponse>, I>>(
    _: I,
  ): MsgSlashingResourceNodeResponse {
    const message = createBaseMsgSlashingResourceNodeResponse();
    return message;
  },
};
function createBaseBLSSignatureInfo(): BLSSignatureInfo {
  return {
    pubKeys: [],
    signature: new Uint8Array(),
    txData: new Uint8Array(),
  };
}
export const BLSSignatureInfo = {
  typeUrl: "/stratos.pot.v1.BLSSignatureInfo",
  encode(message: BLSSignatureInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pubKeys) {
      writer.uint32(10).bytes(v!);
    }
    if (message.signature.length !== 0) {
      writer.uint32(18).bytes(message.signature);
    }
    if (message.txData.length !== 0) {
      writer.uint32(26).bytes(message.txData);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BLSSignatureInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBLSSignatureInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pubKeys.push(reader.bytes());
          break;
        case 2:
          message.signature = reader.bytes();
          break;
        case 3:
          message.txData = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BLSSignatureInfo {
    const obj = createBaseBLSSignatureInfo();
    if (Array.isArray(object?.pubKeys)) obj.pubKeys = object.pubKeys.map((e: any) => bytesFromBase64(e));
    if (isSet(object.signature)) obj.signature = bytesFromBase64(object.signature);
    if (isSet(object.txData)) obj.txData = bytesFromBase64(object.txData);
    return obj;
  },
  toJSON(message: BLSSignatureInfo): unknown {
    const obj: any = {};
    if (message.pubKeys) {
      obj.pubKeys = message.pubKeys.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.pubKeys = [];
    }
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(
        message.signature !== undefined ? message.signature : new Uint8Array(),
      ));
    message.txData !== undefined &&
      (obj.txData = base64FromBytes(message.txData !== undefined ? message.txData : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<BLSSignatureInfo>, I>>(object: I): BLSSignatureInfo {
    const message = createBaseBLSSignatureInfo();
    message.pubKeys = object.pubKeys?.map((e) => e) || [];
    message.signature = object.signature ?? new Uint8Array();
    message.txData = object.txData ?? new Uint8Array();
    return message;
  },
};
/** Msg defines the evm Msg service. */
export interface Msg {
  HandleMsgVolumeReport(request: MsgVolumeReport): Promise<MsgVolumeReportResponse>;
  HandleMsgWithdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse>;
  HandleMsgLegacyWithdraw(request: MsgLegacyWithdraw): Promise<MsgLegacyWithdrawResponse>;
  HandleMsgFoundationDeposit(request: MsgFoundationDeposit): Promise<MsgFoundationDepositResponse>;
  HandleMsgSlashingResourceNode(request: MsgSlashingResourceNode): Promise<MsgSlashingResourceNodeResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.HandleMsgVolumeReport = this.HandleMsgVolumeReport.bind(this);
    this.HandleMsgWithdraw = this.HandleMsgWithdraw.bind(this);
    this.HandleMsgLegacyWithdraw = this.HandleMsgLegacyWithdraw.bind(this);
    this.HandleMsgFoundationDeposit = this.HandleMsgFoundationDeposit.bind(this);
    this.HandleMsgSlashingResourceNode = this.HandleMsgSlashingResourceNode.bind(this);
  }
  HandleMsgVolumeReport(request: MsgVolumeReport): Promise<MsgVolumeReportResponse> {
    const data = MsgVolumeReport.encode(request).finish();
    const promise = this.rpc.request("stratos.pot.v1.Msg", "HandleMsgVolumeReport", data);
    return promise.then((data) => MsgVolumeReportResponse.decode(new BinaryReader(data)));
  }
  HandleMsgWithdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse> {
    const data = MsgWithdraw.encode(request).finish();
    const promise = this.rpc.request("stratos.pot.v1.Msg", "HandleMsgWithdraw", data);
    return promise.then((data) => MsgWithdrawResponse.decode(new BinaryReader(data)));
  }
  HandleMsgLegacyWithdraw(request: MsgLegacyWithdraw): Promise<MsgLegacyWithdrawResponse> {
    const data = MsgLegacyWithdraw.encode(request).finish();
    const promise = this.rpc.request("stratos.pot.v1.Msg", "HandleMsgLegacyWithdraw", data);
    return promise.then((data) => MsgLegacyWithdrawResponse.decode(new BinaryReader(data)));
  }
  HandleMsgFoundationDeposit(request: MsgFoundationDeposit): Promise<MsgFoundationDepositResponse> {
    const data = MsgFoundationDeposit.encode(request).finish();
    const promise = this.rpc.request("stratos.pot.v1.Msg", "HandleMsgFoundationDeposit", data);
    return promise.then((data) => MsgFoundationDepositResponse.decode(new BinaryReader(data)));
  }
  HandleMsgSlashingResourceNode(request: MsgSlashingResourceNode): Promise<MsgSlashingResourceNodeResponse> {
    const data = MsgSlashingResourceNode.encode(request).finish();
    const promise = this.rpc.request("stratos.pot.v1.Msg", "HandleMsgSlashingResourceNode", data);
    return promise.then((data) => MsgSlashingResourceNodeResponse.decode(new BinaryReader(data)));
  }
}
