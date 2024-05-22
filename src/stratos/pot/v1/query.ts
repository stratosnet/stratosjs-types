/* eslint-disable */
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, Reward, TotalReward, Metrics } from "./pot";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact, Rpc } from "../../../helpers";
export const protobufPackage = "stratos.pot.v1";
/** QueryVolumeReportRequest is request type for the Query/VolumeReport RPC method */
export interface QueryVolumeReportRequest {
  /** epoch defines the epoch number to query for. */
  epoch: bigint;
}
/** QueryVolumeReportResponse is response type for the Query/ResourceNode RPC method */
export interface QueryVolumeReportResponse {
  /** node defines the the volumeReport info. */
  reportInfo?: ReportInfo;
  height: bigint;
}
export interface ReportInfo {
  epoch: bigint;
  reference: string;
  txHash: string;
  reporter: string;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}
/** QueryRewardsByEpochRequest is request type for the Query/RewardsByEpoch by a given epoch RPC method */
export interface QueryRewardsByEpochRequest {
  epoch: bigint;
  walletAddress: string;
  pagination?: PageRequest;
}
/** QueryRewardsByEpochResponse is response type for the Query/RewardsByEpoch RPC method */
export interface QueryRewardsByEpochResponse {
  rewards: Reward[];
  height: bigint;
  pagination?: PageResponse;
}
/** QueryRewardsByOwnerRequest is request type for the Query/RewardsByOwner by a given owner RPC method */
export interface QueryRewardsByOwnerRequest {
  walletAddress: string;
}
/** QueryRewardsByOwnerResponse is response type for the Query/RewardsByOwner RPC method */
export interface QueryRewardsByOwnerResponse {
  rewards?: RewardByOwner;
  height: bigint;
}
export interface RewardByOwner {
  walletAddress: string;
  matureTotalReward: Coin[];
  immatureTotalReward: Coin[];
}
/** QuerySlashingByOwnerRequest is request type for the Query/Slashing by a given owner RPC method */
export interface QuerySlashingByOwnerRequest {
  walletAddress: string;
}
/** QuerySlashingByOwnerResponse is response type for the Query/Slashing RPC method */
export interface QuerySlashingByOwnerResponse {
  slashing: string;
  height: bigint;
}
export interface QueryTotalMinedTokenRequest {}
export interface QueryTotalMinedTokenResponse {
  totalMinedToken: Coin;
}
export interface QueryCirculationSupplyRequest {}
export interface QueryCirculationSupplyResponse {
  circulationSupply: Coin[];
}
export interface QueryTotalRewardByEpochRequest {
  epoch: bigint;
}
export interface QueryTotalRewardByEpochResponse {
  totalReward: TotalReward;
}
export interface QueryMetricsRequest {}
export interface QueryMetricsResponse {
  metrics: Metrics;
}
function createBaseQueryVolumeReportRequest(): QueryVolumeReportRequest {
  return {
    epoch: BigInt(0),
  };
}
export const QueryVolumeReportRequest = {
  typeUrl: "/stratos.pot.v1.QueryVolumeReportRequest",
  encode(message: QueryVolumeReportRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epoch !== BigInt(0)) {
      writer.uint32(8).int64(message.epoch);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVolumeReportRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVolumeReportRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epoch = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryVolumeReportRequest {
    const obj = createBaseQueryVolumeReportRequest();
    if (isSet(object.epoch)) obj.epoch = BigInt(object.epoch.toString());
    return obj;
  },
  toJSON(message: QueryVolumeReportRequest): unknown {
    const obj: any = {};
    message.epoch !== undefined && (obj.epoch = (message.epoch || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryVolumeReportRequest>, I>>(
    object: I,
  ): QueryVolumeReportRequest {
    const message = createBaseQueryVolumeReportRequest();
    if (object.epoch !== undefined && object.epoch !== null) {
      message.epoch = BigInt(object.epoch.toString());
    }
    return message;
  },
};
function createBaseQueryVolumeReportResponse(): QueryVolumeReportResponse {
  return {
    reportInfo: undefined,
    height: BigInt(0),
  };
}
export const QueryVolumeReportResponse = {
  typeUrl: "/stratos.pot.v1.QueryVolumeReportResponse",
  encode(message: QueryVolumeReportResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.reportInfo !== undefined) {
      ReportInfo.encode(message.reportInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(16).int64(message.height);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVolumeReportResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVolumeReportResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reportInfo = ReportInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.height = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryVolumeReportResponse {
    const obj = createBaseQueryVolumeReportResponse();
    if (isSet(object.reportInfo)) obj.reportInfo = ReportInfo.fromJSON(object.reportInfo);
    if (isSet(object.height)) obj.height = BigInt(object.height.toString());
    return obj;
  },
  toJSON(message: QueryVolumeReportResponse): unknown {
    const obj: any = {};
    message.reportInfo !== undefined &&
      (obj.reportInfo = message.reportInfo ? ReportInfo.toJSON(message.reportInfo) : undefined);
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryVolumeReportResponse>, I>>(
    object: I,
  ): QueryVolumeReportResponse {
    const message = createBaseQueryVolumeReportResponse();
    if (object.reportInfo !== undefined && object.reportInfo !== null) {
      message.reportInfo = ReportInfo.fromPartial(object.reportInfo);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height.toString());
    }
    return message;
  },
};
function createBaseReportInfo(): ReportInfo {
  return {
    epoch: BigInt(0),
    reference: "",
    txHash: "",
    reporter: "",
  };
}
export const ReportInfo = {
  typeUrl: "/stratos.pot.v1.ReportInfo",
  encode(message: ReportInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epoch !== BigInt(0)) {
      writer.uint32(8).int64(message.epoch);
    }
    if (message.reference !== "") {
      writer.uint32(18).string(message.reference);
    }
    if (message.txHash !== "") {
      writer.uint32(26).string(message.txHash);
    }
    if (message.reporter !== "") {
      writer.uint32(34).string(message.reporter);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ReportInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReportInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epoch = reader.int64();
          break;
        case 2:
          message.reference = reader.string();
          break;
        case 3:
          message.txHash = reader.string();
          break;
        case 4:
          message.reporter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ReportInfo {
    const obj = createBaseReportInfo();
    if (isSet(object.epoch)) obj.epoch = BigInt(object.epoch.toString());
    if (isSet(object.reference)) obj.reference = String(object.reference);
    if (isSet(object.txHash)) obj.txHash = String(object.txHash);
    if (isSet(object.reporter)) obj.reporter = String(object.reporter);
    return obj;
  },
  toJSON(message: ReportInfo): unknown {
    const obj: any = {};
    message.epoch !== undefined && (obj.epoch = (message.epoch || BigInt(0)).toString());
    message.reference !== undefined && (obj.reference = message.reference);
    message.txHash !== undefined && (obj.txHash = message.txHash);
    message.reporter !== undefined && (obj.reporter = message.reporter);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ReportInfo>, I>>(object: I): ReportInfo {
    const message = createBaseReportInfo();
    if (object.epoch !== undefined && object.epoch !== null) {
      message.epoch = BigInt(object.epoch.toString());
    }
    message.reference = object.reference ?? "";
    message.txHash = object.txHash ?? "";
    message.reporter = object.reporter ?? "";
    return message;
  },
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/stratos.pot.v1.QueryParamsRequest",
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
  typeUrl: "/stratos.pot.v1.QueryParamsResponse",
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
function createBaseQueryRewardsByEpochRequest(): QueryRewardsByEpochRequest {
  return {
    epoch: BigInt(0),
    walletAddress: "",
    pagination: undefined,
  };
}
export const QueryRewardsByEpochRequest = {
  typeUrl: "/stratos.pot.v1.QueryRewardsByEpochRequest",
  encode(message: QueryRewardsByEpochRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epoch !== BigInt(0)) {
      writer.uint32(8).int64(message.epoch);
    }
    if (message.walletAddress !== "") {
      writer.uint32(18).string(message.walletAddress);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRewardsByEpochRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRewardsByEpochRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epoch = reader.int64();
          break;
        case 2:
          message.walletAddress = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryRewardsByEpochRequest {
    const obj = createBaseQueryRewardsByEpochRequest();
    if (isSet(object.epoch)) obj.epoch = BigInt(object.epoch.toString());
    if (isSet(object.walletAddress)) obj.walletAddress = String(object.walletAddress);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryRewardsByEpochRequest): unknown {
    const obj: any = {};
    message.epoch !== undefined && (obj.epoch = (message.epoch || BigInt(0)).toString());
    message.walletAddress !== undefined && (obj.walletAddress = message.walletAddress);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryRewardsByEpochRequest>, I>>(
    object: I,
  ): QueryRewardsByEpochRequest {
    const message = createBaseQueryRewardsByEpochRequest();
    if (object.epoch !== undefined && object.epoch !== null) {
      message.epoch = BigInt(object.epoch.toString());
    }
    message.walletAddress = object.walletAddress ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryRewardsByEpochResponse(): QueryRewardsByEpochResponse {
  return {
    rewards: [],
    height: BigInt(0),
    pagination: undefined,
  };
}
export const QueryRewardsByEpochResponse = {
  typeUrl: "/stratos.pot.v1.QueryRewardsByEpochResponse",
  encode(message: QueryRewardsByEpochResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.rewards) {
      Reward.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(16).int64(message.height);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRewardsByEpochResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRewardsByEpochResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(Reward.decode(reader, reader.uint32()));
          break;
        case 2:
          message.height = reader.int64();
          break;
        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryRewardsByEpochResponse {
    const obj = createBaseQueryRewardsByEpochResponse();
    if (Array.isArray(object?.rewards)) obj.rewards = object.rewards.map((e: any) => Reward.fromJSON(e));
    if (isSet(object.height)) obj.height = BigInt(object.height.toString());
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryRewardsByEpochResponse): unknown {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map((e) => (e ? Reward.toJSON(e) : undefined));
    } else {
      obj.rewards = [];
    }
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryRewardsByEpochResponse>, I>>(
    object: I,
  ): QueryRewardsByEpochResponse {
    const message = createBaseQueryRewardsByEpochResponse();
    message.rewards = object.rewards?.map((e) => Reward.fromPartial(e)) || [];
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height.toString());
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryRewardsByOwnerRequest(): QueryRewardsByOwnerRequest {
  return {
    walletAddress: "",
  };
}
export const QueryRewardsByOwnerRequest = {
  typeUrl: "/stratos.pot.v1.QueryRewardsByOwnerRequest",
  encode(message: QueryRewardsByOwnerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.walletAddress !== "") {
      writer.uint32(10).string(message.walletAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRewardsByOwnerRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRewardsByOwnerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.walletAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryRewardsByOwnerRequest {
    const obj = createBaseQueryRewardsByOwnerRequest();
    if (isSet(object.walletAddress)) obj.walletAddress = String(object.walletAddress);
    return obj;
  },
  toJSON(message: QueryRewardsByOwnerRequest): unknown {
    const obj: any = {};
    message.walletAddress !== undefined && (obj.walletAddress = message.walletAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryRewardsByOwnerRequest>, I>>(
    object: I,
  ): QueryRewardsByOwnerRequest {
    const message = createBaseQueryRewardsByOwnerRequest();
    message.walletAddress = object.walletAddress ?? "";
    return message;
  },
};
function createBaseQueryRewardsByOwnerResponse(): QueryRewardsByOwnerResponse {
  return {
    rewards: undefined,
    height: BigInt(0),
  };
}
export const QueryRewardsByOwnerResponse = {
  typeUrl: "/stratos.pot.v1.QueryRewardsByOwnerResponse",
  encode(message: QueryRewardsByOwnerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rewards !== undefined) {
      RewardByOwner.encode(message.rewards, writer.uint32(10).fork()).ldelim();
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(16).int64(message.height);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRewardsByOwnerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRewardsByOwnerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards = RewardByOwner.decode(reader, reader.uint32());
          break;
        case 2:
          message.height = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryRewardsByOwnerResponse {
    const obj = createBaseQueryRewardsByOwnerResponse();
    if (isSet(object.rewards)) obj.rewards = RewardByOwner.fromJSON(object.rewards);
    if (isSet(object.height)) obj.height = BigInt(object.height.toString());
    return obj;
  },
  toJSON(message: QueryRewardsByOwnerResponse): unknown {
    const obj: any = {};
    message.rewards !== undefined &&
      (obj.rewards = message.rewards ? RewardByOwner.toJSON(message.rewards) : undefined);
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryRewardsByOwnerResponse>, I>>(
    object: I,
  ): QueryRewardsByOwnerResponse {
    const message = createBaseQueryRewardsByOwnerResponse();
    if (object.rewards !== undefined && object.rewards !== null) {
      message.rewards = RewardByOwner.fromPartial(object.rewards);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height.toString());
    }
    return message;
  },
};
function createBaseRewardByOwner(): RewardByOwner {
  return {
    walletAddress: "",
    matureTotalReward: [],
    immatureTotalReward: [],
  };
}
export const RewardByOwner = {
  typeUrl: "/stratos.pot.v1.RewardByOwner",
  encode(message: RewardByOwner, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.walletAddress !== "") {
      writer.uint32(10).string(message.walletAddress);
    }
    for (const v of message.matureTotalReward) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.immatureTotalReward) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RewardByOwner {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardByOwner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.walletAddress = reader.string();
          break;
        case 2:
          message.matureTotalReward.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.immatureTotalReward.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RewardByOwner {
    const obj = createBaseRewardByOwner();
    if (isSet(object.walletAddress)) obj.walletAddress = String(object.walletAddress);
    if (Array.isArray(object?.matureTotalReward))
      obj.matureTotalReward = object.matureTotalReward.map((e: any) => Coin.fromJSON(e));
    if (Array.isArray(object?.immatureTotalReward))
      obj.immatureTotalReward = object.immatureTotalReward.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: RewardByOwner): unknown {
    const obj: any = {};
    message.walletAddress !== undefined && (obj.walletAddress = message.walletAddress);
    if (message.matureTotalReward) {
      obj.matureTotalReward = message.matureTotalReward.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.matureTotalReward = [];
    }
    if (message.immatureTotalReward) {
      obj.immatureTotalReward = message.immatureTotalReward.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.immatureTotalReward = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<RewardByOwner>, I>>(object: I): RewardByOwner {
    const message = createBaseRewardByOwner();
    message.walletAddress = object.walletAddress ?? "";
    message.matureTotalReward = object.matureTotalReward?.map((e) => Coin.fromPartial(e)) || [];
    message.immatureTotalReward = object.immatureTotalReward?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};
function createBaseQuerySlashingByOwnerRequest(): QuerySlashingByOwnerRequest {
  return {
    walletAddress: "",
  };
}
export const QuerySlashingByOwnerRequest = {
  typeUrl: "/stratos.pot.v1.QuerySlashingByOwnerRequest",
  encode(message: QuerySlashingByOwnerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.walletAddress !== "") {
      writer.uint32(10).string(message.walletAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySlashingByOwnerRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySlashingByOwnerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.walletAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySlashingByOwnerRequest {
    const obj = createBaseQuerySlashingByOwnerRequest();
    if (isSet(object.walletAddress)) obj.walletAddress = String(object.walletAddress);
    return obj;
  },
  toJSON(message: QuerySlashingByOwnerRequest): unknown {
    const obj: any = {};
    message.walletAddress !== undefined && (obj.walletAddress = message.walletAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySlashingByOwnerRequest>, I>>(
    object: I,
  ): QuerySlashingByOwnerRequest {
    const message = createBaseQuerySlashingByOwnerRequest();
    message.walletAddress = object.walletAddress ?? "";
    return message;
  },
};
function createBaseQuerySlashingByOwnerResponse(): QuerySlashingByOwnerResponse {
  return {
    slashing: "",
    height: BigInt(0),
  };
}
export const QuerySlashingByOwnerResponse = {
  typeUrl: "/stratos.pot.v1.QuerySlashingByOwnerResponse",
  encode(message: QuerySlashingByOwnerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.slashing !== "") {
      writer.uint32(10).string(message.slashing);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(16).int64(message.height);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySlashingByOwnerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySlashingByOwnerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.slashing = reader.string();
          break;
        case 2:
          message.height = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySlashingByOwnerResponse {
    const obj = createBaseQuerySlashingByOwnerResponse();
    if (isSet(object.slashing)) obj.slashing = String(object.slashing);
    if (isSet(object.height)) obj.height = BigInt(object.height.toString());
    return obj;
  },
  toJSON(message: QuerySlashingByOwnerResponse): unknown {
    const obj: any = {};
    message.slashing !== undefined && (obj.slashing = message.slashing);
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySlashingByOwnerResponse>, I>>(
    object: I,
  ): QuerySlashingByOwnerResponse {
    const message = createBaseQuerySlashingByOwnerResponse();
    message.slashing = object.slashing ?? "";
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height.toString());
    }
    return message;
  },
};
function createBaseQueryTotalMinedTokenRequest(): QueryTotalMinedTokenRequest {
  return {};
}
export const QueryTotalMinedTokenRequest = {
  typeUrl: "/stratos.pot.v1.QueryTotalMinedTokenRequest",
  encode(_: QueryTotalMinedTokenRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalMinedTokenRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalMinedTokenRequest();
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
  fromJSON(_: any): QueryTotalMinedTokenRequest {
    const obj = createBaseQueryTotalMinedTokenRequest();
    return obj;
  },
  toJSON(_: QueryTotalMinedTokenRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryTotalMinedTokenRequest>, I>>(
    _: I,
  ): QueryTotalMinedTokenRequest {
    const message = createBaseQueryTotalMinedTokenRequest();
    return message;
  },
};
function createBaseQueryTotalMinedTokenResponse(): QueryTotalMinedTokenResponse {
  return {
    totalMinedToken: Coin.fromPartial({}),
  };
}
export const QueryTotalMinedTokenResponse = {
  typeUrl: "/stratos.pot.v1.QueryTotalMinedTokenResponse",
  encode(message: QueryTotalMinedTokenResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalMinedToken !== undefined) {
      Coin.encode(message.totalMinedToken, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalMinedTokenResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalMinedTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalMinedToken = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalMinedTokenResponse {
    const obj = createBaseQueryTotalMinedTokenResponse();
    if (isSet(object.totalMinedToken)) obj.totalMinedToken = Coin.fromJSON(object.totalMinedToken);
    return obj;
  },
  toJSON(message: QueryTotalMinedTokenResponse): unknown {
    const obj: any = {};
    message.totalMinedToken !== undefined &&
      (obj.totalMinedToken = message.totalMinedToken ? Coin.toJSON(message.totalMinedToken) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryTotalMinedTokenResponse>, I>>(
    object: I,
  ): QueryTotalMinedTokenResponse {
    const message = createBaseQueryTotalMinedTokenResponse();
    if (object.totalMinedToken !== undefined && object.totalMinedToken !== null) {
      message.totalMinedToken = Coin.fromPartial(object.totalMinedToken);
    }
    return message;
  },
};
function createBaseQueryCirculationSupplyRequest(): QueryCirculationSupplyRequest {
  return {};
}
export const QueryCirculationSupplyRequest = {
  typeUrl: "/stratos.pot.v1.QueryCirculationSupplyRequest",
  encode(_: QueryCirculationSupplyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCirculationSupplyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCirculationSupplyRequest();
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
  fromJSON(_: any): QueryCirculationSupplyRequest {
    const obj = createBaseQueryCirculationSupplyRequest();
    return obj;
  },
  toJSON(_: QueryCirculationSupplyRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryCirculationSupplyRequest>, I>>(
    _: I,
  ): QueryCirculationSupplyRequest {
    const message = createBaseQueryCirculationSupplyRequest();
    return message;
  },
};
function createBaseQueryCirculationSupplyResponse(): QueryCirculationSupplyResponse {
  return {
    circulationSupply: [],
  };
}
export const QueryCirculationSupplyResponse = {
  typeUrl: "/stratos.pot.v1.QueryCirculationSupplyResponse",
  encode(
    message: QueryCirculationSupplyResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.circulationSupply) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCirculationSupplyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCirculationSupplyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.circulationSupply.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCirculationSupplyResponse {
    const obj = createBaseQueryCirculationSupplyResponse();
    if (Array.isArray(object?.circulationSupply))
      obj.circulationSupply = object.circulationSupply.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: QueryCirculationSupplyResponse): unknown {
    const obj: any = {};
    if (message.circulationSupply) {
      obj.circulationSupply = message.circulationSupply.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.circulationSupply = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryCirculationSupplyResponse>, I>>(
    object: I,
  ): QueryCirculationSupplyResponse {
    const message = createBaseQueryCirculationSupplyResponse();
    message.circulationSupply = object.circulationSupply?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};
function createBaseQueryTotalRewardByEpochRequest(): QueryTotalRewardByEpochRequest {
  return {
    epoch: BigInt(0),
  };
}
export const QueryTotalRewardByEpochRequest = {
  typeUrl: "/stratos.pot.v1.QueryTotalRewardByEpochRequest",
  encode(
    message: QueryTotalRewardByEpochRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.epoch !== BigInt(0)) {
      writer.uint32(8).int64(message.epoch);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalRewardByEpochRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalRewardByEpochRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epoch = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalRewardByEpochRequest {
    const obj = createBaseQueryTotalRewardByEpochRequest();
    if (isSet(object.epoch)) obj.epoch = BigInt(object.epoch.toString());
    return obj;
  },
  toJSON(message: QueryTotalRewardByEpochRequest): unknown {
    const obj: any = {};
    message.epoch !== undefined && (obj.epoch = (message.epoch || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryTotalRewardByEpochRequest>, I>>(
    object: I,
  ): QueryTotalRewardByEpochRequest {
    const message = createBaseQueryTotalRewardByEpochRequest();
    if (object.epoch !== undefined && object.epoch !== null) {
      message.epoch = BigInt(object.epoch.toString());
    }
    return message;
  },
};
function createBaseQueryTotalRewardByEpochResponse(): QueryTotalRewardByEpochResponse {
  return {
    totalReward: TotalReward.fromPartial({}),
  };
}
export const QueryTotalRewardByEpochResponse = {
  typeUrl: "/stratos.pot.v1.QueryTotalRewardByEpochResponse",
  encode(
    message: QueryTotalRewardByEpochResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.totalReward !== undefined) {
      TotalReward.encode(message.totalReward, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalRewardByEpochResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalRewardByEpochResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalReward = TotalReward.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalRewardByEpochResponse {
    const obj = createBaseQueryTotalRewardByEpochResponse();
    if (isSet(object.totalReward)) obj.totalReward = TotalReward.fromJSON(object.totalReward);
    return obj;
  },
  toJSON(message: QueryTotalRewardByEpochResponse): unknown {
    const obj: any = {};
    message.totalReward !== undefined &&
      (obj.totalReward = message.totalReward ? TotalReward.toJSON(message.totalReward) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryTotalRewardByEpochResponse>, I>>(
    object: I,
  ): QueryTotalRewardByEpochResponse {
    const message = createBaseQueryTotalRewardByEpochResponse();
    if (object.totalReward !== undefined && object.totalReward !== null) {
      message.totalReward = TotalReward.fromPartial(object.totalReward);
    }
    return message;
  },
};
function createBaseQueryMetricsRequest(): QueryMetricsRequest {
  return {};
}
export const QueryMetricsRequest = {
  typeUrl: "/stratos.pot.v1.QueryMetricsRequest",
  encode(_: QueryMetricsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMetricsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMetricsRequest();
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
  fromJSON(_: any): QueryMetricsRequest {
    const obj = createBaseQueryMetricsRequest();
    return obj;
  },
  toJSON(_: QueryMetricsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryMetricsRequest>, I>>(_: I): QueryMetricsRequest {
    const message = createBaseQueryMetricsRequest();
    return message;
  },
};
function createBaseQueryMetricsResponse(): QueryMetricsResponse {
  return {
    metrics: Metrics.fromPartial({}),
  };
}
export const QueryMetricsResponse = {
  typeUrl: "/stratos.pot.v1.QueryMetricsResponse",
  encode(message: QueryMetricsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.metrics !== undefined) {
      Metrics.encode(message.metrics, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMetricsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMetricsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metrics = Metrics.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryMetricsResponse {
    const obj = createBaseQueryMetricsResponse();
    if (isSet(object.metrics)) obj.metrics = Metrics.fromJSON(object.metrics);
    return obj;
  },
  toJSON(message: QueryMetricsResponse): unknown {
    const obj: any = {};
    message.metrics !== undefined &&
      (obj.metrics = message.metrics ? Metrics.toJSON(message.metrics) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryMetricsResponse>, I>>(object: I): QueryMetricsResponse {
    const message = createBaseQueryMetricsResponse();
    if (object.metrics !== undefined && object.metrics !== null) {
      message.metrics = Metrics.fromPartial(object.metrics);
    }
    return message;
  },
};
/** Query defines the gRPC querier service. */
export interface Query {
  /** VolumeReport queries VolumeReport info for given epoch. */
  VolumeReport(request: QueryVolumeReportRequest): Promise<QueryVolumeReportResponse>;
  /** RewardsByEpoch queries Pot rewards by a given epoch. */
  RewardsByEpoch(request: QueryRewardsByEpochRequest): Promise<QueryRewardsByEpochResponse>;
  /** RewardsByOwner queries Pot rewards by a given owner wallet address. */
  RewardsByOwner(request: QueryRewardsByOwnerRequest): Promise<QueryRewardsByOwnerResponse>;
  /** SlashingByOwner queries Pot slashing by owner wallet address. */
  SlashingByOwner(request: QuerySlashingByOwnerRequest): Promise<QuerySlashingByOwnerResponse>;
  /** Params queries POT module Params info. */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  TotalMinedToken(request?: QueryTotalMinedTokenRequest): Promise<QueryTotalMinedTokenResponse>;
  CirculationSupply(request?: QueryCirculationSupplyRequest): Promise<QueryCirculationSupplyResponse>;
  TotalRewardByEpoch(request: QueryTotalRewardByEpochRequest): Promise<QueryTotalRewardByEpochResponse>;
  Metrics(request?: QueryMetricsRequest): Promise<QueryMetricsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.VolumeReport = this.VolumeReport.bind(this);
    this.RewardsByEpoch = this.RewardsByEpoch.bind(this);
    this.RewardsByOwner = this.RewardsByOwner.bind(this);
    this.SlashingByOwner = this.SlashingByOwner.bind(this);
    this.Params = this.Params.bind(this);
    this.TotalMinedToken = this.TotalMinedToken.bind(this);
    this.CirculationSupply = this.CirculationSupply.bind(this);
    this.TotalRewardByEpoch = this.TotalRewardByEpoch.bind(this);
    this.Metrics = this.Metrics.bind(this);
  }
  VolumeReport(request: QueryVolumeReportRequest): Promise<QueryVolumeReportResponse> {
    const data = QueryVolumeReportRequest.encode(request).finish();
    const promise = this.rpc.request("stratos.pot.v1.Query", "VolumeReport", data);
    return promise.then((data) => QueryVolumeReportResponse.decode(new BinaryReader(data)));
  }
  RewardsByEpoch(request: QueryRewardsByEpochRequest): Promise<QueryRewardsByEpochResponse> {
    const data = QueryRewardsByEpochRequest.encode(request).finish();
    const promise = this.rpc.request("stratos.pot.v1.Query", "RewardsByEpoch", data);
    return promise.then((data) => QueryRewardsByEpochResponse.decode(new BinaryReader(data)));
  }
  RewardsByOwner(request: QueryRewardsByOwnerRequest): Promise<QueryRewardsByOwnerResponse> {
    const data = QueryRewardsByOwnerRequest.encode(request).finish();
    const promise = this.rpc.request("stratos.pot.v1.Query", "RewardsByOwner", data);
    return promise.then((data) => QueryRewardsByOwnerResponse.decode(new BinaryReader(data)));
  }
  SlashingByOwner(request: QuerySlashingByOwnerRequest): Promise<QuerySlashingByOwnerResponse> {
    const data = QuerySlashingByOwnerRequest.encode(request).finish();
    const promise = this.rpc.request("stratos.pot.v1.Query", "SlashingByOwner", data);
    return promise.then((data) => QuerySlashingByOwnerResponse.decode(new BinaryReader(data)));
  }
  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("stratos.pot.v1.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  TotalMinedToken(request: QueryTotalMinedTokenRequest = {}): Promise<QueryTotalMinedTokenResponse> {
    const data = QueryTotalMinedTokenRequest.encode(request).finish();
    const promise = this.rpc.request("stratos.pot.v1.Query", "TotalMinedToken", data);
    return promise.then((data) => QueryTotalMinedTokenResponse.decode(new BinaryReader(data)));
  }
  CirculationSupply(request: QueryCirculationSupplyRequest = {}): Promise<QueryCirculationSupplyResponse> {
    const data = QueryCirculationSupplyRequest.encode(request).finish();
    const promise = this.rpc.request("stratos.pot.v1.Query", "CirculationSupply", data);
    return promise.then((data) => QueryCirculationSupplyResponse.decode(new BinaryReader(data)));
  }
  TotalRewardByEpoch(request: QueryTotalRewardByEpochRequest): Promise<QueryTotalRewardByEpochResponse> {
    const data = QueryTotalRewardByEpochRequest.encode(request).finish();
    const promise = this.rpc.request("stratos.pot.v1.Query", "TotalRewardByEpoch", data);
    return promise.then((data) => QueryTotalRewardByEpochResponse.decode(new BinaryReader(data)));
  }
  Metrics(request: QueryMetricsRequest = {}): Promise<QueryMetricsResponse> {
    const data = QueryMetricsRequest.encode(request).finish();
    const promise = this.rpc.request("stratos.pot.v1.Query", "Metrics", data);
    return promise.then((data) => QueryMetricsResponse.decode(new BinaryReader(data)));
  }
}
