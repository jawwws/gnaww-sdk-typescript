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
import type { Gjs1 } from './Gjs1';
/**
 * Resolve one exact canonical Gnaww Job Specification to a Recipe.
 * @export
 * @interface ResolveRecipeRequest
 */
export interface ResolveRecipeRequest {
    /**
     *
     * @type {Gjs1}
     * @memberof ResolveRecipeRequest
     */
    gjs: Gjs1;
}
/**
 * Check if a given object implements the ResolveRecipeRequest interface.
 */
export declare function instanceOfResolveRecipeRequest(value: object): value is ResolveRecipeRequest;
export declare function ResolveRecipeRequestFromJSON(json: any): ResolveRecipeRequest;
export declare function ResolveRecipeRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResolveRecipeRequest;
export declare function ResolveRecipeRequestToJSON(json: any): ResolveRecipeRequest;
export declare function ResolveRecipeRequestToJSONTyped(value?: ResolveRecipeRequest | null, ignoreDiscriminator?: boolean): any;
