/* tslint:disable */
/* eslint-disable */
/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
import { AssemblyOperationParametersFromJSONTyped, AssemblyOperationParametersToJSON, } from './AssemblyOperationParameters';
import { CutOperationParametersFromJSONTyped, CutOperationParametersToJSON, } from './CutOperationParameters';
import { DecorationOperationParametersFromJSONTyped, DecorationOperationParametersToJSON, } from './DecorationOperationParameters';
import { DrillOperationParametersFromJSONTyped, DrillOperationParametersToJSON, } from './DrillOperationParameters';
import { FoldOperationParametersFromJSONTyped, FoldOperationParametersToJSON, } from './FoldOperationParameters';
import { InspectOperationParametersFromJSONTyped, InspectOperationParametersToJSON, } from './InspectOperationParameters';
import { LegacyOperationParametersFromJSONTyped, LegacyOperationParametersToJSON, } from './LegacyOperationParameters';
import { PrintOperationParametersFromJSONTyped, PrintOperationParametersToJSON, } from './PrintOperationParameters';
import { SurfaceOperationParametersFromJSONTyped, SurfaceOperationParametersToJSON, } from './SurfaceOperationParameters';
export function ManufacturingOperationParametersFromJSON(json) {
    return ManufacturingOperationParametersFromJSONTyped(json, false);
}
export function ManufacturingOperationParametersFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    switch (json['kind']) {
        case 'assembly':
            return Object.assign({}, AssemblyOperationParametersFromJSONTyped(json, true), { kind: 'assembly' });
        case 'cut':
            return Object.assign({}, CutOperationParametersFromJSONTyped(json, true), { kind: 'cut' });
        case 'decoration':
            return Object.assign({}, DecorationOperationParametersFromJSONTyped(json, true), { kind: 'decoration' });
        case 'drill':
            return Object.assign({}, DrillOperationParametersFromJSONTyped(json, true), { kind: 'drill' });
        case 'fold':
            return Object.assign({}, FoldOperationParametersFromJSONTyped(json, true), { kind: 'fold' });
        case 'inspect':
            return Object.assign({}, InspectOperationParametersFromJSONTyped(json, true), { kind: 'inspect' });
        case 'legacy':
            return Object.assign({}, LegacyOperationParametersFromJSONTyped(json, true), { kind: 'legacy' });
        case 'print':
            return Object.assign({}, PrintOperationParametersFromJSONTyped(json, true), { kind: 'print' });
        case 'surface':
            return Object.assign({}, SurfaceOperationParametersFromJSONTyped(json, true), { kind: 'surface' });
        default:
            return json;
    }
}
export function ManufacturingOperationParametersToJSON(json) {
    return ManufacturingOperationParametersToJSONTyped(json, false);
}
export function ManufacturingOperationParametersToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    switch (value['kind']) {
        case 'assembly':
            return Object.assign({}, AssemblyOperationParametersToJSON(value), { kind: 'assembly' });
        case 'cut':
            return Object.assign({}, CutOperationParametersToJSON(value), { kind: 'cut' });
        case 'decoration':
            return Object.assign({}, DecorationOperationParametersToJSON(value), { kind: 'decoration' });
        case 'drill':
            return Object.assign({}, DrillOperationParametersToJSON(value), { kind: 'drill' });
        case 'fold':
            return Object.assign({}, FoldOperationParametersToJSON(value), { kind: 'fold' });
        case 'inspect':
            return Object.assign({}, InspectOperationParametersToJSON(value), { kind: 'inspect' });
        case 'legacy':
            return Object.assign({}, LegacyOperationParametersToJSON(value), { kind: 'legacy' });
        case 'print':
            return Object.assign({}, PrintOperationParametersToJSON(value), { kind: 'print' });
        case 'surface':
            return Object.assign({}, SurfaceOperationParametersToJSON(value), { kind: 'surface' });
        default:
            return value;
    }
}
