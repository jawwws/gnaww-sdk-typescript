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
import type { PublicInterpretationQuestion } from './PublicInterpretationQuestion';
import {
    PublicInterpretationQuestionFromJSON,
    PublicInterpretationQuestionFromJSONTyped,
    PublicInterpretationQuestionToJSON,
    PublicInterpretationQuestionToJSONTyped,
} from './PublicInterpretationQuestion';
import type { PublicInterpretationIntent } from './PublicInterpretationIntent';
import {
    PublicInterpretationIntentFromJSON,
    PublicInterpretationIntentFromJSONTyped,
    PublicInterpretationIntentToJSON,
    PublicInterpretationIntentToJSONTyped,
} from './PublicInterpretationIntent';
import type { PublicCapabilityQuestion } from './PublicCapabilityQuestion';
import {
    PublicCapabilityQuestionFromJSON,
    PublicCapabilityQuestionFromJSONTyped,
    PublicCapabilityQuestionToJSON,
    PublicCapabilityQuestionToJSONTyped,
} from './PublicCapabilityQuestion';
import type { PublicInterpretationJob } from './PublicInterpretationJob';
import {
    PublicInterpretationJobFromJSON,
    PublicInterpretationJobFromJSONTyped,
    PublicInterpretationJobToJSON,
    PublicInterpretationJobToJSONTyped,
} from './PublicInterpretationJob';
import type { IssueSet } from './IssueSet';
import {
    IssueSetFromJSON,
    IssueSetFromJSONTyped,
    IssueSetToJSON,
    IssueSetToJSONTyped,
} from './IssueSet';
import type { PublicInterpretationTruthState } from './PublicInterpretationTruthState';
import {
    PublicInterpretationTruthStateFromJSON,
    PublicInterpretationTruthStateFromJSONTyped,
    PublicInterpretationTruthStateToJSON,
    PublicInterpretationTruthStateToJSONTyped,
} from './PublicInterpretationTruthState';
import type { ProductPackResponse } from './ProductPackResponse';
import {
    ProductPackResponseFromJSON,
    ProductPackResponseFromJSONTyped,
    ProductPackResponseToJSON,
    ProductPackResponseToJSONTyped,
} from './ProductPackResponse';
import type { SourceInput } from './SourceInput';
import {
    SourceInputFromJSON,
    SourceInputFromJSONTyped,
    SourceInputToJSON,
    SourceInputToJSONTyped,
} from './SourceInput';
import type { PublicSharedContextFact } from './PublicSharedContextFact';
import {
    PublicSharedContextFactFromJSON,
    PublicSharedContextFactFromJSONTyped,
    PublicSharedContextFactToJSON,
    PublicSharedContextFactToJSONTyped,
} from './PublicSharedContextFact';
import type { PublicControlledInterpretationState } from './PublicControlledInterpretationState';
import {
    PublicControlledInterpretationStateFromJSON,
    PublicControlledInterpretationStateFromJSONTyped,
    PublicControlledInterpretationStateToJSON,
    PublicControlledInterpretationStateToJSONTyped,
} from './PublicControlledInterpretationState';

/**
 * Job-centric public messy-intent interpretation result.
 * @export
 * @interface InterpretationResultV02
 */
export interface InterpretationResultV02 {
    /**
     *
     * @type {Array<PublicCapabilityQuestion>}
     * @memberof InterpretationResultV02
     */
    capabilityQuestions?: Array<PublicCapabilityQuestion>;
    /**
     *
     * @type {PublicControlledInterpretationState}
     * @memberof InterpretationResultV02
     */
    controlledInterpretation: PublicControlledInterpretationState;
    /**
     *
     * @type {PublicInterpretationIntent}
     * @memberof InterpretationResultV02
     */
    intent: PublicInterpretationIntent;
    /**
     *
     * @type {IssueSet}
     * @memberof InterpretationResultV02
     */
    issues?: IssueSet;
    /**
     *
     * @type {Array<PublicInterpretationJob>}
     * @memberof InterpretationResultV02
     */
    jobs?: Array<PublicInterpretationJob>;
    /**
     *
     * @type {Array<string>}
     * @memberof InterpretationResultV02
     */
    nextActions?: Array<string>;
    /**
     *
     * @type {Array<PublicInterpretationQuestion>}
     * @memberof InterpretationResultV02
     */
    questions?: Array<PublicInterpretationQuestion>;
    /**
     *
     * @type {Array<ProductPackResponse>}
     * @memberof InterpretationResultV02
     */
    recommendations?: Array<ProductPackResponse>;
    /**
     *
     * @type {InterpretationResultV02RequestedGjsVersionEnum}
     * @memberof InterpretationResultV02
     */
    requestedGjsVersion: InterpretationResultV02RequestedGjsVersionEnum;
    /**
     *
     * @type {InterpretationResultV02SchemaNameEnum}
     * @memberof InterpretationResultV02
     */
    schemaName?: InterpretationResultV02SchemaNameEnum;
    /**
     *
     * @type {InterpretationResultV02SchemaVersionEnum}
     * @memberof InterpretationResultV02
     */
    schemaVersion?: InterpretationResultV02SchemaVersionEnum;
    /**
     *
     * @type {Array<PublicSharedContextFact>}
     * @memberof InterpretationResultV02
     */
    sharedContext?: Array<PublicSharedContextFact>;
    /**
     *
     * @type {SourceInput}
     * @memberof InterpretationResultV02
     */
    source: SourceInput;
    /**
     *
     * @type {InterpretationResultV02StatusEnum}
     * @memberof InterpretationResultV02
     */
    status: InterpretationResultV02StatusEnum;
    /**
     *
     * @type {PublicInterpretationTruthState}
     * @memberof InterpretationResultV02
     */
    truth?: PublicInterpretationTruthState;
}


