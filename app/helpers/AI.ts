const api_key ="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"

import OpenAI from "openai";
const openai = new OpenAI();
export async function chm (){
    const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo-16k",
        store: true,
        messages: [
            {"role": "user", "content": "write a haiku about ai"}
        ]
    });
    return completion
}