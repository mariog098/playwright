import { TelegramBot } from "node-telegram-bot-api";

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

export default async function sendTelegramMessage(message: string) {
    if(!TELEGRAM_BOT_TOKEN) {
        console.warn('TELEGRAM_BOT_TOKEN is not set');
        return;
    }

    const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: true });
    try {
        await bot.sendMessage(TELEGRAM_BOT_TOKEN, message);
    } catch (error) {
        console.error(error);
    }
}

