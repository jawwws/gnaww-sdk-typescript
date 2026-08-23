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
 * Explicit capability target for one public SpecMatch operation.
 * @export
 * @interface PublicMatchTargetRequest
 */
export interface PublicMatchTargetRequest {
    /**
     *
     * @type {string}
     * @memberof PublicMatchTargetRequest
     */
    producerProfileId: string;
    /**
     *
     * @type {PublicMatchTargetRequestSourceEnum}
     * @memberof PublicMatchTargetRequest
     */
    source: PublicMatchTargetRequestSourceEnum;
}


/**
 * @export
 */
export const PublicMatchTargetRequestSourceEnum = {
    PublishedProfile: 'published_profile',
    DemoFixture: 'demo_fixture',
    ApiDerivedDemo: 'api_derived_demo'
} as const;
export type PublicMatchTargetRequestSourceEnum = typeof PublicMatchTargetRequestSourceEnum[keyof typeof PublicMatchTargetRequestSourceEnum];


/**
 * Check if a given object implements the PublicMatchTargetRequest interface.
 */
export function instanceOfPublicMatchTargetRequest(value: object): value is PublicMatchTargetRequest {
    if (!('producerProfileId' in value) || value['producerProfileId'] === undefined) return false;
    if (!('source' in value) || value['source'] === undefined) return false;
    return true;
}

export function PublicMatchTargetRequestFromJSON(json: any): PublicMatchTargetRequest {
    return PublicMatchTargetRequestFromJSONTyped(json, false);
}

export function PublicMatchTargetRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicMatchTargetRequest {
    if (json == null) {
        return json;
    }
    return {

        'producerProfileId': json['producer_profile_id'],
        'source': json['source'],
    };
}

export function PublicMatchTargetRequestToJSON(json: any): PublicMatchTargetRequest {
    return PublicMatchTargetRequestToJSONTyped(json, false);
}

export function PublicMatchTargetRequestToJSONTyped(value?: PublicMatchTargetRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'producer_profile_id': value['producerProfileId'],
        'source': value['source'],
    };
}
