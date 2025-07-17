///WILL FORMATTING DATA\\\
//Beneficiary Data, name, relationship to will client, inheritance data\\
export type Beneficiary = {
    name: string;
    relationship: string;
    inheritance: string;
};
//Guardians of will owner, name, relationship and responsibilities\\
export type Guardian = {
    name: string;
    relationship: string;
    responsibilities: string;
};
//Executor of the will data, name and email, i.e. the Lawyer\\
export type Executor = {
    name: string;
    email: string;
}
//Metadata Variable Information, Tastator Name, Assets, Beneficiaries, Executor, Guardians, IssuedAt\\
export type WillMetadata = {
    testatorName: string;
    assets: string[];
    beneficiaries: Beneficiary[];
    executor: Executor;
    guardians?: Guardian[];
    issuedAt: string;
}