declare class Tuple<Items extends ReadonlyArray<unknown> = [
]> extends Array<Items[number]> {
	constructor(length: number);
	constructor(...items: Items);
	static get [Symbol.species](): any;
	concat<AdditionalItems extends ReadonlyArray<unknown>>(items: Tuple<AdditionalItems>): Tuple<[
		...Items,
		...AdditionalItems
	]>;
	concat<AdditionalItems extends ReadonlyArray<unknown>>(items: AdditionalItems): Tuple<[
		...Items,
		...AdditionalItems
	]>;
	concat<AdditionalItems extends ReadonlyArray<unknown>>(...items: AdditionalItems): Tuple<[
		...Items,
		...AdditionalItems
	]>;
	prepend<AdditionalItems extends ReadonlyArray<unknown>>(items: Tuple<AdditionalItems>): Tuple<[
		...AdditionalItems,
		...Items
	]>;
	prepend<AdditionalItems extends ReadonlyArray<unknown>>(items: AdditionalItems): Tuple<[
		...AdditionalItems,
		...Items
	]>;
	prepend<AdditionalItems extends ReadonlyArray<unknown>>(...items: AdditionalItems): Tuple<[
		...AdditionalItems,
		...Items
	]>;
}
declare const _NEVER: unique symbol;
declare const baseQuery: unique symbol;
declare const neverResolvedError: Error & {
	message: "Promise never resolved before cacheEntryRemoved.";
};
declare const p2party: {
	store: EnhancedStore<{
		commonState: CommonState;
		keyPair: KeyPair;
		rooms: Room[];
		signalingServer: SignalingState;
		signalingServerApi: CombinedState<{
			connectWebSocket: MutationDefinition<string, BaseQueryFn<WebSocketParams, undefined, unknown>, never, void, "signalingServerApi">;
			disconnectWebSocket: MutationDefinition<void, BaseQueryFn<WebSocketParams, undefined, unknown>, never, void, "signalingServerApi">;
			sendMessage: MutationDefinition<WebSocketMessage, BaseQueryFn<WebSocketParams, undefined, unknown>, never, void, "signalingServerApi">;
			connectWithPeer: MutationDefinition<WebSocketPeerConnectionParams, BaseQueryFn<WebSocketParams, undefined, unknown>, never, void, "signalingServerApi">;
		}, never, "signalingServerApi">;
		webrtcApi: CombinedState<{
			connectWithPeer: MutationDefinition<RTCPeerConnectionParams, BaseQueryFn<RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
			setDescription: MutationDefinition<RTCSetDescriptionParams, BaseQueryFn<RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
			setCandidate: MutationDefinition<RTCSetCandidateParams, BaseQueryFn<RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
			openChannel: MutationDefinition<RTCOpenChannelParams, BaseQueryFn<RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
			sendMessage: MutationDefinition<RTCSendMessageParams, BaseQueryFn<RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
			disconnect: MutationDefinition<RTCDisconnectParams, BaseQueryFn<RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
			disconnectFromRoom: MutationDefinition<RTCDisconnectFromRoomParams, BaseQueryFn<RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
			disconnectFromAllRooms: MutationDefinition<RTCDisconnectFromAllRoomsParams, BaseQueryFn<RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
			disconnectFromPeer: MutationDefinition<RTCDisconnectFromPeerParams, BaseQueryFn<RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
			disconnectFromChannelLabel: MutationDefinition<RTCDisconnectFromChannelLabelParams, BaseQueryFn<RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
			disconnectFromPeerChannelLabel: MutationDefinition<RTCDisconnectFromPeerChannelLabelParams, BaseQueryFn<RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
		}, never, "webrtcApi">;
	}, UnknownAction, Tuple<[
		StoreEnhancer<{
			dispatch: ThunkDispatch<{
				commonState: CommonState;
				keyPair: KeyPair;
				rooms: Room[];
				signalingServer: SignalingState;
				signalingServerApi: CombinedState<{
					connectWebSocket: MutationDefinition<string, BaseQueryFn<WebSocketParams, undefined, unknown>, never, void, "signalingServerApi">;
					disconnectWebSocket: MutationDefinition<void, BaseQueryFn<WebSocketParams, undefined, unknown>, never, void, "signalingServerApi">;
					sendMessage: MutationDefinition<WebSocketMessage, BaseQueryFn<WebSocketParams, undefined, unknown>, never, void, "signalingServerApi">;
					connectWithPeer: MutationDefinition<WebSocketPeerConnectionParams, BaseQueryFn<WebSocketParams, undefined, unknown>, never, void, "signalingServerApi">;
				}, never, "signalingServerApi">;
				webrtcApi: CombinedState<{
					connectWithPeer: MutationDefinition<RTCPeerConnectionParams, BaseQueryFn<RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
					setDescription: MutationDefinition<RTCSetDescriptionParams, BaseQueryFn<RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
					setCandidate: MutationDefinition<RTCSetCandidateParams, BaseQueryFn<RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
					openChannel: MutationDefinition<RTCOpenChannelParams, BaseQueryFn<RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
					sendMessage: MutationDefinition<RTCSendMessageParams, BaseQueryFn<RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
					disconnect: MutationDefinition<RTCDisconnectParams, BaseQueryFn<RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
					disconnectFromRoom: MutationDefinition<RTCDisconnectFromRoomParams, BaseQueryFn<RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
					disconnectFromAllRooms: MutationDefinition<RTCDisconnectFromAllRoomsParams, BaseQueryFn<RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
					disconnectFromPeer: MutationDefinition<RTCDisconnectFromPeerParams, BaseQueryFn<RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
					disconnectFromChannelLabel: MutationDefinition<RTCDisconnectFromChannelLabelParams, BaseQueryFn<RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
					disconnectFromPeerChannelLabel: MutationDefinition<RTCDisconnectFromPeerChannelLabelParams, BaseQueryFn<RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
				}, never, "webrtcApi">;
			}, undefined, UnknownAction>;
		}>,
		StoreEnhancer
	]>>;
	commonStateSelector: (state: State) => CommonState;
	signalingServerSelector: (state: State) => SignalingState;
	roomSelector: (state: State) => Room[];
	keyPairSelector: (state: State) => KeyPair;
	connect: (roomUrl: string, signalingServerUrl?: string, rtcConfig?: RTCConfiguration) => void;
	connectToSignalingServer: (roomUrl: string, signalingServerUrl?: string) => void;
	disconnectFromSignalingServer: () => void;
	disconnectFromRoom: (roomId: string, deleteMessages?: boolean) => void;
	disconnectFromAllRooms: (deleteMessages?: boolean, exceptionRoomIds?: string[]) => void;
	disconnectFromPeer: (peerId: string) => void;
	allowConnectionRelay: (roomId: string, allowed?: boolean) => void;
	onlyAllowConnectionsFromAddressBook: (roomUrl: string, onlyAllow: boolean) => Promise<void>;
	addPeerToAddressBook: (username: string, peerId: string, peerPublicKey: string) => Promise<void>;
	getPeerAddressBookEntry: (peerId?: string, peerPublicKey?: string) => Promise<UsernamedPeer | undefined>;
	getAllPeersInAddressBook: () => Promise<UsernamedPeer[]>;
	getAllPeersInBlacklist: () => Promise<BlacklistedPeer[]>;
	deletePeerFromAddressBook: (username?: string, peerId?: string, peerPublicKey?: string) => Promise<void>;
	blacklistPeer: (peerId: string, peerPublicKey: string) => Promise<void>;
	getPeerIsBlacklisted: (peerId?: string, peerPublicKey?: string) => Promise<boolean>;
	removePeerFromBlacklist: (peerId?: string, peerPublicKey?: string) => Promise<void>;
	getAllExistingRooms: () => Promise<UniqueRoom[]>;
	openChannel: (roomId: string, label: string, withPeers?: {
		peerId: string;
		peerPublicKey: string;
	}[]) => Promise<void>;
	sendMessage: (data: string | File, toChannel: string, roomId: string, minChunks?: number, chunkSize?: number, percentageFilledChunk?: number, metadataSchemaVersion?: number) => void;
	readMessage: (merkleRootHex?: string, hashHex?: string) => Promise<{
		message: string | Blob;
		percentage: number;
		size: number;
		filename: string;
		mimeType: MimeType$1;
		extension: FileExtension;
		category: MessageCategory;
	}>;
	cancelMessage: (channelLabel: string, merkleRoot?: string | Uint8Array, hash?: string | Uint8Array) => Promise<void>;
	deleteMessage: (merkleRoot?: string | Uint8Array, hash?: string | Uint8Array) => Promise<void>;
	purgeIdentity: () => void;
	purgeRoom: (roomUrl: string) => void;
	purge: () => Promise<void>;
	generateRandomRoomUrl: () => Promise<string>;
	MIN_CHUNKS: number;
	MIN_CHUNK_SIZE: number;
	MAX_CHUNK_SIZE: number;
	MIN_PERCENTAGE_FILLED_CHUNK: number;
	MAX_PERCENTAGE_FILLED_CHUNK: number;
};
declare const resultType: unique symbol;
declare const store: EnhancedStore<{
	commonState: CommonState;
	keyPair: KeyPair;
	rooms: Room[];
	signalingServer: SignalingState;
	signalingServerApi: CombinedState<{
		connectWebSocket: MutationDefinition<string, BaseQueryFn<WebSocketParams, undefined, unknown>, never, void, "signalingServerApi">;
		disconnectWebSocket: MutationDefinition<void, BaseQueryFn<WebSocketParams, undefined, unknown>, never, void, "signalingServerApi">;
		sendMessage: MutationDefinition<WebSocketMessage, BaseQueryFn<WebSocketParams, undefined, unknown>, never, void, "signalingServerApi">;
		connectWithPeer: MutationDefinition<WebSocketPeerConnectionParams, BaseQueryFn<WebSocketParams, undefined, unknown>, never, void, "signalingServerApi">;
	}, never, "signalingServerApi">;
	webrtcApi: CombinedState<{
		connectWithPeer: MutationDefinition<RTCPeerConnectionParams, BaseQueryFn<RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
		setDescription: MutationDefinition<RTCSetDescriptionParams, BaseQueryFn<RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
		setCandidate: MutationDefinition<RTCSetCandidateParams, BaseQueryFn<RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
		openChannel: MutationDefinition<RTCOpenChannelParams, BaseQueryFn<RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
		sendMessage: MutationDefinition<RTCSendMessageParams, BaseQueryFn<RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
		disconnect: MutationDefinition<RTCDisconnectParams, BaseQueryFn<RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
		disconnectFromRoom: MutationDefinition<RTCDisconnectFromRoomParams, BaseQueryFn<RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
		disconnectFromAllRooms: MutationDefinition<RTCDisconnectFromAllRoomsParams, BaseQueryFn<RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
		disconnectFromPeer: MutationDefinition<RTCDisconnectFromPeerParams, BaseQueryFn<RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
		disconnectFromChannelLabel: MutationDefinition<RTCDisconnectFromChannelLabelParams, BaseQueryFn<RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
		disconnectFromPeerChannelLabel: MutationDefinition<RTCDisconnectFromPeerChannelLabelParams, BaseQueryFn<RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
	}, never, "webrtcApi">;
}, UnknownAction, Tuple<[
	StoreEnhancer<{
		dispatch: ThunkDispatch<{
			commonState: CommonState;
			keyPair: KeyPair;
			rooms: Room[];
			signalingServer: SignalingState;
			signalingServerApi: CombinedState<{
				connectWebSocket: MutationDefinition<string, BaseQueryFn<WebSocketParams, undefined, unknown>, never, void, "signalingServerApi">;
				disconnectWebSocket: MutationDefinition<void, BaseQueryFn<WebSocketParams, undefined, unknown>, never, void, "signalingServerApi">;
				sendMessage: MutationDefinition<WebSocketMessage, BaseQueryFn<WebSocketParams, undefined, unknown>, never, void, "signalingServerApi">;
				connectWithPeer: MutationDefinition<WebSocketPeerConnectionParams, BaseQueryFn<WebSocketParams, undefined, unknown>, never, void, "signalingServerApi">;
			}, never, "signalingServerApi">;
			webrtcApi: CombinedState<{
				connectWithPeer: MutationDefinition<RTCPeerConnectionParams, BaseQueryFn<RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
				setDescription: MutationDefinition<RTCSetDescriptionParams, BaseQueryFn<RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
				setCandidate: MutationDefinition<RTCSetCandidateParams, BaseQueryFn<RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
				openChannel: MutationDefinition<RTCOpenChannelParams, BaseQueryFn<RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
				sendMessage: MutationDefinition<RTCSendMessageParams, BaseQueryFn<RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
				disconnect: MutationDefinition<RTCDisconnectParams, BaseQueryFn<RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
				disconnectFromRoom: MutationDefinition<RTCDisconnectFromRoomParams, BaseQueryFn<RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
				disconnectFromAllRooms: MutationDefinition<RTCDisconnectFromAllRoomsParams, BaseQueryFn<RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
				disconnectFromPeer: MutationDefinition<RTCDisconnectFromPeerParams, BaseQueryFn<RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
				disconnectFromChannelLabel: MutationDefinition<RTCDisconnectFromChannelLabelParams, BaseQueryFn<RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
				disconnectFromPeerChannelLabel: MutationDefinition<RTCDisconnectFromPeerChannelLabelParams, BaseQueryFn<RTCPeerConnectionParamsExtend, void, unknown>, never, void, "webrtcApi">;
			}, never, "webrtcApi">;
		}, undefined, UnknownAction>;
	}>,
	StoreEnhancer
]>>;
declare enum DefinitionType {
	query = "query",
	mutation = "mutation",
	infinitequery = "infinitequery"
}
declare enum QueryStatus {
	uninitialized = "uninitialized",
	pending = "pending",
	fulfilled = "fulfilled",
	rejected = "rejected"
}
export declare enum MessageCategory {
	Text = "Text",
	Image = "Image",
	Document = "Document",
	Audio = "Audio",
	Video = "Video",
	Compressed = "Compressed",
	Code = "Code",
	Ebook = "Ebook",
	Font = "Font",
	Executable = "Executable",
	Unknown = "Unknown"
}
export declare enum MessageType {
	Text = 1,
	ImagePNG = 2,
	ImageJPEG = 3,
	ImageJPG = 4,
	ImageGIF = 5,
	ImageBMP = 6,
	ImageTIFF = 7,
	ImageSVG = 8,
	ImageWEBP = 9,
	ImageHEIC = 10,
	DocumentPDF = 11,
	DocumentDOC = 12,
	DocumentDOCX = 13,
	DocumentXLS = 14,
	DocumentXLSX = 15,
	DocumentPPT = 16,
	DocumentPPTX = 17,
	DocumentTXT = 18,
	DocumentRTF = 19,
	DocumentODT = 20,
	AudioMP3 = 21,
	AudioWAV = 22,
	AudioAAC = 23,
	AudioFLAC = 24,
	AudioOGG = 25,
	AudioM4A = 26,
	VideoMP4 = 27,
	VideoAVI = 28,
	VideoMKV = 29,
	VideoMOV = 30,
	VideoWMV = 31,
	VideoFLV = 32,
	VideoWEBM = 33,
	CompressedZIP = 34,
	CompressedRAR = 35,
	Compressed7Z = 36,
	CompressedTAR = 37,
	CompressedGZ = 38,
	CodeHTML = 39,
	CodeCSS = 40,
	CodeJS = 41,
	CodeJSX = 42,
	CodeTS = 43,
	CodeTSX = 44,
	CodeJSON = 45,
	CodeXML = 46,
	CodePY = 47,
	CodeJAVA = 48,
	CodeC = 49,
	CodeCPP = 50,
	CodeCS = 51,
	CodeRB = 52,
	CodePHP = 53,
	CodeSQL = 54,
	EbookEPUB = 55,
	EbookMOBI = 56,
	EbookAZW = 57,
	FontTTF = 58,
	FontOTF = 59,
	ImageICO = 60,
	ExecutableEXE = 61,
	ExecutableDMG = 62,
	ExecutableAPK = 63,
	Unknown = 64
}
export interface BaseQueryApi {
	signal: AbortSignal;
	abort: (reason?: string) => void;
	dispatch: ThunkDispatch<any, any, any>;
	getState: () => unknown;
	extra: unknown;
	endpoint: string;
	type: "query" | "mutation";
	/**
	 * Only available for queries: indicates if a query has been forced,
	 * i.e. it would have been fetched even if there would already be a cache entry
	 * (this does not mean that there is already a cache entry though!)
	 *
	 * This can be used to for example add a `Cache-Control: no-cache` header for
	 * invalidated queries.
	 */
	forced?: boolean;
	/**
	 * Only available for queries: the cache key that was used to store the query result
	 */
	queryCacheKey?: string;
}
export interface BlacklistedPeer extends Peer {
	dateAdded: number;
}
export interface Channel {
	label: string;
	peerIds: string[];
}
export interface ChannelData {
	label: string;
	peerId: string;
}
export interface CommonState {
	currentRoomUrl: string;
}
/**
 * A *dispatching function* (or simply *dispatch function*) is a function that
 * accepts an action or an async action; it then may or may not dispatch one
 * or more actions to the store.
 *
 * We must distinguish between dispatching functions in general and the base
 * `dispatch` function provided by the store instance without any middleware.
 *
 * The base dispatch function *always* synchronously sends an action to the
 * store's reducer, along with the previous state returned by the store, to
 * calculate a new state. It expects actions to be plain objects ready to be
 * consumed by the reducer.
 *
 * Middleware wraps the base dispatch function. It allows the dispatch
 * function to handle async actions in addition to actions. Middleware may
 * transform, delay, ignore, or otherwise interpret actions or async actions
 * before passing them to the next middleware.
 *
 * @template A The type of things (actions or otherwise) which may be
 *   dispatched.
 */
