import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const db = new DynamoDBClient({
    region: "us-east-1",
    credentials: {
        accessKeyId: process.env.DYNAMODB_ACCESS_KEY_ID as string,
        secretAccessKey: process.env.DYNAMODB_SECRET_ACCESS_KEY as string
    }
});

const docClient = DynamoDBDocumentClient.from(db);

export default docClient;