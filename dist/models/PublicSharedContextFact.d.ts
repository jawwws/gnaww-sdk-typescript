/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
import type { Value } from './Value';
import type { PublicInterpretationScope } from './PublicInterpretationScope';
/**
 * One provenance-aware fact that applies across the parent intent.
 * @export
 * @interface PublicSharedContextFact
 */
export interface PublicSharedContextFact {
    /**
     *
     * @type {string}
     * @memberof PublicSharedContextFact
     */
    contextId: string;
    /**
     *
     * @type {string}
     * @memberof PublicSharedContextFact
     */
    key: string;
    /**
     *
     * @type {PublicSharedContextFactPostureEnum}
     * @memberof PublicSharedContextFact
     */
    posture?: PublicSharedContextFactPostureEnum;
    /**
     *
     * @type {PublicSharedContextFactProvenanceEnum}
     * @memberof PublicSharedContextFact
     */
    provenance: PublicSharedContextFactProvenanceEnum;
    /**
     *
     * @type {boolean}
     * @memberof PublicSharedContextFact
     */
    requiresConfirmation?: boolean;
    /**
     *
     * @type {PublicInterpretationScope}
     * @memberof PublicSharedContextFact
     */
    scope?: PublicInterpretationScope;
    /**
     *
     * @type {string}
     * @memberof PublicSharedContextFact
     */
    sourceExpression?: string | null;
    /**
     *
     * @type {Value}
     * @memberof PublicSharedContextFact
     */
    value?: Value | null;
}
/**
 * @export
 */
export declare const PublicSharedContextFactPostureEnum: {
    readonly Exact: "exact";
    readonly Preference: "preference";
    readonly Tolerance: "tolerance";
    readonly Ambiguous: "ambiguous";
};
export type PublicSharedContextFactPostureEnum = typeof PublicSharedContextFactPostureEnum[keyof typeof PublicSharedContextFactPostureEnum];
/**
 * @export
 */
export declare const PublicSharedContextFactProvenanceEnum: {
    readonly Supplied: "supplied";
    readonly Derived: "derived";
    readonly Confirmed: "confirmed";
    readonly Controlled: "controlled";
};
export type PublicSharedContextFactProvenanceEnum = typeof PublicSharedContextFactProvenanceEnum[keyof typeof PublicSharedContextFactProvenanceEnum];
/**
 * Check if a given object implements the PublicSharedContextFact interface.
 */
export declare function instanceOfPublicSharedContextFact(value: object): value is PublicSharedContextFact;
export declare function PublicSharedContextFactFromJSON(json: any): PublicSharedContextFact;
export declare function PublicSharedContextFactFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicSharedContextFact;
export declare function PublicSharedContextFactToJSON(json: any): PublicSharedContextFact;
export declare function PublicSharedContextFactToJSONTyped(value?: PublicSharedContextFact | null, ignoreDiscriminator?: boolean): any;