export interface Dispatch<A extends Action = UnknownAction> {
	<T extends A>(action: T, ...extraArgs: any[]): T;
}
export interface IRTCDataChannel extends RTCDataChannel {
	withPeerId: string;
	roomIds: string[];
}
export interface IRTCMessage {
	id: string;
	message: string;
	fromPeerId: string;
	toPeerId: string;
	channelLabel: string;
	timestamp: Date;
}
export interface IRTCPeerConnection extends RTCPeerConnection {
	withPeerId: string;
	withPeerPublicKey: string;
	roomIds: string[];
	iceCandidates: RTCIceCandidate[];
}
export interface InfiniteQueryExtraOptions<TagTypes extends string, ResultType, QueryArg, PageParam, BaseQuery extends BaseQueryFn, ReducerPath extends string = string> extends CacheLifecycleInfiniteQueryExtraOptions<InfiniteData<ResultType, PageParam>, QueryArg, BaseQuery, ReducerPath>, QueryLifecycleInfiniteQueryExtraOptions<InfiniteData<ResultType, PageParam>, QueryArg, BaseQuery, ReducerPath>, CacheCollectionQueryExtraOptions {
	type: DefinitionType.infinitequery;
	providesTags?: ResultDescription<TagTypes, InfiniteData<ResultType, PageParam>, QueryArg, BaseQueryError<BaseQuery>, BaseQueryMeta<BaseQuery>>;
	/**
	 * Not to be used. A query should not invalidate tags in the cache.
	 */
	invalidatesTags?: never;
	/**
	 * Required options to configure the infinite query behavior.
	 * `initialPageParam` and `getNextPageParam` are required, to
	 * ensure the infinite query can properly fetch the next page of data.
	 * `initialPageParam` may be specified when using the
	 * endpoint, to override the default value.
	 * `maxPages` and `getPreviousPageParam` are both optional.
	 *
	 * @example
	 *
	 * ```ts
	 * // codeblock-meta title="infiniteQueryOptions example"
	 * import { createApi, fetchBaseQuery, defaultSerializeQueryArgs } from '@reduxjs/toolkit/query/react'
	 *
	 * type Pokemon = {
	 *   id: string
	 *   name: string
	 * }
	 *
	 * const pokemonApi = createApi({
	 *   baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
	 *   endpoints: (build) => ({
	 *     getInfinitePokemonWithMax: build.infiniteQuery<Pokemon[], string, number>({
	 *       infiniteQueryOptions: {
	 *         initialPageParam: 0,
	 *         maxPages: 3,
	 *         getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) =>
	 *           lastPageParam + 1,
	 *         getPreviousPageParam: (
	 *           firstPage,
	 *           allPages,
	 *           firstPageParam,
	 *           allPageParams,
	 *         ) => {
	 *           return firstPageParam > 0 ? firstPageParam - 1 : undefined
	 *         },
	 *       },
	 *       query({pageParam}) {
	 *         return `https://example.com/listItems?page=${pageParam}`
	 *       },
	 *     }),
	 *   }),
	 * })
	 
	 * ```
	 */
	infiniteQueryOptions: InfiniteQueryConfigOptions<ResultType, PageParam>;
	/**
	 * Can be provided to return a custom cache key value based on the query arguments.
	 *
	 * This is primarily intended for cases where a non-serializable value is passed as part of the query arg object and should be excluded from the cache key.  It may also be used for cases where an endpoint should only have a single cache entry, such as an infinite loading / pagination implementation.
	 *
	 * Unlike the `createApi` version which can _only_ return a string, this per-endpoint option can also return an an object, number, or boolean.  If it returns a string, that value will be used as the cache key directly.  If it returns an object / number / boolean, that value will be passed to the built-in `defaultSerializeQueryArgs`.  This simplifies the use case of stripping out args you don't want included in the cache key.
	 *
	 *
	 * @example
	 *
	 * ```ts
	 * // codeblock-meta title="serializeQueryArgs : exclude value"
	 *
	 * import { createApi, fetchBaseQuery, defaultSerializeQueryArgs } from '@reduxjs/toolkit/query/react'
	 * interface Post {
	 *   id: number
	 *   name: string
	 * }
	 *
	 * interface MyApiClient {
	 *   fetchPost: (id: string) => Promise<Post>
	 * }
	 *
	 * createApi({
	 *  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
	 *  endpoints: (build) => ({
	 *    // Example: an endpoint with an API client passed in as an argument,
	 *    // but only the item ID should be used as the cache key
	 *    getPost: build.query<Post, { id: string; client: MyApiClient }>({
	 *      queryFn: async ({ id, client }) => {
	 *        const post = await client.fetchPost(id)
	 *        return { data: post }
	 *      },
	 *      // highlight-start
	 *      serializeQueryArgs: ({ queryArgs, endpointDefinition, endpointName }) => {
	 *        const { id } = queryArgs
	 *        // This can return a string, an object, a number, or a boolean.
	 *        // If it returns an object, number or boolean, that value
	 *        // will be serialized automatically via `defaultSerializeQueryArgs`
	 *        return { id } // omit `client` from the cache key
	 *
	 *        // Alternately, you can use `defaultSerializeQueryArgs` yourself:
	 *        // return defaultSerializeQueryArgs({
	 *        //   endpointName,
	 *        //   queryArgs: { id },
	 *        //   endpointDefinition
	 *        // })
	 *        // Or  create and return a string yourself:
	 *        // return `getPost(${id})`
	 *      },
	 *      // highlight-end
	 *    }),
	 *  }),
	 *})
	 * ```
	 */
	serializeQueryArgs?: SerializeQueryArgs<QueryArg, string | number | boolean | Record<any, any>>;
	/**
	 * All of these are `undefined` at runtime, purely to be used in TypeScript declarations!
	 */
	Types?: InfiniteQueryTypes<QueryArg, PageParam, BaseQuery, TagTypes, ResultType, ReducerPath>;
}
export interface KeyPair {
	peerId: string;
	challengeId: string;
	publicKey: string;
	secretKey: string;
	challenge: string;
	signature: string;
}
export interface Message {
	merkleRootHex: string;
	sha512Hex: string;
	fromPeerId: string;
	filename: string;
	messageType: MessageType;
	savedSize: number;
	totalSize: number;
	chunksCreated: number;
	totalChunks: number;
	channelLabel: string;
	timestamp: number;
}
export interface MessageData extends IRTCMessage {
	channel: string;
}
/**
 * @public
 */
