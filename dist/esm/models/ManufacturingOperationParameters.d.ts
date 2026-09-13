/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
import type { AssemblyOperationParameters } from './AssemblyOperationParameters';
import type { CutOperationParameters } from './CutOperationParameters';
import type { DecorationOperationParameters } from './DecorationOperationParameters';
import type { DrillOperationParameters } from './DrillOperationParameters';
import type { FoldOperationParameters } from './FoldOperationParameters';
import type { InspectOperationParameters } from './InspectOperationParameters';
import type { LegacyOperationParameters } from './LegacyOperationParameters';
import type { PrintOperationParameters } from './PrintOperationParameters';
import type { SurfaceOperationParameters } from './SurfaceOperationParameters';
/**
 * @type ManufacturingOperationParameters
 *
 * @export
 */
export type ManufacturingOperationParameters = {
    kind: 'assembly';
} & AssemblyOperationParameters | {
    kind: 'cut';
} & CutOperationParameters | {
    kind: 'decoration';
} & DecorationOperationParameters | {
    kind: 'drill';
} & DrillOperationParameters | {
    kind: 'fold';
} & FoldOperationParameters | {
    kind: 'inspect';
} & InspectOperationParameters | {
    kind: 'legacy';
} & LegacyOperationParameters | {
    kind: 'print';
} & PrintOperationParameters | {
    kind: 'surface';
} & SurfaceOperationParameters;
export declare function ManufacturingOperationParametersFromJSON(json: any): ManufacturingOperationParameters;
export declare function ManufacturingOperationParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): ManufacturingOperationParameters;
export declare function ManufacturingOperationParametersToJSON(json: any): any;
export declare function ManufacturingOperationParametersToJSONTyped(value?: ManufacturingOperationParameters | null, ignoreDiscriminator?: boolean): any;
