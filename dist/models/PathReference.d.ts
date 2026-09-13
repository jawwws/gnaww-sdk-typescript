/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
/**
 * Reference to complex geometry retained outside GJS.
 * @export
 * @interface PathReference
 */
export interface PathReference {
    /**
     *
     * @type {string}
     * @memberof PathReference
     */
    assetRef: string;
    /**
     *
     * @type {PathReferenceKindEnum}
     * @memberof PathReference
     */
    kind?: PathReferenceKindEnum;
    /**
     *
     * @type {string}
     * @memberof PathReference
     */
    pathId?: string | null;
}
/**
 * @export
 */
export declare const PathReferenceKindEnum: {
    readonly PathReference: "path_reference";
};
export type PathReferenceKindEnum = typeof PathReferenceKindEnum[keyof typeof PathReferenceKindEnum];
/**
 * Check if a given object implements the PathReference interface.
 */
export declare function instanceOfPathReference(value: object): value is PathReference;
export declare function PathReferenceFromJSON(json: any): PathReference;
export declare function PathReferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): PathReference;
export declare function PathReferenceToJSON(json: any): PathReference;
export declare function PathReferenceToJSONTyped(value?: PathReference | null, ignoreDiscriminator?: boolean): any;
