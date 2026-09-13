/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
import type { Gjs } from './Gjs';
import type { SpecificationExternalReference } from './SpecificationExternalReference';
import type { SpecificationFieldProvenance } from './SpecificationFieldProvenance';
import type { SpecificationRecipeReference } from './SpecificationRecipeReference';
/**
 * Safe immutable public representation of retained canonical demand.
 * @export
 * @interface SpecificationResource
 */
export interface SpecificationResource {
    /**
     *
     * @type {string}
     * @memberof SpecificationResource
     */
    contentFingerprintSha256: string;
    /**
     *
     * @type {Date}
     * @memberof SpecificationResource
     */
    createdAt: Date;
    /**
     *
     * @type {Array<SpecificationExternalReference>}
     * @memberof SpecificationResource
     */
    externalReferences?: Array<SpecificationExternalReference>;
    /**
     *
     * @type {Array<SpecificationFieldProvenance>}
     * @memberof SpecificationResource
     */
    fieldProvenance?: Array<SpecificationFieldProvenance>;
    /**
     *
     * @type {Gjs}
     * @memberof SpecificationResource
     */
    gjs: Gjs;
    /**
     *
     * @type {SpecificationResourceGjsSchemaNameEnum}
     * @memberof SpecificationResource
     */
    gjsSchemaName?: SpecificationResourceGjsSchemaNameEnum;
    /**
     *
     * @type {string}
     * @memberof SpecificationResource
     */
    gjsSchemaVersion: string;
    /**
     *
     * @type {SpecificationResourceImmutableEnum}
     * @memberof SpecificationResource
     */
    immutable?: SpecificationResourceImmutableEnum;
    /**
     *
     * @type {SpecificationRecipeReference}
     * @memberof SpecificationResource
     */
    recipe: SpecificationRecipeReference;
    /**
     *
     * @type {number}
     * @memberof SpecificationResource
     */
    resourceVersion?: number;
    /**
     *
     * @type {SpecificationResourceSchemaNameEnum}
     * @memberof SpecificationResource
     */
    schemaName?: SpecificationResourceSchemaNameEnum;
    /**
     *
     * @type {SpecificationResourceSchemaVersionEnum}
     * @memberof SpecificationResource
     */
    schemaVersion?: SpecificationResourceSchemaVersionEnum;
    /**
     *
     * @type {string}
     * @memberof SpecificationResource
     */
    specificationId: string;
}
/**
 * @export
 */
export declare const SpecificationResourceGjsSchemaNameEnum: {
    readonly JawwwsPrintJobSpecification: "jawwws.print_job_specification";
};
export type SpecificationResourceGjsSchemaNameEnum = typeof SpecificationResourceGjsSchemaNameEnum[keyof typeof SpecificationResourceGjsSchemaNameEnum];
/**
 * @export
 */
export declare const SpecificationResourceImmutableEnum: {
    readonly True: true;
};
export type SpecificationResourceImmutableEnum = typeof SpecificationResourceImmutableEnum[keyof typeof SpecificationResourceImmutableEnum];
/**
 * @export
 */
export declare const SpecificationResourceSchemaNameEnum: {
    readonly GnawwSpecificationResource: "gnaww.specification_resource";
};
export type SpecificationResourceSchemaNameEnum = typeof SpecificationResourceSchemaNameEnum[keyof typeof SpecificationResourceSchemaNameEnum];
/**
 * @export
 */
export declare const SpecificationResourceSchemaVersionEnum: {
    readonly _01: "0.1";
};
export type SpecificationResourceSchemaVersionEnum = typeof SpecificationResourceSchemaVersionEnum[keyof typeof SpecificationResourceSchemaVersionEnum];
/**
 * Check if a given object implements the SpecificationResource interface.
 */
export declare function instanceOfSpecificationResource(value: object): value is SpecificationResource;
export declare function SpecificationResourceFromJSON(json: any): SpecificationResource;
export declare function SpecificationResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): SpecificationResource;
export declare function SpecificationResourceToJSON(json: any): SpecificationResource;
export declare function SpecificationResourceToJSONTyped(value?: SpecificationResource | null, ignoreDiscriminator?: boolean): any;
