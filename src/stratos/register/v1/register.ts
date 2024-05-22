/* eslint-disable */
import { Duration } from "../../../google/protobuf/duration";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Any } from "../../../google/protobuf/any";
import { BondStatus, bondStatusFromJSON, bondStatusToJSON } from "../../../cosmos/staking/v1beta1/staking";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact, fromJsonTimestamp, fromTimestamp } from "../../../helpers";
export const protobufPackage = "stratos.register.v1";
/** Params defines the Register module parameters */
export interface Params {
  bondDenom: string;
  unbondingThreasholdTime: Duration;
  unbondingCompletionTime: Duration;
  maxEntries: number;
  resourceNodeRegEnabled: boolean;
  resourceNodeMinDeposit: Coin;
  votingPeriod: Duration;
}
export interface ResourceNode {
  networkAddress: string;
  pubkey?: Any;
  suspend: boolean;
  status: BondStatus;
  tokens: string;
  ownerAddress: string;
  description: Description;
  creationTime: Timestamp;
  nodeType: number;
  effectiveTokens: string;
}
export interface MetaNode {
  networkAddress: string;
  pubkey?: Any;
  suspend: boolean;
  status: BondStatus;
  tokens: string;
  ownerAddress: string;
  description: Description;
  creationTime: Timestamp;
}
export interface MetaNodeRegistrationVotePool {
  networkAddress: string;
  approveList: string[];
  rejectList: string[];
  expireTime: Timestamp;
  isVotePassed: boolean;
}
export interface Description {
  moniker: string;
  identity: string;
  website: string;
  securityContact: string;
  details: string;
}
/**
 * UnbondingNode stores all of a single delegator's unbonding bonds
 * for a single unbonding node in a time-ordered list
 */