export interface MutationExtraOptions<TagTypes extends string, ResultType, QueryArg, BaseQuery extends BaseQueryFn, ReducerPath extends string = string> extends CacheLifecycleMutationExtraOptions<ResultType, QueryArg, BaseQuery, ReducerPath>, QueryLifecycleMutationExtraOptions<ResultType, QueryArg, BaseQuery, ReducerPath> {
	type: DefinitionType.mutation;
	/**
	 * Used by `mutation` endpoints. Determines which cached data should be either re-fetched or removed from the cache.
	 * Expects the same shapes as `providesTags`.
	 *
	 * @example
	 *
	 * ```ts
	 * // codeblock-meta title="invalidatesTags example"
	 * import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
	 * interface Post {
	 *   id: number
	 *   name: string
	 * }
	 * type PostsResponse = Post[]
	 *
	 * const api = createApi({
	 *   baseQuery: fetchBaseQuery({ baseUrl: '/' }),
	 *   tagTypes: ['Posts'],
	 *   endpoints: (build) => ({
	 *     getPosts: build.query<PostsResponse, void>({
	 *       query: () => 'posts',
	 *       providesTags: (result) =>
	 *         result
	 *           ? [
	 *               ...result.map(({ id }) => ({ type: 'Posts' as const, id })),
	 *               { type: 'Posts', id: 'LIST' },
	 *             ]
	 *           : [{ type: 'Posts', id: 'LIST' }],
	 *     }),
	 *     addPost: build.mutation<Post, Partial<Post>>({
	 *       query(body) {
	 *         return {
	 *           url: `posts`,
	 *           method: 'POST',
	 *           body,
	 *         }
	 *       },
	 *       // highlight-start
	 *       invalidatesTags: [{ type: 'Posts', id: 'LIST' }],
	 *       // highlight-end
	 *     }),
	 *   })
	 * })
	 * ```
	 */
	invalidatesTags?: ResultDescription<TagTypes, ResultType, QueryArg, BaseQueryError<BaseQuery>, BaseQueryMeta<BaseQuery>>;
	/**
	 * Not to be used. A mutation should not provide tags to the cache.
	 */
	providesTags?: never;
	/**
	 * All of these are `undefined` at runtime, purely to be used in TypeScript declarations!
	 */
	Types?: MutationTypes<QueryArg, BaseQuery, TagTypes, ResultType, ReducerPath>;
}
export interface Patch {
	op: "replace" | "remove" | "add";
	path: (string | number)[];
	value?: any;
}
export interface Peer {
	peerId: string;
	peerPublicKey: string;
}
export interface PeerData {
	peerId: string;
	peerPublicKey: string;
}
export interface QueryBaseLifecycleApi<QueryArg, BaseQuery extends BaseQueryFn, ResultType, ReducerPath extends string = string> extends LifecycleApi<ReducerPath> {
	/**
	 * Gets the current value of this cache entry.
	 */
	getCacheEntry(): QueryResultSelectorResult<{
		type: DefinitionType.query;
	} & BaseEndpointDefinition<QueryArg, BaseQuery, ResultType>>;
	/**
	 * Updates the current cache entry value.
	 * For documentation see `api.util.updateQueryData`.
	 */
	updateCachedData(updateRecipe: Recipe<ResultType>): PatchCollection;
}
export interface QueryCacheLifecycleApi<QueryArg, BaseQuery extends BaseQueryFn, ResultType, ReducerPath extends string = string> extends QueryBaseLifecycleApi<QueryArg, BaseQuery, ResultType, ReducerPath>, CacheLifecyclePromises<ResultType, BaseQueryMeta<BaseQuery>> {
}
/**
 * @public
 */
export interface QueryExtraOptions<TagTypes extends string, ResultType, QueryArg, BaseQuery extends BaseQueryFn, ReducerPath extends string = string> extends CacheLifecycleQueryExtraOptions<ResultType, QueryArg, BaseQuery, ReducerPath>, QueryLifecycleQueryExtraOptions<ResultType, QueryArg, BaseQuery, ReducerPath>, CacheCollectionQueryExtraOptions {
	type: DefinitionType.query;
	/**
	 * Used by `query` endpoints. Determines which 'tag' is attached to the cached data returned by the query.
	 * Expects an array of tag type strings, an array of objects of tag types with ids, or a function that returns such an array.
	 * 1.  `['Post']` - equivalent to `2`
	 * 2.  `[{ type: 'Post' }]` - equivalent to `1`
	 * 3.  `[{ type: 'Post', id: 1 }]`
	 * 4.  `(result, error, arg) => ['Post']` - equivalent to `5`
	 * 5.  `(result, error, arg) => [{ type: 'Post' }]` - equivalent to `4`
	 * 6.  `(result, error, arg) => [{ type: 'Post', id: 1 }]`
	 *
	 * @example
	 *
	 * ```ts
	 * // codeblock-meta title="providesTags example"
	 *
	 * import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
	 * interface Post {
	 *   id: number
	 *   name: string
	 * }
	 * type PostsResponse = Post[]
	 *
	 * const api = createApi({
	 *   baseQuery: fetchBaseQuery({ baseUrl: '/' }),
	 *   tagTypes: ['Posts'],
	 *   endpoints: (build) => ({
	 *     getPosts: build.query<PostsResponse, void>({
	 *       query: () => 'posts',
	 *       // highlight-start
	 *       providesTags: (result) =>
	 *         result
	 *           ? [
	 *               ...result.map(({ id }) => ({ type: 'Posts' as const, id })),
	 *               { type: 'Posts', id: 'LIST' },
	 *             ]
	 *           : [{ type: 'Posts', id: 'LIST' }],
	 *       // highlight-end
	 *     })
	 *   })
	 * })
	 * ```
	 */
	providesTags?: ResultDescription<TagTypes, ResultType, QueryArg, BaseQueryError<BaseQuery>, BaseQueryMeta<BaseQuery>>;
	/**
	 * Not to be used. A query should not invalidate tags in the cache.
	 */
	invalidatesTags?: never;
	/**
	 * Can be provided to return a custom cache key value based on the query arguments.
	 *
	 * This is primarily intended for cases where a non-serializable value is passed as part of the query arg object and should be excluded from the cache key.  It may also be used for cases where an endpoint should only have a single cache entry, such as an infinite loading / pagination implementation.
	 *
	 * Unlike the `createApi` version which can _only_ return a string, this per-endpoint option can also return an an object, number, or boolean.  If it returns a string, that value will be used as the cache key directly.  If it returns an object / number / boolean, that value will be passed to the built-in `defaultSerializeQueryArgs`.  This simplifies the use case of stripping out args you don't want included in the cache key.
	 *
	 *
	 * @example
	 *
	 * ```ts
	 * // codeblock-meta title="serializeQueryArgs : exclude value"
	 *
	 * import { createApi, fetchBaseQuery, defaultSerializeQueryArgs } from '@reduxjs/toolkit/query/react'
	 * interface Post {
	 *   id: number
	 *   name: string
	 * }
	 *
	 * interface MyApiClient {
	 *   fetchPost: (id: string) => Promise<Post>
	 * }
	 *
	 * createApi({
	 *  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
	 *  endpoints: (build) => ({
	 *    // Example: an endpoint with an API client passed in as an argument,
	 *    // but only the item ID should be used as the cache key
	 *    getPost: build.query<Post, { id: string; client: MyApiClient }>({
	 *      queryFn: async ({ id, client }) => {
	 *        const post = await client.fetchPost(id)
	 *        return { data: post }
	 *      },
	 *      // highlight-start
	 *      serializeQueryArgs: ({ queryArgs, endpointDefinition, endpointName }) => {
	 *        const { id } = queryArgs
	 *        // This can return a string, an object, a number, or a boolean.
	 *        // If it returns an object, number or boolean, that value
	 *        // will be serialized automatically via `defaultSerializeQueryArgs`
	 *        return { id } // omit `client` from the cache key
	 *
	 *        // Alternately, you can use `defaultSerializeQueryArgs` yourself:
	 *        // return defaultSerializeQueryArgs({
	 *        //   endpointName,
	 *        //   queryArgs: { id },
	 *        //   endpointDefinition
	 *        // })
	 *        // Or  create and return a string yourself:
	 *        // return `getPost(${id})`
	 *      },
	 *      // highlight-end
	 *    }),
	 *  }),
	 *})
	 * ```
	 */
	serializeQueryArgs?: SerializeQueryArgs<QueryArg, string | number | boolean | Record<any, any>>;
	/**
	 * Can be provided to merge an incoming response value into the current cache data.
	 * If supplied, no automatic structural sharing will be applied - it's up to
	 * you to update the cache appropriately.
	 *
	 * Since RTKQ normally replaces cache entries with the new response, you will usually
	 * need to use this with the `serializeQueryArgs` or `forceRefetch` options to keep
	 * an existing cache entry so that it can be updated.
	 *
	 * Since this is wrapped with Immer, you may either mutate the `currentCacheValue` directly,
	 * or return a new value, but _not_ both at once.
	 *
	 * Will only be called if the existing `currentCacheData` is _not_ `undefined` - on first response,
	 * the cache entry will just save the response data directly.
	 *
	 * Useful if you don't want a new request to completely override the current cache value,
	 * maybe because you have manually updated it from another source and don't want those
	 * updates to get lost.
	 *
	 *
	 * @example
	 *
	 * ```ts
	 * // codeblock-meta title="merge: pagination"
	 *
	 * import { createApi, fetchBaseQuery, defaultSerializeQueryArgs } from '@reduxjs/toolkit/query/react'
	 * interface Post {
	 *   id: number
	 *   name: string
	 * }
	 *
	 * createApi({
	 *  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
	 *  endpoints: (build) => ({
	 *    listItems: build.query<string[], number>({
	 *      query: (pageNumber) => `/listItems?page=${pageNumber}`,
	 *     // Only have one cache entry because the arg always maps to one string
	 *     serializeQueryArgs: ({ endpointName }) => {
	 *       return endpointName
	 *      },
	 *      // Always merge incoming data to the cache entry
	 *      merge: (currentCache, newItems) => {
	 *        currentCache.push(...newItems)
	 *      },
	 *      // Refetch when the page arg changes
	 *      forceRefetch({ currentArg, previousArg }) {
	 *        return currentArg !== previousArg
	 *      },
	 *    }),
	 *  }),
	 *})
	 * ```
	 */
	merge?(currentCacheData: ResultType, responseData: ResultType, otherArgs: {
		arg: QueryArg;
		baseQueryMeta: BaseQueryMeta<BaseQuery>;
		requestId: string;
		fulfilledTimeStamp: number;
	}): ResultType | void;
	/**
	 * Check to see if the endpoint should force a refetch in cases where it normally wouldn't.
	 * This is primarily useful for "infinite scroll" / pagination use cases where
	 * RTKQ is keeping a single cache entry that is added to over time, in combination
	 * with `serializeQueryArgs` returning a fixed cache key and a `merge` callback
	 * set to add incoming data to the cache entry each time.
	 *
	 * @example
	 *
	 * ```ts
	 * // codeblock-meta title="forceRefresh: pagination"
	 *
	 * import { createApi, fetchBaseQuery, defaultSerializeQueryArgs } from '@reduxjs/toolkit/query/react'
	 * interface Post {
	 *   id: number
	 *   name: string
	 * }
	 *
	 * createApi({
	 *  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
	 *  endpoints: (build) => ({
	 *    listItems: build.query<string[], number>({
	 *      query: (pageNumber) => `/listItems?page=${pageNumber}`,
	 *     // Only have one cache entry because the arg always maps to one string
	 *     serializeQueryArgs: ({ endpointName }) => {
	 *       return endpointName
	 *      },
	 *      // Always merge incoming data to the cache entry
	 *      merge: (currentCache, newItems) => {
	 *        currentCache.push(...newItems)
	 *      },
	 *      // Refetch when the page arg changes
	 *      forceRefetch({ currentArg, previousArg }) {
	 *        return currentArg !== previousArg
	 *      },
	 *    }),
	 *  }),
	 *})
	 * ```
	 */
	forceRefetch?(params: {
		currentArg: QueryArg | undefined;
		previousArg: QueryArg | undefined;
		state: RootState<any, any, string>;
		endpointState?: QuerySubState<any>;
	}): boolean;
	/**
	 * All of these are `undefined` at runtime, purely to be used in TypeScript declarations!
	 */
	Types?: QueryTypes<QueryArg, BaseQuery, TagTypes, ResultType, ReducerPath>;
}
export interface QueryLifecycleApi<QueryArg, BaseQuery extends BaseQueryFn, ResultType, ReducerPath extends string = string> extends QueryBaseLifecycleApi<QueryArg, BaseQuery, ResultType, ReducerPath>, QueryLifecyclePromises<ResultType, BaseQuery> {
}
export interface RTCDisconnectFromAllRoomsParams {
	deleteMessages?: boolean;
	exceptionRoomIds?: string[];
}
export interface RTCDisconnectFromChannelLabelParams {
	label: string;
	alsoDeleteData?: boolean;
}
export interface RTCDisconnectFromPeerChannelLabelParams {
	peerId: string;
	label: string;
}
export interface RTCDisconnectFromPeerParams {
	peerId: string;
	alsoDeleteData?: boolean;
}
export interface RTCDisconnectFromRoomParams {
	roomId: string;
	deleteMessages?: boolean;
}
export interface RTCDisconnectParams {
	alsoDeleteDB: boolean;
}
export interface RTCOpenChannelParams {
	roomId: string;
	channel: string | RTCDataChannel;
	withPeers?: {
		peerId: string;
		peerPublicKey: string;
	}[];
}
export interface RTCPeerConnectionParams {
	peerId: string;
	peerPublicKey: string;
	roomId: string;
	initiator?: boolean;
	rtcConfig?: RTCConfiguration;
}
export interface RTCPeerConnectionParamsExtend extends RTCPeerConnectionParams {
	peerConnections: IRTCPeerConnection[];
	dataChannels: IRTCDataChannel[];
	decryptionWasmMemory: WebAssembly.Memory;
	merkleWasmMemory: WebAssembly.Memory;
}
export interface RTCSendMessageParams {
	data: string | File;
	label: string;
	roomId: string;
	minChunks?: number;
	chunkSize?: number;
	percentageFilledChunk?: number;
	metadataSchemaVersion?: number;
}
export interface RTCSetCandidateParams {
	peerId: string;
	candidate: RTCIceCandidate;
}
export interface RTCSetDescriptionParams {
	peerId: string;
	peerPublicKey: string;
	roomId: string;
	description: RTCSessionDescription;
	rtcConfig?: RTCConfiguration;
}
export interface Room extends SetRoomArgs {
	connectingToPeers: boolean;
	connectedToPeers: boolean;
	canBeConnectionRelay: boolean;
	onlyConnectWithKnownAddresses: boolean;
	rtcConfig: RTCConfiguration;
	peers: Peer[];
	channels: Channel[];
	messages: Message[];
}
export interface RoomData {
	roomId: string;
	peers: PeerData[];
	channels: ChannelData[];
	messages: MessageData[];
}
/**
 * @public
 */
