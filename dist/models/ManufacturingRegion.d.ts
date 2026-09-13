/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
import type { ManufacturingRegionGeometry } from './ManufacturingRegionGeometry';
/**
 * Addressable production target within one component.
 * @export
 * @interface ManufacturingRegion
 */
export interface ManufacturingRegion {
    /**
     *
     * @type {string}
     * @memberof ManufacturingRegion
     */
    edge?: string | null;
    /**
     *
     * @type {ManufacturingRegionFaceEnum}
     * @memberof ManufacturingRegion
     */
    face?: ManufacturingRegionFaceEnum | null;
    /**
     *
     * @type {ManufacturingRegionGeometry}
     * @memberof ManufacturingRegion
     */
    geometry?: ManufacturingRegionGeometry | null;
    /**
     *
     * @type {ManufacturingRegionKindEnum}
     * @memberof ManufacturingRegion
     */
    kind: ManufacturingRegionKindEnum;
    /**
     *
     * @type {string}
     * @memberof ManufacturingRegion
     */
    name?: string | null;
    /**
     *
     * @type {string}
     * @memberof ManufacturingRegion
     */
    regionId: string;
}
/**
 * @export
 */
export declare const ManufacturingRegionFaceEnum: {
    readonly Front: "front";
    readonly Back: "back";
    readonly Top: "top";
    readonly Bottom: "bottom";
    readonly Left: "left";
    readonly Right: "right";
    readonly Inside: "inside";
    readonly Outside: "outside";
};
export type ManufacturingRegionFaceEnum = typeof ManufacturingRegionFaceEnum[keyof typeof ManufacturingRegionFaceEnum];
/**
 * @export
 */
export declare const ManufacturingRegionKindEnum: {
    readonly Face: "face";
    readonly Edge: "edge";
    readonly Area: "area";
    readonly Path: "path";
    readonly Named: "named";
};
export type ManufacturingRegionKindEnum = typeof ManufacturingRegionKindEnum[keyof typeof ManufacturingRegionKindEnum];
/**
 * Check if a given object implements the ManufacturingRegion interface.
 */
export declare function instanceOfManufacturingRegion(value: object): value is ManufacturingRegion;
export declare function ManufacturingRegionFromJSON(json: any): ManufacturingRegion;
export declare function ManufacturingRegionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ManufacturingRegion;
export declare function ManufacturingRegionToJSON(json: any): ManufacturingRegion;
export declare function ManufacturingRegionToJSONTyped(value?: ManufacturingRegion | null, ignoreDiscriminator?: boolean): any;
