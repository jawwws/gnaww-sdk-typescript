/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
import type { ManufacturingMaterial } from './ManufacturingMaterial';
import type { ManufacturingGeometry } from './ManufacturingGeometry';
import type { ManufacturingRegion } from './ManufacturingRegion';
/**
 * One physical component or meaningful intermediate assembly.
 * @export
 * @interface ManufacturingComponent
 */
export interface ManufacturingComponent {
    /**
     *
     * @type {string}
     * @memberof ManufacturingComponent
     */
    componentId: string;
    /**
     *
     * @type {ManufacturingGeometry}
     * @memberof ManufacturingComponent
     */
    geometry?: ManufacturingGeometry;
    /**
     *
     * @type {ManufacturingMaterial}
     * @memberof ManufacturingComponent
     */
    material?: ManufacturingMaterial;
    /**
     *
     * @type {number}
     * @memberof ManufacturingComponent
     */
    multiplicity?: number;
    /**
     *
     * @type {string}
     * @memberof ManufacturingComponent
     */
    parentComponentId?: string | null;
    /**
     *
     * @type {Array<ManufacturingRegion>}
     * @memberof ManufacturingComponent
     */
    regions?: Array<ManufacturingRegion>;
    /**
     *
     * @type {string}
     * @memberof ManufacturingComponent
     */
    role: string;
}
/**
 * Check if a given object implements the ManufacturingComponent interface.
 */
export declare function instanceOfManufacturingComponent(value: object): value is ManufacturingComponent;
export declare function ManufacturingComponentFromJSON(json: any): ManufacturingComponent;
export declare function ManufacturingComponentFromJSONTyped(json: any, ignoreDiscriminator: boolean): ManufacturingComponent;
export declare function ManufacturingComponentToJSON(json: any): ManufacturingComponent;
export declare function ManufacturingComponentToJSONTyped(value?: ManufacturingComponent | null, ignoreDiscriminator?: boolean): any;