export interface SerializedError {
	name?: string;
	message?: string;
	stack?: string;
	code?: string;
}
export interface SetRoomArgs {
	url: string;
	id: string;
	canBeConnectionRelay?: boolean;
	onlyConnectWithKnownPeers?: boolean;
	rtcConfig?: RTCConfiguration;
}
export interface SignalingState {
	isEstablishingConnection: boolean;
	isConnected: boolean;
	serverUrl: string;
}
/**
 * A store is an object that holds the application's state tree.
 * There should only be a single store in a Redux app, as the composition
 * happens on the reducer level.
 *
 * @template S The type of state held by this store.
 * @template A the type of actions which may be dispatched by this store.
 * @template StateExt any extension to state from store enhancers
 */
export interface Store<S = any, A extends Action = UnknownAction, StateExt extends unknown = unknown> {
	/**
	 * Dispatches an action. It is the only way to trigger a state change.
	 *
	 * The `reducer` function, used to create the store, will be called with the
	 * current state tree and the given `action`. Its return value will be
	 * considered the **next** state of the tree, and the change listeners will
	 * be notified.
	 *
	 * The base implementation only supports plain object actions. If you want
	 * to dispatch a Promise, an Observable, a thunk, or something else, you
	 * need to wrap your store creating function into the corresponding
	 * middleware. For example, see the documentation for the `redux-thunk`
	 * package. Even the middleware will eventually dispatch plain object
	 * actions using this method.
	 *
	 * @param action A plain object representing “what changed”. It is a good
	 *   idea to keep actions serializable so you can record and replay user
	 *   sessions, or use the time travelling `redux-devtools`. An action must
	 *   have a `type` property which may not be `undefined`. It is a good idea
	 *   to use string constants for action types.
	 *
	 * @returns For convenience, the same action object you dispatched.
	 *
	 * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	 * return something else (for example, a Promise you can await).
	 */
	dispatch: Dispatch<A>;
	/**
	 * Reads the state tree managed by the store.
	 *
	 * @returns The current state tree of your application.
	 */
	getState(): S & StateExt;
	/**
	 * Adds a change listener. It will be called any time an action is
	 * dispatched, and some part of the state tree may potentially have changed.
	 * You may then call `getState()` to read the current state tree inside the
	 * callback.
	 *
	 * You may call `dispatch()` from a change listener, with the following
	 * caveats:
	 *
	 * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	 * If you subscribe or unsubscribe while the listeners are being invoked,
	 * this will not have any effect on the `dispatch()` that is currently in
	 * progress. However, the next `dispatch()` call, whether nested or not,
	 * will use a more recent snapshot of the subscription list.
	 *
	 * 2. The listener should not expect to see all states changes, as the state
	 * might have been updated multiple times during a nested `dispatch()` before
	 * the listener is called. It is, however, guaranteed that all subscribers
	 * registered before the `dispatch()` started will be called with the latest
	 * state by the time it exits.
	 *
	 * @param listener A callback to be invoked on every dispatch.
	 * @returns A function to remove this change listener.
	 */
	subscribe(listener: ListenerCallback): Unsubscribe;
	/**
	 * Replaces the reducer currently used by the store to calculate the state.
	 *
	 * You might need this if your app implements code splitting and you want to
	 * load some of the reducers dynamically. You might also need this if you
	 * implement a hot reloading mechanism for Redux.
	 *
	 * @param nextReducer The reducer for the store to use instead.
	 */
	replaceReducer(nextReducer: Reducer<S, A>): void;
	/**
	 * Interoperability point for observable/reactive libraries.
	 * @returns {observable} A minimal observable of state changes.
	 * For more information, see the observable proposal:
	 * https://github.com/tc39/proposal-observable
	 */
	[Symbol.observable](): Observable<S & StateExt>;
}
/**
 * The dispatch method as modified by React-Thunk; overloaded so that you can
 * dispatch:
 *   - standard (object) actions: `dispatch()` returns the action itself
 *   - thunk actions: `dispatch()` returns the thunk's return value
 *
 * @template State The redux state
 * @template ExtraThunkArg The extra argument passed to the inner function of
 * thunks (if specified when setting up the Thunk middleware)
 * @template BasicAction The (non-thunk) actions that can be dispatched.
 */
export interface ThunkDispatch<State, ExtraThunkArg, BasicAction extends Action> {
	/** Accepts a thunk function, runs it, and returns whatever the thunk itself returns */
	<ReturnType>(thunkAction: ThunkAction<ReturnType, State, ExtraThunkArg, BasicAction>): ReturnType;
	/** Accepts a standard action object, and returns that action object */
	<Action extends BasicAction>(action: Action): Action;
	/** A union of the other two overloads for TS inference purposes */
	<ReturnType, Action extends BasicAction>(action: Action | ThunkAction<ReturnType, State, ExtraThunkArg, BasicAction>): Action | ReturnType;
}
export interface UniqueRoom {
	roomUrl: string;
	roomId: string;
	messageCount: number;
	lastMessageMerkleRoot: string;
	createdAt: number;
	updatedAt: number;
}
/**
 * An Action type which accepts any other properties.
 * This is mainly for the use of the `Reducer` type.
 * This is not part of `Action` itself to prevent types that extend `Action` from
 * having an index signature.
 */
export interface UnknownAction extends Action {
	[extraProps: string]: unknown;
}
/**
 * Function to remove listener added by `Store.subscribe()`.
 */
