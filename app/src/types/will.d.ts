

export type Beneficiary = {
    name: string;
    relationship: string;
    inheritance: string;
};

export type Guardian = {
    name: string;
    relationship: string;
    responsibilities: string;
};

export type Executor = {
    name: string;
    email: string;
}

export type WillMetadata = {
    testatorName: string;
    assets: string[];
    beneficiaries: Beneficiary[];
    executor: Executor;
    guardians?: Guardian[];
    issuedAt: string;
}