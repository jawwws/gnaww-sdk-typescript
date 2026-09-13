/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
/**
 * Deterministic component geometry without embedding full CAD/design content.
 * @export
 * @interface ManufacturingGeometry
 */
export interface ManufacturingGeometry {
    /**
     *
     * @type {ManufacturingGeometryCoordinateOriginEnum}
     * @memberof ManufacturingGeometry
     */
    coordinateOrigin?: ManufacturingGeometryCoordinateOriginEnum;
    /**
     *
     * @type {number}
     * @memberof ManufacturingGeometry
     */
    depthMm?: number | null;
    /**
     *
     * @type {string}
     * @memberof ManufacturingGeometry
     */
    geometryAssetRef?: string | null;
    /**
     *
     * @type {number}
     * @memberof ManufacturingGeometry
     */
    heightMm?: number | null;
    /**
     *
     * @type {ManufacturingGeometryOrientationEnum}
     * @memberof ManufacturingGeometry
     */
    orientation?: ManufacturingGeometryOrientationEnum;
    /**
     *
     * @type {ManufacturingGeometryShapeEnum}
     * @memberof ManufacturingGeometry
     */
    shape?: ManufacturingGeometryShapeEnum;
    /**
     *
     * @type {string}
     * @memberof ManufacturingGeometry
     */
    standardName?: string | null;
    /**
     *
     * @type {number}
     * @memberof ManufacturingGeometry
     */
    thicknessMm?: number | null;
    /**
     *
     * @type {number}
     * @memberof ManufacturingGeometry
     */
    widthMm?: number | null;
}
/**
 * @export
 */
export declare const ManufacturingGeometryCoordinateOriginEnum: {
    readonly TopLeft: "top_left";
    readonly BottomLeft: "bottom_left";
    readonly Centre: "centre";
};
export type ManufacturingGeometryCoordinateOriginEnum = typeof ManufacturingGeometryCoordinateOriginEnum[keyof typeof ManufacturingGeometryCoordinateOriginEnum];
/**
 * @export
 */
export declare const ManufacturingGeometryOrientationEnum: {
    readonly Portrait: "portrait";
    readonly Landscape: "landscape";
    readonly Square: "square";
    readonly Unknown: "unknown";
};
export type ManufacturingGeometryOrientationEnum = typeof ManufacturingGeometryOrientationEnum[keyof typeof ManufacturingGeometryOrientationEnum];
/**
 * @export
 */
export declare const ManufacturingGeometryShapeEnum: {
    readonly Rectangle: "rectangle";
    readonly Circle: "circle";
    readonly Polygon: "polygon";
    readonly Path: "path";
    readonly Solid: "solid";
    readonly Custom: "custom";
    readonly Unknown: "unknown";
};
export type ManufacturingGeometryShapeEnum = typeof ManufacturingGeometryShapeEnum[keyof typeof ManufacturingGeometryShapeEnum];
/**
 * Check if a given object implements the ManufacturingGeometry interface.
 */
export declare function instanceOfManufacturingGeometry(value: object): value is ManufacturingGeometry;
export declare function ManufacturingGeometryFromJSON(json: any): ManufacturingGeometry;
export declare function ManufacturingGeometryFromJSONTyped(json: any, ignoreDiscriminator: boolean): ManufacturingGeometry;
export declare function ManufacturingGeometryToJSON(json: any): ManufacturingGeometry;
export declare function ManufacturingGeometryToJSONTyped(value?: ManufacturingGeometry | null, ignoreDiscriminator?: boolean): any;
