/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface PubliusFactoryInterface extends utils.Interface {
  functions: {
    "createPublication(uint256,address,string,string)": FunctionFragment;
    "getBeacon()": FunctionFragment;
    "getImplementation()": FunctionFragment;
    "getPublicationAddress(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "createPublication"
      | "getBeacon"
      | "getImplementation"
      | "getPublicationAddress"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createPublication",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(functionFragment: "getBeacon", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getImplementation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPublicationAddress",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "createPublication",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getBeacon", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getImplementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPublicationAddress",
    data: BytesLike
  ): Result;

  events: {};
}

export interface PubliusFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PubliusFactoryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    createPublication(
      _id: PromiseOrValue<BigNumberish>,
      _publicationAuthor: PromiseOrValue<string>,
      _publicationName: PromiseOrValue<string>,
      _publicationCoverImage: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getBeacon(overrides?: CallOverrides): Promise<[string]>;

    getImplementation(overrides?: CallOverrides): Promise<[string]>;

    getPublicationAddress(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  createPublication(
    _id: PromiseOrValue<BigNumberish>,
    _publicationAuthor: PromiseOrValue<string>,
    _publicationName: PromiseOrValue<string>,
    _publicationCoverImage: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getBeacon(overrides?: CallOverrides): Promise<string>;

  getImplementation(overrides?: CallOverrides): Promise<string>;

  getPublicationAddress(
    _id: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    createPublication(
      _id: PromiseOrValue<BigNumberish>,
      _publicationAuthor: PromiseOrValue<string>,
      _publicationName: PromiseOrValue<string>,
      _publicationCoverImage: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    getBeacon(overrides?: CallOverrides): Promise<string>;

    getImplementation(overrides?: CallOverrides): Promise<string>;

    getPublicationAddress(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    createPublication(
      _id: PromiseOrValue<BigNumberish>,
      _publicationAuthor: PromiseOrValue<string>,
      _publicationName: PromiseOrValue<string>,
      _publicationCoverImage: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getBeacon(overrides?: CallOverrides): Promise<BigNumber>;

    getImplementation(overrides?: CallOverrides): Promise<BigNumber>;

    getPublicationAddress(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createPublication(
      _id: PromiseOrValue<BigNumberish>,
      _publicationAuthor: PromiseOrValue<string>,
      _publicationName: PromiseOrValue<string>,
      _publicationCoverImage: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getBeacon(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getImplementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPublicationAddress(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}