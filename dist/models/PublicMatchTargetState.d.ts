/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 * NOTE: This class is auto Gnaww SDK.
 * https://gnaww-sdk.tech
 * Do not edit the class manually.
 */
/**
 * Safe target identity returned with a public capability result.
 * @export
 * @interface PublicMatchTargetState
 */
export interface PublicMatchTargetState {
    /**
     *
     * @type {string}
     * @memberof PublicMatchTargetState
     */
    producerId: string;
    /**
     *
     * @type {string}
     * @memberof PublicMatchTargetState
     */
    producerName: string;
    /**
     *
     * @type {string}
     * @memberof PublicMatchTargetState
     */
    producerProfileId: string;
    /**
     *
     * @type {string}
     * @memberof PublicMatchTargetState
     */
    producerProfileSchemaVersion: string;
    /**
     *
     * @type {PublicMatchTargetStateSourceEnum}
     * @memberof PublicMatchTargetState
     */
    source: PublicMatchTargetStateSourceEnum;
    /**
     *
     * @type {PublicMatchTargetStateTruthStateEnum}
     * @memberof PublicMatchTargetState
     */
    truthState: PublicMatchTargetStateTruthStateEnum;
}
/**
 * @export
 */
export declare const PublicMatchTargetStateSourceEnum: {
    readonly PublishedProfile: "published_profile";
    readonly DemoFixture: "demo_fixture";
    readonly ApiDerivedDemo: "api_derived_demo";
};
export type PublicMatchTargetStateSourceEnum = typeof PublicMatchTargetStateSourceEnum[keyof typeof PublicMatchTargetStateSourceEnum];
/**
 * @export
 */
export declare const PublicMatchTargetStateTruthStateEnum: {
    readonly PublishedCapability: "published_capability";
    readonly FixtureBacked: "fixture_backed";
    readonly LiveApiDerived: "live_api_derived";
};
export type PublicMatchTargetStateTruthStateEnum = typeof PublicMatchTargetStateTruthStateEnum[keyof typeof PublicMatchTargetStateTruthStateEnum];
/**
 * Check if a given object implements the PublicMatchTargetState interface.
 */
export declare function instanceOfPublicMatchTargetState(value: object): value is PublicMatchTargetState;
export declare function PublicMatchTargetStateFromJSON(json: any): PublicMatchTargetState;
export declare function PublicMatchTargetStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicMatchTargetState;
export declare function PublicMatchTargetStateToJSON(json: any): PublicMatchTargetState;
export declare function PublicMatchTargetStateToJSONTyped(value?: PublicMatchTargetState | null, ignoreDiscriminator?: boolean): any;
