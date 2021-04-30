export class User {
    id: number
    name: string
    phone: string
    email: string
    website: string
    logo: string
    logoName: string
    account_management_id

    constructor(data: any = {}) {
        this.id = data.id
        this.name = data.name
        this.phone = data.phone
        this.email = data.email
        this.website = data.website
        this.logo = data.logo
        this.logoName = data.logoName
        this.account_management_id = data.account_management_id
    }
}