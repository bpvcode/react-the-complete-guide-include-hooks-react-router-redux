import { Handler } from '@netlify/functions'
import { getAllUsersService } from '../Helpers/Services/User/User.service';


export const handler: Handler = async (event, context) => {
  const users = await getAllUsersService();

  return {
    statusCode: 200,
    body: JSON.stringify(users),
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Authorization, Content-Type"
    }
  }
}
