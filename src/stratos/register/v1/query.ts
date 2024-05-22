/* eslint-disable */
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { ResourceNode, MetaNode } from "./register";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import {
  Params,
  BondStatus,
  Description,
  bondStatusFromJSON,
  bondStatusToJSON,
} from "../../../cosmos/staking/v1beta1/staking";
import { Any } from "../../../google/protobuf/any";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact, fromJsonTimestamp, fromTimestamp, Rpc } from "../../../helpers";
export const protobufPackage = "stratos.register.v1";
/** QueryResourceNodeRequest is request type for the Query/ResourceNode RPC method */
export interface QueryResourceNodeRequest {
  /** network_addr defines the node network address to query for. */
  networkAddr: string;
}
/** QueryResourceNodeResponse is response type for the Query/ResourceNode RPC method */
export interface QueryResourceNodeResponse {
  /** node defines the the resourceNode info. */
  node?: ResourceNode;
}
/** QueryMetaNodeRequest is request type for the Query/MetaNode RPC method */
export interface QueryMetaNodeRequest {
  /** network_addr defines the node network address to query for. */
  networkAddr: string;
}
/** QueryMetaNodeResponse is response type for the Query/MetaNode RPC method */
export interface QueryMetaNodeResponse {
  /** node defines the the meta info. */
  node?: MetaNode;
}
/** QueryDepositByNodeRequest is request type for the Query/DepositByNode RPC method */
export interface QueryDepositByNodeRequest {
  /** network_addr defines the node network address to query for. */
  networkAddr: string;
  queryType: number;
}
/** QueryDepositByNodeResponse is response type for the Query/DepositByNode RPC method */
export interface QueryDepositByNodeResponse {
  /** deposit_info defines the the deposit info of the node. */
  depositInfo?: DepositInfo;
}
/** QueryDepositByOwnerRequest is request type for the Query/DepositByOwner RPC method */
export interface QueryDepositByOwnerRequest {
  /** owner_addr defines the owner address to query for. */
  ownerAddr: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
/** QueryDepositByOwnerResponse is response type for the Query/DepositByOwner RPC method */
export interface QueryDepositByOwnerResponse {
  /** deposit_infos defines the the node deposit info of this owner. */
  depositInfos: DepositInfo[];
  /** pagination defines an optional pagination for the request. */
  pagination?: PageResponse;
}
/** QueryDepositTotalRequest is request type for the Query/DepositTotal RPC method */
export interface QueryDepositTotalRequest {}
/** QueryDepositTotalResponse is response type for the Query/DepositTotal RPC method */
export interface QueryDepositTotalResponse {
  resourceNodesTotalDeposit?: Coin;
  metaNodesTotalDeposit?: Coin;
  totalBondedDeposit?: Coin;
  totalUnbondedDeposit?: Coin;
  totalUnbondingDeposit?: Coin;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}
/** QueryBondedResourceNodeCountRequest is request type for the Query/BondedResourceNodeCount RPC method. */
export interface QueryBondedResourceNodeCountRequest {}
/** QueryBondedResourceNodeCountResponse is response type for the Query/BondedResourceNodeCount RPC method. */
export interface QueryBondedResourceNodeCountResponse {
  /** number holds the total number of resource nodes. */
  number: bigint;
}
/** QueryBondedMetaNodeCountRequest is request type for the Query/MetaNodeNumber RPC method. */
export interface QueryBondedMetaNodeCountRequest {}
/** QueryBondedMetaNodeCountResponse is response type for the Query/MetaNodeNumber RPC method. */
export interface QueryBondedMetaNodeCountResponse {
  /** number holds the total number of meta nodes. */
  number: bigint;
}
export interface DepositInfo {
  networkAddress: string;
  pubkey?: Any;
  suspend: boolean;
  status: BondStatus;
  tokens: string;
  ownerAddress: string;
  description: Description;
  creationTime: Timestamp;
  nodeType: number;
  bondedDeposit: Coin;
  unBondingDeposit: Coin;
  unBondedDeposit: Coin;
}
function createBaseQueryResourceNodeRequest(): QueryResourceNodeRequest {
  return {
    networkAddr: "",
  };
}
export const QueryResourceNodeRequest = {
  typeUrl: "/stratos.register.v1.QueryResourceNodeRequest",
  encode(message: QueryResourceNodeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.networkAddr !== "") {
      writer.uint32(10).string(message.networkAddr);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryResourceNodeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryResourceNodeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.networkAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryResourceNodeRequest {
    const obj = createBaseQueryResourceNodeRequest();
    if (isSet(object.networkAddr)) obj.networkAddr = String(object.networkAddr);
    return obj;
  },
  toJSON(message: QueryResourceNodeRequest): unknown {
    const obj: any = {};
    message.networkAddr !== undefined && (obj.networkAddr = message.networkAddr);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryResourceNodeRequest>, I>>(
    object: I,
  ): QueryResourceNodeRequest {
    const message = createBaseQueryResourceNodeRequest();
    message.networkAddr = object.networkAddr ?? "";
    return message;
  },
};
function createBaseQueryResourceNodeResponse(): QueryResourceNodeResponse {
  return {
    node: undefined,
  };
}
export const QueryResourceNodeResponse = {
  typeUrl: "/stratos.register.v1.QueryResourceNodeResponse",
  encode(message: QueryResourceNodeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.node !== undefined) {
      ResourceNode.encode(message.node, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryResourceNodeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryResourceNodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.node = ResourceNode.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryResourceNodeResponse {
    const obj = createBaseQueryResourceNodeResponse();
    if (isSet(object.node)) obj.node = ResourceNode.fromJSON(object.node);
    return obj;
  },
  toJSON(message: QueryResourceNodeResponse): unknown {
    const obj: any = {};
    message.node !== undefined && (obj.node = message.node ? ResourceNode.toJSON(message.node) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryResourceNodeResponse>, I>>(
    object: I,
  ): QueryResourceNodeResponse {
    const message = createBaseQueryResourceNodeResponse();
    if (object.node !== undefined && object.node !== null) {
      message.node = ResourceNode.fromPartial(object.node);
    }
    return message;
  },
};
function createBaseQueryMetaNodeRequest(): QueryMetaNodeRequest {
  return {
    networkAddr: "",
  };
}
export const QueryMetaNodeRequest = {
  typeUrl: "/stratos.register.v1.QueryMetaNodeRequest",
  encode(message: QueryMetaNodeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.networkAddr !== "") {
      writer.uint32(10).string(message.networkAddr);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMetaNodeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMetaNodeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.networkAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryMetaNodeRequest {
    const obj = createBaseQueryMetaNodeRequest();
    if (isSet(object.networkAddr)) obj.networkAddr = String(object.networkAddr);
    return obj;
  },
  toJSON(message: QueryMetaNodeRequest): unknown {
    const obj: any = {};
    message.networkAddr !== undefined && (obj.networkAddr = message.networkAddr);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryMetaNodeRequest>, I>>(object: I): QueryMetaNodeRequest {
    const message = createBaseQueryMetaNodeRequest();
    message.networkAddr = object.networkAddr ?? "";
    return message;
  },
};
function createBaseQueryMetaNodeResponse(): QueryMetaNodeResponse {
  return {
    node: undefined,
  };
}
export const QueryMetaNodeResponse = {
  typeUrl: "/stratos.register.v1.QueryMetaNodeResponse",
  encode(message: QueryMetaNodeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.node !== undefined) {
      MetaNode.encode(message.node, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMetaNodeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMetaNodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.node = MetaNode.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryMetaNodeResponse {
    const obj = createBaseQueryMetaNodeResponse();
    if (isSet(object.node)) obj.node = MetaNode.fromJSON(object.node);
    return obj;
  },
  toJSON(message: QueryMetaNodeResponse): unknown {
    const obj: any = {};
    message.node !== undefined && (obj.node = message.node ? MetaNode.toJSON(message.node) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryMetaNodeResponse>, I>>(object: I): QueryMetaNodeResponse {
    const message = createBaseQueryMetaNodeResponse();
    if (object.node !== undefined && object.node !== null) {
      message.node = MetaNode.fromPartial(object.node);
    }
    return message;
  },
};
function createBaseQueryDepositByNodeRequest(): QueryDepositByNodeRequest {
  return {
    networkAddr: "",
    queryType: 0,
  };
}
export const QueryDepositByNodeRequest = {
  typeUrl: "/stratos.register.v1.QueryDepositByNodeRequest",
  encode(message: QueryDepositByNodeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.networkAddr !== "") {
      writer.uint32(10).string(message.networkAddr);
    }
    if (message.queryType !== 0) {
      writer.uint32(16).uint32(message.queryType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDepositByNodeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositByNodeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.networkAddr = reader.string();
          break;
        case 2:
          message.queryType = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDepositByNodeRequest {
    const obj = createBaseQueryDepositByNodeRequest();
    if (isSet(object.networkAddr)) obj.networkAddr = String(object.networkAddr);
    if (isSet(object.queryType)) obj.queryType = Number(object.queryType);
    return obj;
  },
  toJSON(message: QueryDepositByNodeRequest): unknown {
    const obj: any = {};
    message.networkAddr !== undefined && (obj.networkAddr = message.networkAddr);
    message.queryType !== undefined && (obj.queryType = Math.round(message.queryType));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDepositByNodeRequest>, I>>(
    object: I,
  ): QueryDepositByNodeRequest {
    const message = createBaseQueryDepositByNodeRequest();
    message.networkAddr = object.networkAddr ?? "";
    message.queryType = object.queryType ?? 0;
    return message;
  },
};
function createBaseQueryDepositByNodeResponse(): QueryDepositByNodeResponse {
  return {
    depositInfo: undefined,
  };
}
export const QueryDepositByNodeResponse = {
  typeUrl: "/stratos.register.v1.QueryDepositByNodeResponse",
  encode(message: QueryDepositByNodeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.depositInfo !== undefined) {
      DepositInfo.encode(message.depositInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDepositByNodeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositByNodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositInfo = DepositInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDepositByNodeResponse {
    const obj = createBaseQueryDepositByNodeResponse();
    if (isSet(object.depositInfo)) obj.depositInfo = DepositInfo.fromJSON(object.depositInfo);
    return obj;
  },
  toJSON(message: QueryDepositByNodeResponse): unknown {
    const obj: any = {};
    message.depositInfo !== undefined &&
      (obj.depositInfo = message.depositInfo ? DepositInfo.toJSON(message.depositInfo) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDepositByNodeResponse>, I>>(
    object: I,
  ): QueryDepositByNodeResponse {
    const message = createBaseQueryDepositByNodeResponse();
    if (object.depositInfo !== undefined && object.depositInfo !== null) {
      message.depositInfo = DepositInfo.fromPartial(object.depositInfo);
    }
    return message;
  },
};
function createBaseQueryDepositByOwnerRequest(): QueryDepositByOwnerRequest {
  return {
    ownerAddr: "",
    pagination: undefined,
  };
}
export const QueryDepositByOwnerRequest = {
  typeUrl: "/stratos.register.v1.QueryDepositByOwnerRequest",
  encode(message: QueryDepositByOwnerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ownerAddr !== "") {
      writer.uint32(10).string(message.ownerAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDepositByOwnerRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositByOwnerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ownerAddr = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDepositByOwnerRequest {
    const obj = createBaseQueryDepositByOwnerRequest();
    if (isSet(object.ownerAddr)) obj.ownerAddr = String(object.ownerAddr);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryDepositByOwnerRequest): unknown {
    const obj: any = {};
    message.ownerAddr !== undefined && (obj.ownerAddr = message.ownerAddr);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDepositByOwnerRequest>, I>>(
    object: I,
  ): QueryDepositByOwnerRequest {
    const message = createBaseQueryDepositByOwnerRequest();
    message.ownerAddr = object.ownerAddr ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryDepositByOwnerResponse(): QueryDepositByOwnerResponse {
  return {
    depositInfos: [],
    pagination: undefined,
  };
}
export const QueryDepositByOwnerResponse = {
  typeUrl: "/stratos.register.v1.QueryDepositByOwnerResponse",
  encode(message: QueryDepositByOwnerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.depositInfos) {
      DepositInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDepositByOwnerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositByOwnerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositInfos.push(DepositInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDepositByOwnerResponse {
    const obj = createBaseQueryDepositByOwnerResponse();
    if (Array.isArray(object?.depositInfos))
      obj.depositInfos = object.depositInfos.map((e: any) => DepositInfo.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryDepositByOwnerResponse): unknown {
    const obj: any = {};
    if (message.depositInfos) {
      obj.depositInfos = message.depositInfos.map((e) => (e ? DepositInfo.toJSON(e) : undefined));
    } else {
      obj.depositInfos = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDepositByOwnerResponse>, I>>(
    object: I,
  ): QueryDepositByOwnerResponse {
    const message = createBaseQueryDepositByOwnerResponse();
    message.depositInfos = object.depositInfos?.map((e) => DepositInfo.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryDepositTotalRequest(): QueryDepositTotalRequest {
  return {};
}
export const QueryDepositTotalRequest = {
  typeUrl: "/stratos.register.v1.QueryDepositTotalRequest",
  encode(_: QueryDepositTotalRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDepositTotalRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositTotalRequest();
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
  fromJSON(_: any): QueryDepositTotalRequest {
    const obj = createBaseQueryDepositTotalRequest();
    return obj;
  },
  toJSON(_: QueryDepositTotalRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDepositTotalRequest>, I>>(_: I): QueryDepositTotalRequest {
    const message = createBaseQueryDepositTotalRequest();
    return message;
  },
};
function createBaseQueryDepositTotalResponse(): QueryDepositTotalResponse {
  return {
    resourceNodesTotalDeposit: undefined,
    metaNodesTotalDeposit: undefined,
    totalBondedDeposit: undefined,
    totalUnbondedDeposit: undefined,
    totalUnbondingDeposit: undefined,
  };
}
export const QueryDepositTotalResponse = {
  typeUrl: "/stratos.register.v1.QueryDepositTotalResponse",
  encode(message: QueryDepositTotalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.resourceNodesTotalDeposit !== undefined) {
      Coin.encode(message.resourceNodesTotalDeposit, writer.uint32(10).fork()).ldelim();
    }
    if (message.metaNodesTotalDeposit !== undefined) {
      Coin.encode(message.metaNodesTotalDeposit, writer.uint32(18).fork()).ldelim();
    }
    if (message.totalBondedDeposit !== undefined) {
      Coin.encode(message.totalBondedDeposit, writer.uint32(26).fork()).ldelim();
    }
    if (message.totalUnbondedDeposit !== undefined) {
      Coin.encode(message.totalUnbondedDeposit, writer.uint32(34).fork()).ldelim();
    }
    if (message.totalUnbondingDeposit !== undefined) {
      Coin.encode(message.totalUnbondingDeposit, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDepositTotalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositTotalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resourceNodesTotalDeposit = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.metaNodesTotalDeposit = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.totalBondedDeposit = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.totalUnbondedDeposit = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.totalUnbondingDeposit = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDepositTotalResponse {
    const obj = createBaseQueryDepositTotalResponse();
    if (isSet(object.resourceNodesTotalDeposit))
      obj.resourceNodesTotalDeposit = Coin.fromJSON(object.resourceNodesTotalDeposit);
    if (isSet(object.metaNodesTotalDeposit))
      obj.metaNodesTotalDeposit = Coin.fromJSON(object.metaNodesTotalDeposit);
    if (isSet(object.totalBondedDeposit)) obj.totalBondedDeposit = Coin.fromJSON(object.totalBondedDeposit);
    if (isSet(object.totalUnbondedDeposit))
      obj.totalUnbondedDeposit = Coin.fromJSON(object.totalUnbondedDeposit);
    if (isSet(object.totalUnbondingDeposit))
      obj.totalUnbondingDeposit = Coin.fromJSON(object.totalUnbondingDeposit);
    return obj;
  },
  toJSON(message: QueryDepositTotalResponse): unknown {
    const obj: any = {};
    message.resourceNodesTotalDeposit !== undefined &&
      (obj.resourceNodesTotalDeposit = message.resourceNodesTotalDeposit
        ? Coin.toJSON(message.resourceNodesTotalDeposit)
        : undefined);
    message.metaNodesTotalDeposit !== undefined &&
      (obj.metaNodesTotalDeposit = message.metaNodesTotalDeposit
        ? Coin.toJSON(message.metaNodesTotalDeposit)
        : undefined);
    message.totalBondedDeposit !== undefined &&
      (obj.totalBondedDeposit = message.totalBondedDeposit
        ? Coin.toJSON(message.totalBondedDeposit)
        : undefined);
    message.totalUnbondedDeposit !== undefined &&
      (obj.totalUnbondedDeposit = message.totalUnbondedDeposit
        ? Coin.toJSON(message.totalUnbondedDeposit)
        : undefined);
    message.totalUnbondingDeposit !== undefined &&
      (obj.totalUnbondingDeposit = message.totalUnbondingDeposit
        ? Coin.toJSON(message.totalUnbondingDeposit)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDepositTotalResponse>, I>>(
    object: I,
  ): QueryDepositTotalResponse {
    const message = createBaseQueryDepositTotalResponse();
    if (object.resourceNodesTotalDeposit !== undefined && object.resourceNodesTotalDeposit !== null) {
      message.resourceNodesTotalDeposit = Coin.fromPartial(object.resourceNodesTotalDeposit);
    }
    if (object.metaNodesTotalDeposit !== undefined && object.metaNodesTotalDeposit !== null) {
      message.metaNodesTotalDeposit = Coin.fromPartial(object.metaNodesTotalDeposit);
    }
    if (object.totalBondedDeposit !== undefined && object.totalBondedDeposit !== null) {
      message.totalBondedDeposit = Coin.fromPartial(object.totalBondedDeposit);
    }
    if (object.totalUnbondedDeposit !== undefined && object.totalUnbondedDeposit !== null) {
      message.totalUnbondedDeposit = Coin.fromPartial(object.totalUnbondedDeposit);
    }
    if (object.totalUnbondingDeposit !== undefined && object.totalUnbondingDeposit !== null) {
      message.totalUnbondingDeposit = Coin.fromPartial(object.totalUnbondingDeposit);
    }
    return message;
  },
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/stratos.register.v1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromJSON(_: any): QueryParamsRequest {
    const obj = createBaseQueryParamsRequest();
    return obj;
  },
  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined,
  };
}
export const QueryParamsResponse = {
  typeUrl: "/stratos.register.v1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    const obj = createBaseQueryParamsResponse();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
};
function createBaseQueryBondedResourceNodeCountRequest(): QueryBondedResourceNodeCountRequest {
  return {};
}
export const QueryBondedResourceNodeCountRequest = {
  typeUrl: "/stratos.register.v1.QueryBondedResourceNodeCountRequest",
  encode(_: QueryBondedResourceNodeCountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBondedResourceNodeCountRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBondedResourceNodeCountRequest();
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
  fromJSON(_: any): QueryBondedResourceNodeCountRequest {
    const obj = createBaseQueryBondedResourceNodeCountRequest();
    return obj;
  },
  toJSON(_: QueryBondedResourceNodeCountRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryBondedResourceNodeCountRequest>, I>>(
    _: I,
  ): QueryBondedResourceNodeCountRequest {
    const message = createBaseQueryBondedResourceNodeCountRequest();
    return message;
  },
};
function createBaseQueryBondedResourceNodeCountResponse(): QueryBondedResourceNodeCountResponse {
  return {
    number: BigInt(0),
  };
}
export const QueryBondedResourceNodeCountResponse = {
  typeUrl: "/stratos.register.v1.QueryBondedResourceNodeCountResponse",
  encode(
    message: QueryBondedResourceNodeCountResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.number !== BigInt(0)) {
      writer.uint32(8).uint64(message.number);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBondedResourceNodeCountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBondedResourceNodeCountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.number = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBondedResourceNodeCountResponse {
    const obj = createBaseQueryBondedResourceNodeCountResponse();
    if (isSet(object.number)) obj.number = BigInt(object.number.toString());
    return obj;
  },
  toJSON(message: QueryBondedResourceNodeCountResponse): unknown {
    const obj: any = {};
    message.number !== undefined && (obj.number = (message.number || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryBondedResourceNodeCountResponse>, I>>(
    object: I,
  ): QueryBondedResourceNodeCountResponse {
    const message = createBaseQueryBondedResourceNodeCountResponse();
    if (object.number !== undefined && object.number !== null) {
      message.number = BigInt(object.number.toString());
    }
    return message;
  },
};
function createBaseQueryBondedMetaNodeCountRequest(): QueryBondedMetaNodeCountRequest {
  return {};
}
export const QueryBondedMetaNodeCountRequest = {
  typeUrl: "/stratos.register.v1.QueryBondedMetaNodeCountRequest",
  encode(_: QueryBondedMetaNodeCountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBondedMetaNodeCountRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBondedMetaNodeCountRequest();
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
  fromJSON(_: any): QueryBondedMetaNodeCountRequest {
    const obj = createBaseQueryBondedMetaNodeCountRequest();
    return obj;
  },
  toJSON(_: QueryBondedMetaNodeCountRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryBondedMetaNodeCountRequest>, I>>(
    _: I,
  ): QueryBondedMetaNodeCountRequest {
    const message = createBaseQueryBondedMetaNodeCountRequest();
    return message;
  },
};
function createBaseQueryBondedMetaNodeCountResponse(): QueryBondedMetaNodeCountResponse {
  return {
    number: BigInt(0),
  };
}
export const QueryBondedMetaNodeCountResponse = {
  typeUrl: "/stratos.register.v1.QueryBondedMetaNodeCountResponse",
  encode(
    message: QueryBondedMetaNodeCountResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.number !== BigInt(0)) {
      writer.uint32(8).uint64(message.number);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBondedMetaNodeCountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBondedMetaNodeCountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.number = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBondedMetaNodeCountResponse {
    const obj = createBaseQueryBondedMetaNodeCountResponse();
    if (isSet(object.number)) obj.number = BigInt(object.number.toString());
    return obj;
  },
  toJSON(message: QueryBondedMetaNodeCountResponse): unknown {
    const obj: any = {};
    message.number !== undefined && (obj.number = (message.number || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryBondedMetaNodeCountResponse>, I>>(
    object: I,
  ): QueryBondedMetaNodeCountResponse {
    const message = createBaseQueryBondedMetaNodeCountResponse();
    if (object.number !== undefined && object.number !== null) {
      message.number = BigInt(object.number.toString());
    }
    return message;
  },
};
function createBaseDepositInfo(): DepositInfo {
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
    bondedDeposit: Coin.fromPartial({}),
    unBondingDeposit: Coin.fromPartial({}),
    unBondedDeposit: Coin.fromPartial({}),
  };
}
export const DepositInfo = {
  typeUrl: "/stratos.register.v1.DepositInfo",
  encode(message: DepositInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    if (message.bondedDeposit !== undefined) {
      Coin.encode(message.bondedDeposit, writer.uint32(82).fork()).ldelim();
    }
    if (message.unBondingDeposit !== undefined) {
      Coin.encode(message.unBondingDeposit, writer.uint32(90).fork()).ldelim();
    }
    if (message.unBondedDeposit !== undefined) {
      Coin.encode(message.unBondedDeposit, writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DepositInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositInfo();
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
          message.bondedDeposit = Coin.decode(reader, reader.uint32());
          break;
        case 11:
          message.unBondingDeposit = Coin.decode(reader, reader.uint32());
          break;
        case 12:
          message.unBondedDeposit = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DepositInfo {
    const obj = createBaseDepositInfo();
    if (isSet(object.networkAddress)) obj.networkAddress = String(object.networkAddress);
    if (isSet(object.pubkey)) obj.pubkey = Any.fromJSON(object.pubkey);
    if (isSet(object.suspend)) obj.suspend = Boolean(object.suspend);
    if (isSet(object.status)) obj.status = bondStatusFromJSON(object.status);
    if (isSet(object.tokens)) obj.tokens = String(object.tokens);
    if (isSet(object.ownerAddress)) obj.ownerAddress = String(object.ownerAddress);
    if (isSet(object.description)) obj.description = Description.fromJSON(object.description);
    if (isSet(object.creationTime)) obj.creationTime = fromJsonTimestamp(object.creationTime);
    if (isSet(object.nodeType)) obj.nodeType = Number(object.nodeType);
    if (isSet(object.bondedDeposit)) obj.bondedDeposit = Coin.fromJSON(object.bondedDeposit);
    if (isSet(object.unBondingDeposit)) obj.unBondingDeposit = Coin.fromJSON(object.unBondingDeposit);
    if (isSet(object.unBondedDeposit)) obj.unBondedDeposit = Coin.fromJSON(object.unBondedDeposit);
    return obj;
  },
  toJSON(message: DepositInfo): unknown {
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
    message.bondedDeposit !== undefined &&
      (obj.bondedDeposit = message.bondedDeposit ? Coin.toJSON(message.bondedDeposit) : undefined);
    message.unBondingDeposit !== undefined &&
      (obj.unBondingDeposit = message.unBondingDeposit ? Coin.toJSON(message.unBondingDeposit) : undefined);
    message.unBondedDeposit !== undefined &&
      (obj.unBondedDeposit = message.unBondedDeposit ? Coin.toJSON(message.unBondedDeposit) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<DepositInfo>, I>>(object: I): DepositInfo {
    const message = createBaseDepositInfo();
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
    if (object.bondedDeposit !== undefined && object.bondedDeposit !== null) {
      message.bondedDeposit = Coin.fromPartial(object.bondedDeposit);
    }
    if (object.unBondingDeposit !== undefined && object.unBondingDeposit !== null) {
      message.unBondingDeposit = Coin.fromPartial(object.unBondingDeposit);
    }
    if (object.unBondedDeposit !== undefined && object.unBondedDeposit !== null) {
      message.unBondedDeposit = Coin.fromPartial(object.unBondedDeposit);
    }
    return message;
  },
};
/** Query defines the gRPC querier service. */
export interface Query {
  /** ResourceNode queries ResourceNode info for given ResourceNode address. */
  ResourceNode(request: QueryResourceNodeRequest): Promise<QueryResourceNodeResponse>;
  /** MetaNode queries MetaNode info for given MetaNode address. */
  MetaNode(request: QueryMetaNodeRequest): Promise<QueryMetaNodeResponse>;
  /** Params queries Register module Params info. */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** DepositByNode queries all deposit info for given node network address. */
  DepositByNode(request: QueryDepositByNodeRequest): Promise<QueryDepositByNodeResponse>;
  /** DepositByOwner queries all deposit info for given owner address. */
  DepositByOwner(request: QueryDepositByOwnerRequest): Promise<QueryDepositByOwnerResponse>;
  /** DepositTotal queries all deposit info. */
  DepositTotal(request?: QueryDepositTotalRequest): Promise<QueryDepositTotalResponse>;
  /** BondedResourceNodeCount queries total number of ResourceNodes. */
  BondedResourceNodeCount(
    request?: QueryBondedResourceNodeCountRequest,
  ): Promise<QueryBondedResourceNodeCountResponse>;
  /** BondedMetaNodeCount queries total number of MetaNodes. */
  BondedMetaNodeCount(request?: QueryBondedMetaNodeCountRequest): Promise<QueryBondedMetaNodeCountResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.ResourceNode = this.ResourceNode.bind(this);
    this.MetaNode = this.MetaNode.bind(this);
    this.Params = this.Params.bind(this);
    this.DepositByNode = this.DepositByNode.bind(this);
    this.DepositByOwner = this.DepositByOwner.bind(this);
    this.DepositTotal = this.DepositTotal.bind(this);
    this.BondedResourceNodeCount = this.BondedResourceNodeCount.bind(this);
    this.BondedMetaNodeCount = this.BondedMetaNodeCount.bind(this);
  }
  ResourceNode(request: QueryResourceNodeRequest): Promise<QueryResourceNodeResponse> {
    const data = QueryResourceNodeRequest.encode(request).finish();
    const promise = this.rpc.request("stratos.register.v1.Query", "ResourceNode", data);
    return promise.then((data) => QueryResourceNodeResponse.decode(new BinaryReader(data)));
  }
  MetaNode(request: QueryMetaNodeRequest): Promise<QueryMetaNodeResponse> {
    const data = QueryMetaNodeRequest.encode(request).finish();
    const promise = this.rpc.request("stratos.register.v1.Query", "MetaNode", data);
    return promise.then((data) => QueryMetaNodeResponse.decode(new BinaryReader(data)));
  }
  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("stratos.register.v1.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  DepositByNode(request: QueryDepositByNodeRequest): Promise<QueryDepositByNodeResponse> {
    const data = QueryDepositByNodeRequest.encode(request).finish();
    const promise = this.rpc.request("stratos.register.v1.Query", "DepositByNode", data);
    return promise.then((data) => QueryDepositByNodeResponse.decode(new BinaryReader(data)));
  }
  DepositByOwner(request: QueryDepositByOwnerRequest): Promise<QueryDepositByOwnerResponse> {
    const data = QueryDepositByOwnerRequest.encode(request).finish();
    const promise = this.rpc.request("stratos.register.v1.Query", "DepositByOwner", data);
    return promise.then((data) => QueryDepositByOwnerResponse.decode(new BinaryReader(data)));
  }
  DepositTotal(request: QueryDepositTotalRequest = {}): Promise<QueryDepositTotalResponse> {
    const data = QueryDepositTotalRequest.encode(request).finish();
    const promise = this.rpc.request("stratos.register.v1.Query", "DepositTotal", data);
    return promise.then((data) => QueryDepositTotalResponse.decode(new BinaryReader(data)));
  }
  BondedResourceNodeCount(
    request: QueryBondedResourceNodeCountRequest = {},
  ): Promise<QueryBondedResourceNodeCountResponse> {
    const data = QueryBondedResourceNodeCountRequest.encode(request).finish();
    const promise = this.rpc.request("stratos.register.v1.Query", "BondedResourceNodeCount", data);
    return promise.then((data) => QueryBondedResourceNodeCountResponse.decode(new BinaryReader(data)));
  }
  BondedMetaNodeCount(
    request: QueryBondedMetaNodeCountRequest = {},
  ): Promise<QueryBondedMetaNodeCountResponse> {
    const data = QueryBondedMetaNodeCountRequest.encode(request).finish();
    const promise = this.rpc.request("stratos.register.v1.Query", "BondedMetaNodeCount", data);
    return promise.then((data) => QueryBondedMetaNodeCountResponse.decode(new BinaryReader(data)));
  }
}
