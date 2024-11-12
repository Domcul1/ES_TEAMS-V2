//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "examsolutionteam@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/ec33ecf51f928d0a89a1b.jpg";
global.devs = "https://t.me/examsolutionteam";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/a81247659e996130a88ea.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y";
global.scan = "https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0Zrc2ZmOC9wVlRYVk5KWnFKb1RSNDUxeFFLanp4YTA2dm1oSms5NFZIRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQyt4cWJTY0lhNXgvYmVxckk5NkdsVmJOb0pRMCtyYnljUnhGdVU3TnhuMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvT1o2R3RhZVI4NldadC9hK1EwR3JYZExQUGpiaVhpSXBoaUxkTG9taEZnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaMkhMZFBGYUdGaEcrWHIrR0Vmamk4ZnFKVVVyNUdrNUVCU1R2dUh3NlFVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdON1dMbTYrMDN4aGtPOWdjZ3dwenR1UlV3Rkx3dVdhN1Z2UmxIb2paV2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdBZmNpajYvNzVBM1VyTGRTTDhYK1N5NWlib00rUnV4YzBpL0Z0QmJaM009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkV4Vk8ya1RGbTRRWVo0a0tsbXJGZ2VvNHVlUGpDc0FZOTRURDh4NzZHST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYWUzZE03aGVIN1o4S05IRHdEbHdGL3Z3QUhaWjZIQWNLczQyOE04aDgyVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1ORjRXRFRhVUVqT1pkWWwzTnpQWFRNYS9VdDQxWW9DRmxUWUVtamtWVkdyaWVxajJua09JZUtITk1FRlVPTGt3c2xPNllJOEV2K1U0T1lRelBHZUF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIwLCJhZHZTZWNyZXRLZXkiOiJkWEpudjdnbWU2UUljQTdIZGVlUWJ5L1FaSUU5RmFXS1pVSUpQVjNWcXBRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJldFlZR1VHTlF6aTJvVkN2c1NDUDN3IiwicGhvbmVJZCI6ImM0MGI0ZWQzLTgwOGMtNGQ0Zi1hZmQ4LWM5NTVjYmI2YmIyMCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXa1MzRmhSZkVRSW4vSUU4MkJyRW1oVlgvUFk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUlJBdHVLaWJRMjkzZ2JORzU2Z2hjMHZ2RHNRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlROOVdGRDhQIiwibWUiOnsiaWQiOiIyMzQ3MDY4MDQxMzAzOjE1QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPaWh2Yk1DRUk3Snk3a0dHQVlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ5SDUycmlDcEVUZlVSeDdtQmdBMmVEQXVVNllmYzd0RTZZcWgzWHp3Y21FPSIsImFjY291bnRTaWduYXR1cmUiOiJ4NjNDdndRRTZkaGMvVGJqcEVVeXJkUVhTTmxjMTMrZlpYTlVTRy9CTjdQV2ViZHlPb3VyVlZaaloxVUU3cGlIUVVoNko3WVl2dk8ySm1COTdtZHNDUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoid0tXajZ1MWhpa3Y3aHNRMkM1bzhLcjl6K3RWTWlpSmdWUDFkcXV5OWNHOG9tYkRGdW0rbDhncHd5NmxxSno5OGRWTDlaK2JDZzlLWUdwbStvYVY2QkE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDY4MDQxMzAzOjE1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmNoK2RxNGdxUkUzMUVjZTVnWUFObmd3TGxPbUgzTzdST21Lb2QxODhISmgifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzEzODg1NzEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBR3VEIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "!",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "ℙ𝕆𝕎𝔼ℝ𝔼𝔻 𝔹𝕐 𝔼𝕊 𝕋𝔼𝔸𝕄𝕊-𝕍2👑",
  author: process.env.PACK_AUTHER || "ES TEAMS-V2",
  packname: process.env.PACK_NAME || "ES TEAMS",
  botname: process.env.BOT_NAME || "𝔼𝕊 𝕋𝔼𝔸𝕄𝕊-𝕍2👑",
  ownername: process.env.OWNER_NAME || "𝔼𝕊 𝕋𝔼𝔸𝕄𝕊-𝕋𝔼ℂℍ👑",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "ES TEAMS").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
