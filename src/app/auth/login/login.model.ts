export class Login {
    username: string
    password: string

    constructor(data: any = {}) {
        this.username = data.username
        this.password = data.password
    }
}

export class LocalUser {
    id: string
    name: string

    constructor(data: any = {}) {
        this.id = data.id
        this.name = data.name
    }
}