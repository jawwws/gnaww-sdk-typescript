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

import { mapValues } from '../runtime';
/**
 * Safe target identity returned with a public capability result.
 * @export
 * @interface PublicMatchTargetState
 */
export interface PublicMatchTargetState {
    /**
     *
     * @type {string}
     * @memberof PublicMatchTargetState
     */
    producerId: string;
    /**
     *
     * @type {string}
     * @memberof PublicMatchTargetState
     */
    producerName: string;
    /**
     *
     * @type {string}
     * @memberof PublicMatchTargetState
     */
    producerProfileId: string;
    /**
     *
     * @type {string}
     * @memberof PublicMatchTargetState
     */
    producerProfileSchemaVersion: string;
    /**
     *
     * @type {PublicMatchTargetStateSourceEnum}
     * @memberof PublicMatchTargetState
     */
    source: PublicMatchTargetStateSourceEnum;
    /**
     *
     * @type {PublicMatchTargetStateTruthStateEnum}
     * @memberof PublicMatchTargetState
     */
    truthState: PublicMatchTargetStateTruthStateEnum;
}


/**
 * @export
 */
export const PublicMatchTargetStateSourceEnum = {
    PublishedProfile: 'published_profile',
    DemoFixture: 'demo_fixture',
    ApiDerivedDemo: 'api_derived_demo'
} as const;
export type PublicMatchTargetStateSourceEnum = typeof PublicMatchTargetStateSourceEnum[keyof typeof PublicMatchTargetStateSourceEnum];

/**
 * @export
 */
export const PublicMatchTargetStateTruthStateEnum = {
    PublishedCapability: 'published_capability',
    FixtureBacked: 'fixture_backed',
    LiveApiDerived: 'live_api_derived'
} as const;
export type PublicMatchTargetStateTruthStateEnum = typeof PublicMatchTargetStateTruthStateEnum[keyof typeof PublicMatchTargetStateTruthStateEnum];


/**
 * Check if a given object implements the PublicMatchTargetState interface.
 */
export function instanceOfPublicMatchTargetState(value: object): value is PublicMatchTargetState {
    if (!('producerId' in value) || value['producerId'] === undefined) return false;
    if (!('producerName' in value) || value['producerName'] === undefined) return false;
    if (!('producerProfileId' in value) || value['producerProfileId'] === undefined) return false;
    if (!('producerProfileSchemaVersion' in value) || value['producerProfileSchemaVersion'] === undefined) return false;
    if (!('source' in value) || value['source'] === undefined) return false;
    if (!('truthState' in value) || value['truthState'] === undefined) return false;
    return true;
}

export function PublicMatchTargetStateFromJSON(json: any): PublicMatchTargetState {
    return PublicMatchTargetStateFromJSONTyped(json, false);
}

export function PublicMatchTargetStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicMatchTargetState {
    if (json == null) {
        return json;
    }
    return {

        'producerId': json['producer_id'],
        'producerName': json['producer_name'],
        'producerProfileId': json['producer_profile_id'],
        'producerProfileSchemaVersion': json['producer_profile_schema_version'],
        'source': json['source'],
        'truthState': json['truth_state'],
    };
}

export function PublicMatchTargetStateToJSON(json: any): PublicMatchTargetState {
    return PublicMatchTargetStateToJSONTyped(json, false);
}

export function PublicMatchTargetStateToJSONTyped(value?: PublicMatchTargetState | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'producer_id': value['producerId'],
        'producer_name': value['producerName'],
        'producer_profile_id': value['producerProfileId'],
        'producer_profile_schema_version': value['producerProfileSchemaVersion'],
        'source': value['source'],
        'truth_state': value['truthState'],
    };
}