export interface Unsubscribe {
	(): void;
}
export interface UsernamedPeer extends Peer {
	username: string;
}
export interface WebSocketMessage {
	content: WebSocketMessagePongResponse | WebSocketMessageCandidateSend | WebSocketMessageDescriptionSend | WebSocketMessageChallengeResponse | WebSocketMessageRoomIdRequest | WebSocketMessagePeersRequest | WebSocketMessageConnectionResponse | WebSocketMessageMessageSendRequest;
}
export interface WebSocketMessageCandidateReceive {
	type: "candidate";
	candidate: RTCIceCandidate;
	fromPeerId: string;
}
export interface WebSocketMessageCandidateSend {
	type: "candidate";
	candidate: RTCIceCandidate;
	fromPeerId: string;
	toPeerId: string;
	roomId: string;
}
export interface WebSocketMessageChallengeRequest {
	type: "peerId";
	peerId: string;
	challenge: string;
	signature?: string;
	challengeId?: string;
	username?: string;
	credential?: string;
	message: string;
}
export interface WebSocketMessageChallengeResponse {
	type: "challenge";
	challenge: string;
	signature: string;
	fromPeerId: string;
}
export interface WebSocketMessageConnectionResponse {
	type: "peerConnection";
	roomId: string;
	fromPeerId: string;
	toPeerId: string;
}
export interface WebSocketMessageDescriptionReceive {
	type: "description";
	description: RTCSessionDescription;
	fromPeerId: string;
	fromPeerPublicKey: string;
	roomId: string;
}
export interface WebSocketMessageDescriptionSend {
	type: "description";
	description: RTCSessionDescription;
	fromPeerId: string;
	fromPeerPublicKey: string;
	toPeerId: string;
	roomId: string;
}
export interface WebSocketMessageError {
	type: "error";
	fromAction: "ping" | "sendCandidate" | "receiveCandidate" | "sendDescription" | "receiveDescription" | "requestRoomId" | "requestPeerId" | "sendChallengeResponse";
	error: Error | {
		message: string;
		[key: string]: unknown;
	};
}
export interface WebSocketMessageMessageSendRequest {
	type: "message";
	message: string;
	roomId: string;
	fromPeerId: string;
	toPeerId: string;
	label: string;
}
export interface WebSocketMessagePeersRequest {
	type: "peers";
	fromPeerId: string;
	roomId: string;
}
export interface WebSocketMessagePongResponse {
	type: "pong";
	fromPeerId: string;
}
export interface WebSocketMessageRoomIdRequest {
	type: "room";
	fromPeerId: string;
	roomUrl: string;
}
export interface WebSocketMessageRoomIdResponse {
	type: "roomId";
	roomId: string;
	roomUrl: string;
}
export interface WebSocketParams {
	signalingServerUrl: string;
}
export interface WebSocketPeerConnectionParams {
	peerId: string;
	peerPublicKey: string;
	roomId: string;
}
/**
 * An *action* is a plain object that represents an intention to change the
 * state. Actions are the only way to get data into the store. Any data,
 * whether from UI events, network callbacks, or other sources such as
 * WebSockets needs to eventually be dispatched as actions.
 *
 * Actions must have a `type` field that indicates the type of action being
 * performed. Types can be defined as constants and imported from another
 * module. These must be strings, as strings are serializable.
 *
 * Other than `type`, the structure of an action object is really up to you.
 * If you're interested, check out Flux Standard Action for recommendations on
 * how actions should be constructed.
 *
 * @template T the type of the action's `type` tag.
 */
export type Action<T extends string = string> = {
	type: T;
};
/** Object types that should never be mapped */
export type AtomicObject = Function | Promise<any> | Date | RegExp;
export type BaseEndpointDefinition<QueryArg, BaseQuery extends BaseQueryFn, ResultType> = (([
	CastAny<BaseQueryResult<BaseQuery>, {}>
] extends [
	NEVER
] ? never : EndpointDefinitionWithQuery<QueryArg, BaseQuery, ResultType>) | EndpointDefinitionWithQueryFn<QueryArg, BaseQuery, ResultType>) & {
	[resultType]?: ResultType;
	[baseQuery]?: BaseQuery;
} & HasRequiredProps<BaseQueryExtraOptions<BaseQuery>, {
	extraOptions: BaseQueryExtraOptions<BaseQuery>;
}, {
	extraOptions?: BaseQueryExtraOptions<BaseQuery>;
}>;
export type BaseEndpointTypes<QueryArg, BaseQuery extends BaseQueryFn, ResultType> = {
	QueryArg: QueryArg;
	BaseQuery: BaseQuery;
	ResultType: ResultType;
};
export type BaseMutationSubState<D extends BaseEndpointDefinition<any, any, any>> = {
	requestId: string;
	data?: ResultTypeFrom<D>;
	error?: SerializedError | (D extends MutationDefinition<any, infer BaseQuery, any, any> ? BaseQueryError<BaseQuery> : never);
	endpointName: string;
	startedTimeStamp: number;
	fulfilledTimeStamp?: number;
};
/**
 * @public
 */
export type BaseQueryArg<T extends (arg: any, ...args: any[]) => any> = T extends (arg: infer A, ...args: any[]) => any ? A : any;
/**
 * @public
 */
export type BaseQueryError<BaseQuery extends BaseQueryFn> = Exclude<UnwrapPromise<ReturnType<BaseQuery>>, {
	error?: undefined;
}>["error"];
/**
 * @public
 */
export type BaseQueryExtraOptions<BaseQuery extends BaseQueryFn> = Parameters<BaseQuery>[2];
export type BaseQueryFn<Args = any, Result = unknown, Error = unknown, DefinitionExtraOptions = {}, Meta = {}> = (args: Args, api: BaseQueryApi, extraOptions: DefinitionExtraOptions) => MaybePromise<QueryReturnValue<Result, Error, Meta>>;
/**
 * @public
 */
export type BaseQueryMeta<BaseQuery extends BaseQueryFn> = UnwrapPromise<ReturnType<BaseQuery>>["meta"];
/**
 * @public
 */
export type BaseQueryResult<BaseQuery extends BaseQueryFn> = UnwrapPromise<ReturnType<BaseQuery>> extends infer Unwrapped ? Unwrapped extends {
	data: any;
} ? Unwrapped["data"] : never : never;
export type BaseQuerySubState<D extends BaseEndpointDefinition<any, any, any>, DataType = ResultTypeFrom<D>> = {
	/**
	 * The argument originally passed into the hook or `initiate` action call
	 */
	originalArgs: QueryArgFromAnyQuery<D>;
	/**
	 * A unique ID associated with the request
	 */
	requestId: string;
	/**
	 * The received data from the query
	 */
	data?: DataType;
	/**
	 * The received error if applicable
	 */
	error?: SerializedError | (D extends QueryDefinition<any, infer BaseQuery, any, any> ? BaseQueryError<BaseQuery> : never);
	/**
	 * The name of the endpoint associated with the query
	 */
	endpointName: string;
	/**
	 * Time that the latest query started
	 */
	startedTimeStamp: number;
	/**
	 * Time that the latest query was fulfilled
	 */
	fulfilledTimeStamp?: number;
};
export type CacheCollectionQueryExtraOptions = {
	/**
	 * Overrides the api-wide definition of `keepUnusedDataFor` for this endpoint only. _(This value is in seconds.)_
	 *
	 * This is how long RTK Query will keep your data cached for **after** the last component unsubscribes. For example, if you query an endpoint, then unmount the component, then mount another component that makes the same request within the given time frame, the most recent value will be served from the cache.
	 */
	keepUnusedDataFor?: number;
};
export type CacheLifecycleInfiniteQueryExtraOptions<ResultType, QueryArg, BaseQuery extends BaseQueryFn, ReducerPath extends string = string> = CacheLifecycleQueryExtraOptions<ResultType, QueryArg, BaseQuery, ReducerPath>;
export type CacheLifecycleMutationExtraOptions<ResultType, QueryArg, BaseQuery extends BaseQueryFn, ReducerPath extends string = string> = {
	onCacheEntryAdded?(arg: QueryArg, api: MutationCacheLifecycleApi<QueryArg, BaseQuery, ResultType, ReducerPath>): Promise<void> | void;
};
export type CacheLifecyclePromises<ResultType = unknown, MetaType = unknown> = {
	/**
	 * Promise that will resolve with the first value for this cache key.
	 * This allows you to `await` until an actual value is in cache.
	 *
	 * If the cache entry is removed from the cache before any value has ever
	 * been resolved, this Promise will reject with
	 * `new Error('Promise never resolved before cacheEntryRemoved.')`
	 * to prevent memory leaks.
	 * You can just re-throw that error (or not handle it at all) -
	 * it will be caught outside of `cacheEntryAdded`.
	 *
	 * If you don't interact with this promise, it will not throw.
	 */
	cacheDataLoaded: PromiseWithKnownReason<{
		/**
		 * The (transformed) query result.
		 */
		data: ResultType;
		/**
		 * The `meta` returned by the `baseQuery`
		 */
		meta: MetaType;
	}, typeof neverResolvedError>;
	/**
	 * Promise that allows you to wait for the point in time when the cache entry
	 * has been removed from the cache, by not being used/subscribed to any more
	 * in the application for too long or by dispatching `api.util.resetApiState`.
	 */
	cacheEntryRemoved: Promise<void>;
};
export type CacheLifecycleQueryExtraOptions<ResultType, QueryArg, BaseQuery extends BaseQueryFn, ReducerPath extends string = string> = {
	onCacheEntryAdded?(arg: QueryArg, api: QueryCacheLifecycleApi<QueryArg, BaseQuery, ResultType, ReducerPath>): Promise<void> | void;
};
export type CastAny<T, CastTo> = IsAny$1<T, CastTo, T>;
export type CombinedState<D extends EndpointDefinitions, E extends string, ReducerPath extends string> = {
	queries: QueryState<D>;
	mutations: MutationState<D>;
	provided: InvalidationState<E>;
	subscriptions: SubscriptionState;
	config: ConfigState<ReducerPath>;
};
export type ConfigState<ReducerPath> = RefetchConfigOptions & {
	reducerPath: ReducerPath;
	online: boolean;
	focused: boolean;
	middlewareRegistered: boolean | "conflict";
} & ModifiableConfigState;
/** Convert a readonly type into a mutable type, if possible */
export type Draft<T> = T extends PrimitiveType ? T : T extends AtomicObject ? T : T extends ReadonlyMap<infer K, infer V> ? Map<Draft<K>, Draft<V>> : T extends ReadonlySet<infer V> ? Set<Draft<V>> : T extends WeakReferences ? T : T extends object ? WritableDraft<T> : T;
export type EndpointDefinition<QueryArg, BaseQuery extends BaseQueryFn, TagTypes extends string, ResultType, ReducerPath extends string = string, PageParam = any> = QueryDefinition<QueryArg, BaseQuery, TagTypes, ResultType, ReducerPath> | MutationDefinition<QueryArg, BaseQuery, TagTypes, ResultType, ReducerPath> | InfiniteQueryDefinition<QueryArg, PageParam, BaseQuery, TagTypes, ResultType, ReducerPath>;
export type EndpointDefinitionWithQuery<QueryArg, BaseQuery extends BaseQueryFn, ResultType> = {
	/**
	 * `query` can be a function that returns either a `string` or an `object` which is passed to your `baseQuery`. If you are using [fetchBaseQuery](./fetchBaseQuery), this can return either a `string` or an `object` of properties in `FetchArgs`. If you use your own custom [`baseQuery`](../../rtk-query/usage/customizing-queries), you can customize this behavior to your liking.
	 *
	 * @example
	 *
	 * ```ts
	 * // codeblock-meta title="query example"
	 *
	 * import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
	 * interface Post {
	 *   id: number
	 *   name: string
	 * }
	 * type PostsResponse = Post[]
	 *
	 * const api = createApi({
	 *   baseQuery: fetchBaseQuery({ baseUrl: '/' }),
	 *   tagTypes: ['Post'],
	 *   endpoints: (build) => ({
	 *     getPosts: build.query<PostsResponse, void>({
	 *       // highlight-start
	 *       query: () => 'posts',
	 *       // highlight-end
	 *     }),
	 *     addPost: build.mutation<Post, Partial<Post>>({
	 *      // highlight-start
	 *      query: (body) => ({
	 *        url: `posts`,
	 *        method: 'POST',
	 *        body,
	 *      }),
	 *      // highlight-end
	 *      invalidatesTags: [{ type: 'Post', id: 'LIST' }],
	 *    }),
	 *   })
	 * })
	 * ```
	 */
	query(arg: QueryArg): BaseQueryArg<BaseQuery>;
	queryFn?: never;
	/**
	 * A function to manipulate the data returned by a query or mutation.
	 */
	transformResponse?(baseQueryReturnValue: BaseQueryResult<BaseQuery>, meta: BaseQueryMeta<BaseQuery>, arg: QueryArg): ResultType | Promise<ResultType>;
	/**
	 * A function to manipulate the data returned by a failed query or mutation.
	 */
	transformErrorResponse?(baseQueryReturnValue: BaseQueryError<BaseQuery>, meta: BaseQueryMeta<BaseQuery>, arg: QueryArg): unknown;
	/**
	 * Defaults to `true`.
	 *
	 * Most apps should leave this setting on. The only time it can be a performance issue
	 * is if an API returns extremely large amounts of data (e.g. 10,000 rows per request) and
	 * you're unable to paginate it.
	 *
	 * For details of how this works, please see the below. When it is set to `false`,
	 * every request will cause subscribed components to rerender, even when the data has not changed.
	 *
	 * @see https://redux-toolkit.js.org/api/other-exports#copywithstructuralsharing
	 */
	structuralSharing?: boolean;
};
export type EndpointDefinitionWithQueryFn<QueryArg, BaseQuery extends BaseQueryFn, ResultType> = {
	/**
	 * Can be used in place of `query` as an inline function that bypasses `baseQuery` completely for the endpoint.
	 *
	 * @example
	 * ```ts
	 * // codeblock-meta title="Basic queryFn example"
	 *
	 * import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
	 * interface Post {
	 *   id: number
	 *   name: string
	 * }
	 * type PostsResponse = Post[]
	 *
	 * const api = createApi({
	 *   baseQuery: fetchBaseQuery({ baseUrl: '/' }),
	 *   endpoints: (build) => ({
	 *     getPosts: build.query<PostsResponse, void>({
	 *       query: () => 'posts',
	 *     }),
	 *     flipCoin: build.query<'heads' | 'tails', void>({
	 *       // highlight-start
	 *       queryFn(arg, queryApi, extraOptions, baseQuery) {
	 *         const randomVal = Math.random()
	 *         if (randomVal < 0.45) {
	 *           return { data: 'heads' }
	 *         }
	 *         if (randomVal < 0.9) {
	 *           return { data: 'tails' }
	 *         }
	 *         return { error: { status: 500, statusText: 'Internal Server Error', data: "Coin landed on its edge!" } }
	 *       }
	 *       // highlight-end
	 *     })
	 *   })
	 * })
	 * ```
	 */
	queryFn(arg: QueryArg, api: BaseQueryApi, extraOptions: BaseQueryExtraOptions<BaseQuery>, baseQuery: (arg: Parameters<BaseQuery>[0]) => ReturnType<BaseQuery>): MaybePromise<QueryReturnValue<ResultType, BaseQueryError<BaseQuery>, BaseQueryMeta<BaseQuery>>>;
	query?: never;
	transformResponse?: never;
	transformErrorResponse?: never;
	/**
	 * Defaults to `true`.
	 *
	 * Most apps should leave this setting on. The only time it can be a performance issue
	 * is if an API returns extremely large amounts of data (e.g. 10,000 rows per request) and
	 * you're unable to paginate it.
	 *
	 * For details of how this works, please see the below. When it is set to `false`,
	 * every request will cause subscribed components to rerender, even when the data has not changed.
	 *
	 * @see https://redux-toolkit.js.org/api/other-exports#copywithstructuralsharing
	 */
	structuralSharing?: boolean;
};
export type EndpointDefinitions = Record<string, EndpointDefinition<any, any, any, any>>;
/**
 * A Redux store returned by `configureStore()`. Supports dispatching
 * side-effectful _thunks_ in addition to plain actions.
 *
 * @public
 */
