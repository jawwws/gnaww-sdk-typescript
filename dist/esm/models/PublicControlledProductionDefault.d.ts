/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
import type { PublicControlledDefaultFoldGeometry } from './PublicControlledDefaultFoldGeometry';
import type { PublicControlledDefaultUserEvidence } from './PublicControlledDefaultUserEvidence';
/**
 * Approved production convention shown separately from explicit source evidence.
 * @export
 * @interface PublicControlledProductionDefault
 */
export interface PublicControlledProductionDefault {
    /**
     *
     * @type {Array<string>}
     * @memberof PublicControlledProductionDefault
     */
    evidenceIds: Array<string>;
    /**
     *
     * @type {PublicControlledDefaultFoldGeometry}
     * @memberof PublicControlledProductionDefault
     */
    foldGeometry: PublicControlledDefaultFoldGeometry;
    /**
     *
     * @type {string}
     * @memberof PublicControlledProductionDefault
     */
    label: string;
    /**
     *
     * @type {string}
     * @memberof PublicControlledProductionDefault
     */
    ruleId: string;
    /**
     *
     * @type {string}
     * @memberof PublicControlledProductionDefault
     */
    ruleVersion: string;
    /**
     *
     * @type {string}
     * @memberof PublicControlledProductionDefault
     */
    summary: string;
    /**
     *
     * @type {string}
     * @memberof PublicControlledProductionDefault
     */
    targetPath: string;
    /**
     *
     * @type {PublicControlledProductionDefaultTruthStateEnum}
     * @memberof PublicControlledProductionDefault
     */
    truthState: PublicControlledProductionDefaultTruthStateEnum;
    /**
     *
     * @type {PublicControlledDefaultUserEvidence}
     * @memberof PublicControlledProductionDefault
     */
    userEvidence?: PublicControlledDefaultUserEvidence | null;
    /**
     *
     * @type {string}
     * @memberof PublicControlledProductionDefault
     */
    verificationKey: string;
}
/**
 * @export
 */
export declare const PublicControlledProductionDefaultTruthStateEnum: {
    readonly Defaulted: "defaulted";
    readonly Confirmed: "confirmed";
    readonly Changed: "changed";
};
export type PublicControlledProductionDefaultTruthStateEnum = typeof PublicControlledProductionDefaultTruthStateEnum[keyof typeof PublicControlledProductionDefaultTruthStateEnum];
/**
 * Check if a given object implements the PublicControlledProductionDefault interface.
 */
export declare function instanceOfPublicControlledProductionDefault(value: object): value is PublicControlledProductionDefault;
export declare function PublicControlledProductionDefaultFromJSON(json: any): PublicControlledProductionDefault;
export declare function PublicControlledProductionDefaultFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicControlledProductionDefault;
export declare function PublicControlledProductionDefaultToJSON(json: any): PublicControlledProductionDefault;
export declare function PublicControlledProductionDefaultToJSONTyped(value?: PublicControlledProductionDefault | null, ignoreDiscriminator?: boolean): any;
