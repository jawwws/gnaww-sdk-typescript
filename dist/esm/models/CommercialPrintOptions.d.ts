/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 * NOTE: This class is auto Gnaww SDK.
 * https://gnaww-sdk.tech
 * Do not edit the class manually.
 */
import type { ColourCapability } from './ColourCapability';
import type { PersonalisationCapability } from './PersonalisationCapability';
import type { CustomDimensionCapability } from './CustomDimensionCapability';
import type { DimensionCapability } from './DimensionCapability';
import type { MaterialCapability } from './MaterialCapability';
/**
 * Shared commercial print capability fields.
 * @export
 * @interface CommercialPrintOptions
 */
export interface CommercialPrintOptions {
    /**
     *
     * @type {ColourCapability}
     * @memberof CommercialPrintOptions
     */
    colour: ColourCapability;
    /**
     *
     * @type {CustomDimensionCapability}
     * @memberof CommercialPrintOptions
     */
    customDimensions?: CustomDimensionCapability | null;
    /**
     *
     * @type {Array<DimensionCapability>}
     * @memberof CommercialPrintOptions
     */
    dimensions: Array<DimensionCapability>;
    /**
     *
     * @type {Array<MaterialCapability>}
     * @memberof CommercialPrintOptions
     */
    materials: Array<MaterialCapability>;
    /**
     *
     * @type {PersonalisationCapability}
     * @memberof CommercialPrintOptions
     */
    personalisation?: PersonalisationCapability;
    /**
     *
     * @type {Array<CommercialPrintOptionsPrintedSidesEnum>}
     * @memberof CommercialPrintOptions
     */
    printedSides: Array<CommercialPrintOptionsPrintedSidesEnum>;
}
/**
 * @export
 */
export declare const CommercialPrintOptionsPrintedSidesEnum: {
    readonly SingleSided: "single_sided";
    readonly DoubleSided: "double_sided";
    readonly Unknown: "unknown";
};
export type CommercialPrintOptionsPrintedSidesEnum = typeof CommercialPrintOptionsPrintedSidesEnum[keyof typeof CommercialPrintOptionsPrintedSidesEnum];
/**
 * Check if a given object implements the CommercialPrintOptions interface.
 */
export declare function instanceOfCommercialPrintOptions(value: object): value is CommercialPrintOptions;
export declare function CommercialPrintOptionsFromJSON(json: any): CommercialPrintOptions;
export declare function CommercialPrintOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommercialPrintOptions;
export declare function CommercialPrintOptionsToJSON(json: any): CommercialPrintOptions;
export declare function CommercialPrintOptionsToJSONTyped(value?: CommercialPrintOptions | null, ignoreDiscriminator?: boolean): any;