export type EnhancedStore<S = any, A extends Action = UnknownAction, E extends Enhancers = Enhancers> = ExtractStoreExtensions<E> & Store<S, A, UnknownIfNonSpecific<ExtractStateExtensions<E>>>;
export type Enhancers = ReadonlyArray<StoreEnhancer>;
export type ExtractStateExtensions<E> = E extends Tuple<infer EnhancerTuple> ? ExtractStateExtensionsFromEnhancerTuple<EnhancerTuple, {}> : E extends ReadonlyArray<StoreEnhancer> ? UnionToIntersection<E[number] extends StoreEnhancer<any, infer StateExt> ? StateExt extends {} ? IsAny<StateExt, {}, StateExt> : {} : {}> : never;
export type ExtractStateExtensionsFromEnhancerTuple<EnhancerTuple extends readonly any[], Acc extends {}> = EnhancerTuple extends [
	infer Head,
	...infer Tail
] ? ExtractStateExtensionsFromEnhancerTuple<Tail, Acc & (Head extends StoreEnhancer<any, infer StateExt> ? IsAny<StateExt, {}, StateExt> : {})> : Acc;
export type ExtractStoreExtensions<E> = E extends Tuple<infer EnhancerTuple> ? ExtractStoreExtensionsFromEnhancerTuple<EnhancerTuple, {}> : E extends ReadonlyArray<StoreEnhancer> ? UnionToIntersection<E[number] extends StoreEnhancer<infer Ext> ? Ext extends {} ? IsAny<Ext, {}, Ext> : {} : {}> : never;
export type ExtractStoreExtensionsFromEnhancerTuple<EnhancerTuple extends readonly any[], Acc extends {}> = EnhancerTuple extends [
	infer Head,
	...infer Tail
] ? ExtractStoreExtensionsFromEnhancerTuple<Tail, Acc & (Head extends StoreEnhancer<infer Ext> ? IsAny<Ext, {}, Ext> : {})> : Acc;
export type FileExtension = KnownFileExtension | "";
export type FullTagDescription<TagType> = {
	type: TagType;
	id?: number | string;
};
export type GetResultDescriptionFn<TagTypes extends string, ResultType, QueryArg, ErrorType, MetaType> = (result: ResultType | undefined, error: ErrorType | undefined, arg: QueryArg, meta: MetaType) => ReadonlyArray<TagDescription<TagTypes> | undefined | null>;
export type HasRequiredProps<T, True, False> = NonOptionalKeys<T> extends never ? False : True;
export type Id<T> = {
	[K in keyof T]: T[K];
} & {};
/**
 * If the lib "ES2015.Collection" is not included in tsconfig.json,
 * types like ReadonlyArray, WeakMap etc. fall back to `any` (specified nowhere)
 * or `{}` (from the node types), in both cases entering an infinite recursion in
 * pattern matching type mappings
 * This type can be used to cast these types to `void` in these cases.
 */
export type IfAvailable<T, Fallback = void> = true | false extends (T extends never ? true : false) ? Fallback : keyof T extends never ? Fallback : T;
export type InfiniteData<DataType, PageParam> = {
	pages: Array<DataType>;
	pageParams: Array<PageParam>;
};
export type InfiniteQueryArgFrom<D extends BaseEndpointDefinition<any, any, any>> = D extends InfiniteQueryDefinition<infer QA, any, any, any, any> ? QA : never;
export type InfiniteQueryCombinedArg<QueryArg, PageParam> = {
	queryArg: QueryArg;
	pageParam: PageParam;
};
export type InfiniteQueryConfigOptions<DataType, PageParam> = {
	/**
	 * The initial page parameter to use for the first page fetch.
	 */
	initialPageParam: PageParam;
	/**
	 * This function is required to automatically get the next cursor for infinite queries.
	 * The result will also be used to determine the value of `hasNextPage`.
	 */
	getNextPageParam: PageParamFunction<DataType, PageParam>;
	/**
	 * This function can be set to automatically get the previous cursor for infinite queries.
	 * The result will also be used to determine the value of `hasPreviousPage`.
	 */
	getPreviousPageParam?: PageParamFunction<DataType, PageParam>;
	/**
	 * If specified, only keep this many pages in cache at once.
	 * If additional pages are fetched, older pages in the other
	 * direction will be dropped from the cache.
	 */
	maxPages?: number;
};
export type InfiniteQueryDefinition<QueryArg, PageParam, BaseQuery extends BaseQueryFn, TagTypes extends string, ResultType, ReducerPath extends string = string> = BaseEndpointDefinition<InfiniteQueryCombinedArg<QueryArg, PageParam>, BaseQuery, ResultType> & InfiniteQueryExtraOptions<TagTypes, ResultType, QueryArg, PageParam, BaseQuery, ReducerPath>;
export type InfiniteQueryDirection = "forward" | "backward";
export type InfiniteQuerySubState<D extends BaseEndpointDefinition<any, any, any>> = D extends InfiniteQueryDefinition<any, any, any, any, any> ? QuerySubState<D, InfiniteData<ResultTypeFrom<D>, PageParamFrom<D>>> & {
	direction?: InfiniteQueryDirection;
} : never;
export type InfiniteQueryTypes<QueryArg, PageParam, BaseQuery extends BaseQueryFn, TagTypes extends string, ResultType, ReducerPath extends string = string> = BaseEndpointTypes<QueryArg, BaseQuery, ResultType> & {
	/**
	 * The endpoint definition type. To be used with some internal generic types.
	 * @example
	 * ```ts
	 * const useMyWrappedHook: UseQuery<typeof api.endpoints.query.Types.QueryDefinition> = ...
	 * ```
	 */
	InfiniteQueryDefinition: InfiniteQueryDefinition<QueryArg, PageParam, BaseQuery, TagTypes, ResultType, ReducerPath>;
	TagTypes: TagTypes;
	ReducerPath: ReducerPath;
};
export type InvalidationState<TagTypes extends string> = {
	[_ in TagTypes]: {
		[id: string]: Array<QueryCacheKey>;
		[id: number]: Array<QueryCacheKey>;
	};
};
/**
 * return True if T is `any`, otherwise return False
 * taken from https://github.com/joonhocho/tsdef
 *
 * @internal
 */
