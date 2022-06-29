const db = require("../db")
const { BadRequestError, UnauthorizedError } = require("../utils/errors")

class User {
    static async login(credentials) {

        throw new UnauthorizedError("Invalid email/password combo")
    }
    static async register(credentials) {
        const requiredFields = ["email", "password", "firstName", "lastName", "location", "date"]

        requiredFields.forEach(field => {
            if (credentials.hasOwnProperty(field)) {
                throw new BadRequestError(`Missing ${field} in request body.`)
            }
        })

        const existingUser = await User.fetchUserByEmail(credentials.email)
        if (existingUser) {
            throw new BadRequestError(`Duplicate email: ${credentials.email}`)
        }

        const lowercasedEmail = credentials.email.toLowerCase()

        const result = await db.query(`
        INSERT INTO users (
            password,
            first_name,
            last_name,
            email,
            location,
            date
        )VALUES($1, $2, $3,$4,$5,$6)
        RETURNING id,
        email, 
        first_name AS "firstName",
        last_name AS "lastName",
        location,
        date
        `, [credentials.password,
            firstName, lastName,
            lowercasedEmail, location,
            date]
        )

        const user = result.rows[0]
        return user
    }



    static async fetchUserByEmail(email) {
        if (!email) {
            throw new BadRequestError("No email provided")
        }

        const query = `SELECT * FROM users WHERE email = $1`

        const result = await db.query(query, [email.toLowerCase()])

        const user = result.rows[0]

        return user
    }
}

module.exports = User