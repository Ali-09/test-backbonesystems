export type ContactRules = {
    firstName: { required: RequiredType };
    lastName: { required: RequiredType };
    email: { required: RequiredType; pattern: PatternEmailType };
    phone: { required: RequiredType }
}

export type RequiredType = {
    value: boolean,
    message: string
}

export type PatternEmailType = {
    value: RegExp,
    message: string
}

