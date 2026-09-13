/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
import type { Value } from './Value';
/**
 * One provenance-aware source fact scoped to a single Job.
 * @export
 * @interface PublicJobContextFact
 */
export interface PublicJobContextFact {
    /**
     *
     * @type {string}
     * @memberof PublicJobContextFact
     */
    factId: string;
    /**
     *
     * @type {string}
     * @memberof PublicJobContextFact
     */
    key: string;
    /**
     *
     * @type {PublicJobContextFactPostureEnum}
     * @memberof PublicJobContextFact
     */
    posture?: PublicJobContextFactPostureEnum;
    /**
     *
     * @type {PublicJobContextFactProvenanceEnum}
     * @memberof PublicJobContextFact
     */
    provenance: PublicJobContextFactProvenanceEnum;
    /**
     *
     * @type {boolean}
     * @memberof PublicJobContextFact
     */
    requiresConfirmation?: boolean;
    /**
     *
     * @type {string}
     * @memberof PublicJobContextFact
     */
    sourceExpression?: string | null;
    /**
     *
     * @type {Value}
     * @memberof PublicJobContextFact
     */
    value?: Value | null;
}
/**
 * @export
 */
export declare const PublicJobContextFactPostureEnum: {
    readonly Exact: "exact";
    readonly Preference: "preference";
    readonly Tolerance: "tolerance";
    readonly Ambiguous: "ambiguous";
};
export type PublicJobContextFactPostureEnum = typeof PublicJobContextFactPostureEnum[keyof typeof PublicJobContextFactPostureEnum];
/**
 * @export
 */
export declare const PublicJobContextFactProvenanceEnum: {
    readonly Supplied: "supplied";
    readonly Derived: "derived";
    readonly Confirmed: "confirmed";
    readonly Controlled: "controlled";
};
export type PublicJobContextFactProvenanceEnum = typeof PublicJobContextFactProvenanceEnum[keyof typeof PublicJobContextFactProvenanceEnum];
/**
 * Check if a given object implements the PublicJobContextFact interface.
 */
export declare function instanceOfPublicJobContextFact(value: object): value is PublicJobContextFact;
export declare function PublicJobContextFactFromJSON(json: any): PublicJobContextFact;
export declare function PublicJobContextFactFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicJobContextFact;
export declare function PublicJobContextFactToJSON(json: any): PublicJobContextFact;
export declare function PublicJobContextFactToJSONTyped(value?: PublicJobContextFact | null, ignoreDiscriminator?: boolean): any;
