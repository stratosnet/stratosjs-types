/* eslint-disable */
import { Any } from "../../../google/protobuf/any";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Description } from "./register";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact, Rpc } from "../../../helpers";
export const protobufPackage = "stratos.register.v1";
/** MsgCreateResourceNode encapsulates an MsgCreateResourceNodeTx transaction as an SDK message. */
export interface MsgCreateResourceNode {
  networkAddress: string;
  pubkey?: Any;
  value: Coin;
  ownerAddress: string;
  description: Description;
  nodeType: number;
}
/** MsgCreateResourceNodeResponse defines the CreateResourceNodeTx response type */
export interface MsgCreateResourceNodeResponse {}
/** MsgCreateMetaNode encapsulates an MsgCreateMetaNodeTx transaction as an SDK message. */
export interface MsgCreateMetaNode {
  networkAddress: string;
  pubkey?: Any;
  value: Coin;
  ownerAddress: string;
  description: Description;
}
/** MsgCreateMetaNodeResponse defines the CreateMetaNode response type */
export interface MsgCreateMetaNodeResponse {}
/** MsgRemoveResourceNode - encapsulates an RemoveResourceNode transaction as an SDK message */
export interface MsgRemoveResourceNode {
  resourceNodeAddress: string;
  ownerAddress: string;
}
/** MsgRemoveResourceNodeResponse defines the Msg/RemoveResourceNode response type. */
export interface MsgRemoveResourceNodeResponse {}
/** MsgRemoveMetaNode - encapsulates an MsgRemoveMetaNode transaction as an SDK message */
export interface MsgRemoveMetaNode {
  metaNodeAddress: string;
  ownerAddress: string;
}
/** MsgRemoveMetaNodeResponse defines the Msg/RemoveMetaNode response type. */
export interface MsgRemoveMetaNodeResponse {}
/** MsgUpdateResourceNode defines a SDK message for updating an existing resource node. */
export interface MsgUpdateResourceNode {
  description: Description;
  networkAddress: string;
  ownerAddress: string;
  nodeType: number;
}
/** MsgUpdateResourceNodeResponse defines the Msg/UpdateResourceNode response type. */
export interface MsgUpdateResourceNodeResponse {}
/** MsgUpdateMetaNode defines a SDK message for updating an existing meta node. */
export interface MsgUpdateMetaNode {
  description: Description;
  networkAddress: string;
  ownerAddress: string;
}
/** MsgUpdateMetaNodeResponse defines the Msg/UpdateMetaNode response type. */
export interface MsgUpdateMetaNodeResponse {}
/** MsgUpdateResourceNodeDeposit defines a SDK message for updating the deposit of an existing resource node. */
export interface MsgUpdateResourceNodeDeposit {
  networkAddress: string;
  ownerAddress: string;
  depositDelta: Coin;
}
/** MsgUpdateResourceNodeDepositResponse defines the Msg/UpdateResourceNodeDeposit response type. */
export interface MsgUpdateResourceNodeDepositResponse {}
/** MsgUpdateEffectiveDeposit defines a SDK message for updating the effective deposit of an existing resource node. */
export interface MsgUpdateEffectiveDeposit {
  reporters: string[];
  reporterOwner: string[];
  networkAddress: string;
  effectiveTokens: string;
}
/** MsgUpdateEffectiveDepositResponse defines the Msg/UpdateEffectiveDeposit response type. */
export interface MsgUpdateEffectiveDepositResponse {}
/** MsgUpdateMetaNodeDeposit defines a SDK message for updating the deposit of an existing meta node. */
export interface MsgUpdateMetaNodeDeposit {
  networkAddress: string;
  ownerAddress: string;
  depositDelta: Coin;
}
/** MsgUpdateMetaNodeDepositResponse defines the Msg/UpdateMetaNodeDeposit response type. */
export interface MsgUpdateMetaNodeDepositResponse {}
/** MsgMetaNodeRegistrationVote defines a SDK message for registration vote of an existing meta node. */
export interface MsgMetaNodeRegistrationVote {
  candidateNetworkAddress: string;
  candidateOwnerAddress: string;
  opinion: boolean;
  voterNetworkAddress: string;
  voterOwnerAddress: string;
}
/** MsgMetaNodeRegistrationVoteResponse defines the Msg/MetaNodeRegistrationVote response type. */
export interface MsgMetaNodeRegistrationVoteResponse {}
/** MsgWithdrawMetaNodeRegistrationDeposit defines a SDK message for withdrawing registration deposit of meta node. */
export interface MsgWithdrawMetaNodeRegistrationDeposit {
  networkAddress: string;
  ownerAddress: string;
}
/** MsgWithdrawMetaNodeRegistrationDepositResponse defines the Msg/WithdrawMetaNodeRegistrationDeposit response type. */
export interface MsgWithdrawMetaNodeRegistrationDepositResponse {}
function createBaseMsgCreateResourceNode(): MsgCreateResourceNode {
  return {
    networkAddress: "",
    pubkey: undefined,
    value: Coin.fromPartial({}),
    ownerAddress: "",
    description: Description.fromPartial({}),
    nodeType: 0,
  };
}
export const MsgCreateResourceNode = {
  typeUrl: "/stratos.register.v1.MsgCreateResourceNode",
  encode(message: MsgCreateResourceNode, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.networkAddress !== "") {
      writer.uint32(10).string(message.networkAddress);
    }
    if (message.pubkey !== undefined) {
      Any.encode(message.pubkey, writer.uint32(18).fork()).ldelim();
    }
    if (message.value !== undefined) {
      Coin.encode(message.value, writer.uint32(26).fork()).ldelim();
    }
    if (message.ownerAddress !== "") {
      writer.uint32(34).string(message.ownerAddress);
    }
    if (message.description !== undefined) {
      Description.encode(message.description, writer.uint32(42).fork()).ldelim();
    }
    if (message.nodeType !== 0) {
      writer.uint32(48).uint32(message.nodeType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateResourceNode {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateResourceNode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.networkAddress = reader.string();
          break;
        case 2:
          message.pubkey = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.value = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.ownerAddress = reader.string();
          break;
        case 5:
          message.description = Description.decode(reader, reader.uint32());
          break;
        case 6:
          message.nodeType = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateResourceNode {
    const obj = createBaseMsgCreateResourceNode();
    if (isSet(object.networkAddress)) obj.networkAddress = String(object.networkAddress);
    if (isSet(object.pubkey)) obj.pubkey = Any.fromJSON(object.pubkey);
    if (isSet(object.value)) obj.value = Coin.fromJSON(object.value);
    if (isSet(object.ownerAddress)) obj.ownerAddress = String(object.ownerAddress);
    if (isSet(object.description)) obj.description = Description.fromJSON(object.description);
    if (isSet(object.nodeType)) obj.nodeType = Number(object.nodeType);
    return obj;
  },
  toJSON(message: MsgCreateResourceNode): unknown {
    const obj: any = {};
    message.networkAddress !== undefined && (obj.networkAddress = message.networkAddress);
    message.pubkey !== undefined && (obj.pubkey = message.pubkey ? Any.toJSON(message.pubkey) : undefined);
    message.value !== undefined && (obj.value = message.value ? Coin.toJSON(message.value) : undefined);
    message.ownerAddress !== undefined && (obj.ownerAddress = message.ownerAddress);
    message.description !== undefined &&
      (obj.description = message.description ? Description.toJSON(message.description) : undefined);
    message.nodeType !== undefined && (obj.nodeType = Math.round(message.nodeType));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateResourceNode>, I>>(object: I): MsgCreateResourceNode {
    const message = createBaseMsgCreateResourceNode();
    message.networkAddress = object.networkAddress ?? "";
    if (object.pubkey !== undefined && object.pubkey !== null) {
      message.pubkey = Any.fromPartial(object.pubkey);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Coin.fromPartial(object.value);
    }
    message.ownerAddress = object.ownerAddress ?? "";
    if (object.description !== undefined && object.description !== null) {
      message.description = Description.fromPartial(object.description);
    }
    message.nodeType = object.nodeType ?? 0;
    return message;
  },
};
function createBaseMsgCreateResourceNodeResponse(): MsgCreateResourceNodeResponse {
  return {};
}
export const MsgCreateResourceNodeResponse = {
  typeUrl: "/stratos.register.v1.MsgCreateResourceNodeResponse",
  encode(_: MsgCreateResourceNodeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateResourceNodeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateResourceNodeResponse();
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
  fromJSON(_: any): MsgCreateResourceNodeResponse {
    const obj = createBaseMsgCreateResourceNodeResponse();
    return obj;
  },
  toJSON(_: MsgCreateResourceNodeResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateResourceNodeResponse>, I>>(
    _: I,
  ): MsgCreateResourceNodeResponse {
    const message = createBaseMsgCreateResourceNodeResponse();
    return message;
  },
};
function createBaseMsgCreateMetaNode(): MsgCreateMetaNode {
  return {
    networkAddress: "",
    pubkey: undefined,
    value: Coin.fromPartial({}),
    ownerAddress: "",
    description: Description.fromPartial({}),
  };
}
export const MsgCreateMetaNode = {
  typeUrl: "/stratos.register.v1.MsgCreateMetaNode",
  encode(message: MsgCreateMetaNode, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.networkAddress !== "") {
      writer.uint32(10).string(message.networkAddress);
    }
    if (message.pubkey !== undefined) {
      Any.encode(message.pubkey, writer.uint32(18).fork()).ldelim();
    }
    if (message.value !== undefined) {
      Coin.encode(message.value, writer.uint32(26).fork()).ldelim();
    }
    if (message.ownerAddress !== "") {
      writer.uint32(34).string(message.ownerAddress);
    }
    if (message.description !== undefined) {
      Description.encode(message.description, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateMetaNode {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateMetaNode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.networkAddress = reader.string();
          break;
        case 2:
          message.pubkey = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.value = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.ownerAddress = reader.string();
          break;
        case 5:
          message.description = Description.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateMetaNode {
    const obj = createBaseMsgCreateMetaNode();
    if (isSet(object.networkAddress)) obj.networkAddress = String(object.networkAddress);
    if (isSet(object.pubkey)) obj.pubkey = Any.fromJSON(object.pubkey);
    if (isSet(object.value)) obj.value = Coin.fromJSON(object.value);
    if (isSet(object.ownerAddress)) obj.ownerAddress = String(object.ownerAddress);
    if (isSet(object.description)) obj.description = Description.fromJSON(object.description);
    return obj;
  },
  toJSON(message: MsgCreateMetaNode): unknown {
    const obj: any = {};
    message.networkAddress !== undefined && (obj.networkAddress = message.networkAddress);
    message.pubkey !== undefined && (obj.pubkey = message.pubkey ? Any.toJSON(message.pubkey) : undefined);
    message.value !== undefined && (obj.value = message.value ? Coin.toJSON(message.value) : undefined);
    message.ownerAddress !== undefined && (obj.ownerAddress = message.ownerAddress);
    message.description !== undefined &&
      (obj.description = message.description ? Description.toJSON(message.description) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateMetaNode>, I>>(object: I): MsgCreateMetaNode {
    const message = createBaseMsgCreateMetaNode();
    message.networkAddress = object.networkAddress ?? "";
    if (object.pubkey !== undefined && object.pubkey !== null) {
      message.pubkey = Any.fromPartial(object.pubkey);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Coin.fromPartial(object.value);
    }
    message.ownerAddress = object.ownerAddress ?? "";
    if (object.description !== undefined && object.description !== null) {
      message.description = Description.fromPartial(object.description);
    }
    return message;
  },
};
function createBaseMsgCreateMetaNodeResponse(): MsgCreateMetaNodeResponse {
  return {};
}
export const MsgCreateMetaNodeResponse = {
  typeUrl: "/stratos.register.v1.MsgCreateMetaNodeResponse",
  encode(_: MsgCreateMetaNodeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateMetaNodeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateMetaNodeResponse();
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
  fromJSON(_: any): MsgCreateMetaNodeResponse {
    const obj = createBaseMsgCreateMetaNodeResponse();
    return obj;
  },
  toJSON(_: MsgCreateMetaNodeResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateMetaNodeResponse>, I>>(_: I): MsgCreateMetaNodeResponse {
    const message = createBaseMsgCreateMetaNodeResponse();
    return message;
  },
};
function createBaseMsgRemoveResourceNode(): MsgRemoveResourceNode {
  return {
    resourceNodeAddress: "",
    ownerAddress: "",
  };
}
export const MsgRemoveResourceNode = {
  typeUrl: "/stratos.register.v1.MsgRemoveResourceNode",
  encode(message: MsgRemoveResourceNode, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.resourceNodeAddress !== "") {
      writer.uint32(10).string(message.resourceNodeAddress);
    }
    if (message.ownerAddress !== "") {
      writer.uint32(18).string(message.ownerAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveResourceNode {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveResourceNode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resourceNodeAddress = reader.string();
          break;
        case 2:
          message.ownerAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRemoveResourceNode {
    const obj = createBaseMsgRemoveResourceNode();
    if (isSet(object.resourceNodeAddress)) obj.resourceNodeAddress = String(object.resourceNodeAddress);
    if (isSet(object.ownerAddress)) obj.ownerAddress = String(object.ownerAddress);
    return obj;
  },
  toJSON(message: MsgRemoveResourceNode): unknown {
    const obj: any = {};
    message.resourceNodeAddress !== undefined && (obj.resourceNodeAddress = message.resourceNodeAddress);
    message.ownerAddress !== undefined && (obj.ownerAddress = message.ownerAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRemoveResourceNode>, I>>(object: I): MsgRemoveResourceNode {
    const message = createBaseMsgRemoveResourceNode();
    message.resourceNodeAddress = object.resourceNodeAddress ?? "";
    message.ownerAddress = object.ownerAddress ?? "";
    return message;
  },
};
function createBaseMsgRemoveResourceNodeResponse(): MsgRemoveResourceNodeResponse {
  return {};
}
export const MsgRemoveResourceNodeResponse = {
  typeUrl: "/stratos.register.v1.MsgRemoveResourceNodeResponse",
  encode(_: MsgRemoveResourceNodeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveResourceNodeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveResourceNodeResponse();
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
  fromJSON(_: any): MsgRemoveResourceNodeResponse {
    const obj = createBaseMsgRemoveResourceNodeResponse();
    return obj;
  },
  toJSON(_: MsgRemoveResourceNodeResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRemoveResourceNodeResponse>, I>>(
    _: I,
  ): MsgRemoveResourceNodeResponse {
    const message = createBaseMsgRemoveResourceNodeResponse();
    return message;
  },
};
function createBaseMsgRemoveMetaNode(): MsgRemoveMetaNode {
  return {
    metaNodeAddress: "",
    ownerAddress: "",
  };
}
export const MsgRemoveMetaNode = {
  typeUrl: "/stratos.register.v1.MsgRemoveMetaNode",
  encode(message: MsgRemoveMetaNode, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.metaNodeAddress !== "") {
      writer.uint32(10).string(message.metaNodeAddress);
    }
    if (message.ownerAddress !== "") {
      writer.uint32(18).string(message.ownerAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveMetaNode {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveMetaNode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metaNodeAddress = reader.string();
          break;
        case 2:
          message.ownerAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRemoveMetaNode {
    const obj = createBaseMsgRemoveMetaNode();
    if (isSet(object.metaNodeAddress)) obj.metaNodeAddress = String(object.metaNodeAddress);
    if (isSet(object.ownerAddress)) obj.ownerAddress = String(object.ownerAddress);
    return obj;
  },
  toJSON(message: MsgRemoveMetaNode): unknown {
    const obj: any = {};
    message.metaNodeAddress !== undefined && (obj.metaNodeAddress = message.metaNodeAddress);
    message.ownerAddress !== undefined && (obj.ownerAddress = message.ownerAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRemoveMetaNode>, I>>(object: I): MsgRemoveMetaNode {
    const message = createBaseMsgRemoveMetaNode();
    message.metaNodeAddress = object.metaNodeAddress ?? "";
    message.ownerAddress = object.ownerAddress ?? "";
    return message;
  },
};
function createBaseMsgRemoveMetaNodeResponse(): MsgRemoveMetaNodeResponse {
  return {};
}
export const MsgRemoveMetaNodeResponse = {
  typeUrl: "/stratos.register.v1.MsgRemoveMetaNodeResponse",
  encode(_: MsgRemoveMetaNodeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveMetaNodeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveMetaNodeResponse();
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
  fromJSON(_: any): MsgRemoveMetaNodeResponse {
    const obj = createBaseMsgRemoveMetaNodeResponse();
    return obj;
  },
  toJSON(_: MsgRemoveMetaNodeResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRemoveMetaNodeResponse>, I>>(_: I): MsgRemoveMetaNodeResponse {
    const message = createBaseMsgRemoveMetaNodeResponse();
    return message;
  },
};
function createBaseMsgUpdateResourceNode(): MsgUpdateResourceNode {
  return {
    description: Description.fromPartial({}),
    networkAddress: "",
    ownerAddress: "",
    nodeType: 0,
  };
}
export const MsgUpdateResourceNode = {
  typeUrl: "/stratos.register.v1.MsgUpdateResourceNode",
  encode(message: MsgUpdateResourceNode, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.description !== undefined) {
      Description.encode(message.description, writer.uint32(10).fork()).ldelim();
    }
    if (message.networkAddress !== "") {
      writer.uint32(18).string(message.networkAddress);
    }
    if (message.ownerAddress !== "") {
      writer.uint32(26).string(message.ownerAddress);
    }
    if (message.nodeType !== 0) {
      writer.uint32(32).uint32(message.nodeType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateResourceNode {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateResourceNode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.description = Description.decode(reader, reader.uint32());
          break;
        case 2:
          message.networkAddress = reader.string();
          break;
        case 3:
          message.ownerAddress = reader.string();
          break;
        case 4:
          message.nodeType = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateResourceNode {
    const obj = createBaseMsgUpdateResourceNode();
    if (isSet(object.description)) obj.description = Description.fromJSON(object.description);
    if (isSet(object.networkAddress)) obj.networkAddress = String(object.networkAddress);
    if (isSet(object.ownerAddress)) obj.ownerAddress = String(object.ownerAddress);
    if (isSet(object.nodeType)) obj.nodeType = Number(object.nodeType);
    return obj;
  },
  toJSON(message: MsgUpdateResourceNode): unknown {
    const obj: any = {};
    message.description !== undefined &&
      (obj.description = message.description ? Description.toJSON(message.description) : undefined);
    message.networkAddress !== undefined && (obj.networkAddress = message.networkAddress);
    message.ownerAddress !== undefined && (obj.ownerAddress = message.ownerAddress);
    message.nodeType !== undefined && (obj.nodeType = Math.round(message.nodeType));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateResourceNode>, I>>(object: I): MsgUpdateResourceNode {
    const message = createBaseMsgUpdateResourceNode();
    if (object.description !== undefined && object.description !== null) {
      message.description = Description.fromPartial(object.description);
    }
    message.networkAddress = object.networkAddress ?? "";
    message.ownerAddress = object.ownerAddress ?? "";
    message.nodeType = object.nodeType ?? 0;
    return message;
  },
};
function createBaseMsgUpdateResourceNodeResponse(): MsgUpdateResourceNodeResponse {
  return {};
}
export const MsgUpdateResourceNodeResponse = {
  typeUrl: "/stratos.register.v1.MsgUpdateResourceNodeResponse",
  encode(_: MsgUpdateResourceNodeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateResourceNodeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateResourceNodeResponse();
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
  fromJSON(_: any): MsgUpdateResourceNodeResponse {
    const obj = createBaseMsgUpdateResourceNodeResponse();
    return obj;
  },
  toJSON(_: MsgUpdateResourceNodeResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateResourceNodeResponse>, I>>(
    _: I,
  ): MsgUpdateResourceNodeResponse {
    const message = createBaseMsgUpdateResourceNodeResponse();
    return message;
  },
};
function createBaseMsgUpdateMetaNode(): MsgUpdateMetaNode {
  return {
    description: Description.fromPartial({}),
    networkAddress: "",
    ownerAddress: "",
  };
}
export const MsgUpdateMetaNode = {
  typeUrl: "/stratos.register.v1.MsgUpdateMetaNode",
  encode(message: MsgUpdateMetaNode, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.description !== undefined) {
      Description.encode(message.description, writer.uint32(10).fork()).ldelim();
    }
    if (message.networkAddress !== "") {
      writer.uint32(18).string(message.networkAddress);
    }
    if (message.ownerAddress !== "") {
      writer.uint32(26).string(message.ownerAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateMetaNode {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMetaNode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.description = Description.decode(reader, reader.uint32());
          break;
        case 2:
          message.networkAddress = reader.string();
          break;
        case 3:
          message.ownerAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateMetaNode {
    const obj = createBaseMsgUpdateMetaNode();
    if (isSet(object.description)) obj.description = Description.fromJSON(object.description);
    if (isSet(object.networkAddress)) obj.networkAddress = String(object.networkAddress);
    if (isSet(object.ownerAddress)) obj.ownerAddress = String(object.ownerAddress);
    return obj;
  },
  toJSON(message: MsgUpdateMetaNode): unknown {
    const obj: any = {};
    message.description !== undefined &&
      (obj.description = message.description ? Description.toJSON(message.description) : undefined);
    message.networkAddress !== undefined && (obj.networkAddress = message.networkAddress);
    message.ownerAddress !== undefined && (obj.ownerAddress = message.ownerAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateMetaNode>, I>>(object: I): MsgUpdateMetaNode {
    const message = createBaseMsgUpdateMetaNode();
    if (object.description !== undefined && object.description !== null) {
      message.description = Description.fromPartial(object.description);
    }
    message.networkAddress = object.networkAddress ?? "";
    message.ownerAddress = object.ownerAddress ?? "";
    return message;
  },
};
function createBaseMsgUpdateMetaNodeResponse(): MsgUpdateMetaNodeResponse {
  return {};
}
export const MsgUpdateMetaNodeResponse = {
  typeUrl: "/stratos.register.v1.MsgUpdateMetaNodeResponse",
  encode(_: MsgUpdateMetaNodeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateMetaNodeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMetaNodeResponse();
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
  fromJSON(_: any): MsgUpdateMetaNodeResponse {
    const obj = createBaseMsgUpdateMetaNodeResponse();
    return obj;
  },
  toJSON(_: MsgUpdateMetaNodeResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateMetaNodeResponse>, I>>(_: I): MsgUpdateMetaNodeResponse {
    const message = createBaseMsgUpdateMetaNodeResponse();
    return message;
  },
};
function createBaseMsgUpdateResourceNodeDeposit(): MsgUpdateResourceNodeDeposit {
  return {
    networkAddress: "",
    ownerAddress: "",
    depositDelta: Coin.fromPartial({}),
  };
}
export const MsgUpdateResourceNodeDeposit = {
  typeUrl: "/stratos.register.v1.MsgUpdateResourceNodeDeposit",
  encode(message: MsgUpdateResourceNodeDeposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.networkAddress !== "") {
      writer.uint32(10).string(message.networkAddress);
    }
    if (message.ownerAddress !== "") {
      writer.uint32(18).string(message.ownerAddress);
    }
    if (message.depositDelta !== undefined) {
      Coin.encode(message.depositDelta, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateResourceNodeDeposit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateResourceNodeDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.networkAddress = reader.string();
          break;
        case 2:
          message.ownerAddress = reader.string();
          break;
        case 3:
          message.depositDelta = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateResourceNodeDeposit {
    const obj = createBaseMsgUpdateResourceNodeDeposit();
    if (isSet(object.networkAddress)) obj.networkAddress = String(object.networkAddress);
    if (isSet(object.ownerAddress)) obj.ownerAddress = String(object.ownerAddress);
    if (isSet(object.depositDelta)) obj.depositDelta = Coin.fromJSON(object.depositDelta);
    return obj;
  },
  toJSON(message: MsgUpdateResourceNodeDeposit): unknown {
    const obj: any = {};
    message.networkAddress !== undefined && (obj.networkAddress = message.networkAddress);
    message.ownerAddress !== undefined && (obj.ownerAddress = message.ownerAddress);
    message.depositDelta !== undefined &&
      (obj.depositDelta = message.depositDelta ? Coin.toJSON(message.depositDelta) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateResourceNodeDeposit>, I>>(
    object: I,
  ): MsgUpdateResourceNodeDeposit {
    const message = createBaseMsgUpdateResourceNodeDeposit();
    message.networkAddress = object.networkAddress ?? "";
    message.ownerAddress = object.ownerAddress ?? "";
    if (object.depositDelta !== undefined && object.depositDelta !== null) {
      message.depositDelta = Coin.fromPartial(object.depositDelta);
    }
    return message;
  },
};
function createBaseMsgUpdateResourceNodeDepositResponse(): MsgUpdateResourceNodeDepositResponse {
  return {};
}
export const MsgUpdateResourceNodeDepositResponse = {
  typeUrl: "/stratos.register.v1.MsgUpdateResourceNodeDepositResponse",
  encode(
    _: MsgUpdateResourceNodeDepositResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateResourceNodeDepositResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateResourceNodeDepositResponse();
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
  fromJSON(_: any): MsgUpdateResourceNodeDepositResponse {
    const obj = createBaseMsgUpdateResourceNodeDepositResponse();
    return obj;
  },
  toJSON(_: MsgUpdateResourceNodeDepositResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateResourceNodeDepositResponse>, I>>(
    _: I,
  ): MsgUpdateResourceNodeDepositResponse {
    const message = createBaseMsgUpdateResourceNodeDepositResponse();
    return message;
  },
};
function createBaseMsgUpdateEffectiveDeposit(): MsgUpdateEffectiveDeposit {
  return {
    reporters: [],
    reporterOwner: [],
    networkAddress: "",
    effectiveTokens: "",
  };
}
export const MsgUpdateEffectiveDeposit = {
  typeUrl: "/stratos.register.v1.MsgUpdateEffectiveDeposit",
  encode(message: MsgUpdateEffectiveDeposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.reporters) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.reporterOwner) {
      writer.uint32(18).string(v!);
    }
    if (message.networkAddress !== "") {
      writer.uint32(26).string(message.networkAddress);
    }
    if (message.effectiveTokens !== "") {
      writer.uint32(34).string(message.effectiveTokens);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateEffectiveDeposit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateEffectiveDeposit();
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
          message.effectiveTokens = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateEffectiveDeposit {
    const obj = createBaseMsgUpdateEffectiveDeposit();
    if (Array.isArray(object?.reporters)) obj.reporters = object.reporters.map((e: any) => String(e));
    if (Array.isArray(object?.reporterOwner))
      obj.reporterOwner = object.reporterOwner.map((e: any) => String(e));
    if (isSet(object.networkAddress)) obj.networkAddress = String(object.networkAddress);
    if (isSet(object.effectiveTokens)) obj.effectiveTokens = String(object.effectiveTokens);
    return obj;
  },
  toJSON(message: MsgUpdateEffectiveDeposit): unknown {
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
    message.effectiveTokens !== undefined && (obj.effectiveTokens = message.effectiveTokens);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateEffectiveDeposit>, I>>(
    object: I,
  ): MsgUpdateEffectiveDeposit {
    const message = createBaseMsgUpdateEffectiveDeposit();
    message.reporters = object.reporters?.map((e) => e) || [];
    message.reporterOwner = object.reporterOwner?.map((e) => e) || [];
    message.networkAddress = object.networkAddress ?? "";
    message.effectiveTokens = object.effectiveTokens ?? "";
    return message;
  },
};
function createBaseMsgUpdateEffectiveDepositResponse(): MsgUpdateEffectiveDepositResponse {
  return {};
}
export const MsgUpdateEffectiveDepositResponse = {
  typeUrl: "/stratos.register.v1.MsgUpdateEffectiveDepositResponse",
  encode(_: MsgUpdateEffectiveDepositResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateEffectiveDepositResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateEffectiveDepositResponse();
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
  fromJSON(_: any): MsgUpdateEffectiveDepositResponse {
    const obj = createBaseMsgUpdateEffectiveDepositResponse();
    return obj;
  },
  toJSON(_: MsgUpdateEffectiveDepositResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateEffectiveDepositResponse>, I>>(
    _: I,
  ): MsgUpdateEffectiveDepositResponse {
    const message = createBaseMsgUpdateEffectiveDepositResponse();
    return message;
  },
};
function createBaseMsgUpdateMetaNodeDeposit(): MsgUpdateMetaNodeDeposit {
  return {
    networkAddress: "",
    ownerAddress: "",
    depositDelta: Coin.fromPartial({}),
  };
}
export const MsgUpdateMetaNodeDeposit = {
  typeUrl: "/stratos.register.v1.MsgUpdateMetaNodeDeposit",
  encode(message: MsgUpdateMetaNodeDeposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.networkAddress !== "") {
      writer.uint32(10).string(message.networkAddress);
    }
    if (message.ownerAddress !== "") {
      writer.uint32(18).string(message.ownerAddress);
    }
    if (message.depositDelta !== undefined) {
      Coin.encode(message.depositDelta, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateMetaNodeDeposit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMetaNodeDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.networkAddress = reader.string();
          break;
        case 2:
          message.ownerAddress = reader.string();
          break;
        case 3:
          message.depositDelta = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateMetaNodeDeposit {
    const obj = createBaseMsgUpdateMetaNodeDeposit();
    if (isSet(object.networkAddress)) obj.networkAddress = String(object.networkAddress);
    if (isSet(object.ownerAddress)) obj.ownerAddress = String(object.ownerAddress);
    if (isSet(object.depositDelta)) obj.depositDelta = Coin.fromJSON(object.depositDelta);
    return obj;
  },
  toJSON(message: MsgUpdateMetaNodeDeposit): unknown {
    const obj: any = {};
    message.networkAddress !== undefined && (obj.networkAddress = message.networkAddress);
    message.ownerAddress !== undefined && (obj.ownerAddress = message.ownerAddress);
    message.depositDelta !== undefined &&
      (obj.depositDelta = message.depositDelta ? Coin.toJSON(message.depositDelta) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateMetaNodeDeposit>, I>>(
    object: I,
  ): MsgUpdateMetaNodeDeposit {
    const message = createBaseMsgUpdateMetaNodeDeposit();
    message.networkAddress = object.networkAddress ?? "";
    message.ownerAddress = object.ownerAddress ?? "";
    if (object.depositDelta !== undefined && object.depositDelta !== null) {
      message.depositDelta = Coin.fromPartial(object.depositDelta);
    }
    return message;
  },
};
function createBaseMsgUpdateMetaNodeDepositResponse(): MsgUpdateMetaNodeDepositResponse {
  return {};
}
export const MsgUpdateMetaNodeDepositResponse = {
  typeUrl: "/stratos.register.v1.MsgUpdateMetaNodeDepositResponse",
  encode(_: MsgUpdateMetaNodeDepositResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateMetaNodeDepositResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMetaNodeDepositResponse();
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
  fromJSON(_: any): MsgUpdateMetaNodeDepositResponse {
    const obj = createBaseMsgUpdateMetaNodeDepositResponse();
    return obj;
  },
  toJSON(_: MsgUpdateMetaNodeDepositResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateMetaNodeDepositResponse>, I>>(
    _: I,
  ): MsgUpdateMetaNodeDepositResponse {
    const message = createBaseMsgUpdateMetaNodeDepositResponse();
    return message;
  },
};
function createBaseMsgMetaNodeRegistrationVote(): MsgMetaNodeRegistrationVote {
  return {
    candidateNetworkAddress: "",
    candidateOwnerAddress: "",
    opinion: false,
    voterNetworkAddress: "",
    voterOwnerAddress: "",
  };
}
export const MsgMetaNodeRegistrationVote = {
  typeUrl: "/stratos.register.v1.MsgMetaNodeRegistrationVote",
  encode(message: MsgMetaNodeRegistrationVote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.candidateNetworkAddress !== "") {
      writer.uint32(10).string(message.candidateNetworkAddress);
    }
    if (message.candidateOwnerAddress !== "") {
      writer.uint32(18).string(message.candidateOwnerAddress);
    }
    if (message.opinion === true) {
      writer.uint32(24).bool(message.opinion);
    }
    if (message.voterNetworkAddress !== "") {
      writer.uint32(34).string(message.voterNetworkAddress);
    }
    if (message.voterOwnerAddress !== "") {
      writer.uint32(42).string(message.voterOwnerAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMetaNodeRegistrationVote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMetaNodeRegistrationVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.candidateNetworkAddress = reader.string();
          break;
        case 2:
          message.candidateOwnerAddress = reader.string();
          break;
        case 3:
          message.opinion = reader.bool();
          break;
        case 4:
          message.voterNetworkAddress = reader.string();
          break;
        case 5:
          message.voterOwnerAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgMetaNodeRegistrationVote {
    const obj = createBaseMsgMetaNodeRegistrationVote();
    if (isSet(object.candidateNetworkAddress))
      obj.candidateNetworkAddress = String(object.candidateNetworkAddress);
    if (isSet(object.candidateOwnerAddress)) obj.candidateOwnerAddress = String(object.candidateOwnerAddress);
    if (isSet(object.opinion)) obj.opinion = Boolean(object.opinion);
    if (isSet(object.voterNetworkAddress)) obj.voterNetworkAddress = String(object.voterNetworkAddress);
    if (isSet(object.voterOwnerAddress)) obj.voterOwnerAddress = String(object.voterOwnerAddress);
    return obj;
  },
  toJSON(message: MsgMetaNodeRegistrationVote): unknown {
    const obj: any = {};
    message.candidateNetworkAddress !== undefined &&
      (obj.candidateNetworkAddress = message.candidateNetworkAddress);
    message.candidateOwnerAddress !== undefined &&
      (obj.candidateOwnerAddress = message.candidateOwnerAddress);
    message.opinion !== undefined && (obj.opinion = message.opinion);
    message.voterNetworkAddress !== undefined && (obj.voterNetworkAddress = message.voterNetworkAddress);
    message.voterOwnerAddress !== undefined && (obj.voterOwnerAddress = message.voterOwnerAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgMetaNodeRegistrationVote>, I>>(
    object: I,
  ): MsgMetaNodeRegistrationVote {
    const message = createBaseMsgMetaNodeRegistrationVote();
    message.candidateNetworkAddress = object.candidateNetworkAddress ?? "";
    message.candidateOwnerAddress = object.candidateOwnerAddress ?? "";
    message.opinion = object.opinion ?? false;
    message.voterNetworkAddress = object.voterNetworkAddress ?? "";
    message.voterOwnerAddress = object.voterOwnerAddress ?? "";
    return message;
  },
};
function createBaseMsgMetaNodeRegistrationVoteResponse(): MsgMetaNodeRegistrationVoteResponse {
  return {};
}
export const MsgMetaNodeRegistrationVoteResponse = {
  typeUrl: "/stratos.register.v1.MsgMetaNodeRegistrationVoteResponse",
  encode(_: MsgMetaNodeRegistrationVoteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMetaNodeRegistrationVoteResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMetaNodeRegistrationVoteResponse();
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
  fromJSON(_: any): MsgMetaNodeRegistrationVoteResponse {
    const obj = createBaseMsgMetaNodeRegistrationVoteResponse();
    return obj;
  },
  toJSON(_: MsgMetaNodeRegistrationVoteResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgMetaNodeRegistrationVoteResponse>, I>>(
    _: I,
  ): MsgMetaNodeRegistrationVoteResponse {
    const message = createBaseMsgMetaNodeRegistrationVoteResponse();
    return message;
  },
};
function createBaseMsgWithdrawMetaNodeRegistrationDeposit(): MsgWithdrawMetaNodeRegistrationDeposit {
  return {
    networkAddress: "",
    ownerAddress: "",
  };
}
export const MsgWithdrawMetaNodeRegistrationDeposit = {
  typeUrl: "/stratos.register.v1.MsgWithdrawMetaNodeRegistrationDeposit",
  encode(
    message: MsgWithdrawMetaNodeRegistrationDeposit,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.networkAddress !== "") {
      writer.uint32(10).string(message.networkAddress);
    }
    if (message.ownerAddress !== "") {
      writer.uint32(18).string(message.ownerAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawMetaNodeRegistrationDeposit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawMetaNodeRegistrationDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.networkAddress = reader.string();
          break;
        case 2:
          message.ownerAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWithdrawMetaNodeRegistrationDeposit {
    const obj = createBaseMsgWithdrawMetaNodeRegistrationDeposit();
    if (isSet(object.networkAddress)) obj.networkAddress = String(object.networkAddress);
    if (isSet(object.ownerAddress)) obj.ownerAddress = String(object.ownerAddress);
    return obj;
  },
  toJSON(message: MsgWithdrawMetaNodeRegistrationDeposit): unknown {
    const obj: any = {};
    message.networkAddress !== undefined && (obj.networkAddress = message.networkAddress);
    message.ownerAddress !== undefined && (obj.ownerAddress = message.ownerAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgWithdrawMetaNodeRegistrationDeposit>, I>>(
    object: I,
  ): MsgWithdrawMetaNodeRegistrationDeposit {
    const message = createBaseMsgWithdrawMetaNodeRegistrationDeposit();
    message.networkAddress = object.networkAddress ?? "";
    message.ownerAddress = object.ownerAddress ?? "";
    return message;
  },
};
function createBaseMsgWithdrawMetaNodeRegistrationDepositResponse(): MsgWithdrawMetaNodeRegistrationDepositResponse {
  return {};
}
export const MsgWithdrawMetaNodeRegistrationDepositResponse = {
  typeUrl: "/stratos.register.v1.MsgWithdrawMetaNodeRegistrationDepositResponse",
  encode(
    _: MsgWithdrawMetaNodeRegistrationDepositResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawMetaNodeRegistrationDepositResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawMetaNodeRegistrationDepositResponse();
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
  fromJSON(_: any): MsgWithdrawMetaNodeRegistrationDepositResponse {
    const obj = createBaseMsgWithdrawMetaNodeRegistrationDepositResponse();
    return obj;
  },
  toJSON(_: MsgWithdrawMetaNodeRegistrationDepositResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgWithdrawMetaNodeRegistrationDepositResponse>, I>>(
    _: I,
  ): MsgWithdrawMetaNodeRegistrationDepositResponse {
    const message = createBaseMsgWithdrawMetaNodeRegistrationDepositResponse();
    return message;
  },
};
/** Msg defines the register module Msg service. */
export interface Msg {
  /** CreateResourceNode defines a method for creating a new resource node. */
  HandleMsgCreateResourceNode(request: MsgCreateResourceNode): Promise<MsgCreateResourceNodeResponse>;
  HandleMsgRemoveResourceNode(request: MsgRemoveResourceNode): Promise<MsgRemoveResourceNodeResponse>;
  HandleMsgUpdateResourceNode(request: MsgUpdateResourceNode): Promise<MsgUpdateResourceNodeResponse>;
  HandleMsgUpdateResourceNodeDeposit(
    request: MsgUpdateResourceNodeDeposit,
  ): Promise<MsgUpdateResourceNodeDepositResponse>;
  HandleMsgUpdateEffectiveDeposit(
    request: MsgUpdateEffectiveDeposit,
  ): Promise<MsgUpdateEffectiveDepositResponse>;
  HandleMsgCreateMetaNode(request: MsgCreateMetaNode): Promise<MsgCreateMetaNodeResponse>;
  HandleMsgRemoveMetaNode(request: MsgRemoveMetaNode): Promise<MsgRemoveMetaNodeResponse>;
  HandleMsgUpdateMetaNode(request: MsgUpdateMetaNode): Promise<MsgUpdateMetaNodeResponse>;
  HandleMsgUpdateMetaNodeDeposit(
    request: MsgUpdateMetaNodeDeposit,
  ): Promise<MsgUpdateMetaNodeDepositResponse>;
  HandleMsgMetaNodeRegistrationVote(
    request: MsgMetaNodeRegistrationVote,
  ): Promise<MsgMetaNodeRegistrationVoteResponse>;
  HandleMsgWithdrawMetaNodeRegistrationDeposit(
    request: MsgWithdrawMetaNodeRegistrationDeposit,
  ): Promise<MsgWithdrawMetaNodeRegistrationDepositResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.HandleMsgCreateResourceNode = this.HandleMsgCreateResourceNode.bind(this);
    this.HandleMsgRemoveResourceNode = this.HandleMsgRemoveResourceNode.bind(this);
    this.HandleMsgUpdateResourceNode = this.HandleMsgUpdateResourceNode.bind(this);
    this.HandleMsgUpdateResourceNodeDeposit = this.HandleMsgUpdateResourceNodeDeposit.bind(this);
    this.HandleMsgUpdateEffectiveDeposit = this.HandleMsgUpdateEffectiveDeposit.bind(this);
    this.HandleMsgCreateMetaNode = this.HandleMsgCreateMetaNode.bind(this);
    this.HandleMsgRemoveMetaNode = this.HandleMsgRemoveMetaNode.bind(this);
    this.HandleMsgUpdateMetaNode = this.HandleMsgUpdateMetaNode.bind(this);
    this.HandleMsgUpdateMetaNodeDeposit = this.HandleMsgUpdateMetaNodeDeposit.bind(this);
    this.HandleMsgMetaNodeRegistrationVote = this.HandleMsgMetaNodeRegistrationVote.bind(this);
    this.HandleMsgWithdrawMetaNodeRegistrationDeposit =
      this.HandleMsgWithdrawMetaNodeRegistrationDeposit.bind(this);
  }
  HandleMsgCreateResourceNode(request: MsgCreateResourceNode): Promise<MsgCreateResourceNodeResponse> {
    const data = MsgCreateResourceNode.encode(request).finish();
    const promise = this.rpc.request("stratos.register.v1.Msg", "HandleMsgCreateResourceNode", data);
    return promise.then((data) => MsgCreateResourceNodeResponse.decode(new BinaryReader(data)));
  }
  HandleMsgRemoveResourceNode(request: MsgRemoveResourceNode): Promise<MsgRemoveResourceNodeResponse> {
    const data = MsgRemoveResourceNode.encode(request).finish();
    const promise = this.rpc.request("stratos.register.v1.Msg", "HandleMsgRemoveResourceNode", data);
    return promise.then((data) => MsgRemoveResourceNodeResponse.decode(new BinaryReader(data)));
  }
  HandleMsgUpdateResourceNode(request: MsgUpdateResourceNode): Promise<MsgUpdateResourceNodeResponse> {
    const data = MsgUpdateResourceNode.encode(request).finish();
    const promise = this.rpc.request("stratos.register.v1.Msg", "HandleMsgUpdateResourceNode", data);
    return promise.then((data) => MsgUpdateResourceNodeResponse.decode(new BinaryReader(data)));
  }
  HandleMsgUpdateResourceNodeDeposit(
    request: MsgUpdateResourceNodeDeposit,
  ): Promise<MsgUpdateResourceNodeDepositResponse> {
    const data = MsgUpdateResourceNodeDeposit.encode(request).finish();
    const promise = this.rpc.request("stratos.register.v1.Msg", "HandleMsgUpdateResourceNodeDeposit", data);
    return promise.then((data) => MsgUpdateResourceNodeDepositResponse.decode(new BinaryReader(data)));
  }
  HandleMsgUpdateEffectiveDeposit(
    request: MsgUpdateEffectiveDeposit,
  ): Promise<MsgUpdateEffectiveDepositResponse> {
    const data = MsgUpdateEffectiveDeposit.encode(request).finish();
    const promise = this.rpc.request("stratos.register.v1.Msg", "HandleMsgUpdateEffectiveDeposit", data);
    return promise.then((data) => MsgUpdateEffectiveDepositResponse.decode(new BinaryReader(data)));
  }
  HandleMsgCreateMetaNode(request: MsgCreateMetaNode): Promise<MsgCreateMetaNodeResponse> {
    const data = MsgCreateMetaNode.encode(request).finish();
    const promise = this.rpc.request("stratos.register.v1.Msg", "HandleMsgCreateMetaNode", data);
    return promise.then((data) => MsgCreateMetaNodeResponse.decode(new BinaryReader(data)));
  }
  HandleMsgRemoveMetaNode(request: MsgRemoveMetaNode): Promise<MsgRemoveMetaNodeResponse> {
    const data = MsgRemoveMetaNode.encode(request).finish();
    const promise = this.rpc.request("stratos.register.v1.Msg", "HandleMsgRemoveMetaNode", data);
    return promise.then((data) => MsgRemoveMetaNodeResponse.decode(new BinaryReader(data)));
  }
  HandleMsgUpdateMetaNode(request: MsgUpdateMetaNode): Promise<MsgUpdateMetaNodeResponse> {
    const data = MsgUpdateMetaNode.encode(request).finish();
    const promise = this.rpc.request("stratos.register.v1.Msg", "HandleMsgUpdateMetaNode", data);
    return promise.then((data) => MsgUpdateMetaNodeResponse.decode(new BinaryReader(data)));
  }
  HandleMsgUpdateMetaNodeDeposit(
    request: MsgUpdateMetaNodeDeposit,
  ): Promise<MsgUpdateMetaNodeDepositResponse> {
    const data = MsgUpdateMetaNodeDeposit.encode(request).finish();
    const promise = this.rpc.request("stratos.register.v1.Msg", "HandleMsgUpdateMetaNodeDeposit", data);
    return promise.then((data) => MsgUpdateMetaNodeDepositResponse.decode(new BinaryReader(data)));
  }
  HandleMsgMetaNodeRegistrationVote(
    request: MsgMetaNodeRegistrationVote,
  ): Promise<MsgMetaNodeRegistrationVoteResponse> {
    const data = MsgMetaNodeRegistrationVote.encode(request).finish();
    const promise = this.rpc.request("stratos.register.v1.Msg", "HandleMsgMetaNodeRegistrationVote", data);
    return promise.then((data) => MsgMetaNodeRegistrationVoteResponse.decode(new BinaryReader(data)));
  }
  HandleMsgWithdrawMetaNodeRegistrationDeposit(
    request: MsgWithdrawMetaNodeRegistrationDeposit,
  ): Promise<MsgWithdrawMetaNodeRegistrationDepositResponse> {
    const data = MsgWithdrawMetaNodeRegistrationDeposit.encode(request).finish();
    const promise = this.rpc.request(
      "stratos.register.v1.Msg",
      "HandleMsgWithdrawMetaNodeRegistrationDeposit",
      data,
    );
    return promise.then((data) =>
      MsgWithdrawMetaNodeRegistrationDepositResponse.decode(new BinaryReader(data)),
    );
  }
}
