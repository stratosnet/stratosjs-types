/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "stratos.register.v1";
/** EventCreateResourceNode is emitted on Msg/MsgCreateResourceNode */
export interface EventCreateResourceNode {
  sender: string;
  networkAddress: string;
  pubkey: string;
  ozoneLimitChanges: string;
  initialDeposit: string;
}
/** EventCreateMetaNode is emitted on Msg/MsgCreateMetaNode */
export interface EventCreateMetaNode {
  sender: string;
  networkAddress: string;
}
/** EventUnBondingResourceNode is emitted on Msg/MsgRemoveResourceNode */
export interface EventUnBondingResourceNode {
  sender: string;
  resourceNode: string;
  depositToRemove: string;
  unbondingMatureTime: string;
}
/** EventUnBondingResourceNode is emitted on Msg/MsgRemoveMetaNode */
export interface EventUnBondingMetaNode {
  sender: string;
  metaNode: string;
  ozoneLimitChanges: string;
  depositToRemove: string;
  unbondingMatureTime: string;
}
/** EventMetaNodeRegistrationVote is emitted on Msg/MsgMetaNodeRegistrationVote */
export interface EventMetaNodeRegistrationVote {
  sender: string;
  voterNetworkAddress: string;
  candidateNetworkAddress: string;
  candidateStatus: string;
  ozoneLimitChanges: string;
}
export interface EventKickMetaNodeVote {
  sender: string;
  voterNetworkAddress: string;
  targetNetworkAddress: string;
  targetStatus: string;
}
/** EventUpdateResourceNode is emitted on Msg/MsgUpdateResourceNode */
export interface EventUpdateResourceNode {
  sender: string;
  networkAddress: string;
  beneficiaryAddress: string;
}
/** EventUpdateResourceNodeDeposit is emitted on Msg/MsgUpdateResourceNodeDeposit */
export interface EventUpdateResourceNodeDeposit {
  sender: string;
  networkAddress: string;
  depositDelta: string;
  currentDeposit: string;
  availableTokenBefore: string;
  availableTokenAfter: string;
  ozoneLimitChanges: string;
  unbondingMatureTime: string;
}
/** EventUpdateEffectiveDeposit is emitted on Msg/MsgUpdateEffectiveDeposit */
export interface EventUpdateEffectiveDeposit {
  networkAddress: string;
  effectiveDepositAfter: string;
  isUnsuspended: string;
}
/** EventUpdateMetaNode is emitted on Msg/MsgUpdateMetaNode */
export interface EventUpdateMetaNode {
  sender: string;
  networkAddress: string;
}
/** EventUpdateMetaNodeDeposit is emitted on Msg/MsgUpdateMetaNodeDeposit */
export interface EventUpdateMetaNodeDeposit {
  sender: string;
  networkAddress: string;
  depositDelta: string;
  currentDeposit: string;
  availableTokenBefore: string;
  availableTokenAfter: string;
  ozoneLimitChanges: string;
  unbondingMatureTime: string;
}
/** EventCompleteUnBondingResourceNode is emitted on EndBlocker */
export interface EventCompleteUnBondingResourceNode {
  amount: string;
  networkAddress: string;
}
/** EventCompleteUnBondingMetaNode is emitted on EndBlocker */
export interface EventCompleteUnBondingMetaNode {
  amount: string;
  networkAddress: string;
}
function createBaseEventCreateResourceNode(): EventCreateResourceNode {
  return {
    sender: "",
    networkAddress: "",
    pubkey: "",
    ozoneLimitChanges: "",
    initialDeposit: "",
  };
}
export const EventCreateResourceNode = {
  typeUrl: "/stratos.register.v1.EventCreateResourceNode",
  encode(message: EventCreateResourceNode, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.networkAddress !== "") {
      writer.uint32(18).string(message.networkAddress);
    }
    if (message.pubkey !== "") {
      writer.uint32(26).string(message.pubkey);
    }
    if (message.ozoneLimitChanges !== "") {
      writer.uint32(34).string(message.ozoneLimitChanges);
    }
    if (message.initialDeposit !== "") {
      writer.uint32(42).string(message.initialDeposit);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventCreateResourceNode {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateResourceNode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.networkAddress = reader.string();
          break;
        case 3:
          message.pubkey = reader.string();
          break;
        case 4:
          message.ozoneLimitChanges = reader.string();
          break;
        case 5:
          message.initialDeposit = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventCreateResourceNode {
    const obj = createBaseEventCreateResourceNode();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.networkAddress)) obj.networkAddress = String(object.networkAddress);
    if (isSet(object.pubkey)) obj.pubkey = String(object.pubkey);
    if (isSet(object.ozoneLimitChanges)) obj.ozoneLimitChanges = String(object.ozoneLimitChanges);
    if (isSet(object.initialDeposit)) obj.initialDeposit = String(object.initialDeposit);
    return obj;
  },
  toJSON(message: EventCreateResourceNode): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.networkAddress !== undefined && (obj.networkAddress = message.networkAddress);
    message.pubkey !== undefined && (obj.pubkey = message.pubkey);
    message.ozoneLimitChanges !== undefined && (obj.ozoneLimitChanges = message.ozoneLimitChanges);
    message.initialDeposit !== undefined && (obj.initialDeposit = message.initialDeposit);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventCreateResourceNode>, I>>(object: I): EventCreateResourceNode {
    const message = createBaseEventCreateResourceNode();
    message.sender = object.sender ?? "";
    message.networkAddress = object.networkAddress ?? "";
    message.pubkey = object.pubkey ?? "";
    message.ozoneLimitChanges = object.ozoneLimitChanges ?? "";
    message.initialDeposit = object.initialDeposit ?? "";
    return message;
  },
};
function createBaseEventCreateMetaNode(): EventCreateMetaNode {
  return {
    sender: "",
    networkAddress: "",
  };
}
export const EventCreateMetaNode = {
  typeUrl: "/stratos.register.v1.EventCreateMetaNode",
  encode(message: EventCreateMetaNode, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.networkAddress !== "") {
      writer.uint32(18).string(message.networkAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventCreateMetaNode {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateMetaNode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.networkAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventCreateMetaNode {
    const obj = createBaseEventCreateMetaNode();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.networkAddress)) obj.networkAddress = String(object.networkAddress);
    return obj;
  },
  toJSON(message: EventCreateMetaNode): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.networkAddress !== undefined && (obj.networkAddress = message.networkAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventCreateMetaNode>, I>>(object: I): EventCreateMetaNode {
    const message = createBaseEventCreateMetaNode();
    message.sender = object.sender ?? "";
    message.networkAddress = object.networkAddress ?? "";
    return message;
  },
};
function createBaseEventUnBondingResourceNode(): EventUnBondingResourceNode {
  return {
    sender: "",
    resourceNode: "",
    depositToRemove: "",
    unbondingMatureTime: "",
  };
}
export const EventUnBondingResourceNode = {
  typeUrl: "/stratos.register.v1.EventUnBondingResourceNode",
  encode(message: EventUnBondingResourceNode, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.resourceNode !== "") {
      writer.uint32(18).string(message.resourceNode);
    }
    if (message.depositToRemove !== "") {
      writer.uint32(26).string(message.depositToRemove);
    }
    if (message.unbondingMatureTime !== "") {
      writer.uint32(34).string(message.unbondingMatureTime);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventUnBondingResourceNode {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUnBondingResourceNode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.resourceNode = reader.string();
          break;
        case 3:
          message.depositToRemove = reader.string();
          break;
        case 4:
          message.unbondingMatureTime = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventUnBondingResourceNode {
    const obj = createBaseEventUnBondingResourceNode();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.resourceNode)) obj.resourceNode = String(object.resourceNode);
    if (isSet(object.depositToRemove)) obj.depositToRemove = String(object.depositToRemove);
    if (isSet(object.unbondingMatureTime)) obj.unbondingMatureTime = String(object.unbondingMatureTime);
    return obj;
  },
  toJSON(message: EventUnBondingResourceNode): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.resourceNode !== undefined && (obj.resourceNode = message.resourceNode);
    message.depositToRemove !== undefined && (obj.depositToRemove = message.depositToRemove);
    message.unbondingMatureTime !== undefined && (obj.unbondingMatureTime = message.unbondingMatureTime);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventUnBondingResourceNode>, I>>(
    object: I,
  ): EventUnBondingResourceNode {
    const message = createBaseEventUnBondingResourceNode();
    message.sender = object.sender ?? "";
    message.resourceNode = object.resourceNode ?? "";
    message.depositToRemove = object.depositToRemove ?? "";
    message.unbondingMatureTime = object.unbondingMatureTime ?? "";
    return message;
  },
};
function createBaseEventUnBondingMetaNode(): EventUnBondingMetaNode {
  return {
    sender: "",
    metaNode: "",
    ozoneLimitChanges: "",
    depositToRemove: "",
    unbondingMatureTime: "",
  };
}
export const EventUnBondingMetaNode = {
  typeUrl: "/stratos.register.v1.EventUnBondingMetaNode",
  encode(message: EventUnBondingMetaNode, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.metaNode !== "") {
      writer.uint32(18).string(message.metaNode);
    }
    if (message.ozoneLimitChanges !== "") {
      writer.uint32(26).string(message.ozoneLimitChanges);
    }
    if (message.depositToRemove !== "") {
      writer.uint32(34).string(message.depositToRemove);
    }
    if (message.unbondingMatureTime !== "") {
      writer.uint32(42).string(message.unbondingMatureTime);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventUnBondingMetaNode {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUnBondingMetaNode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.metaNode = reader.string();
          break;
        case 3:
          message.ozoneLimitChanges = reader.string();
          break;
        case 4:
          message.depositToRemove = reader.string();
          break;
        case 5:
          message.unbondingMatureTime = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventUnBondingMetaNode {
    const obj = createBaseEventUnBondingMetaNode();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.metaNode)) obj.metaNode = String(object.metaNode);
    if (isSet(object.ozoneLimitChanges)) obj.ozoneLimitChanges = String(object.ozoneLimitChanges);
    if (isSet(object.depositToRemove)) obj.depositToRemove = String(object.depositToRemove);
    if (isSet(object.unbondingMatureTime)) obj.unbondingMatureTime = String(object.unbondingMatureTime);
    return obj;
  },
  toJSON(message: EventUnBondingMetaNode): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.metaNode !== undefined && (obj.metaNode = message.metaNode);
    message.ozoneLimitChanges !== undefined && (obj.ozoneLimitChanges = message.ozoneLimitChanges);
    message.depositToRemove !== undefined && (obj.depositToRemove = message.depositToRemove);
    message.unbondingMatureTime !== undefined && (obj.unbondingMatureTime = message.unbondingMatureTime);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventUnBondingMetaNode>, I>>(object: I): EventUnBondingMetaNode {
    const message = createBaseEventUnBondingMetaNode();
    message.sender = object.sender ?? "";
    message.metaNode = object.metaNode ?? "";
    message.ozoneLimitChanges = object.ozoneLimitChanges ?? "";
    message.depositToRemove = object.depositToRemove ?? "";
    message.unbondingMatureTime = object.unbondingMatureTime ?? "";
    return message;
  },
};
function createBaseEventMetaNodeRegistrationVote(): EventMetaNodeRegistrationVote {
  return {
    sender: "",
    voterNetworkAddress: "",
    candidateNetworkAddress: "",
    candidateStatus: "",
    ozoneLimitChanges: "",
  };
}
export const EventMetaNodeRegistrationVote = {
  typeUrl: "/stratos.register.v1.EventMetaNodeRegistrationVote",
  encode(message: EventMetaNodeRegistrationVote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.voterNetworkAddress !== "") {
      writer.uint32(18).string(message.voterNetworkAddress);
    }
    if (message.candidateNetworkAddress !== "") {
      writer.uint32(26).string(message.candidateNetworkAddress);
    }
    if (message.candidateStatus !== "") {
      writer.uint32(34).string(message.candidateStatus);
    }
    if (message.ozoneLimitChanges !== "") {
      writer.uint32(42).string(message.ozoneLimitChanges);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventMetaNodeRegistrationVote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventMetaNodeRegistrationVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.voterNetworkAddress = reader.string();
          break;
        case 3:
          message.candidateNetworkAddress = reader.string();
          break;
        case 4:
          message.candidateStatus = reader.string();
          break;
        case 5:
          message.ozoneLimitChanges = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventMetaNodeRegistrationVote {
    const obj = createBaseEventMetaNodeRegistrationVote();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.voterNetworkAddress)) obj.voterNetworkAddress = String(object.voterNetworkAddress);
    if (isSet(object.candidateNetworkAddress))
      obj.candidateNetworkAddress = String(object.candidateNetworkAddress);
    if (isSet(object.candidateStatus)) obj.candidateStatus = String(object.candidateStatus);
    if (isSet(object.ozoneLimitChanges)) obj.ozoneLimitChanges = String(object.ozoneLimitChanges);
    return obj;
  },
  toJSON(message: EventMetaNodeRegistrationVote): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.voterNetworkAddress !== undefined && (obj.voterNetworkAddress = message.voterNetworkAddress);
    message.candidateNetworkAddress !== undefined &&
      (obj.candidateNetworkAddress = message.candidateNetworkAddress);
    message.candidateStatus !== undefined && (obj.candidateStatus = message.candidateStatus);
    message.ozoneLimitChanges !== undefined && (obj.ozoneLimitChanges = message.ozoneLimitChanges);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventMetaNodeRegistrationVote>, I>>(
    object: I,
  ): EventMetaNodeRegistrationVote {
    const message = createBaseEventMetaNodeRegistrationVote();
    message.sender = object.sender ?? "";
    message.voterNetworkAddress = object.voterNetworkAddress ?? "";
    message.candidateNetworkAddress = object.candidateNetworkAddress ?? "";
    message.candidateStatus = object.candidateStatus ?? "";
    message.ozoneLimitChanges = object.ozoneLimitChanges ?? "";
    return message;
  },
};
function createBaseEventKickMetaNodeVote(): EventKickMetaNodeVote {
  return {
    sender: "",
    voterNetworkAddress: "",
    targetNetworkAddress: "",
    targetStatus: "",
  };
}
export const EventKickMetaNodeVote = {
  typeUrl: "/stratos.register.v1.EventKickMetaNodeVote",
  encode(message: EventKickMetaNodeVote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.voterNetworkAddress !== "") {
      writer.uint32(18).string(message.voterNetworkAddress);
    }
    if (message.targetNetworkAddress !== "") {
      writer.uint32(26).string(message.targetNetworkAddress);
    }
    if (message.targetStatus !== "") {
      writer.uint32(34).string(message.targetStatus);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventKickMetaNodeVote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventKickMetaNodeVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.voterNetworkAddress = reader.string();
          break;
        case 3:
          message.targetNetworkAddress = reader.string();
          break;
        case 4:
          message.targetStatus = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventKickMetaNodeVote {
    const obj = createBaseEventKickMetaNodeVote();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.voterNetworkAddress)) obj.voterNetworkAddress = String(object.voterNetworkAddress);
    if (isSet(object.targetNetworkAddress)) obj.targetNetworkAddress = String(object.targetNetworkAddress);
    if (isSet(object.targetStatus)) obj.targetStatus = String(object.targetStatus);
    return obj;
  },
  toJSON(message: EventKickMetaNodeVote): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.voterNetworkAddress !== undefined && (obj.voterNetworkAddress = message.voterNetworkAddress);
    message.targetNetworkAddress !== undefined && (obj.targetNetworkAddress = message.targetNetworkAddress);
    message.targetStatus !== undefined && (obj.targetStatus = message.targetStatus);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventKickMetaNodeVote>, I>>(object: I): EventKickMetaNodeVote {
    const message = createBaseEventKickMetaNodeVote();
    message.sender = object.sender ?? "";
    message.voterNetworkAddress = object.voterNetworkAddress ?? "";
    message.targetNetworkAddress = object.targetNetworkAddress ?? "";
    message.targetStatus = object.targetStatus ?? "";
    return message;
  },
};
function createBaseEventUpdateResourceNode(): EventUpdateResourceNode {
  return {
    sender: "",
    networkAddress: "",
    beneficiaryAddress: "",
  };
}
export const EventUpdateResourceNode = {
  typeUrl: "/stratos.register.v1.EventUpdateResourceNode",
  encode(message: EventUpdateResourceNode, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.networkAddress !== "") {
      writer.uint32(18).string(message.networkAddress);
    }
    if (message.beneficiaryAddress !== "") {
      writer.uint32(26).string(message.beneficiaryAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventUpdateResourceNode {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateResourceNode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.networkAddress = reader.string();
          break;
        case 3:
          message.beneficiaryAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventUpdateResourceNode {
    const obj = createBaseEventUpdateResourceNode();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.networkAddress)) obj.networkAddress = String(object.networkAddress);
    if (isSet(object.beneficiaryAddress)) obj.beneficiaryAddress = String(object.beneficiaryAddress);
    return obj;
  },
  toJSON(message: EventUpdateResourceNode): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.networkAddress !== undefined && (obj.networkAddress = message.networkAddress);
    message.beneficiaryAddress !== undefined && (obj.beneficiaryAddress = message.beneficiaryAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventUpdateResourceNode>, I>>(object: I): EventUpdateResourceNode {
    const message = createBaseEventUpdateResourceNode();
    message.sender = object.sender ?? "";
    message.networkAddress = object.networkAddress ?? "";
    message.beneficiaryAddress = object.beneficiaryAddress ?? "";
    return message;
  },
};
function createBaseEventUpdateResourceNodeDeposit(): EventUpdateResourceNodeDeposit {
  return {
    sender: "",
    networkAddress: "",
    depositDelta: "",
    currentDeposit: "",
    availableTokenBefore: "",
    availableTokenAfter: "",
    ozoneLimitChanges: "",
    unbondingMatureTime: "",
  };
}
export const EventUpdateResourceNodeDeposit = {
  typeUrl: "/stratos.register.v1.EventUpdateResourceNodeDeposit",
  encode(
    message: EventUpdateResourceNodeDeposit,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.networkAddress !== "") {
      writer.uint32(18).string(message.networkAddress);
    }
    if (message.depositDelta !== "") {
      writer.uint32(26).string(message.depositDelta);
    }
    if (message.currentDeposit !== "") {
      writer.uint32(34).string(message.currentDeposit);
    }
    if (message.availableTokenBefore !== "") {
      writer.uint32(42).string(message.availableTokenBefore);
    }
    if (message.availableTokenAfter !== "") {
      writer.uint32(50).string(message.availableTokenAfter);
    }
    if (message.ozoneLimitChanges !== "") {
      writer.uint32(58).string(message.ozoneLimitChanges);
    }
    if (message.unbondingMatureTime !== "") {
      writer.uint32(66).string(message.unbondingMatureTime);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventUpdateResourceNodeDeposit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateResourceNodeDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.networkAddress = reader.string();
          break;
        case 3:
          message.depositDelta = reader.string();
          break;
        case 4:
          message.currentDeposit = reader.string();
          break;
        case 5:
          message.availableTokenBefore = reader.string();
          break;
        case 6:
          message.availableTokenAfter = reader.string();
          break;
        case 7:
          message.ozoneLimitChanges = reader.string();
          break;
        case 8:
          message.unbondingMatureTime = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventUpdateResourceNodeDeposit {
    const obj = createBaseEventUpdateResourceNodeDeposit();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.networkAddress)) obj.networkAddress = String(object.networkAddress);
    if (isSet(object.depositDelta)) obj.depositDelta = String(object.depositDelta);
    if (isSet(object.currentDeposit)) obj.currentDeposit = String(object.currentDeposit);
    if (isSet(object.availableTokenBefore)) obj.availableTokenBefore = String(object.availableTokenBefore);
    if (isSet(object.availableTokenAfter)) obj.availableTokenAfter = String(object.availableTokenAfter);
    if (isSet(object.ozoneLimitChanges)) obj.ozoneLimitChanges = String(object.ozoneLimitChanges);
    if (isSet(object.unbondingMatureTime)) obj.unbondingMatureTime = String(object.unbondingMatureTime);
    return obj;
  },
  toJSON(message: EventUpdateResourceNodeDeposit): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.networkAddress !== undefined && (obj.networkAddress = message.networkAddress);
    message.depositDelta !== undefined && (obj.depositDelta = message.depositDelta);
    message.currentDeposit !== undefined && (obj.currentDeposit = message.currentDeposit);
    message.availableTokenBefore !== undefined && (obj.availableTokenBefore = message.availableTokenBefore);
    message.availableTokenAfter !== undefined && (obj.availableTokenAfter = message.availableTokenAfter);
    message.ozoneLimitChanges !== undefined && (obj.ozoneLimitChanges = message.ozoneLimitChanges);
    message.unbondingMatureTime !== undefined && (obj.unbondingMatureTime = message.unbondingMatureTime);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventUpdateResourceNodeDeposit>, I>>(
    object: I,
  ): EventUpdateResourceNodeDeposit {
    const message = createBaseEventUpdateResourceNodeDeposit();
    message.sender = object.sender ?? "";
    message.networkAddress = object.networkAddress ?? "";
    message.depositDelta = object.depositDelta ?? "";
    message.currentDeposit = object.currentDeposit ?? "";
    message.availableTokenBefore = object.availableTokenBefore ?? "";
    message.availableTokenAfter = object.availableTokenAfter ?? "";
    message.ozoneLimitChanges = object.ozoneLimitChanges ?? "";
    message.unbondingMatureTime = object.unbondingMatureTime ?? "";
    return message;
  },
};
function createBaseEventUpdateEffectiveDeposit(): EventUpdateEffectiveDeposit {
  return {
    networkAddress: "",
    effectiveDepositAfter: "",
    isUnsuspended: "",
  };
}
export const EventUpdateEffectiveDeposit = {
  typeUrl: "/stratos.register.v1.EventUpdateEffectiveDeposit",
  encode(message: EventUpdateEffectiveDeposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.networkAddress !== "") {
      writer.uint32(10).string(message.networkAddress);
    }
    if (message.effectiveDepositAfter !== "") {
      writer.uint32(18).string(message.effectiveDepositAfter);
    }
    if (message.isUnsuspended !== "") {
      writer.uint32(26).string(message.isUnsuspended);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventUpdateEffectiveDeposit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateEffectiveDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.networkAddress = reader.string();
          break;
        case 2:
          message.effectiveDepositAfter = reader.string();
          break;
        case 3:
          message.isUnsuspended = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventUpdateEffectiveDeposit {
    const obj = createBaseEventUpdateEffectiveDeposit();
    if (isSet(object.networkAddress)) obj.networkAddress = String(object.networkAddress);
    if (isSet(object.effectiveDepositAfter)) obj.effectiveDepositAfter = String(object.effectiveDepositAfter);
    if (isSet(object.isUnsuspended)) obj.isUnsuspended = String(object.isUnsuspended);
    return obj;
  },
  toJSON(message: EventUpdateEffectiveDeposit): unknown {
    const obj: any = {};
    message.networkAddress !== undefined && (obj.networkAddress = message.networkAddress);
    message.effectiveDepositAfter !== undefined &&
      (obj.effectiveDepositAfter = message.effectiveDepositAfter);
    message.isUnsuspended !== undefined && (obj.isUnsuspended = message.isUnsuspended);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventUpdateEffectiveDeposit>, I>>(
    object: I,
  ): EventUpdateEffectiveDeposit {
    const message = createBaseEventUpdateEffectiveDeposit();
    message.networkAddress = object.networkAddress ?? "";
    message.effectiveDepositAfter = object.effectiveDepositAfter ?? "";
    message.isUnsuspended = object.isUnsuspended ?? "";
    return message;
  },
};
function createBaseEventUpdateMetaNode(): EventUpdateMetaNode {
  return {
    sender: "",
    networkAddress: "",
  };
}
export const EventUpdateMetaNode = {
  typeUrl: "/stratos.register.v1.EventUpdateMetaNode",
  encode(message: EventUpdateMetaNode, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.networkAddress !== "") {
      writer.uint32(18).string(message.networkAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventUpdateMetaNode {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateMetaNode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.networkAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventUpdateMetaNode {
    const obj = createBaseEventUpdateMetaNode();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.networkAddress)) obj.networkAddress = String(object.networkAddress);
    return obj;
  },
  toJSON(message: EventUpdateMetaNode): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.networkAddress !== undefined && (obj.networkAddress = message.networkAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventUpdateMetaNode>, I>>(object: I): EventUpdateMetaNode {
    const message = createBaseEventUpdateMetaNode();
    message.sender = object.sender ?? "";
    message.networkAddress = object.networkAddress ?? "";
    return message;
  },
};
function createBaseEventUpdateMetaNodeDeposit(): EventUpdateMetaNodeDeposit {
  return {
    sender: "",
    networkAddress: "",
    depositDelta: "",
    currentDeposit: "",
    availableTokenBefore: "",
    availableTokenAfter: "",
    ozoneLimitChanges: "",
    unbondingMatureTime: "",
  };
}
export const EventUpdateMetaNodeDeposit = {
  typeUrl: "/stratos.register.v1.EventUpdateMetaNodeDeposit",
  encode(message: EventUpdateMetaNodeDeposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.networkAddress !== "") {
      writer.uint32(18).string(message.networkAddress);
    }
    if (message.depositDelta !== "") {
      writer.uint32(26).string(message.depositDelta);
    }
    if (message.currentDeposit !== "") {
      writer.uint32(34).string(message.currentDeposit);
    }
    if (message.availableTokenBefore !== "") {
      writer.uint32(42).string(message.availableTokenBefore);
    }
    if (message.availableTokenAfter !== "") {
      writer.uint32(50).string(message.availableTokenAfter);
    }
    if (message.ozoneLimitChanges !== "") {
      writer.uint32(58).string(message.ozoneLimitChanges);
    }
    if (message.unbondingMatureTime !== "") {
      writer.uint32(66).string(message.unbondingMatureTime);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventUpdateMetaNodeDeposit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateMetaNodeDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.networkAddress = reader.string();
          break;
        case 3:
          message.depositDelta = reader.string();
          break;
        case 4:
          message.currentDeposit = reader.string();
          break;
        case 5:
          message.availableTokenBefore = reader.string();
          break;
        case 6:
          message.availableTokenAfter = reader.string();
          break;
        case 7:
          message.ozoneLimitChanges = reader.string();
          break;
        case 8:
          message.unbondingMatureTime = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventUpdateMetaNodeDeposit {
    const obj = createBaseEventUpdateMetaNodeDeposit();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.networkAddress)) obj.networkAddress = String(object.networkAddress);
    if (isSet(object.depositDelta)) obj.depositDelta = String(object.depositDelta);
    if (isSet(object.currentDeposit)) obj.currentDeposit = String(object.currentDeposit);
    if (isSet(object.availableTokenBefore)) obj.availableTokenBefore = String(object.availableTokenBefore);
    if (isSet(object.availableTokenAfter)) obj.availableTokenAfter = String(object.availableTokenAfter);
    if (isSet(object.ozoneLimitChanges)) obj.ozoneLimitChanges = String(object.ozoneLimitChanges);
    if (isSet(object.unbondingMatureTime)) obj.unbondingMatureTime = String(object.unbondingMatureTime);
    return obj;
  },
  toJSON(message: EventUpdateMetaNodeDeposit): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.networkAddress !== undefined && (obj.networkAddress = message.networkAddress);
    message.depositDelta !== undefined && (obj.depositDelta = message.depositDelta);
    message.currentDeposit !== undefined && (obj.currentDeposit = message.currentDeposit);
    message.availableTokenBefore !== undefined && (obj.availableTokenBefore = message.availableTokenBefore);
    message.availableTokenAfter !== undefined && (obj.availableTokenAfter = message.availableTokenAfter);
    message.ozoneLimitChanges !== undefined && (obj.ozoneLimitChanges = message.ozoneLimitChanges);
    message.unbondingMatureTime !== undefined && (obj.unbondingMatureTime = message.unbondingMatureTime);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventUpdateMetaNodeDeposit>, I>>(
    object: I,
  ): EventUpdateMetaNodeDeposit {
    const message = createBaseEventUpdateMetaNodeDeposit();
    message.sender = object.sender ?? "";
    message.networkAddress = object.networkAddress ?? "";
    message.depositDelta = object.depositDelta ?? "";
    message.currentDeposit = object.currentDeposit ?? "";
    message.availableTokenBefore = object.availableTokenBefore ?? "";
    message.availableTokenAfter = object.availableTokenAfter ?? "";
    message.ozoneLimitChanges = object.ozoneLimitChanges ?? "";
    message.unbondingMatureTime = object.unbondingMatureTime ?? "";
    return message;
  },
};
function createBaseEventCompleteUnBondingResourceNode(): EventCompleteUnBondingResourceNode {
  return {
    amount: "",
    networkAddress: "",
  };
}
export const EventCompleteUnBondingResourceNode = {
  typeUrl: "/stratos.register.v1.EventCompleteUnBondingResourceNode",
  encode(
    message: EventCompleteUnBondingResourceNode,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    if (message.networkAddress !== "") {
      writer.uint32(18).string(message.networkAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventCompleteUnBondingResourceNode {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCompleteUnBondingResourceNode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
          break;
        case 2:
          message.networkAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventCompleteUnBondingResourceNode {
    const obj = createBaseEventCompleteUnBondingResourceNode();
    if (isSet(object.amount)) obj.amount = String(object.amount);
    if (isSet(object.networkAddress)) obj.networkAddress = String(object.networkAddress);
    return obj;
  },
  toJSON(message: EventCompleteUnBondingResourceNode): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount);
    message.networkAddress !== undefined && (obj.networkAddress = message.networkAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventCompleteUnBondingResourceNode>, I>>(
    object: I,
  ): EventCompleteUnBondingResourceNode {
    const message = createBaseEventCompleteUnBondingResourceNode();
    message.amount = object.amount ?? "";
    message.networkAddress = object.networkAddress ?? "";
    return message;
  },
};
function createBaseEventCompleteUnBondingMetaNode(): EventCompleteUnBondingMetaNode {
  return {
    amount: "",
    networkAddress: "",
  };
}
export const EventCompleteUnBondingMetaNode = {
  typeUrl: "/stratos.register.v1.EventCompleteUnBondingMetaNode",
  encode(
    message: EventCompleteUnBondingMetaNode,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    if (message.networkAddress !== "") {
      writer.uint32(18).string(message.networkAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventCompleteUnBondingMetaNode {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCompleteUnBondingMetaNode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
          break;
        case 2:
          message.networkAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventCompleteUnBondingMetaNode {
    const obj = createBaseEventCompleteUnBondingMetaNode();
    if (isSet(object.amount)) obj.amount = String(object.amount);
    if (isSet(object.networkAddress)) obj.networkAddress = String(object.networkAddress);
    return obj;
  },
  toJSON(message: EventCompleteUnBondingMetaNode): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount);
    message.networkAddress !== undefined && (obj.networkAddress = message.networkAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventCompleteUnBondingMetaNode>, I>>(
    object: I,
  ): EventCompleteUnBondingMetaNode {
    const message = createBaseEventCompleteUnBondingMetaNode();
    message.amount = object.amount ?? "";
    message.networkAddress = object.networkAddress ?? "";
    return message;
  },
};
