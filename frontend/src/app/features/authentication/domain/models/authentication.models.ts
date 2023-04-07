export interface AuthenticationData {
    user: string;
    email: string;
}

export interface AuthenticationResponse {
    access_token: string;
    token_type: string;
}
