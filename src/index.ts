import { HfInference } from "@huggingface/inference";
import "dotenv/config";
import { Bot, InputFile } from "grammy";

const bot = new Bot(process.env.token);

const hfInference = new HfInference(process.env.accessToken);

bot.on("message:text", async (context) => {
  await context.reply("🖼 Image is generating...");

  const blob = await hfInference.textToImage({
    inputs: context.message.text,
    model: "stabilityai/stable-diffusion-2",
  });

  await context.replyWithPhoto(
    new InputFile(new Uint8Array(await blob.arrayBuffer()))
  );
});

bot.start();