export type IsAny<T, True, False = never> = true | false extends (T extends never ? true : false) ? True : False;
export type KnownFileExtension = "png" | "jpeg" | "jpg" | "gif" | "bmp" | "tiff" | "svg" | "webp" | "heic" | "ico" | "pdf" | "doc" | "docx" | "xls" | "xlsx" | "ppt" | "pptx" | "txt" | "rtf" | "odt" | "mp3" | "wav" | "aac" | "flac" | "ogg" | "m4a" | "mp4" | "avi" | "mkv" | "mov" | "wmv" | "flv" | "webm" | "zip" | "rar" | "7z" | "tar" | "gz" | "html" | "css" | "js" | "ts" | "jsx" | "tsx" | "json" | "xml" | "py" | "java" | "c" | "cpp" | "cs" | "rb" | "php" | "sql" | "epub" | "mobi" | "azw" | "ttf" | "otf" | "exe" | "dmg" | "apk";
export type KnownMimeType = "text/plain" | "image/png" | "image/jpeg" | "image/gif" | "image/bmp" | "image/tiff" | "image/svg+xml" | "image/webp" | "image/heic" | "image/vnd.microsoft.icon" | "application/pdf" | "application/msword" | "application/vnd.openxmlformats-officedocument.wordprocessingml.document" | "application/vnd.ms-excel" | "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" | "application/vnd.ms-powerpoint" | "application/vnd.openxmlformats-officedocument.presentationml.presentation" | "application/rtf" | "application/vnd.oasis.opendocument.text" | "audio/mpeg" | "audio/wav" | "audio/aac" | "audio/flac" | "audio/ogg" | "audio/mp4" | "video/mp4" | "video/x-msvideo" | "video/x-matroska" | "video/quicktime" | "video/x-ms-wmv" | "video/x-flv" | "video/webm" | "application/zip" | "application/vnd.rar" | "application/x-7z-compressed" | "application/x-tar" | "application/gzip" | "text/html" | "text/css" | "application/javascript" | "application/typescript" | "application/json" | "application/xml" | "text/x-python" | "text/x-java-source" | "text/x-c" | "text/x-c++" | "text/x-ruby" | "application/x-httpd-php" | "application/sql" | "application/epub+zip" | "application/x-mobipocket-ebook" | "application/vnd.amazon.ebook" | "font/ttf" | "font/otf" | "application/vnd.microsoft.portable-executable" | "application/x-apple-diskimage" | "application/vnd.android.package-archive";
export type LifecycleApi<ReducerPath extends string = string> = {
	/**
	 * The dispatch method for the store
	 */
	dispatch: ThunkDispatch<any, any, UnknownAction>;
	/**
	 * A method to get the current state
	 */
	getState(): RootState<any, any, ReducerPath>;
	/**
	 * `extra` as provided as `thunk.extraArgument` to the `configureStore` `getDefaultMiddleware` option.
	 */
	extra: unknown;
	/**
	 * A unique ID generated for the mutation
	 */
	requestId: string;
};
export type ListenerCallback = () => void;
export type MaybeDrafted<T> = T | Draft<T>;
export type MaybePromise<T> = T | PromiseLike<T>;
export type ModifiableConfigState = {
	keepUnusedDataFor: number;
	invalidationBehavior: "delayed" | "immediately";
} & RefetchConfigOptions;
export type MutationBaseLifecycleApi<QueryArg, BaseQuery extends BaseQueryFn, ResultType, ReducerPath extends string = string> = LifecycleApi<ReducerPath> & {
	/**
	 * Gets the current value of this cache entry.
	 */
	getCacheEntry(): MutationResultSelectorResult<{
		type: DefinitionType.mutation;
	} & BaseEndpointDefinition<QueryArg, BaseQuery, ResultType>>;
};
export type MutationCacheLifecycleApi<QueryArg, BaseQuery extends BaseQueryFn, ResultType, ReducerPath extends string = string> = MutationBaseLifecycleApi<QueryArg, BaseQuery, ResultType, ReducerPath> & CacheLifecyclePromises<ResultType, BaseQueryMeta<BaseQuery>>;
export type MutationDefinition<QueryArg, BaseQuery extends BaseQueryFn, TagTypes extends string, ResultType, ReducerPath extends string = string> = BaseEndpointDefinition<QueryArg, BaseQuery, ResultType> & MutationExtraOptions<TagTypes, ResultType, QueryArg, BaseQuery, ReducerPath>;
export type MutationLifecycleApi<QueryArg, BaseQuery extends BaseQueryFn, ResultType, ReducerPath extends string = string> = MutationBaseLifecycleApi<QueryArg, BaseQuery, ResultType, ReducerPath> & QueryLifecyclePromises<ResultType, BaseQuery>;
export type MutationResultSelectorResult<Definition extends MutationDefinition<any, any, any, any>> = MutationSubState<Definition> & RequestStatusFlags;
export type MutationState<D extends EndpointDefinitions> = {
	[requestId: string]: MutationSubState<D[string]> | undefined;
};
export type MutationSubState<D extends BaseEndpointDefinition<any, any, any>> = (({
	status: QueryStatus.fulfilled;
} & WithRequiredProp<BaseMutationSubState<D>, "data" | "fulfilledTimeStamp">) & {
	error: undefined;
}) | (({
	status: QueryStatus.pending;
} & BaseMutationSubState<D>) & {
	data?: undefined;
}) | ({
	status: QueryStatus.rejected;
} & WithRequiredProp<BaseMutationSubState<D>, "error">) | {
	requestId?: undefined;
	status: QueryStatus.uninitialized;
	data?: undefined;
	error?: undefined;
	endpointName?: string;
	startedTimeStamp?: undefined;
	fulfilledTimeStamp?: undefined;
};
export type MutationTypes<QueryArg, BaseQuery extends BaseQueryFn, TagTypes extends string, ResultType, ReducerPath extends string = string> = BaseEndpointTypes<QueryArg, BaseQuery, ResultType> & {
	/**
	 * The endpoint definition type. To be used with some internal generic types.
	 * @example
	 * ```ts
	 * const useMyWrappedHook: UseMutation<typeof api.endpoints.query.Types.MutationDefinition> = ...
	 * ```
	 */
	MutationDefinition: MutationDefinition<QueryArg, BaseQuery, TagTypes, ResultType, ReducerPath>;
	TagTypes: TagTypes;
	ReducerPath: ReducerPath;
};
export type NEVER = typeof _NEVER;
export type NonOptionalKeys<T> = {
	[K in keyof T]-?: undefined extends T[K] ? never : K;
}[keyof T];
/**
 * A minimal observable of state changes.
 * For more information, see the observable proposal:
 * https://github.com/tc39/proposal-observable
 */
export type Observable<T> = {
	/**
	 * The minimal observable subscription method.
	 * @param {Object} observer Any object that can be used as an observer.
	 * The observer object should have a `next` method.
	 * @returns {subscription} An object with an `unsubscribe` method that can
	 * be used to unsubscribe the observable from the store, and prevent further
	 * emission of values from the observable.
	 */
	subscribe: (observer: Observer<T>) => {
		unsubscribe: Unsubscribe;
	};
	[Symbol.observable](): Observable<T>;
};
/**
 * An Observer is used to receive data from an Observable, and is supplied as
 * an argument to subscribe.
 */
export type Observer<T> = {
	next?(value: T): void;
};
export type PageParamFrom<D extends InfiniteQueryDefinition<any, any, any, any, any>> = D extends InfiniteQueryDefinition<any, infer PP, any, any, any> ? PP : unknown;
export type PageParamFunction<DataType, PageParam> = (firstPage: DataType, allPages: Array<DataType>, firstPageParam: PageParam, allPageParams: Array<PageParam>) => PageParam | undefined | null;
/**
 * An object returned from dispatching a `api.util.updateQueryData` call.
 */
