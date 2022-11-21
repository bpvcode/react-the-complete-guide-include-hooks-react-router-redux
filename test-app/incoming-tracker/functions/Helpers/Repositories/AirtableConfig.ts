import Airtable from "airtable";
import * as dotenv from "dotenv";

export enum AirtableTables{
    USERS = 'User',
    DAILY_REPORT = "Daily Report"
}

export enum AirtableUserFields{
    ID = 'id',
    NAME = "name",
    PASSWORD = "password",
    ROLES = "roles",
    RESTAURANT_ROLES = "restaurantRoles",
    SELECTED_RESTAURANT = "selectedRestaurant"
}

export const getAirtableTable = (tableName: string) => {
    const base = getAirtableBase();
    return base(tableName);
}

const getAirtableBase = () => {
    const {AIRTABLE_API_KEY , AIRTABLE_BASE_ID} = process.env;
    return new Airtable({apiKey: AIRTABLE_API_KEY}).base(AIRTABLE_BASE_ID as string)
}