export interface PreferenceProps {
    amount: number;
    installments: number
    product: string;

}
export interface PreApprovalProps {
    email: string;
}

export interface SendEmailProps {
    email: string, 
    subject: string,
    body: string,
    html: string
}