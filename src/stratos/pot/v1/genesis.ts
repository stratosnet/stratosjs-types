/* eslint-disable */
import { Params, Reward } from "./pot";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "stratos.pot.v1";
/** GenesisState defines the register module's genesis state. */
export interface GenesisState {
  params: Params;
  totalMinedToken: Coin;
  lastDistributedEpoch: string;
  immatureTotalInfo: ImmatureTotal[];
  matureTotalInfo: MatureTotal[];
  individualRewardInfo: Reward[];
  maturedEpoch: string;
}
export interface ImmatureTotal {
  walletAddress: string;
  value: Coin[];
}
export interface MatureTotal {
  walletAddress: string;
  value: Coin[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    totalMinedToken: Coin.fromPartial({}),
    lastDistributedEpoch: "",
    immatureTotalInfo: [],
    matureTotalInfo: [],
    individualRewardInfo: [],
    maturedEpoch: "",
  };
}
export const GenesisState = {
  typeUrl: "/stratos.pot.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalMinedToken !== undefined) {
      Coin.encode(message.totalMinedToken, writer.uint32(18).fork()).ldelim();
    }
    if (message.lastDistributedEpoch !== "") {
      writer.uint32(26).string(message.lastDistributedEpoch);
    }
    for (const v of message.immatureTotalInfo) {
      ImmatureTotal.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.matureTotalInfo) {
      MatureTotal.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.individualRewardInfo) {
      Reward.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.maturedEpoch !== "") {
      writer.uint32(58).string(message.maturedEpoch);
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
          message.totalMinedToken = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.lastDistributedEpoch = reader.string();
          break;
        case 4:
          message.immatureTotalInfo.push(ImmatureTotal.decode(reader, reader.uint32()));
          break;
        case 5:
          message.matureTotalInfo.push(MatureTotal.decode(reader, reader.uint32()));
          break;
        case 6:
          message.individualRewardInfo.push(Reward.decode(reader, reader.uint32()));
          break;
        case 7:
          message.maturedEpoch = reader.string();
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
    if (isSet(object.totalMinedToken)) obj.totalMinedToken = Coin.fromJSON(object.totalMinedToken);
    if (isSet(object.lastDistributedEpoch)) obj.lastDistributedEpoch = String(object.lastDistributedEpoch);
    if (Array.isArray(object?.immatureTotalInfo))
      obj.immatureTotalInfo = object.immatureTotalInfo.map((e: any) => ImmatureTotal.fromJSON(e));
    if (Array.isArray(object?.matureTotalInfo))
      obj.matureTotalInfo = object.matureTotalInfo.map((e: any) => MatureTotal.fromJSON(e));
    if (Array.isArray(object?.individualRewardInfo))
      obj.individualRewardInfo = object.individualRewardInfo.map((e: any) => Reward.fromJSON(e));
    if (isSet(object.maturedEpoch)) obj.maturedEpoch = String(object.maturedEpoch);
    return obj;
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.totalMinedToken !== undefined &&
      (obj.totalMinedToken = message.totalMinedToken ? Coin.toJSON(message.totalMinedToken) : undefined);
    message.lastDistributedEpoch !== undefined && (obj.lastDistributedEpoch = message.lastDistributedEpoch);
    if (message.immatureTotalInfo) {
      obj.immatureTotalInfo = message.immatureTotalInfo.map((e) => (e ? ImmatureTotal.toJSON(e) : undefined));
    } else {
      obj.immatureTotalInfo = [];
    }
    if (message.matureTotalInfo) {
      obj.matureTotalInfo = message.matureTotalInfo.map((e) => (e ? MatureTotal.toJSON(e) : undefined));
    } else {
      obj.matureTotalInfo = [];
    }
    if (message.individualRewardInfo) {
      obj.individualRewardInfo = message.individualRewardInfo.map((e) => (e ? Reward.toJSON(e) : undefined));
    } else {
      obj.individualRewardInfo = [];
    }
    message.maturedEpoch !== undefined && (obj.maturedEpoch = message.maturedEpoch);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    if (object.totalMinedToken !== undefined && object.totalMinedToken !== null) {
      message.totalMinedToken = Coin.fromPartial(object.totalMinedToken);
    }
    message.lastDistributedEpoch = object.lastDistributedEpoch ?? "";
    message.immatureTotalInfo = object.immatureTotalInfo?.map((e) => ImmatureTotal.fromPartial(e)) || [];
    message.matureTotalInfo = object.matureTotalInfo?.map((e) => MatureTotal.fromPartial(e)) || [];
    message.individualRewardInfo = object.individualRewardInfo?.map((e) => Reward.fromPartial(e)) || [];
    message.maturedEpoch = object.maturedEpoch ?? "";
    return message;
  },
};
function createBaseImmatureTotal(): ImmatureTotal {
  return {
    walletAddress: "",
    value: [],
  };
}
export const ImmatureTotal = {
  typeUrl: "/stratos.pot.v1.ImmatureTotal",
  encode(message: ImmatureTotal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.walletAddress !== "") {
      writer.uint32(10).string(message.walletAddress);
    }
    for (const v of message.value) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ImmatureTotal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseImmatureTotal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.walletAddress = reader.string();
          break;
        case 2:
          message.value.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ImmatureTotal {
    const obj = createBaseImmatureTotal();
    if (isSet(object.walletAddress)) obj.walletAddress = String(object.walletAddress);
    if (Array.isArray(object?.value)) obj.value = object.value.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: ImmatureTotal): unknown {
    const obj: any = {};
    message.walletAddress !== undefined && (obj.walletAddress = message.walletAddress);
    if (message.value) {
      obj.value = message.value.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.value = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ImmatureTotal>, I>>(object: I): ImmatureTotal {
    const message = createBaseImmatureTotal();
    message.walletAddress = object.walletAddress ?? "";
    message.value = object.value?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};
function createBaseMatureTotal(): MatureTotal {
  return {
    walletAddress: "",
    value: [],
  };
}
export const MatureTotal = {
  typeUrl: "/stratos.pot.v1.MatureTotal",
  encode(message: MatureTotal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.walletAddress !== "") {
      writer.uint32(10).string(message.walletAddress);
    }
    for (const v of message.value) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MatureTotal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMatureTotal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.walletAddress = reader.string();
          break;
        case 2:
          message.value.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MatureTotal {
    const obj = createBaseMatureTotal();
    if (isSet(object.walletAddress)) obj.walletAddress = String(object.walletAddress);
    if (Array.isArray(object?.value)) obj.value = object.value.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: MatureTotal): unknown {
    const obj: any = {};
    message.walletAddress !== undefined && (obj.walletAddress = message.walletAddress);
    if (message.value) {
      obj.value = message.value.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.value = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MatureTotal>, I>>(object: I): MatureTotal {
    const message = createBaseMatureTotal();
    message.walletAddress = object.walletAddress ?? "";
    message.value = object.value?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};
