/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
import type { Contour } from './Contour';
/**
 *
 * @export
 * @interface CutOperationParameters
 */
export interface CutOperationParameters {
    /**
     *
     * @type {Contour}
     * @memberof CutOperationParameters
     */
    contour?: Contour | null;
    /**
     *
     * @type {number}
     * @memberof CutOperationParameters
     */
    cornerRadiusMm?: number | null;
    /**
     *
     * @type {Array<CutOperationParametersCornersEnum>}
     * @memberof CutOperationParameters
     */
    corners?: Array<CutOperationParametersCornersEnum>;
    /**
     *
     * @type {CutOperationParametersKindEnum}
     * @memberof CutOperationParameters
     */
    kind?: CutOperationParametersKindEnum;
    /**
     *
     * @type {CutOperationParametersMethodEnum}
     * @memberof CutOperationParameters
     */
    method: CutOperationParametersMethodEnum;
}
/**
 * @export
 */
export declare const CutOperationParametersCornersEnum: {
    readonly TopLeft: "top_left";
    readonly TopRight: "top_right";
    readonly BottomLeft: "bottom_left";
    readonly BottomRight: "bottom_right";
};
export type CutOperationParametersCornersEnum = typeof CutOperationParametersCornersEnum[keyof typeof CutOperationParametersCornersEnum];
/**
 * @export
 */
export declare const CutOperationParametersKindEnum: {
    readonly Cut: "cut";
};
export type CutOperationParametersKindEnum = typeof CutOperationParametersKindEnum[keyof typeof CutOperationParametersKindEnum];
/**
 * @export
 */
export declare const CutOperationParametersMethodEnum: {
    readonly Trim: "trim";
    readonly Guillotine: "guillotine";
    readonly CornerRound: "corner_round";
    readonly DieCut: "die_cut";
    readonly KissCut: "kiss_cut";
    readonly LaserCut: "laser_cut";
    readonly Aperture: "aperture";
    readonly Contour: "contour";
    readonly Custom: "custom";
};
export type CutOperationParametersMethodEnum = typeof CutOperationParametersMethodEnum[keyof typeof CutOperationParametersMethodEnum];
/**
 * Check if a given object implements the CutOperationParameters interface.
 */
export declare function instanceOfCutOperationParameters(value: object): value is CutOperationParameters;
export declare function CutOperationParametersFromJSON(json: any): CutOperationParameters;
export declare function CutOperationParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): CutOperationParameters;
export declare function CutOperationParametersToJSON(json: any): CutOperationParameters;
export declare function CutOperationParametersToJSONTyped(value?: CutOperationParameters | null, ignoreDiscriminator?: boolean): any;
