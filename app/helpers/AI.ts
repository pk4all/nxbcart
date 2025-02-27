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