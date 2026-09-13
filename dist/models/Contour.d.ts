/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
import type { Point2D } from './Point2D';
/**
 *
 * @export
 * @interface Contour
 */
export interface Contour {
    /**
     *
     * @type {Point2D}
     * @memberof Contour
     */
    end: Point2D;
    /**
     *
     * @type {ContourKindEnum}
     * @memberof Contour
     */
    kind?: ContourKindEnum;
    /**
     *
     * @type {Point2D}
     * @memberof Contour
     */
    start: Point2D;
    /**
     *
     * @type {number}
     * @memberof Contour
     */
    heightMm: number;
    /**
     *
     * @type {number}
     * @memberof Contour
     */
    widthMm: number;
    /**
     *
     * @type {number}
     * @memberof Contour
     */
    xMm: number;
    /**
     *
     * @type {number}
     * @memberof Contour
     */
    yMm: number;
    /**
     *
     * @type {Point2D}
     * @memberof Contour
     */
    centre: Point2D;
    /**
     *
     * @type {number}
     * @memberof Contour
     */
    diameterMm: number;
    /**
     *
     * @type {string}
     * @memberof Contour
     */
    assetRef: string;
    /**
     *
     * @type {string}
     * @memberof Contour
     */
    pathId?: string;
}
/**
 * @export
 */
export declare const ContourKindEnum: {
    readonly PathReference: "path_reference";
};
export type ContourKindEnum = typeof ContourKindEnum[keyof typeof ContourKindEnum];
/**
 * Check if a given object implements the Contour interface.
 */
export declare function instanceOfContour(value: object): value is Contour;
export declare function ContourFromJSON(json: any): Contour;
export declare function ContourFromJSONTyped(json: any, ignoreDiscriminator: boolean): Contour;
export declare function ContourToJSON(json: any): Contour;
export declare function ContourToJSONTyped(value?: Contour | null, ignoreDiscriminator?: boolean): any;