/**
 * @export
 */
export const InterpretationResultV02RequestedGjsVersionEnum = {
    _03: '0.3',
    _04: '0.4'
} as const;
export type InterpretationResultV02RequestedGjsVersionEnum = typeof InterpretationResultV02RequestedGjsVersionEnum[keyof typeof InterpretationResultV02RequestedGjsVersionEnum];

/**
 * @export
 */
export const InterpretationResultV02SchemaNameEnum = {
    GnawwInterpretationResult: 'gnaww.interpretation_result'
} as const;
export type InterpretationResultV02SchemaNameEnum = typeof InterpretationResultV02SchemaNameEnum[keyof typeof InterpretationResultV02SchemaNameEnum];

/**
 * @export
 */
export const InterpretationResultV02SchemaVersionEnum = {
    _02: '0.2'
} as const;
export type InterpretationResultV02SchemaVersionEnum = typeof InterpretationResultV02SchemaVersionEnum[keyof typeof InterpretationResultV02SchemaVersionEnum];

/**
 * @export
 */
export const InterpretationResultV02StatusEnum = {
    CanonicalReady: 'canonical_ready',
    ReviewRequired: 'review_required',
    NeedsReview: 'needs_review',
    Failed: 'failed'
} as const;
export type InterpretationResultV02StatusEnum = typeof InterpretationResultV02StatusEnum[keyof typeof InterpretationResultV02StatusEnum];


/**
 * Check if a given object implements the InterpretationResultV02 interface.
 */
export function instanceOfInterpretationResultV02(value: object): value is InterpretationResultV02 {
    if (!('controlledInterpretation' in value) || value['controlledInterpretation'] === undefined) return false;
    if (!('intent' in value) || value['intent'] === undefined) return false;
    if (!('requestedGjsVersion' in value) || value['requestedGjsVersion'] === undefined) return false;
    if (!('source' in value) || value['source'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    return true;
}

export function InterpretationResultV02FromJSON(json: any): InterpretationResultV02 {
    return InterpretationResultV02FromJSONTyped(json, false);
}

export function InterpretationResultV02FromJSONTyped(json: any, ignoreDiscriminator: boolean): InterpretationResultV02 {
    if (json == null) {
        return json;
    }
    return {

        'capabilityQuestions': json['capability_questions'] == null ? undefined : ((json['capability_questions'] as Array<any>).map(PublicCapabilityQuestionFromJSON)),
        'controlledInterpretation': PublicControlledInterpretationStateFromJSON(json['controlled_interpretation']),
        'intent': PublicInterpretationIntentFromJSON(json['intent']),
        'issues': json['issues'] == null ? undefined : IssueSetFromJSON(json['issues']),
        'jobs': json['jobs'] == null ? undefined : ((json['jobs'] as Array<any>).map(PublicInterpretationJobFromJSON)),
        'nextActions': json['next_actions'] == null ? undefined : json['next_actions'],
        'questions': json['questions'] == null ? undefined : ((json['questions'] as Array<any>).map(PublicInterpretationQuestionFromJSON)),
        'recommendations': json['recommendations'] == null ? undefined : ((json['recommendations'] as Array<any>).map(ProductPackResponseFromJSON)),
        'requestedGjsVersion': json['requested_gjs_version'],
        'schemaName': json['schema_name'] == null ? undefined : json['schema_name'],
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
        'sharedContext': json['shared_context'] == null ? undefined : ((json['shared_context'] as Array<any>).map(PublicSharedContextFactFromJSON)),
        'source': SourceInputFromJSON(json['source']),
        'status': json['status'],
        'truth': json['truth'] == null ? undefined : PublicInterpretationTruthStateFromJSON(json['truth']),
    };
}

export function InterpretationResultV02ToJSON(json: any): InterpretationResultV02 {
    return InterpretationResultV02ToJSONTyped(json, false);
}

export function InterpretationResultV02ToJSONTyped(value?: InterpretationResultV02 | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'capability_questions': value['capabilityQuestions'] == null ? undefined : ((value['capabilityQuestions'] as Array<any>).map(PublicCapabilityQuestionToJSON)),
        'controlled_interpretation': PublicControlledInterpretationStateToJSON(value['controlledInterpretation']),
        'intent': PublicInterpretationIntentToJSON(value['intent']),
        'issues': IssueSetToJSON(value['issues']),
        'jobs': value['jobs'] == null ? undefined : ((value['jobs'] as Array<any>).map(PublicInterpretationJobToJSON)),
        'next_actions': value['nextActions'],
        'questions': value['questions'] == null ? undefined : ((value['questions'] as Array<any>).map(PublicInterpretationQuestionToJSON)),
        'recommendations': value['recommendations'] == null ? undefined : ((value['recommendations'] as Array<any>).map(ProductPackResponseToJSON)),
        'requested_gjs_version': value['requestedGjsVersion'],
        'schema_name': value['schemaName'],
        'schema_version': value['schemaVersion'],
        'shared_context': value['sharedContext'] == null ? undefined : ((value['sharedContext'] as Array<any>).map(PublicSharedContextFactToJSON)),
        'source': SourceInputToJSON(value['source']),
        'status': value['status'],
        'truth': PublicInterpretationTruthStateToJSON(value['truth']),
    };
}
