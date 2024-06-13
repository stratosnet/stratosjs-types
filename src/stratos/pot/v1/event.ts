/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "stratos.pot.v1";
/** EventVolumeReport is emitted on Msg/MsgVolumeReport */
export interface EventVolumeReport {
  reportReference: string;
  epoch: string;
}
/** EventWithdraw is emitted on Msg/MsgWithdraw */
export interface EventWithdraw {
  amount: string;
  walletAddress: string;
  targetAddress: string;
}
/** EventFoundationDeposit is emitted on Msg/MsgFoundationDeposit */
export interface EventFoundationDeposit {
  amount: string;
}
/** EventSlashing is emitted on Msg/MsgSlashingResourceNode */
export interface EventSlashing {
  walletAddress: string;
  networkAddress: string;
  amount: string;
  slashingType: string;
  suspend: string;
}
function createBaseEventVolumeReport(): EventVolumeReport {
  return {
    reportReference: "",
    epoch: "",
  };
}
export const EventVolumeReport = {
  typeUrl: "/stratos.pot.v1.EventVolumeReport",
  encode(message: EventVolumeReport, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.reportReference !== "") {
      writer.uint32(10).string(message.reportReference);
    }
    if (message.epoch !== "") {
      writer.uint32(18).string(message.epoch);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventVolumeReport {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventVolumeReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reportReference = reader.string();
          break;
        case 2:
          message.epoch = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventVolumeReport {
    const obj = createBaseEventVolumeReport();
    if (isSet(object.reportReference)) obj.reportReference = String(object.reportReference);
    if (isSet(object.epoch)) obj.epoch = String(object.epoch);
    return obj;
  },
  toJSON(message: EventVolumeReport): unknown {
    const obj: any = {};
    message.reportReference !== undefined && (obj.reportReference = message.reportReference);
    message.epoch !== undefined && (obj.epoch = message.epoch);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventVolumeReport>, I>>(object: I): EventVolumeReport {
    const message = createBaseEventVolumeReport();
    message.reportReference = object.reportReference ?? "";
    message.epoch = object.epoch ?? "";
    return message;
  },
};
function createBaseEventWithdraw(): EventWithdraw {
  return {
    amount: "",
    walletAddress: "",
    targetAddress: "",
  };
}
export const EventWithdraw = {
  typeUrl: "/stratos.pot.v1.EventWithdraw",
  encode(message: EventWithdraw, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    if (message.walletAddress !== "") {
      writer.uint32(18).string(message.walletAddress);
    }
    if (message.targetAddress !== "") {
      writer.uint32(26).string(message.targetAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventWithdraw {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventWithdraw();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
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
  fromJSON(object: any): EventWithdraw {
    const obj = createBaseEventWithdraw();
    if (isSet(object.amount)) obj.amount = String(object.amount);
    if (isSet(object.walletAddress)) obj.walletAddress = String(object.walletAddress);
    if (isSet(object.targetAddress)) obj.targetAddress = String(object.targetAddress);
    return obj;
  },
  toJSON(message: EventWithdraw): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount);
    message.walletAddress !== undefined && (obj.walletAddress = message.walletAddress);
    message.targetAddress !== undefined && (obj.targetAddress = message.targetAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventWithdraw>, I>>(object: I): EventWithdraw {
    const message = createBaseEventWithdraw();
    message.amount = object.amount ?? "";
    message.walletAddress = object.walletAddress ?? "";
    message.targetAddress = object.targetAddress ?? "";
    return message;
  },
};
function createBaseEventFoundationDeposit(): EventFoundationDeposit {
  return {
    amount: "",
  };
}
export const EventFoundationDeposit = {
  typeUrl: "/stratos.pot.v1.EventFoundationDeposit",
  encode(message: EventFoundationDeposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventFoundationDeposit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventFoundationDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventFoundationDeposit {
    const obj = createBaseEventFoundationDeposit();
    if (isSet(object.amount)) obj.amount = String(object.amount);
    return obj;
  },
  toJSON(message: EventFoundationDeposit): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventFoundationDeposit>, I>>(object: I): EventFoundationDeposit {
    const message = createBaseEventFoundationDeposit();
    message.amount = object.amount ?? "";
    return message;
  },
};
function createBaseEventSlashing(): EventSlashing {
  return {
    walletAddress: "",
    networkAddress: "",
    amount: "",
    slashingType: "",
    suspend: "",
  };
}
export const EventSlashing = {
  typeUrl: "/stratos.pot.v1.EventSlashing",
  encode(message: EventSlashing, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.walletAddress !== "") {
      writer.uint32(10).string(message.walletAddress);
    }
    if (message.networkAddress !== "") {
      writer.uint32(18).string(message.networkAddress);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.slashingType !== "") {
      writer.uint32(34).string(message.slashingType);
    }
    if (message.suspend !== "") {
      writer.uint32(42).string(message.suspend);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSlashing {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSlashing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.walletAddress = reader.string();
          break;
        case 2:
          message.networkAddress = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        case 4:
          message.slashingType = reader.string();
          break;
        case 5:
          message.suspend = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSlashing {
    const obj = createBaseEventSlashing();
    if (isSet(object.walletAddress)) obj.walletAddress = String(object.walletAddress);
    if (isSet(object.networkAddress)) obj.networkAddress = String(object.networkAddress);
    if (isSet(object.amount)) obj.amount = String(object.amount);
    if (isSet(object.slashingType)) obj.slashingType = String(object.slashingType);
    if (isSet(object.suspend)) obj.suspend = String(object.suspend);
    return obj;
  },
  toJSON(message: EventSlashing): unknown {
    const obj: any = {};
    message.walletAddress !== undefined && (obj.walletAddress = message.walletAddress);
    message.networkAddress !== undefined && (obj.networkAddress = message.networkAddress);
    message.amount !== undefined && (obj.amount = message.amount);
    message.slashingType !== undefined && (obj.slashingType = message.slashingType);
    message.suspend !== undefined && (obj.suspend = message.suspend);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventSlashing>, I>>(object: I): EventSlashing {
    const message = createBaseEventSlashing();
    message.walletAddress = object.walletAddress ?? "";
    message.networkAddress = object.networkAddress ?? "";
    message.amount = object.amount ?? "";
    message.slashingType = object.slashingType ?? "";
    message.suspend = object.suspend ?? "";
    return message;
  },
};
