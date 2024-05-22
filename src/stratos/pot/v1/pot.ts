/* eslint-disable */
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "stratos.pot.v1";
/** Params defines the PoT module parameters */
export interface Params {
  bondDenom: string;
  rewardDenom: string;
  matureEpoch: bigint;
  miningRewardParams: MiningRewardParam[];
  communityTax: string;
  initialTotalSupply: Coin;
}
export interface MiningRewardParam {
  totalMinedValveStart: Coin;
  totalMinedValveEnd: Coin;
  miningReward: Coin;
  blockChainPercentageInBp: string;
  resourceNodePercentageInBp: string;
  metaNodePercentageInBp: string;
}
export interface Reward {
  walletAddress: string;
  rewardFromMiningPool: Coin[];
  rewardFromTrafficPool: Coin[];
}
export interface SingleWalletVolume {
  walletAddress: string;
  volume: string;
}
export interface WalletVolumes {
  volumes: SingleWalletVolume[];
}
export interface VolumeReportRecord {
  reporter: string;
  reportReference: string;
  txHash: string;
}
export interface TotalReward {
  miningReward: Coin[];
  trafficReward: Coin[];
}
export interface Metrics {
  totalSupply: string;
  totalMiningSupply: string;
  totalMinedTokens: string;
  totalResourceNodesDeposit: string;
  totalBondedDelegation: string;
  totalUnbondedDelegation: string;
  totalUnbondingDelegation: string;
  circulationSupply: string;
  totalMiningReward: string;
  chainMiningReward: string;
  resourceMiningReward: string;
  metaMiningReward: string;
}
function createBaseParams(): Params {
  return {
    bondDenom: "",
    rewardDenom: "",
    matureEpoch: BigInt(0),
    miningRewardParams: [],
    communityTax: "",
    initialTotalSupply: Coin.fromPartial({}),
  };
}
export const Params = {
  typeUrl: "/stratos.pot.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bondDenom !== "") {
      writer.uint32(10).string(message.bondDenom);
    }
    if (message.rewardDenom !== "") {
      writer.uint32(18).string(message.rewardDenom);
    }
    if (message.matureEpoch !== BigInt(0)) {
      writer.uint32(24).int64(message.matureEpoch);
    }
    for (const v of message.miningRewardParams) {
      MiningRewardParam.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.communityTax !== "") {
      writer.uint32(42).string(message.communityTax);
    }
    if (message.initialTotalSupply !== undefined) {
      Coin.encode(message.initialTotalSupply, writer.uint32(50).fork()).ldelim();
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
          message.rewardDenom = reader.string();
          break;
        case 3:
          message.matureEpoch = reader.int64();
          break;
        case 4:
          message.miningRewardParams.push(MiningRewardParam.decode(reader, reader.uint32()));
          break;
        case 5:
          message.communityTax = reader.string();
          break;
        case 6:
          message.initialTotalSupply = Coin.decode(reader, reader.uint32());
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
    if (isSet(object.rewardDenom)) obj.rewardDenom = String(object.rewardDenom);
    if (isSet(object.matureEpoch)) obj.matureEpoch = BigInt(object.matureEpoch.toString());
    if (Array.isArray(object?.miningRewardParams))
      obj.miningRewardParams = object.miningRewardParams.map((e: any) => MiningRewardParam.fromJSON(e));
    if (isSet(object.communityTax)) obj.communityTax = String(object.communityTax);
    if (isSet(object.initialTotalSupply)) obj.initialTotalSupply = Coin.fromJSON(object.initialTotalSupply);
    return obj;
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.bondDenom !== undefined && (obj.bondDenom = message.bondDenom);
    message.rewardDenom !== undefined && (obj.rewardDenom = message.rewardDenom);
    message.matureEpoch !== undefined && (obj.matureEpoch = (message.matureEpoch || BigInt(0)).toString());
    if (message.miningRewardParams) {
      obj.miningRewardParams = message.miningRewardParams.map((e) =>
        e ? MiningRewardParam.toJSON(e) : undefined,
      );
    } else {
      obj.miningRewardParams = [];
    }
    message.communityTax !== undefined && (obj.communityTax = message.communityTax);
    message.initialTotalSupply !== undefined &&
      (obj.initialTotalSupply = message.initialTotalSupply
        ? Coin.toJSON(message.initialTotalSupply)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.bondDenom = object.bondDenom ?? "";
    message.rewardDenom = object.rewardDenom ?? "";
    if (object.matureEpoch !== undefined && object.matureEpoch !== null) {
      message.matureEpoch = BigInt(object.matureEpoch.toString());
    }
    message.miningRewardParams =
      object.miningRewardParams?.map((e) => MiningRewardParam.fromPartial(e)) || [];
    message.communityTax = object.communityTax ?? "";
    if (object.initialTotalSupply !== undefined && object.initialTotalSupply !== null) {
      message.initialTotalSupply = Coin.fromPartial(object.initialTotalSupply);
    }
    return message;
  },
};
function createBaseMiningRewardParam(): MiningRewardParam {
  return {
    totalMinedValveStart: Coin.fromPartial({}),
    totalMinedValveEnd: Coin.fromPartial({}),
    miningReward: Coin.fromPartial({}),
    blockChainPercentageInBp: "",
    resourceNodePercentageInBp: "",
    metaNodePercentageInBp: "",
  };
}
export const MiningRewardParam = {
  typeUrl: "/stratos.pot.v1.MiningRewardParam",
  encode(message: MiningRewardParam, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalMinedValveStart !== undefined) {
      Coin.encode(message.totalMinedValveStart, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalMinedValveEnd !== undefined) {
      Coin.encode(message.totalMinedValveEnd, writer.uint32(18).fork()).ldelim();
    }
    if (message.miningReward !== undefined) {
      Coin.encode(message.miningReward, writer.uint32(26).fork()).ldelim();
    }
    if (message.blockChainPercentageInBp !== "") {
      writer.uint32(34).string(message.blockChainPercentageInBp);
    }
    if (message.resourceNodePercentageInBp !== "") {
      writer.uint32(42).string(message.resourceNodePercentageInBp);
    }
    if (message.metaNodePercentageInBp !== "") {
      writer.uint32(50).string(message.metaNodePercentageInBp);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MiningRewardParam {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMiningRewardParam();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalMinedValveStart = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.totalMinedValveEnd = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.miningReward = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.blockChainPercentageInBp = reader.string();
          break;
        case 5:
          message.resourceNodePercentageInBp = reader.string();
          break;
        case 6:
          message.metaNodePercentageInBp = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MiningRewardParam {
    const obj = createBaseMiningRewardParam();
    if (isSet(object.totalMinedValveStart))
      obj.totalMinedValveStart = Coin.fromJSON(object.totalMinedValveStart);
    if (isSet(object.totalMinedValveEnd)) obj.totalMinedValveEnd = Coin.fromJSON(object.totalMinedValveEnd);
    if (isSet(object.miningReward)) obj.miningReward = Coin.fromJSON(object.miningReward);
    if (isSet(object.blockChainPercentageInBp))
      obj.blockChainPercentageInBp = String(object.blockChainPercentageInBp);
    if (isSet(object.resourceNodePercentageInBp))
      obj.resourceNodePercentageInBp = String(object.resourceNodePercentageInBp);
    if (isSet(object.metaNodePercentageInBp))
      obj.metaNodePercentageInBp = String(object.metaNodePercentageInBp);
    return obj;
  },
  toJSON(message: MiningRewardParam): unknown {
    const obj: any = {};
    message.totalMinedValveStart !== undefined &&
      (obj.totalMinedValveStart = message.totalMinedValveStart
        ? Coin.toJSON(message.totalMinedValveStart)
        : undefined);
    message.totalMinedValveEnd !== undefined &&
      (obj.totalMinedValveEnd = message.totalMinedValveEnd
        ? Coin.toJSON(message.totalMinedValveEnd)
        : undefined);
    message.miningReward !== undefined &&
      (obj.miningReward = message.miningReward ? Coin.toJSON(message.miningReward) : undefined);
    message.blockChainPercentageInBp !== undefined &&
      (obj.blockChainPercentageInBp = message.blockChainPercentageInBp);
    message.resourceNodePercentageInBp !== undefined &&
      (obj.resourceNodePercentageInBp = message.resourceNodePercentageInBp);
    message.metaNodePercentageInBp !== undefined &&
      (obj.metaNodePercentageInBp = message.metaNodePercentageInBp);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MiningRewardParam>, I>>(object: I): MiningRewardParam {
    const message = createBaseMiningRewardParam();
    if (object.totalMinedValveStart !== undefined && object.totalMinedValveStart !== null) {
      message.totalMinedValveStart = Coin.fromPartial(object.totalMinedValveStart);
    }
    if (object.totalMinedValveEnd !== undefined && object.totalMinedValveEnd !== null) {
      message.totalMinedValveEnd = Coin.fromPartial(object.totalMinedValveEnd);
    }
    if (object.miningReward !== undefined && object.miningReward !== null) {
      message.miningReward = Coin.fromPartial(object.miningReward);
    }
    message.blockChainPercentageInBp = object.blockChainPercentageInBp ?? "";
    message.resourceNodePercentageInBp = object.resourceNodePercentageInBp ?? "";
    message.metaNodePercentageInBp = object.metaNodePercentageInBp ?? "";
    return message;
  },
};
function createBaseReward(): Reward {
  return {
    walletAddress: "",
    rewardFromMiningPool: [],
    rewardFromTrafficPool: [],
  };
}
export const Reward = {
  typeUrl: "/stratos.pot.v1.Reward",
  encode(message: Reward, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.walletAddress !== "") {
      writer.uint32(10).string(message.walletAddress);
    }
    for (const v of message.rewardFromMiningPool) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.rewardFromTrafficPool) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Reward {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.walletAddress = reader.string();
          break;
        case 2:
          message.rewardFromMiningPool.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.rewardFromTrafficPool.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Reward {
    const obj = createBaseReward();
    if (isSet(object.walletAddress)) obj.walletAddress = String(object.walletAddress);
    if (Array.isArray(object?.rewardFromMiningPool))
      obj.rewardFromMiningPool = object.rewardFromMiningPool.map((e: any) => Coin.fromJSON(e));
    if (Array.isArray(object?.rewardFromTrafficPool))
      obj.rewardFromTrafficPool = object.rewardFromTrafficPool.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: Reward): unknown {
    const obj: any = {};
    message.walletAddress !== undefined && (obj.walletAddress = message.walletAddress);
    if (message.rewardFromMiningPool) {
      obj.rewardFromMiningPool = message.rewardFromMiningPool.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.rewardFromMiningPool = [];
    }
    if (message.rewardFromTrafficPool) {
      obj.rewardFromTrafficPool = message.rewardFromTrafficPool.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.rewardFromTrafficPool = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Reward>, I>>(object: I): Reward {
    const message = createBaseReward();
    message.walletAddress = object.walletAddress ?? "";
    message.rewardFromMiningPool = object.rewardFromMiningPool?.map((e) => Coin.fromPartial(e)) || [];
    message.rewardFromTrafficPool = object.rewardFromTrafficPool?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};
function createBaseSingleWalletVolume(): SingleWalletVolume {
  return {
    walletAddress: "",
    volume: "",
  };
}
export const SingleWalletVolume = {
  typeUrl: "/stratos.pot.v1.SingleWalletVolume",
  encode(message: SingleWalletVolume, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.walletAddress !== "") {
      writer.uint32(10).string(message.walletAddress);
    }
    if (message.volume !== "") {
      writer.uint32(18).string(message.volume);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SingleWalletVolume {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSingleWalletVolume();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.walletAddress = reader.string();
          break;
        case 2:
          message.volume = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SingleWalletVolume {
    const obj = createBaseSingleWalletVolume();
    if (isSet(object.walletAddress)) obj.walletAddress = String(object.walletAddress);
    if (isSet(object.volume)) obj.volume = String(object.volume);
    return obj;
  },
  toJSON(message: SingleWalletVolume): unknown {
    const obj: any = {};
    message.walletAddress !== undefined && (obj.walletAddress = message.walletAddress);
    message.volume !== undefined && (obj.volume = message.volume);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SingleWalletVolume>, I>>(object: I): SingleWalletVolume {
    const message = createBaseSingleWalletVolume();
    message.walletAddress = object.walletAddress ?? "";
    message.volume = object.volume ?? "";
    return message;
  },
};
function createBaseWalletVolumes(): WalletVolumes {
  return {
    volumes: [],
  };
}
export const WalletVolumes = {
  typeUrl: "/stratos.pot.v1.WalletVolumes",
  encode(message: WalletVolumes, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.volumes) {
      SingleWalletVolume.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WalletVolumes {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWalletVolumes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.volumes.push(SingleWalletVolume.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): WalletVolumes {
    const obj = createBaseWalletVolumes();
    if (Array.isArray(object?.volumes))
      obj.volumes = object.volumes.map((e: any) => SingleWalletVolume.fromJSON(e));
    return obj;
  },
  toJSON(message: WalletVolumes): unknown {
    const obj: any = {};
    if (message.volumes) {
      obj.volumes = message.volumes.map((e) => (e ? SingleWalletVolume.toJSON(e) : undefined));
    } else {
      obj.volumes = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<WalletVolumes>, I>>(object: I): WalletVolumes {
    const message = createBaseWalletVolumes();
    message.volumes = object.volumes?.map((e) => SingleWalletVolume.fromPartial(e)) || [];
    return message;
  },
};
function createBaseVolumeReportRecord(): VolumeReportRecord {
  return {
    reporter: "",
    reportReference: "",
    txHash: "",
  };
}
export const VolumeReportRecord = {
  typeUrl: "/stratos.pot.v1.VolumeReportRecord",
  encode(message: VolumeReportRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.reporter !== "") {
      writer.uint32(10).string(message.reporter);
    }
    if (message.reportReference !== "") {
      writer.uint32(18).string(message.reportReference);
    }
    if (message.txHash !== "") {
      writer.uint32(26).string(message.txHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): VolumeReportRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVolumeReportRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reporter = reader.string();
          break;
        case 2:
          message.reportReference = reader.string();
          break;
        case 3:
          message.txHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): VolumeReportRecord {
    const obj = createBaseVolumeReportRecord();
    if (isSet(object.reporter)) obj.reporter = String(object.reporter);
    if (isSet(object.reportReference)) obj.reportReference = String(object.reportReference);
    if (isSet(object.txHash)) obj.txHash = String(object.txHash);
    return obj;
  },
  toJSON(message: VolumeReportRecord): unknown {
    const obj: any = {};
    message.reporter !== undefined && (obj.reporter = message.reporter);
    message.reportReference !== undefined && (obj.reportReference = message.reportReference);
    message.txHash !== undefined && (obj.txHash = message.txHash);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<VolumeReportRecord>, I>>(object: I): VolumeReportRecord {
    const message = createBaseVolumeReportRecord();
    message.reporter = object.reporter ?? "";
    message.reportReference = object.reportReference ?? "";
    message.txHash = object.txHash ?? "";
    return message;
  },
};
function createBaseTotalReward(): TotalReward {
  return {
    miningReward: [],
    trafficReward: [],
  };
}
export const TotalReward = {
  typeUrl: "/stratos.pot.v1.TotalReward",
  encode(message: TotalReward, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.miningReward) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.trafficReward) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TotalReward {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTotalReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.miningReward.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.trafficReward.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TotalReward {
    const obj = createBaseTotalReward();
    if (Array.isArray(object?.miningReward))
      obj.miningReward = object.miningReward.map((e: any) => Coin.fromJSON(e));
    if (Array.isArray(object?.trafficReward))
      obj.trafficReward = object.trafficReward.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: TotalReward): unknown {
    const obj: any = {};
    if (message.miningReward) {
      obj.miningReward = message.miningReward.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.miningReward = [];
    }
    if (message.trafficReward) {
      obj.trafficReward = message.trafficReward.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.trafficReward = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<TotalReward>, I>>(object: I): TotalReward {
    const message = createBaseTotalReward();
    message.miningReward = object.miningReward?.map((e) => Coin.fromPartial(e)) || [];
    message.trafficReward = object.trafficReward?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};
function createBaseMetrics(): Metrics {
  return {
    totalSupply: "",
    totalMiningSupply: "",
    totalMinedTokens: "",
    totalResourceNodesDeposit: "",
    totalBondedDelegation: "",
    totalUnbondedDelegation: "",
    totalUnbondingDelegation: "",
    circulationSupply: "",
    totalMiningReward: "",
    chainMiningReward: "",
    resourceMiningReward: "",
    metaMiningReward: "",
  };
}
export const Metrics = {
  typeUrl: "/stratos.pot.v1.Metrics",
  encode(message: Metrics, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalSupply !== "") {
      writer.uint32(10).string(message.totalSupply);
    }
    if (message.totalMiningSupply !== "") {
      writer.uint32(18).string(message.totalMiningSupply);
    }
    if (message.totalMinedTokens !== "") {
      writer.uint32(26).string(message.totalMinedTokens);
    }
    if (message.totalResourceNodesDeposit !== "") {
      writer.uint32(34).string(message.totalResourceNodesDeposit);
    }
    if (message.totalBondedDelegation !== "") {
      writer.uint32(42).string(message.totalBondedDelegation);
    }
    if (message.totalUnbondedDelegation !== "") {
      writer.uint32(50).string(message.totalUnbondedDelegation);
    }
    if (message.totalUnbondingDelegation !== "") {
      writer.uint32(58).string(message.totalUnbondingDelegation);
    }
    if (message.circulationSupply !== "") {
      writer.uint32(66).string(message.circulationSupply);
    }
    if (message.totalMiningReward !== "") {
      writer.uint32(74).string(message.totalMiningReward);
    }
    if (message.chainMiningReward !== "") {
      writer.uint32(82).string(message.chainMiningReward);
    }
    if (message.resourceMiningReward !== "") {
      writer.uint32(90).string(message.resourceMiningReward);
    }
    if (message.metaMiningReward !== "") {
      writer.uint32(98).string(message.metaMiningReward);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Metrics {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetrics();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalSupply = reader.string();
          break;
        case 2:
          message.totalMiningSupply = reader.string();
          break;
        case 3:
          message.totalMinedTokens = reader.string();
          break;
        case 4:
          message.totalResourceNodesDeposit = reader.string();
          break;
        case 5:
          message.totalBondedDelegation = reader.string();
          break;
        case 6:
          message.totalUnbondedDelegation = reader.string();
          break;
        case 7:
          message.totalUnbondingDelegation = reader.string();
          break;
        case 8:
          message.circulationSupply = reader.string();
          break;
        case 9:
          message.totalMiningReward = reader.string();
          break;
        case 10:
          message.chainMiningReward = reader.string();
          break;
        case 11:
          message.resourceMiningReward = reader.string();
          break;
        case 12:
          message.metaMiningReward = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Metrics {
    const obj = createBaseMetrics();
    if (isSet(object.totalSupply)) obj.totalSupply = String(object.totalSupply);
    if (isSet(object.totalMiningSupply)) obj.totalMiningSupply = String(object.totalMiningSupply);
    if (isSet(object.totalMinedTokens)) obj.totalMinedTokens = String(object.totalMinedTokens);
    if (isSet(object.totalResourceNodesDeposit))
      obj.totalResourceNodesDeposit = String(object.totalResourceNodesDeposit);
    if (isSet(object.totalBondedDelegation)) obj.totalBondedDelegation = String(object.totalBondedDelegation);
    if (isSet(object.totalUnbondedDelegation))
      obj.totalUnbondedDelegation = String(object.totalUnbondedDelegation);
    if (isSet(object.totalUnbondingDelegation))
      obj.totalUnbondingDelegation = String(object.totalUnbondingDelegation);
    if (isSet(object.circulationSupply)) obj.circulationSupply = String(object.circulationSupply);
    if (isSet(object.totalMiningReward)) obj.totalMiningReward = String(object.totalMiningReward);
    if (isSet(object.chainMiningReward)) obj.chainMiningReward = String(object.chainMiningReward);
    if (isSet(object.resourceMiningReward)) obj.resourceMiningReward = String(object.resourceMiningReward);
    if (isSet(object.metaMiningReward)) obj.metaMiningReward = String(object.metaMiningReward);
    return obj;
  },
  toJSON(message: Metrics): unknown {
    const obj: any = {};
    message.totalSupply !== undefined && (obj.totalSupply = message.totalSupply);
    message.totalMiningSupply !== undefined && (obj.totalMiningSupply = message.totalMiningSupply);
    message.totalMinedTokens !== undefined && (obj.totalMinedTokens = message.totalMinedTokens);
    message.totalResourceNodesDeposit !== undefined &&
      (obj.totalResourceNodesDeposit = message.totalResourceNodesDeposit);
    message.totalBondedDelegation !== undefined &&
      (obj.totalBondedDelegation = message.totalBondedDelegation);
    message.totalUnbondedDelegation !== undefined &&
      (obj.totalUnbondedDelegation = message.totalUnbondedDelegation);
    message.totalUnbondingDelegation !== undefined &&
      (obj.totalUnbondingDelegation = message.totalUnbondingDelegation);
    message.circulationSupply !== undefined && (obj.circulationSupply = message.circulationSupply);
    message.totalMiningReward !== undefined && (obj.totalMiningReward = message.totalMiningReward);
    message.chainMiningReward !== undefined && (obj.chainMiningReward = message.chainMiningReward);
    message.resourceMiningReward !== undefined && (obj.resourceMiningReward = message.resourceMiningReward);
    message.metaMiningReward !== undefined && (obj.metaMiningReward = message.metaMiningReward);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Metrics>, I>>(object: I): Metrics {
    const message = createBaseMetrics();
    message.totalSupply = object.totalSupply ?? "";
    message.totalMiningSupply = object.totalMiningSupply ?? "";
    message.totalMinedTokens = object.totalMinedTokens ?? "";
    message.totalResourceNodesDeposit = object.totalResourceNodesDeposit ?? "";
    message.totalBondedDelegation = object.totalBondedDelegation ?? "";
    message.totalUnbondedDelegation = object.totalUnbondedDelegation ?? "";
    message.totalUnbondingDelegation = object.totalUnbondingDelegation ?? "";
    message.circulationSupply = object.circulationSupply ?? "";
    message.totalMiningReward = object.totalMiningReward ?? "";
    message.chainMiningReward = object.chainMiningReward ?? "";
    message.resourceMiningReward = object.resourceMiningReward ?? "";
    message.metaMiningReward = object.metaMiningReward ?? "";
    return message;
  },
};
