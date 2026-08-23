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
import type { Substrate } from './Substrate';
import type { FinishedSize } from './FinishedSize';
import type { Finishing } from './Finishing';
import type { PrintSpec } from './PrintSpec';
/**
 * Single printable component of a canonical job.
 * @export
 * @interface PrintComponent
 */
export interface PrintComponent {
    /**
     *
     * @type {string}
     * @memberof PrintComponent
     */
    componentId?: string;
    /**
     *
     * @type {Array<Finishing>}
     * @memberof PrintComponent
     */
    finishings?: Array<Finishing>;
    /**
     *
     * @type {PrintSpec}
     * @memberof PrintComponent
     */
    printSpec?: PrintSpec;
    /**
     *
     * @type {PrintComponentRoleEnum}
     * @memberof PrintComponent
     */
    role?: PrintComponentRoleEnum;
    /**
     *
     * @type {FinishedSize}
     * @memberof PrintComponent
     */
    size?: FinishedSize;
    /**
     *
     * @type {Substrate}
     * @memberof PrintComponent
     */
    substrate?: Substrate;
}
/**
 * @export
 */
export declare const PrintComponentRoleEnum: {
    readonly Main: "main";
    readonly Flat: "flat";
    readonly Finished: "finished";
    readonly Cover: "cover";
    readonly Text: "text";
    readonly Insert: "insert";
    readonly Garment: "garment";
    readonly Decoration: "decoration";
    readonly Unknown: "unknown";
};
export type PrintComponentRoleEnum = typeof PrintComponentRoleEnum[keyof typeof PrintComponentRoleEnum];
/**
 * Check if a given object implements the PrintComponent interface.
 */
export declare function instanceOfPrintComponent(value: object): value is PrintComponent;
export declare function PrintComponentFromJSON(json: any): PrintComponent;
export declare function PrintComponentFromJSONTyped(json: any, ignoreDiscriminator: boolean): PrintComponent;
export declare function PrintComponentToJSON(json: any): PrintComponent;
export declare function PrintComponentToJSONTyped(value?: PrintComponent | null, ignoreDiscriminator?: boolean): any;
