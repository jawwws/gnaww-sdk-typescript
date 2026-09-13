/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
/**
 * Explicit public scope for a shared or Job-owned fact or question.
 * @export
 * @interface PublicInterpretationScope
 */
export interface PublicInterpretationScope {
    /**
     *
     * @type {string}
     * @memberof PublicInterpretationScope
     */
    jobId?: string | null;
    /**
     *
     * @type {PublicInterpretationScopeTypeEnum}
     * @memberof PublicInterpretationScope
     */
    type: PublicInterpretationScopeTypeEnum;
}
/**
 * @export
 */
export declare const PublicInterpretationScopeTypeEnum: {
    readonly Shared: "shared";
    readonly Job: "job";
};
export type PublicInterpretationScopeTypeEnum = typeof PublicInterpretationScopeTypeEnum[keyof typeof PublicInterpretationScopeTypeEnum];
/**
 * Check if a given object implements the PublicInterpretationScope interface.
 */
export declare function instanceOfPublicInterpretationScope(value: object): value is PublicInterpretationScope;
export declare function PublicInterpretationScopeFromJSON(json: any): PublicInterpretationScope;
export declare function PublicInterpretationScopeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicInterpretationScope;
export declare function PublicInterpretationScopeToJSON(json: any): PublicInterpretationScope;
export declare function PublicInterpretationScopeToJSONTyped(value?: PublicInterpretationScope | null, ignoreDiscriminator?: boolean): any;
