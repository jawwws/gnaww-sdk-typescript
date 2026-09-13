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

import type { AssemblyOperationParameters } from './AssemblyOperationParameters';
import {
    instanceOfAssemblyOperationParameters,
    AssemblyOperationParametersFromJSON,
    AssemblyOperationParametersFromJSONTyped,
    AssemblyOperationParametersToJSON,
} from './AssemblyOperationParameters';
import type { CutOperationParameters } from './CutOperationParameters';
import {
    instanceOfCutOperationParameters,
    CutOperationParametersFromJSON,
    CutOperationParametersFromJSONTyped,
    CutOperationParametersToJSON,
} from './CutOperationParameters';
import type { DecorationOperationParameters } from './DecorationOperationParameters';
import {
    instanceOfDecorationOperationParameters,
    DecorationOperationParametersFromJSON,
    DecorationOperationParametersFromJSONTyped,
    DecorationOperationParametersToJSON,
} from './DecorationOperationParameters';
import type { DrillOperationParameters } from './DrillOperationParameters';
import {
    instanceOfDrillOperationParameters,
    DrillOperationParametersFromJSON,
    DrillOperationParametersFromJSONTyped,
    DrillOperationParametersToJSON,
} from './DrillOperationParameters';
import type { FoldOperationParameters } from './FoldOperationParameters';
import {
    instanceOfFoldOperationParameters,
    FoldOperationParametersFromJSON,
    FoldOperationParametersFromJSONTyped,
    FoldOperationParametersToJSON,
} from './FoldOperationParameters';
import type { InspectOperationParameters } from './InspectOperationParameters';
import {
    instanceOfInspectOperationParameters,
    InspectOperationParametersFromJSON,
    InspectOperationParametersFromJSONTyped,
    InspectOperationParametersToJSON,
} from './InspectOperationParameters';
import type { LegacyOperationParameters } from './LegacyOperationParameters';
import {
    instanceOfLegacyOperationParameters,
    LegacyOperationParametersFromJSON,
    LegacyOperationParametersFromJSONTyped,
    LegacyOperationParametersToJSON,
} from './LegacyOperationParameters';
import type { PrintOperationParameters } from './PrintOperationParameters';
import {
    instanceOfPrintOperationParameters,
    PrintOperationParametersFromJSON,
    PrintOperationParametersFromJSONTyped,
    PrintOperationParametersToJSON,
} from './PrintOperationParameters';
import type { SurfaceOperationParameters } from './SurfaceOperationParameters';
import {
    instanceOfSurfaceOperationParameters,
    SurfaceOperationParametersFromJSON,
    SurfaceOperationParametersFromJSONTyped,
    SurfaceOperationParametersToJSON,
} from './SurfaceOperationParameters';

/**
 * @type ManufacturingOperationParameters
 *
 * @export
 */
export type ManufacturingOperationParameters = { kind: 'assembly' } & AssemblyOperationParameters | { kind: 'cut' } & CutOperationParameters | { kind: 'decoration' } & DecorationOperationParameters | { kind: 'drill' } & DrillOperationParameters | { kind: 'fold' } & FoldOperationParameters | { kind: 'inspect' } & InspectOperationParameters | { kind: 'legacy' } & LegacyOperationParameters | { kind: 'print' } & PrintOperationParameters | { kind: 'surface' } & SurfaceOperationParameters;

export function ManufacturingOperationParametersFromJSON(json: any): ManufacturingOperationParameters {
    return ManufacturingOperationParametersFromJSONTyped(json, false);
}

export function ManufacturingOperationParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): ManufacturingOperationParameters {
    if (json == null) {
        return json;
    }
    switch (json['kind']) {
        case 'assembly':
            return Object.assign({}, AssemblyOperationParametersFromJSONTyped(json, true), { kind: 'assembly' } as const);
        case 'cut':
            return Object.assign({}, CutOperationParametersFromJSONTyped(json, true), { kind: 'cut' } as const);
        case 'decoration':
            return Object.assign({}, DecorationOperationParametersFromJSONTyped(json, true), { kind: 'decoration' } as const);
        case 'drill':
            return Object.assign({}, DrillOperationParametersFromJSONTyped(json, true), { kind: 'drill' } as const);
        case 'fold':
            return Object.assign({}, FoldOperationParametersFromJSONTyped(json, true), { kind: 'fold' } as const);
        case 'inspect':
            return Object.assign({}, InspectOperationParametersFromJSONTyped(json, true), { kind: 'inspect' } as const);
        case 'legacy':
            return Object.assign({}, LegacyOperationParametersFromJSONTyped(json, true), { kind: 'legacy' } as const);
        case 'print':
            return Object.assign({}, PrintOperationParametersFromJSONTyped(json, true), { kind: 'print' } as const);
        case 'surface':
            return Object.assign({}, SurfaceOperationParametersFromJSONTyped(json, true), { kind: 'surface' } as const);
        default:
            return json;
    }
}

export function ManufacturingOperationParametersToJSON(json: any): any {
    return ManufacturingOperationParametersToJSONTyped(json, false);
}

export function ManufacturingOperationParametersToJSONTyped(value?: ManufacturingOperationParameters | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    switch (value['kind']) {
        case 'assembly':
            return Object.assign({}, AssemblyOperationParametersToJSON(value), { kind: 'assembly' } as const);
        case 'cut':
            return Object.assign({}, CutOperationParametersToJSON(value), { kind: 'cut' } as const);
        case 'decoration':
            return Object.assign({}, DecorationOperationParametersToJSON(value), { kind: 'decoration' } as const);
        case 'drill':
            return Object.assign({}, DrillOperationParametersToJSON(value), { kind: 'drill' } as const);
        case 'fold':
            return Object.assign({}, FoldOperationParametersToJSON(value), { kind: 'fold' } as const);
        case 'inspect':
            return Object.assign({}, InspectOperationParametersToJSON(value), { kind: 'inspect' } as const);
        case 'legacy':
            return Object.assign({}, LegacyOperationParametersToJSON(value), { kind: 'legacy' } as const);
        case 'print':
            return Object.assign({}, PrintOperationParametersToJSON(value), { kind: 'print' } as const);
        case 'surface':
            return Object.assign({}, SurfaceOperationParametersToJSON(value), { kind: 'surface' } as const);
        default:
            return value;
    }
}