export type PatchCollection = {
	/**
	 * An `immer` Patch describing the cache update.
	 */
	patches: Patch[];
	/**
	 * An `immer` Patch to revert the cache update.
	 */
	inversePatches: Patch[];
	/**
	 * A function that will undo the cache update.
	 */
	undo: () => void;
};
export type PrimitiveType = number | string | boolean;
export type PromiseWithKnownReason<T, R> = Omit<Promise<T>, "then" | "catch"> & {
	/**
	 * Attaches callbacks for the resolution and/or rejection of the Promise.
	 * @param onfulfilled The callback to execute when the Promise is resolved.
	 * @param onrejected The callback to execute when the Promise is rejected.
	 * @returns A Promise for the completion of which ever callback is executed.
	 */
	then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: R) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
	/**
	 * Attaches a callback for only the rejection of the Promise.
	 * @param onrejected The callback to execute when the Promise is rejected.
	 * @returns A Promise for the completion of the callback.
	 */
	catch<TResult = never>(onrejected?: ((reason: R) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
};
export type QueryArgFrom<D extends BaseEndpointDefinition<any, any, any>> = D extends BaseEndpointDefinition<infer QA, any, any> ? QA : never;
export type QueryArgFromAnyQuery<D extends BaseEndpointDefinition<any, any, any>> = D extends InfiniteQueryDefinition<any, any, any, any, any> ? InfiniteQueryArgFrom<D> : D extends QueryDefinition<any, any, any, any> ? QueryArgFrom<D> : never;
export type QueryCacheKey = string & {
	_type: "queryCacheKey";
};
export type QueryDefinition<QueryArg, BaseQuery extends BaseQueryFn, TagTypes extends string, ResultType, ReducerPath extends string = string> = BaseEndpointDefinition<QueryArg, BaseQuery, ResultType> & QueryExtraOptions<TagTypes, ResultType, QueryArg, BaseQuery, ReducerPath>;
export type QueryFulfilledRejectionReason<BaseQuery extends BaseQueryFn> = {
	error: BaseQueryError<BaseQuery>;
	/**
	 * If this is `false`, that means this error was returned from the `baseQuery` or `queryFn` in a controlled manner.
	 */
	isUnhandledError: false;
	/**
	 * The `meta` returned by the `baseQuery`
	 */
	meta: BaseQueryMeta<BaseQuery>;
} | {
	error: unknown;
	meta?: undefined;
	/**
	 * If this is `true`, that means that this error is the result of `baseQueryFn`, `queryFn`, `transformResponse` or `transformErrorResponse` throwing an error instead of handling it properly.
	 * There can not be made any assumption about the shape of `error`.
	 */
	isUnhandledError: true;
};
export type QueryLifecycleInfiniteQueryExtraOptions<ResultType, QueryArg, BaseQuery extends BaseQueryFn, ReducerPath extends string = string> = QueryLifecycleQueryExtraOptions<ResultType, QueryArg, BaseQuery, ReducerPath>;
export type QueryLifecycleMutationExtraOptions<ResultType, QueryArg, BaseQuery extends BaseQueryFn, ReducerPath extends string = string> = {
	/**
	 * A function that is called when the individual mutation is started. The function is called with a lifecycle api object containing properties such as `queryFulfilled`, allowing code to be run when a query is started, when it succeeds, and when it fails (i.e. throughout the lifecycle of an individual query/mutation call).
	 *
	 * Can be used for `optimistic updates`.
	 *
	 * @example
	 *
	 * ```ts
	 * import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'
	 * export interface Post {
	 *   id: number
	 *   name: string
	 * }
	 *
	 * const api = createApi({
	 *   baseQuery: fetchBaseQuery({
	 *     baseUrl: '/',
	 *   }),
	 *   tagTypes: ['Post'],
	 *   endpoints: (build) => ({
	 *     getPost: build.query<Post, number>({
	 *       query: (id) => `post/${id}`,
	 *       providesTags: ['Post'],
	 *     }),
	 *     updatePost: build.mutation<void, Pick<Post, 'id'> & Partial<Post>>({
	 *       query: ({ id, ...patch }) => ({
	 *         url: `post/${id}`,
	 *         method: 'PATCH',
	 *         body: patch,
	 *       }),
	 *       invalidatesTags: ['Post'],
	 *       async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
	 *         const patchResult = dispatch(
	 *           api.util.updateQueryData('getPost', id, (draft) => {
	 *             Object.assign(draft, patch)
	 *           })
	 *         )
	 *         try {
	 *           await queryFulfilled
	 *         } catch {
	 *           patchResult.undo()
	 *         }
	 *       },
	 *     }),
	 *   }),
	 * })
	 * ```
	 */
	onQueryStarted?(queryArgument: QueryArg, mutationLifeCycleApi: MutationLifecycleApi<QueryArg, BaseQuery, ResultType, ReducerPath>): Promise<void> | void;
};
export type QueryLifecyclePromises<ResultType, BaseQuery extends BaseQueryFn> = {
	/**
	 * Promise that will resolve with the (transformed) query result.
	 *
	 * If the query fails, this promise will reject with the error.
	 *
	 * This allows you to `await` for the query to finish.
	 *
	 * If you don't interact with this promise, it will not throw.
	 */
	queryFulfilled: PromiseWithKnownReason<{
		/**
		 * The (transformed) query result.
		 */
		data: ResultType;
		/**
		 * The `meta` returned by the `baseQuery`
		 */
		meta: BaseQueryMeta<BaseQuery>;
	}, QueryFulfilledRejectionReason<BaseQuery>>;
};
export type QueryLifecycleQueryExtraOptions<ResultType, QueryArg, BaseQuery extends BaseQueryFn, ReducerPath extends string = string> = {
	/**
	 * A function that is called when the individual query is started. The function is called with a lifecycle api object containing properties such as `queryFulfilled`, allowing code to be run when a query is started, when it succeeds, and when it fails (i.e. throughout the lifecycle of an individual query/mutation call).
	 *
	 * Can be used to perform side-effects throughout the lifecycle of the query.
	 *
	 * @example
	 * ```ts
	 * import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'
	 * import { messageCreated } from './notificationsSlice
	 * export interface Post {
	 *   id: number
	 *   name: string
	 * }
	 *
	 * const api = createApi({
	 *   baseQuery: fetchBaseQuery({
	 *     baseUrl: '/',
	 *   }),
	 *   endpoints: (build) => ({
	 *     getPost: build.query<Post, number>({
	 *       query: (id) => `post/${id}`,
	 *       async onQueryStarted(id, { dispatch, queryFulfilled }) {
	 *         // `onStart` side-effect
	 *         dispatch(messageCreated('Fetching posts...'))
	 *         try {
	 *           const { data } = await queryFulfilled
	 *           // `onSuccess` side-effect
	 *           dispatch(messageCreated('Posts received!'))
	 *         } catch (err) {
	 *           // `onError` side-effect
	 *           dispatch(messageCreated('Error fetching posts!'))
	 *         }
	 *       }
	 *     }),
	 *   }),
	 * })
	 * ```
	 */
	onQueryStarted?(queryArgument: QueryArg, queryLifeCycleApi: QueryLifecycleApi<QueryArg, BaseQuery, ResultType, ReducerPath>): Promise<void> | void;
};
export type QueryResultSelectorResult<Definition extends QueryDefinition<any, any, any, any>> = QuerySubState<Definition> & RequestStatusFlags;
export type QueryReturnValue<T = unknown, E = unknown, M = unknown> = {
	error: E;
	data?: undefined;
	meta?: M;
} | {
	error?: undefined;
	data: T;
	meta?: M;
};
export type QueryState<D extends EndpointDefinitions> = {
	[queryCacheKey: string]: QuerySubState<D[string]> | InfiniteQuerySubState<D[string]> | undefined;
};
export type QuerySubState<D extends BaseEndpointDefinition<any, any, any>, DataType = ResultTypeFrom<D>> = Id<({
	status: QueryStatus.fulfilled;
} & WithRequiredProp<BaseQuerySubState<D, DataType>, "data" | "fulfilledTimeStamp"> & {
	error: undefined;
}) | ({
	status: QueryStatus.pending;
} & BaseQuerySubState<D, DataType>) | ({
	status: QueryStatus.rejected;
} & WithRequiredProp<BaseQuerySubState<D, DataType>, "error">) | {
	status: QueryStatus.uninitialized;
	originalArgs?: undefined;
	data?: undefined;
	error?: undefined;
	requestId?: undefined;
	endpointName?: string;
	startedTimeStamp?: undefined;
	fulfilledTimeStamp?: undefined;
}>;
export type QueryTypes<QueryArg, BaseQuery extends BaseQueryFn, TagTypes extends string, ResultType, ReducerPath extends string = string> = BaseEndpointTypes<QueryArg, BaseQuery, ResultType> & {
	/**
	 * The endpoint definition type. To be used with some internal generic types.
	 * @example
	 * ```ts
	 * const useMyWrappedHook: UseQuery<typeof api.endpoints.query.Types.QueryDefinition> = ...
	 * ```
	 */
	QueryDefinition: QueryDefinition<QueryArg, BaseQuery, TagTypes, ResultType, ReducerPath>;
	TagTypes: TagTypes;
	ReducerPath: ReducerPath;
};
export type Recipe<T> = (data: MaybeDrafted<T>) => void | MaybeDrafted<T>;
/**
 * A *reducer* is a function that accepts
 * an accumulation and a value and returns a new accumulation. They are used
 * to reduce a collection of values down to a single value
 *
 * Reducers are not unique to Redux—they are a fundamental concept in
 * functional programming.  Even most non-functional languages, like
 * JavaScript, have a built-in API for reducing. In JavaScript, it's
 * `Array.prototype.reduce()`.
 *
 * In Redux, the accumulated value is the state object, and the values being
 * accumulated are actions. Reducers calculate a new state given the previous
 * state and an action. They must be *pure functions*—functions that return
 * the exact same output for given inputs. They should also be free of
 * side-effects. This is what enables exciting features like hot reloading and
 * time travel.
 *
 * Reducers are the most important concept in Redux.
 *
 * *Do not put API calls into reducers.*
 *
 * @template S The type of state consumed and produced by this reducer.
 * @template A The type of actions the reducer can potentially respond to.
 * @template PreloadedState The type of state consumed by this reducer the first time it's called.
 */
export type Reducer<S = any, A extends Action = UnknownAction, PreloadedState = S> = (state: S | PreloadedState | undefined, action: A) => S;
export type RefetchConfigOptions = {
	refetchOnMountOrArgChange: boolean | number;
	refetchOnReconnect: boolean;
	refetchOnFocus: boolean;
};
export type RequestStatusFlags = {
	status: QueryStatus.uninitialized;
	isUninitialized: true;
	isLoading: false;
	isSuccess: false;
	isError: false;
} | {
	status: QueryStatus.pending;
	isUninitialized: false;
	isLoading: true;
	isSuccess: false;
	isError: false;
} | {
	status: QueryStatus.fulfilled;
	isUninitialized: false;
	isLoading: false;
	isSuccess: true;
	isError: false;
} | {
	status: QueryStatus.rejected;
	isUninitialized: false;
	isLoading: false;
	isSuccess: false;
	isError: true;
};
/**
 * @public
 */
export type ResultDescription<TagTypes extends string, ResultType, QueryArg, ErrorType, MetaType> = ReadonlyArray<TagDescription<TagTypes> | undefined | null> | GetResultDescriptionFn<TagTypes, ResultType, QueryArg, ErrorType, MetaType>;
export type ResultTypeFrom<D extends BaseEndpointDefinition<any, any, any>> = D extends BaseEndpointDefinition<any, any, infer RT> ? RT : unknown;
export type RootState<Definitions extends EndpointDefinitions, TagTypes extends string, ReducerPath extends string> = {
	[P in ReducerPath]: CombinedState<Definitions, TagTypes, P>;
};
export type SerializeQueryArgs<QueryArgs, ReturnType = string> = (_: {
	queryArgs: QueryArgs;
	endpointDefinition: EndpointDefinition<any, any, any, any>;
	endpointName: string;
}) => ReturnType;
export type State = ReturnType<typeof store.getState>;
/**
 * A store enhancer is a higher-order function that composes a store creator
 * to return a new, enhanced store creator. This is similar to middleware in
 * that it allows you to alter the store interface in a composable way.
 *
 * Store enhancers are much the same concept as higher-order components in
 * React, which are also occasionally called “component enhancers”.
 *
 * Because a store is not an instance, but rather a plain-object collection of
 * functions, copies can be easily created and modified without mutating the
 * original store. There is an example in `compose` documentation
 * demonstrating that.
 *
 * Most likely you'll never write a store enhancer, but you may use the one
 * provided by the developer tools. It is what makes time travel possible
 * without the app being aware it is happening. Amusingly, the Redux
 * middleware implementation is itself a store enhancer.
 *
 * @template Ext Store extension that is mixed into the Store type.
 * @template StateExt State extension that is mixed into the state type.
 */
export type StoreEnhancer<Ext extends {} = {}, StateExt extends {} = {}> = <NextExt extends {}, NextStateExt extends {}>(next: StoreEnhancerStoreCreator<NextExt, NextStateExt>) => StoreEnhancerStoreCreator<NextExt & Ext, NextStateExt & StateExt>;
export type StoreEnhancerStoreCreator<Ext extends {} = {}, StateExt extends {} = {}> = <S, A extends Action, PreloadedState>(reducer: Reducer<S, A, PreloadedState>, preloadedState?: PreloadedState | undefined) => Store<S, A, StateExt> & Ext;
export type Subscribers = {
	[requestId: string]: SubscriptionOptions;
};
/**
 * @public
 */
export type SubscriptionOptions = {
	/**
	 * How frequently to automatically re-fetch data (in milliseconds). Defaults to `0` (off).
	 */
	pollingInterval?: number;
	/**
	 *  Defaults to 'false'. This setting allows you to control whether RTK Query will continue polling if the window is not focused.
	 *
	 *  If pollingInterval is not set or set to 0, this **will not be evaluated** until pollingInterval is greater than 0.
	 *
	 *  Note: requires [`setupListeners`](./setupListeners) to have been called.
	 */
	skipPollingIfUnfocused?: boolean;
	/**
	 * Defaults to `false`. This setting allows you to control whether RTK Query will try to refetch all subscribed queries after regaining a network connection.
	 *
	 * If you specify this option alongside `skip: true`, this **will not be evaluated** until `skip` is false.
	 *
	 * Note: requires [`setupListeners`](./setupListeners) to have been called.
	 */
	refetchOnReconnect?: boolean;
	/**
	 * Defaults to `false`. This setting allows you to control whether RTK Query will try to refetch all subscribed queries after the application window regains focus.
	 *
	 * If you specify this option alongside `skip: true`, this **will not be evaluated** until `skip` is false.
	 *
	 * Note: requires [`setupListeners`](./setupListeners) to have been called.
	 */
	refetchOnFocus?: boolean;
};
export type SubscriptionState = {
	[queryCacheKey: string]: Subscribers | undefined;
};
export type TagDescription<TagType> = TagType | FullTagDescription<TagType>;
/**
 * A "thunk" action (a callback function that can be dispatched to the Redux
 * store.)
 *
 * Also known as the "thunk inner function", when used with the typical pattern
 * of an action creator function that returns a thunk action.
 *
 * @template ReturnType The return type of the thunk's inner function
 * @template State The redux state
 * @template ExtraThunkArg Optional extra argument passed to the inner function
 * (if specified when setting up the Thunk middleware)
 * @template BasicAction The (non-thunk) actions that can be dispatched.
 */
export type ThunkAction<ReturnType, State, ExtraThunkArg, BasicAction extends Action> = (dispatch: ThunkDispatch<State, ExtraThunkArg, BasicAction>, getState: () => State, extraArgument: ExtraThunkArg) => ReturnType;
/**
 * Convert a Union type `(A|B)` to an intersection type `(A&B)`
 */
export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type UnknownIfNonSpecific<T> = {} extends T ? unknown : T;
export type UnwrapPromise<T> = T extends PromiseLike<infer V> ? V : T;
/**
 * These should also never be mapped but must be tested after regular Map and
 * Set
 */
export type WeakReferences = IfAvailable<WeakMap<any, any>> | IfAvailable<WeakSet<any>>;
export type WithRequiredProp<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;
export type WritableDraft<T> = {
	-readonly [K in keyof T]: Draft<T[K]>;
};
type IsAny$1<T, True, False = never> = true | false extends (T extends never ? true : false) ? True : False;
type MimeType$1 = KnownMimeType | "application/octet-stream";

export {
	MimeType$1 as MimeType,
	p2party as default,
};

export as namespace p2party;

export {};
