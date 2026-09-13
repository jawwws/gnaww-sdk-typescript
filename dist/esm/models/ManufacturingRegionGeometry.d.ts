/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
import type { Circle2D } from './Circle2D';
import type { Line2D } from './Line2D';
import type { PathReference } from './PathReference';
import type { Point2D } from './Point2D';
import type { Rectangle2D } from './Rectangle2D';
/**
 * @type ManufacturingRegionGeometry
 *
 * @export
 */
export type ManufacturingRegionGeometry = {
    kind: 'circle';
} & Circle2D | {
    kind: 'line';
} & Line2D | {
    kind: 'path_reference';
} & PathReference | {
    kind: 'point';
} & Point2D | {
    kind: 'rectangle';
} & Rectangle2D;
export declare function ManufacturingRegionGeometryFromJSON(json: any): ManufacturingRegionGeometry;
export declare function ManufacturingRegionGeometryFromJSONTyped(json: any, ignoreDiscriminator: boolean): ManufacturingRegionGeometry;
export declare function ManufacturingRegionGeometryToJSON(json: any): any;
export declare function ManufacturingRegionGeometryToJSONTyped(value?: ManufacturingRegionGeometry | null, ignoreDiscriminator?: boolean): any;