export interface UnbondingNode {
  networkAddr: string;
  isMetaNode: boolean;
  entries: UnbondingNodeEntry[];
}
export interface UnbondingNodeEntry {
  creationHeight: bigint;
  completionTime: Timestamp;
  initialBalance: string;
  balance: string;
}
function createBaseParams(): Params {
  return {
    bondDenom: "",
    unbondingThreasholdTime: Duration.fromPartial({}),
    unbondingCompletionTime: Duration.fromPartial({}),
    maxEntries: 0,
    resourceNodeRegEnabled: false,
    resourceNodeMinDeposit: Coin.fromPartial({}),
    votingPeriod: Duration.fromPartial({}),
  };
}
export const Params = {
  typeUrl: "/stratos.register.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bondDenom !== "") {
      writer.uint32(10).string(message.bondDenom);
    }
    if (message.unbondingThreasholdTime !== undefined) {
      Duration.encode(message.unbondingThreasholdTime, writer.uint32(18).fork()).ldelim();
    }
    if (message.unbondingCompletionTime !== undefined) {
      Duration.encode(message.unbondingCompletionTime, writer.uint32(26).fork()).ldelim();
    }
    if (message.maxEntries !== 0) {
      writer.uint32(32).uint32(message.maxEntries);
    }
    if (message.resourceNodeRegEnabled === true) {
      writer.uint32(40).bool(message.resourceNodeRegEnabled);
    }
    if (message.resourceNodeMinDeposit !== undefined) {
      Coin.encode(message.resourceNodeMinDeposit, writer.uint32(50).fork()).ldelim();
    }
    if (message.votingPeriod !== undefined) {
      Duration.encode(message.votingPeriod, writer.uint32(58).fork()).ldelim();
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
        case 2:
          message.unbondingThreasholdTime = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.unbondingCompletionTime = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.maxEntries = reader.uint32();
          break;
        case 5:
          message.resourceNodeRegEnabled = reader.bool();
          break;
        case 6:
          message.resourceNodeMinDeposit = Coin.decode(reader, reader.uint32());
          break;
        case 7:
          message.votingPeriod = Duration.decode(reader, reader.uint32());
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
    if (isSet(object.unbondingThreasholdTime))
      obj.unbondingThreasholdTime = Duration.fromJSON(object.unbondingThreasholdTime);
    if (isSet(object.unbondingCompletionTime))
      obj.unbondingCompletionTime = Duration.fromJSON(object.unbondingCompletionTime);
    if (isSet(object.maxEntries)) obj.maxEntries = Number(object.maxEntries);
    if (isSet(object.resourceNodeRegEnabled))
      obj.resourceNodeRegEnabled = Boolean(object.resourceNodeRegEnabled);
    if (isSet(object.resourceNodeMinDeposit))
      obj.resourceNodeMinDeposit = Coin.fromJSON(object.resourceNodeMinDeposit);
    if (isSet(object.votingPeriod)) obj.votingPeriod = Duration.fromJSON(object.votingPeriod);
    return obj;
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.bondDenom !== undefined && (obj.bondDenom = message.bondDenom);
    message.unbondingThreasholdTime !== undefined &&
      (obj.unbondingThreasholdTime = message.unbondingThreasholdTime
        ? Duration.toJSON(message.unbondingThreasholdTime)
        : undefined);
    message.unbondingCompletionTime !== undefined &&
      (obj.unbondingCompletionTime = message.unbondingCompletionTime
        ? Duration.toJSON(message.unbondingCompletionTime)
        : undefined);
    message.maxEntries !== undefined && (obj.maxEntries = Math.round(message.maxEntries));
    message.resourceNodeRegEnabled !== undefined &&
      (obj.resourceNodeRegEnabled = message.resourceNodeRegEnabled);
    message.resourceNodeMinDeposit !== undefined &&
      (obj.resourceNodeMinDeposit = message.resourceNodeMinDeposit
        ? Coin.toJSON(message.resourceNodeMinDeposit)
        : undefined);
    message.votingPeriod !== undefined &&
      (obj.votingPeriod = message.votingPeriod ? Duration.toJSON(message.votingPeriod) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.bondDenom = object.bondDenom ?? "";
    if (object.unbondingThreasholdTime !== undefined && object.unbondingThreasholdTime !== null) {
      message.unbondingThreasholdTime = Duration.fromPartial(object.unbondingThreasholdTime);
    }
    if (object.unbondingCompletionTime !== undefined && object.unbondingCompletionTime !== null) {
      message.unbondingCompletionTime = Duration.fromPartial(object.unbondingCompletionTime);
    }
    message.maxEntries = object.maxEntries ?? 0;
    message.resourceNodeRegEnabled = object.resourceNodeRegEnabled ?? false;
    if (object.resourceNodeMinDeposit !== undefined && object.resourceNodeMinDeposit !== null) {
      message.resourceNodeMinDeposit = Coin.fromPartial(object.resourceNodeMinDeposit);
    }
    if (object.votingPeriod !== undefined && object.votingPeriod !== null) {
      message.votingPeriod = Duration.fromPartial(object.votingPeriod);
    }
    return message;
  },
};
function createBaseResourceNode(): ResourceNode {
  return {
    networkAddress: "",
    pubkey: undefined,
    suspend: false,
    status: 0,
    tokens: "",
    ownerAddress: "",
    description: Description.fromPartial({}),
    creationTime: Timestamp.fromPartial({}),
    nodeType: 0,
    effectiveTokens: "",
  };
}
export const ResourceNode = {
  typeUrl: "/stratos.register.v1.ResourceNode",
  encode(message: ResourceNode, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    if (message.creationTime !== undefined) {
      Timestamp.encode(message.creationTime, writer.uint32(66).fork()).ldelim();
    }
    if (message.nodeType !== 0) {
      writer.uint32(72).uint32(message.nodeType);
    }
    if (message.effectiveTokens !== "") {
      writer.uint32(82).string(message.effectiveTokens);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResourceNode {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceNode();
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
        case 8:
          message.creationTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 9:
          message.nodeType = reader.uint32();
          break;
        case 10:
          message.effectiveTokens = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ResourceNode {
    const obj = createBaseResourceNode();
    if (isSet(object.networkAddress)) obj.networkAddress = String(object.networkAddress);
    if (isSet(object.pubkey)) obj.pubkey = Any.fromJSON(object.pubkey);
    if (isSet(object.suspend)) obj.suspend = Boolean(object.suspend);
    if (isSet(object.status)) obj.status = bondStatusFromJSON(object.status);
    if (isSet(object.tokens)) obj.tokens = String(object.tokens);
    if (isSet(object.ownerAddress)) obj.ownerAddress = String(object.ownerAddress);
    if (isSet(object.description)) obj.description = Description.fromJSON(object.description);
    if (isSet(object.creationTime)) obj.creationTime = fromJsonTimestamp(object.creationTime);
    if (isSet(object.nodeType)) obj.nodeType = Number(object.nodeType);
    if (isSet(object.effectiveTokens)) obj.effectiveTokens = String(object.effectiveTokens);
    return obj;
  },
  toJSON(message: ResourceNode): unknown {
    const obj: any = {};
    message.networkAddress !== undefined && (obj.networkAddress = message.networkAddress);
    message.pubkey !== undefined && (obj.pubkey = message.pubkey ? Any.toJSON(message.pubkey) : undefined);
    message.suspend !== undefined && (obj.suspend = message.suspend);
    message.status !== undefined && (obj.status = bondStatusToJSON(message.status));
    message.tokens !== undefined && (obj.tokens = message.tokens);
    message.ownerAddress !== undefined && (obj.ownerAddress = message.ownerAddress);
    message.description !== undefined &&
      (obj.description = message.description ? Description.toJSON(message.description) : undefined);
    message.creationTime !== undefined &&
      (obj.creationTime = fromTimestamp(message.creationTime).toISOString());
    message.nodeType !== undefined && (obj.nodeType = Math.round(message.nodeType));
    message.effectiveTokens !== undefined && (obj.effectiveTokens = message.effectiveTokens);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ResourceNode>, I>>(object: I): ResourceNode {
    const message = createBaseResourceNode();
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
    if (object.creationTime !== undefined && object.creationTime !== null) {
      message.creationTime = Timestamp.fromPartial(object.creationTime);
    }
    message.nodeType = object.nodeType ?? 0;
    message.effectiveTokens = object.effectiveTokens ?? "";
    return message;
  },
};
function createBaseMetaNode(): MetaNode {
  return {
    networkAddress: "",
    pubkey: undefined,
    suspend: false,
    status: 0,
    tokens: "",
    ownerAddress: "",
    description: Description.fromPartial({}),
    creationTime: Timestamp.fromPartial({}),
  };
}
export const MetaNode = {
  typeUrl: "/stratos.register.v1.MetaNode",
  encode(message: MetaNode, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    if (message.creationTime !== undefined) {
      Timestamp.encode(message.creationTime, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MetaNode {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetaNode();
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
        case 8:
          message.creationTime = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MetaNode {
    const obj = createBaseMetaNode();
    if (isSet(object.networkAddress)) obj.networkAddress = String(object.networkAddress);
    if (isSet(object.pubkey)) obj.pubkey = Any.fromJSON(object.pubkey);
    if (isSet(object.suspend)) obj.suspend = Boolean(object.suspend);
    if (isSet(object.status)) obj.status = bondStatusFromJSON(object.status);
    if (isSet(object.tokens)) obj.tokens = String(object.tokens);
    if (isSet(object.ownerAddress)) obj.ownerAddress = String(object.ownerAddress);
    if (isSet(object.description)) obj.description = Description.fromJSON(object.description);
    if (isSet(object.creationTime)) obj.creationTime = fromJsonTimestamp(object.creationTime);
    return obj;
  },
  toJSON(message: MetaNode): unknown {
    const obj: any = {};
    message.networkAddress !== undefined && (obj.networkAddress = message.networkAddress);
    message.pubkey !== undefined && (obj.pubkey = message.pubkey ? Any.toJSON(message.pubkey) : undefined);
    message.suspend !== undefined && (obj.suspend = message.suspend);
    message.status !== undefined && (obj.status = bondStatusToJSON(message.status));
    message.tokens !== undefined && (obj.tokens = message.tokens);
    message.ownerAddress !== undefined && (obj.ownerAddress = message.ownerAddress);
    message.description !== undefined &&
      (obj.description = message.description ? Description.toJSON(message.description) : undefined);
    message.creationTime !== undefined &&
      (obj.creationTime = fromTimestamp(message.creationTime).toISOString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MetaNode>, I>>(object: I): MetaNode {
    const message = createBaseMetaNode();
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
    if (object.creationTime !== undefined && object.creationTime !== null) {
      message.creationTime = Timestamp.fromPartial(object.creationTime);
    }
    return message;
  },
};
function createBaseMetaNodeRegistrationVotePool(): MetaNodeRegistrationVotePool {
  return {
    networkAddress: "",
    approveList: [],
    rejectList: [],
    expireTime: Timestamp.fromPartial({}),
    isVotePassed: false,
  };
}
export const MetaNodeRegistrationVotePool = {
  typeUrl: "/stratos.register.v1.MetaNodeRegistrationVotePool",
  encode(message: MetaNodeRegistrationVotePool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.networkAddress !== "") {
      writer.uint32(10).string(message.networkAddress);
    }
    for (const v of message.approveList) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.rejectList) {
      writer.uint32(26).string(v!);
    }
    if (message.expireTime !== undefined) {
      Timestamp.encode(message.expireTime, writer.uint32(34).fork()).ldelim();
    }
    if (message.isVotePassed === true) {
      writer.uint32(40).bool(message.isVotePassed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MetaNodeRegistrationVotePool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetaNodeRegistrationVotePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.networkAddress = reader.string();
          break;
        case 2:
          message.approveList.push(reader.string());
          break;
        case 3:
          message.rejectList.push(reader.string());
          break;
        case 4:
          message.expireTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 5:
          message.isVotePassed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MetaNodeRegistrationVotePool {
    const obj = createBaseMetaNodeRegistrationVotePool();
    if (isSet(object.networkAddress)) obj.networkAddress = String(object.networkAddress);
    if (Array.isArray(object?.approveList)) obj.approveList = object.approveList.map((e: any) => String(e));
    if (Array.isArray(object?.rejectList)) obj.rejectList = object.rejectList.map((e: any) => String(e));
    if (isSet(object.expireTime)) obj.expireTime = fromJsonTimestamp(object.expireTime);
    if (isSet(object.isVotePassed)) obj.isVotePassed = Boolean(object.isVotePassed);
    return obj;
  },
  toJSON(message: MetaNodeRegistrationVotePool): unknown {
    const obj: any = {};
    message.networkAddress !== undefined && (obj.networkAddress = message.networkAddress);
    if (message.approveList) {
      obj.approveList = message.approveList.map((e) => e);
    } else {
      obj.approveList = [];
    }
    if (message.rejectList) {
      obj.rejectList = message.rejectList.map((e) => e);
    } else {
      obj.rejectList = [];
    }
    message.expireTime !== undefined && (obj.expireTime = fromTimestamp(message.expireTime).toISOString());
    message.isVotePassed !== undefined && (obj.isVotePassed = message.isVotePassed);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MetaNodeRegistrationVotePool>, I>>(
    object: I,
  ): MetaNodeRegistrationVotePool {
    const message = createBaseMetaNodeRegistrationVotePool();
    message.networkAddress = object.networkAddress ?? "";
    message.approveList = object.approveList?.map((e) => e) || [];
    message.rejectList = object.rejectList?.map((e) => e) || [];
    if (object.expireTime !== undefined && object.expireTime !== null) {
      message.expireTime = Timestamp.fromPartial(object.expireTime);
    }
    message.isVotePassed = object.isVotePassed ?? false;
    return message;
  },
};
function createBaseDescription(): Description {
  return {
    moniker: "",
    identity: "",
    website: "",
    securityContact: "",
    details: "",
  };
}
export const Description = {
  typeUrl: "/stratos.register.v1.Description",
  encode(message: Description, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.moniker !== "") {
      writer.uint32(10).string(message.moniker);
    }
    if (message.identity !== "") {
      writer.uint32(18).string(message.identity);
    }
    if (message.website !== "") {
      writer.uint32(26).string(message.website);
    }
    if (message.securityContact !== "") {
      writer.uint32(34).string(message.securityContact);
    }
    if (message.details !== "") {
      writer.uint32(42).string(message.details);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Description {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDescription();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moniker = reader.string();
          break;
        case 2:
          message.identity = reader.string();
          break;
        case 3:
          message.website = reader.string();
          break;
        case 4:
          message.securityContact = reader.string();
          break;
        case 5:
          message.details = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Description {
    const obj = createBaseDescription();
    if (isSet(object.moniker)) obj.moniker = String(object.moniker);
    if (isSet(object.identity)) obj.identity = String(object.identity);
    if (isSet(object.website)) obj.website = String(object.website);
    if (isSet(object.securityContact)) obj.securityContact = String(object.securityContact);
    if (isSet(object.details)) obj.details = String(object.details);
    return obj;
  },
  toJSON(message: Description): unknown {
    const obj: any = {};
    message.moniker !== undefined && (obj.moniker = message.moniker);
    message.identity !== undefined && (obj.identity = message.identity);
    message.website !== undefined && (obj.website = message.website);
    message.securityContact !== undefined && (obj.securityContact = message.securityContact);
    message.details !== undefined && (obj.details = message.details);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Description>, I>>(object: I): Description {
    const message = createBaseDescription();
    message.moniker = object.moniker ?? "";
    message.identity = object.identity ?? "";
    message.website = object.website ?? "";
    message.securityContact = object.securityContact ?? "";
    message.details = object.details ?? "";
    return message;
  },
};
function createBaseUnbondingNode(): UnbondingNode {
  return {
    networkAddr: "",
    isMetaNode: false,
    entries: [],
  };
}
export const UnbondingNode = {
  typeUrl: "/stratos.register.v1.UnbondingNode",
  encode(message: UnbondingNode, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.networkAddr !== "") {
      writer.uint32(10).string(message.networkAddr);
    }
    if (message.isMetaNode === true) {
      writer.uint32(16).bool(message.isMetaNode);
    }
    for (const v of message.entries) {
      UnbondingNodeEntry.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UnbondingNode {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnbondingNode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.networkAddr = reader.string();
          break;
        case 2:
          message.isMetaNode = reader.bool();
          break;
        case 3:
          message.entries.push(UnbondingNodeEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UnbondingNode {
    const obj = createBaseUnbondingNode();
    if (isSet(object.networkAddr)) obj.networkAddr = String(object.networkAddr);
    if (isSet(object.isMetaNode)) obj.isMetaNode = Boolean(object.isMetaNode);
    if (Array.isArray(object?.entries))
      obj.entries = object.entries.map((e: any) => UnbondingNodeEntry.fromJSON(e));
    return obj;
  },
  toJSON(message: UnbondingNode): unknown {
    const obj: any = {};
    message.networkAddr !== undefined && (obj.networkAddr = message.networkAddr);
    message.isMetaNode !== undefined && (obj.isMetaNode = message.isMetaNode);
    if (message.entries) {
      obj.entries = message.entries.map((e) => (e ? UnbondingNodeEntry.toJSON(e) : undefined));
    } else {
      obj.entries = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<UnbondingNode>, I>>(object: I): UnbondingNode {
    const message = createBaseUnbondingNode();
    message.networkAddr = object.networkAddr ?? "";
    message.isMetaNode = object.isMetaNode ?? false;
    message.entries = object.entries?.map((e) => UnbondingNodeEntry.fromPartial(e)) || [];
    return message;
  },
};
function createBaseUnbondingNodeEntry(): UnbondingNodeEntry {
  return {
    creationHeight: BigInt(0),
    completionTime: Timestamp.fromPartial({}),
    initialBalance: "",
    balance: "",
  };
}
export const UnbondingNodeEntry = {
  typeUrl: "/stratos.register.v1.UnbondingNodeEntry",
  encode(message: UnbondingNodeEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creationHeight !== BigInt(0)) {
      writer.uint32(8).int64(message.creationHeight);
    }
    if (message.completionTime !== undefined) {
      Timestamp.encode(message.completionTime, writer.uint32(18).fork()).ldelim();
    }
    if (message.initialBalance !== "") {
      writer.uint32(26).string(message.initialBalance);
    }
    if (message.balance !== "") {
      writer.uint32(34).string(message.balance);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UnbondingNodeEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnbondingNodeEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creationHeight = reader.int64();
          break;
        case 2:
          message.completionTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 3:
          message.initialBalance = reader.string();
          break;
        case 4:
          message.balance = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UnbondingNodeEntry {
    const obj = createBaseUnbondingNodeEntry();
    if (isSet(object.creationHeight)) obj.creationHeight = BigInt(object.creationHeight.toString());
    if (isSet(object.completionTime)) obj.completionTime = fromJsonTimestamp(object.completionTime);
    if (isSet(object.initialBalance)) obj.initialBalance = String(object.initialBalance);
    if (isSet(object.balance)) obj.balance = String(object.balance);
    return obj;
  },
  toJSON(message: UnbondingNodeEntry): unknown {
    const obj: any = {};
    message.creationHeight !== undefined &&
      (obj.creationHeight = (message.creationHeight || BigInt(0)).toString());
    message.completionTime !== undefined &&
      (obj.completionTime = fromTimestamp(message.completionTime).toISOString());
    message.initialBalance !== undefined && (obj.initialBalance = message.initialBalance);
    message.balance !== undefined && (obj.balance = message.balance);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<UnbondingNodeEntry>, I>>(object: I): UnbondingNodeEntry {
    const message = createBaseUnbondingNodeEntry();
    if (object.creationHeight !== undefined && object.creationHeight !== null) {
      message.creationHeight = BigInt(object.creationHeight.toString());
    }
    if (object.completionTime !== undefined && object.completionTime !== null) {
      message.completionTime = Timestamp.fromPartial(object.completionTime);
    }
    message.initialBalance = object.initialBalance ?? "";
    message.balance = object.balance ?? "";
    return message;
  },
};
