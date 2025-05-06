"use server"

import docClient from "./db";
import { ScanCommand, GetCommand } from "@aws-sdk/lib-dynamodb";

export const getProductsByCategory = async (category: string) => {

    try {
       
        const products = docClient.send(new ScanCommand({
            TableName: "kedi",
            FilterExpression: "category = :categoryValue",
            
            ExpressionAttributeValues: {
                ":categoryValue": category
            }
        }));

        return (await products);

    } catch (er) {
        console.error(er);
    }

}

export const getProduct = async (productId: string) => {

    const products = docClient.send(new GetCommand({
        TableName: "kedi",
        Key: {
            product_id: productId
        }
    }));

    return (await products).Item;
}

export const query = async (term: string) => {
    try {
        const results = docClient.send(
            new ScanCommand({
                TableName: "kedi",
                FilterExpression: "contains(title, :term) OR contains(category, :term) OR contains(old_price, :term)",
                ExpressionAttributeValues: {
                    ":term": term
                }
            }));
        return {
            count: (await results).Count,
            items: (await results).Items
        }

    } catch (e) {
        console.error(e);
    }
}
