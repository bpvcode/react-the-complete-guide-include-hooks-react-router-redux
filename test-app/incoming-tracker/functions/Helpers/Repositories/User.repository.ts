import { AirtableTables, AirtableUserFields, getAirtableTable } from "./AirtableConfig";
import { User } from "../Modals/User";

export const getAllUsersRepository = async () => {
    const userTable = getAirtableTable(AirtableTables.USERS);
    let users: User[] = [];

    const selected = await userTable
        .select({
        fields: [AirtableUserFields.ID, AirtableUserFields.NAME, AirtableUserFields.ROLES, AirtableUserFields.RESTAURANT_ROLES]
        })
        .eachPage((records, next) => {
        records.forEach((record) => {
            users.push(record._rawJson.fields)
        });
        next()
        })
        .catch((error) => {
        return {
            statusCode: 500,
            body: error.message,
            headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Authorization, Content-Type"
            }
        }
        })

    return users;
}
