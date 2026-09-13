/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
/**
 * Customer-safe geometry for one controlled folding assumption.
 * @export
 * @interface PublicControlledDefaultFoldGeometry
 */
export interface PublicControlledDefaultFoldGeometry {
    /**
     *
     * @type {PublicControlledDefaultFoldGeometryFoldAxisEnum}
     * @memberof PublicControlledDefaultFoldGeometry
     */
    foldAxis: PublicControlledDefaultFoldGeometryFoldAxisEnum;
    /**
     *
     * @type {number}
     * @memberof PublicControlledDefaultFoldGeometry
     */
    foldPositionMm: number;
    /**
     *
     * @type {number}
     * @memberof PublicControlledDefaultFoldGeometry
     */
    inputHeightMm: number;
    /**
     *
     * @type {PublicControlledDefaultFoldGeometryInputOrientationEnum}
     * @memberof PublicControlledDefaultFoldGeometry
     */
    inputOrientation: PublicControlledDefaultFoldGeometryInputOrientationEnum;
    /**
     *
     * @type {string}
     * @memberof PublicControlledDefaultFoldGeometry
     */
    inputStandardName: string;
    /**
     *
     * @type {number}
     * @memberof PublicControlledDefaultFoldGeometry
     */
    inputWidthMm: number;
    /**
     *
     * @type {number}
     * @memberof PublicControlledDefaultFoldGeometry
     */
    resultingHeightMm: number;
    /**
     *
     * @type {PublicControlledDefaultFoldGeometryResultingOrientationEnum}
     * @memberof PublicControlledDefaultFoldGeometry
     */
    resultingOrientation: PublicControlledDefaultFoldGeometryResultingOrientationEnum;
    /**
     *
     * @type {string}
     * @memberof PublicControlledDefaultFoldGeometry
     */
    resultingStandardName: string;
    /**
     *
     * @type {number}
     * @memberof PublicControlledDefaultFoldGeometry
     */
    resultingWidthMm: number;
}
/**
 * @export
 */
export declare const PublicControlledDefaultFoldGeometryFoldAxisEnum: {
    readonly Vertical: "vertical";
    readonly Horizontal: "horizontal";
    readonly Custom: "custom";
};
export type PublicControlledDefaultFoldGeometryFoldAxisEnum = typeof PublicControlledDefaultFoldGeometryFoldAxisEnum[keyof typeof PublicControlledDefaultFoldGeometryFoldAxisEnum];
/**
 * @export
 */
export declare const PublicControlledDefaultFoldGeometryInputOrientationEnum: {
    readonly Portrait: "portrait";
    readonly Landscape: "landscape";
};
export type PublicControlledDefaultFoldGeometryInputOrientationEnum = typeof PublicControlledDefaultFoldGeometryInputOrientationEnum[keyof typeof PublicControlledDefaultFoldGeometryInputOrientationEnum];
/**
 * @export
 */
export declare const PublicControlledDefaultFoldGeometryResultingOrientationEnum: {
    readonly Portrait: "portrait";
    readonly Landscape: "landscape";
};
export type PublicControlledDefaultFoldGeometryResultingOrientationEnum = typeof PublicControlledDefaultFoldGeometryResultingOrientationEnum[keyof typeof PublicControlledDefaultFoldGeometryResultingOrientationEnum];
/**
 * Check if a given object implements the PublicControlledDefaultFoldGeometry interface.
 */
export declare function instanceOfPublicControlledDefaultFoldGeometry(value: object): value is PublicControlledDefaultFoldGeometry;
export declare function PublicControlledDefaultFoldGeometryFromJSON(json: any): PublicControlledDefaultFoldGeometry;
export declare function PublicControlledDefaultFoldGeometryFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicControlledDefaultFoldGeometry;
export declare function PublicControlledDefaultFoldGeometryToJSON(json: any): PublicControlledDefaultFoldGeometry;
export declare function PublicControlledDefaultFoldGeometryToJSONTyped(value?: PublicControlledDefaultFoldGeometry | null, ignoreDiscriminator?: boolean): any;
