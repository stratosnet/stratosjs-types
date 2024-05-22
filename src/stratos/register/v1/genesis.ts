/* eslint-disable */
import {
  Params,
  BondStatus,
  Description,
  bondStatusFromJSON,
  bondStatusToJSON,
} from "../../../cosmos/staking/v1beta1/staking";
import { ResourceNode, MetaNode } from "./register";
import { Any } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "stratos.register.v1";
/** GenesisState defines the register module's genesis state. */
export interface GenesisState {
  params: Params;
  resourceNodes: ResourceNode[];
  metaNodes: MetaNode[];
  remainingNozLimit: string;
  slashing: Slashing[];
  depositNozRate: string;
}
export interface GenesisMetaNode {
  networkAddress: string;
  pubkey?: Any;
  suspend: boolean;
  status: BondStatus;
  tokens: string;
  ownerAddress: string;
  description: Description;
}
export interface Slashing {
  walletAddress: string;
  value: bigint;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    resourceNodes: [],
    metaNodes: [],
    remainingNozLimit: "",
    slashing: [],
    depositNozRate: "",
  };
}
export const GenesisState = {
  typeUrl: "/stratos.register.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.resourceNodes) {
      ResourceNode.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.metaNodes) {
      MetaNode.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.remainingNozLimit !== "") {
      writer.uint32(34).string(message.remainingNozLimit);
    }
    for (const v of message.slashing) {
      Slashing.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.depositNozRate !== "") {
      writer.uint32(50).string(message.depositNozRate);
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
          message.resourceNodes.push(ResourceNode.decode(reader, reader.uint32()));
          break;
        case 3:
          message.metaNodes.push(MetaNode.decode(reader, reader.uint32()));
          break;
        case 4:
          message.remainingNozLimit = reader.string();
          break;
        case 5:
          message.slashing.push(Slashing.decode(reader, reader.uint32()));
          break;
        case 6:
          message.depositNozRate = reader.string();
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
    if (Array.isArray(object?.resourceNodes))
      obj.resourceNodes = object.resourceNodes.map((e: any) => ResourceNode.fromJSON(e));
    if (Array.isArray(object?.metaNodes))
      obj.metaNodes = object.metaNodes.map((e: any) => MetaNode.fromJSON(e));
    if (isSet(object.remainingNozLimit)) obj.remainingNozLimit = String(object.remainingNozLimit);
    if (Array.isArray(object?.slashing)) obj.slashing = object.slashing.map((e: any) => Slashing.fromJSON(e));
    if (isSet(object.depositNozRate)) obj.depositNozRate = String(object.depositNozRate);
    return obj;
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.resourceNodes) {
      obj.resourceNodes = message.resourceNodes.map((e) => (e ? ResourceNode.toJSON(e) : undefined));
    } else {
      obj.resourceNodes = [];
    }
    if (message.metaNodes) {
      obj.metaNodes = message.metaNodes.map((e) => (e ? MetaNode.toJSON(e) : undefined));
    } else {
      obj.metaNodes = [];
    }
    message.remainingNozLimit !== undefined && (obj.remainingNozLimit = message.remainingNozLimit);
    if (message.slashing) {
      obj.slashing = message.slashing.map((e) => (e ? Slashing.toJSON(e) : undefined));
    } else {
      obj.slashing = [];
    }
    message.depositNozRate !== undefined && (obj.depositNozRate = message.depositNozRate);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    message.resourceNodes = object.resourceNodes?.map((e) => ResourceNode.fromPartial(e)) || [];
    message.metaNodes = object.metaNodes?.map((e) => MetaNode.fromPartial(e)) || [];
    message.remainingNozLimit = object.remainingNozLimit ?? "";
    message.slashing = object.slashing?.map((e) => Slashing.fromPartial(e)) || [];
    message.depositNozRate = object.depositNozRate ?? "";
    return message;
  },
};
function createBaseGenesisMetaNode(): GenesisMetaNode {
  return {
    networkAddress: "",
    pubkey: undefined,
    suspend: false,
    status: 0,
    tokens: "",
    ownerAddress: "",
    description: Description.fromPartial({}),
  };
}
export const GenesisMetaNode = {
  typeUrl: "/stratos.register.v1.GenesisMetaNode",
  encode(message: GenesisMetaNode, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.networkAddress !== "") {
      writer.uint32(10).string(message.networkAddress);
    }
    if (message.pubkey !== undefined) {
      Any.encode(message.pubkey, writer.uint32(18).fork()).ldelim();
    }
    if (message.suspend === true) {
      writer.uint32(24).bool(message.suspend);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    if (message.tokens !== "") {
      writer.uint32(42).string(message.tokens);
    }
    if (message.ownerAddress !== "") {
      writer.uint32(50).string(message.ownerAddress);
    }
    if (message.description !== undefined) {
      Description.encode(message.description, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisMetaNode {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisMetaNode();
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
          message.suspend = reader.bool();
          break;
        case 4:
          message.status = reader.int32() as any;
          break;
        case 5:
          message.tokens = reader.string();
          break;
        case 6:
          message.ownerAddress = reader.string();
          break;
        case 7:
          message.description = Description.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisMetaNode {
    const obj = createBaseGenesisMetaNode();
    if (isSet(object.networkAddress)) obj.networkAddress = String(object.networkAddress);
    if (isSet(object.pubkey)) obj.pubkey = Any.fromJSON(object.pubkey);
    if (isSet(object.suspend)) obj.suspend = Boolean(object.suspend);
    if (isSet(object.status)) obj.status = bondStatusFromJSON(object.status);
    if (isSet(object.tokens)) obj.tokens = String(object.tokens);
    if (isSet(object.ownerAddress)) obj.ownerAddress = String(object.ownerAddress);
    if (isSet(object.description)) obj.description = Description.fromJSON(object.description);
    return obj;
  },
  toJSON(message: GenesisMetaNode): unknown {
    const obj: any = {};
    message.networkAddress !== undefined && (obj.networkAddress = message.networkAddress);
    message.pubkey !== undefined && (obj.pubkey = message.pubkey ? Any.toJSON(message.pubkey) : undefined);
    message.suspend !== undefined && (obj.suspend = message.suspend);
    message.status !== undefined && (obj.status = bondStatusToJSON(message.status));
    message.tokens !== undefined && (obj.tokens = message.tokens);
    message.ownerAddress !== undefined && (obj.ownerAddress = message.ownerAddress);
    message.description !== undefined &&
      (obj.description = message.description ? Description.toJSON(message.description) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisMetaNode>, I>>(object: I): GenesisMetaNode {
    const message = createBaseGenesisMetaNode();
    message.networkAddress = object.networkAddress ?? "";
    if (object.pubkey !== undefined && object.pubkey !== null) {
      message.pubkey = Any.fromPartial(object.pubkey);
    }
    message.suspend = object.suspend ?? false;
    message.status = object.status ?? 0;
    message.tokens = object.tokens ?? "";
    message.ownerAddress = object.ownerAddress ?? "";
    if (object.description !== undefined && object.description !== null) {
      message.description = Description.fromPartial(object.description);
    }
    return message;
  },
};
function createBaseSlashing(): Slashing {
  return {
    walletAddress: "",
    value: BigInt(0),
  };
}
export const Slashing = {
  typeUrl: "/stratos.register.v1.Slashing",
  encode(message: Slashing, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.walletAddress !== "") {
      writer.uint32(10).string(message.walletAddress);
    }
    if (message.value !== BigInt(0)) {
      writer.uint32(16).int64(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Slashing {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlashing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.walletAddress = reader.string();
          break;
        case 2:
          message.value = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Slashing {
    const obj = createBaseSlashing();
    if (isSet(object.walletAddress)) obj.walletAddress = String(object.walletAddress);
    if (isSet(object.value)) obj.value = BigInt(object.value.toString());
    return obj;
  },
  toJSON(message: Slashing): unknown {
    const obj: any = {};
    message.walletAddress !== undefined && (obj.walletAddress = message.walletAddress);
    message.value !== undefined && (obj.value = (message.value || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Slashing>, I>>(object: I): Slashing {
    const message = createBaseSlashing();
    message.walletAddress = object.walletAddress ?? "";
    if (object.value !== undefined && object.value !== null) {
      message.value = BigInt(object.value.toString());
    }
    return message;
  },
};
