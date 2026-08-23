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
 * A customer-safe difference between requested and matched capability.
 * @export
 * @interface MatchDifference
 */
export interface MatchDifference {
    /**
     *
     * @type {string}
     * @memberof MatchDifference
     */
    field: string;
    /**
     *
     * @type {}
     * @memberof MatchDifference
     */
    offered?: null;
    /**
     *
     * @type {string}
     * @memberof MatchDifference
     */
    reason: string;
    /**
     *
     * @type {}
     * @memberof MatchDifference
     */
    requested?: null;
}
/**
 * Check if a given object implements the MatchDifference interface.
 */
export declare function instanceOfMatchDifference(value: object): value is MatchDifference;
export declare function MatchDifferenceFromJSON(json: any): MatchDifference;
export declare function MatchDifferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): MatchDifference;
export declare function MatchDifferenceToJSON(json: any): MatchDifference;
export declare function MatchDifferenceToJSONTyped(value?: MatchDifference | null, ignoreDiscriminator?: boolean): any;
