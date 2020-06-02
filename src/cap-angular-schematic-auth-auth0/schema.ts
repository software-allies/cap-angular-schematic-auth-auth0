export interface Schema {
    clientID: string;
    clientSecret: string;
    domain: string;
    credentials: boolean;
    endPoint: string;
    project?: string
    path?: string;
    module?: any;
    name?: any;
}