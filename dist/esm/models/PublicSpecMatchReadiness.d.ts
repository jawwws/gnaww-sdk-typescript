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
 * Whether validated demand can enter a future public SpecMatch operation.
 * @export
 * @interface PublicSpecMatchReadiness
 */
export interface PublicSpecMatchReadiness {
    /**
     *
     * @type {PublicSpecMatchReadinessBasisEnum}
     * @memberof PublicSpecMatchReadiness
     */
    basis: PublicSpecMatchReadinessBasisEnum;
    /**
     *
     * @type {boolean}
     * @memberof PublicSpecMatchReadiness
     */
    canEvaluate: boolean;
    /**
     *
     * @type {boolean}
     * @memberof PublicSpecMatchReadiness
     */
    preRecipe?: boolean;
    /**
     *
     * @type {Array<string>}
     * @memberof PublicSpecMatchReadiness
     */
    reasons?: Array<string>;
}
/**
 * @export
 */
export declare const PublicSpecMatchReadinessBasisEnum: {
    readonly Recipe: "recipe";
    readonly Gjs: "gjs";
    readonly None: "none";
};
export type PublicSpecMatchReadinessBasisEnum = typeof PublicSpecMatchReadinessBasisEnum[keyof typeof PublicSpecMatchReadinessBasisEnum];
/**
 * Check if a given object implements the PublicSpecMatchReadiness interface.
 */
export declare function instanceOfPublicSpecMatchReadiness(value: object): value is PublicSpecMatchReadiness;
export declare function PublicSpecMatchReadinessFromJSON(json: any): PublicSpecMatchReadiness;
export declare function PublicSpecMatchReadinessFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicSpecMatchReadiness;
export declare function PublicSpecMatchReadinessToJSON(json: any): PublicSpecMatchReadiness;
export declare function PublicSpecMatchReadinessToJSONTyped(value?: PublicSpecMatchReadiness | null, ignoreDiscriminator?: boolean): any;
