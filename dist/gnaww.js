"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GnawwClient = exports.GnawwApiError = void 0;
const runtime_1 = require("./runtime");
const apis_1 = require("./apis");
class GnawwApiError extends Error {
    constructor(error) {
        super(error.message);
        this.name = "GnawwApiError";
        this.error = error;
    }
}
exports.GnawwApiError = GnawwApiError;
class GnawwClient {
    constructor(options) {
        var _a;
        const headers = {
            "X-Gnaww-Source-Channel": "sdk",
            "X-Gnaww-Client-Id": "gnaww-typescript-sdk",
        };
        if (options.workspaceId) {
            headers["X-Gnaww-Workspace-Id"] = options.workspaceId;
        }
        const configuration = new runtime_1.Configuration({
            basePath: ((_a = options.baseUrl) !== null && _a !== void 0 ? _a : "https://api.gnaww.io").replace(/\/+$/, ""),
            apiKey: options.apiKey,
            headers,
            fetchApi: options.fetchApi,
        });
        this.interpretation = new apis_1.InterpretationApi(configuration);
        this.recipes = new apis_1.RecipesApi(configuration);
    }
    consume(requirement) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.consumeDetailed(requirement)).data;
        });
    }
    consumeDetailed(requirement) {
        return __awaiter(this, void 0, void 0, function* () {
            const source = {
                type: "natural_language",
                rawText: requirement,
            };
            return this.detailed(() => this.interpretation.interpretPrintRequirementRaw({
                interpretPrintRequirementRequest: {
                    source,
                    gjsVersion: "0.4",
                },
            }));
        });
    }
    continueRequirement(requirement, answers) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.continueRequirementDetailed(requirement, answers)).data;
        });
    }
    continueRequirementDetailed(requirement, answers) {
        return __awaiter(this, void 0, void 0, function* () {
            const source = {
                type: "natural_language",
                rawText: requirement,
            };
            return this.detailed(() => this.interpretation.continuePrintRequirementInterpretationRaw({
                continueInterpretationRequestV02: {
                    source,
                    gjsVersion: "0.4",
                    answers,
                },
            }));
        });
    }
    getRecipe(recipeId) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.getRecipeDetailed(recipeId)).data;
        });
    }
    getRecipeDetailed(recipeId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.detailed(() => this.recipes.getRecipeRaw({
                recipeId,
            }));
        });
    }
    resolveRecipe(gjs) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.resolveRecipeDetailed(gjs)).data;
        });
    }
    resolveRecipeDetailed(gjs) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.detailed(() => this.recipes.resolveRecipeRaw({
                resolveRecipeRequest: {
                    gjs,
                },
            }));
        });
    }
    crunch(recipeId, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.crunchDetailed(recipeId, options)).data;
        });
    }
    crunchDetailed(recipeId, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.detailed(() => this.recipes.matchRecipeRaw({
                recipeId,
                matchRecipeRequest: {
                    quantity: options.quantity,
                    target: options.target,
                },
            }));
        });
    }
    detailed(call) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            try {
                const response = yield call();
                return {
                    data: yield response.value(),
                    status: response.raw.status,
                    requestId: (_a = response.raw.headers.get("X-Request-Id")) !== null && _a !== void 0 ? _a : undefined,
                    correlationId: (_b = response.raw.headers.get("X-Correlation-Id")) !== null && _b !== void 0 ? _b : undefined,
                };
            }
            catch (error) {
                if (error instanceof runtime_1.ResponseError) {
                    throw new GnawwApiError(yield publicErrorFromResponse(error.response));
                }
                throw error;
            }
        });
    }
}
exports.GnawwClient = GnawwClient;
function publicErrorFromResponse(response) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f;
        let decoded;
        try {
            decoded = yield response.clone().json();
        }
        catch (_g) {
            decoded = undefined;
        }
        if (typeof decoded === "object" &&
            decoded !== null &&
            "error" in decoded &&
            typeof decoded.error === "object" &&
            decoded.error !== null) {
            const publicError = decoded.error;
            return {
                code: stringValue(publicError.code, "api_error"),
                message: stringValue(publicError.message, "Gnaww rejected the developer API request."),
                status: numberValue(publicError.status, response.status),
                requestId: (_b = (_a = optionalString(publicError.request_id)) !== null && _a !== void 0 ? _a : response.headers.get("X-Request-Id")) !== null && _b !== void 0 ? _b : undefined,
                correlationId: (_d = (_c = optionalString(publicError.correlation_id)) !== null && _c !== void 0 ? _c : response.headers.get("X-Correlation-Id")) !== null && _d !== void 0 ? _d : undefined,
                retryable: booleanValue(publicError.retryable, false),
            };
        }
        return {
            code: "api_error",
            message: "Gnaww rejected the developer API request.",
            status: response.status,
            requestId: (_e = response.headers.get("X-Request-Id")) !== null && _e !== void 0 ? _e : undefined,
            correlationId: (_f = response.headers.get("X-Correlation-Id")) !== null && _f !== void 0 ? _f : undefined,
            retryable: false,
        };
    });
}
function stringValue(value, fallback) {
    return typeof value === "string" ? value : fallback;
}
function optionalString(value) {
    return typeof value === "string" ? value : undefined;
}
function numberValue(value, fallback) {
    return typeof value === "number" ? value : fallback;
}
function booleanValue(value, fallback) {
    return typeof value === "boolean" ? value : fallback;
}
