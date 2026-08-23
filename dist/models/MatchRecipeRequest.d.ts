/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
import type { PublicMatchTargetRequest } from './PublicMatchTargetRequest';
import type { UseRequirement } from './UseRequirement';
import type { ServiceRequirements } from './ServiceRequirements';
/**
 * Run context supplied when matching one persisted Recipe.
 * @export
 * @interface MatchRecipeRequest
 */
export interface MatchRecipeRequest {
    /**
     *
     * @type {number}
     * @memberof MatchRecipeRequest
     */
    quantity: number;
    /**
     *
     * @type {MatchRecipeRequestSchemaNameEnum}
     * @memberof MatchRecipeRequest
     */
    schemaName?: MatchRecipeRequestSchemaNameEnum;
    /**
     *
     * @type {MatchRecipeRequestSchemaVersionEnum}
     * @memberof MatchRecipeRequest
     */
    schemaVersion?: MatchRecipeRequestSchemaVersionEnum;
    /**
     *
     * @type {ServiceRequirements}
     * @memberof MatchRecipeRequest
     */
    serviceRequirements?: ServiceRequirements;
    /**
     *
     * @type {PublicMatchTargetRequest}
     * @memberof MatchRecipeRequest
     */
    target: PublicMatchTargetRequest;
    /**
     *
     * @type {Array<UseRequirement>}
     * @memberof MatchRecipeRequest
     */
    useRequirements?: Array<UseRequirement>;
}
/**
 * @export
 */
export declare const MatchRecipeRequestSchemaNameEnum: {
    readonly GnawwRecipeSpecmatchRequest: "gnaww.recipe_specmatch_request";
};
export type MatchRecipeRequestSchemaNameEnum = typeof MatchRecipeRequestSchemaNameEnum[keyof typeof MatchRecipeRequestSchemaNameEnum];
/**
 * @export
 */
export declare const MatchRecipeRequestSchemaVersionEnum: {
    readonly _01: "0.1";
};
export type MatchRecipeRequestSchemaVersionEnum = typeof MatchRecipeRequestSchemaVersionEnum[keyof typeof MatchRecipeRequestSchemaVersionEnum];
/**
 * Check if a given object implements the MatchRecipeRequest interface.
 */
export declare function instanceOfMatchRecipeRequest(value: object): value is MatchRecipeRequest;
export declare function MatchRecipeRequestFromJSON(json: any): MatchRecipeRequest;
export declare function MatchRecipeRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): MatchRecipeRequest;
export declare function MatchRecipeRequestToJSON(json: any): MatchRecipeRequest;
export declare function MatchRecipeRequestToJSONTyped(value?: MatchRecipeRequest | null, ignoreDiscriminator?: boolean): any;
