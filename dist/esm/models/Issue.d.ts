/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
/**
 * A customer-safe issue raised during transformation or matching.
 * @export
 * @interface Issue
 */
export interface Issue {
    /**
     *
     * @type {string}
     * @memberof Issue
     */
    code: string;
    /**
     *
     * @type {string}
     * @memberof Issue
     */
    field?: string | null;
    /**
     *
     * @type {string}
     * @memberof Issue
     */
    message: string;
    /**
     *
     * @type {IssueSeverityEnum}
     * @memberof Issue
     */
    severity: IssueSeverityEnum;
    /**
     *
     * @type {string}
     * @memberof Issue
     */
    source?: string | null;
}
/**
 * @export
 */
export declare const IssueSeverityEnum: {
    readonly Blocker: "blocker";
    readonly Warning: "warning";
    readonly Info: "info";
};
export type IssueSeverityEnum = typeof IssueSeverityEnum[keyof typeof IssueSeverityEnum];
/**
 * Check if a given object implements the Issue interface.
 */
export declare function instanceOfIssue(value: object): value is Issue;
export declare function IssueFromJSON(json: any): Issue;
export declare function IssueFromJSONTyped(json: any, ignoreDiscriminator: boolean): Issue;
export declare function IssueToJSON(json: any): Issue;
export declare function IssueToJSONTyped(value?: Issue | null, ignoreDiscriminator?: boolean): any;
