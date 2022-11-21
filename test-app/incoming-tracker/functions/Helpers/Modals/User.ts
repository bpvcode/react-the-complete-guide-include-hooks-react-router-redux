import { Restaurants } from "./RestaurantsEnum";
import { Roles } from "./RolesEnum";

export interface User{
    id: number,
    name: string,
    password: string,
    roles: Roles[],
    restaurantRoles: Restaurants[],
    selectedRestaurant: Restaurants
}