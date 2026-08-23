/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
import type { Issue } from './Issue';
/**
 * Grouped issues returned by Gnaww responses.
 * @export
 * @interface IssueSet
 */
export interface IssueSet {
    /**
     *
     * @type {Array<Issue>}
     * @memberof IssueSet
     */
    blockers?: Array<Issue>;
    /**
     *
     * @type {Array<Issue>}
     * @memberof IssueSet
     */
    info?: Array<Issue>;
    /**
     *
     * @type {Array<Issue>}
     * @memberof IssueSet
     */
    warnings?: Array<Issue>;
}
/**
 * Check if a given object implements the IssueSet interface.
 */
export declare function instanceOfIssueSet(value: object): value is IssueSet;
export declare function IssueSetFromJSON(json: any): IssueSet;
export declare function IssueSetFromJSONTyped(json: any, ignoreDiscriminator: boolean): IssueSet;
export declare function IssueSetToJSON(json: any): IssueSet;
export declare function IssueSetToJSONTyped(value?: IssueSet | null, ignoreDiscriminator?: boolean): any;
