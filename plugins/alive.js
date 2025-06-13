const { cmd } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const config = require('../config');

cmd({
    pattern: "alive",
    alias: ["status", "online", "a"],
    desc: "Check bot is alive or not",
    category: "main",
    react: "⚡",
    filename: __filename
},
async (conn, mek, m, { from, sender, reply }) => {
    try {
        const status = `𝐃𝐀𝐅𝐅𝐀 𝐌𝐃 𝐈𝐒 𝐀𝐋𝐈𝐕𝐄 𝐍𝐎𝐖 👋"

𝐇𝐎𝐖 𝐂𝐀𝐍 𝐈 𝐇𝐄𝐋𝐏 𝐘𝐎𝐔 𝐓𝐎𝐃𝐀𝐘 ⚔

*හායි, මම ඔන්ලයින් ඔබට උදව් කරන්නෙ කෙසේද මම ⚔*
        
        `;

        await conn.sendMessage(from, {
            image: { url: config.MENU_IMAGE_URL },
            caption: status,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 1000,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '12228@newsletter',
                    newsletterName: 'ＤＡＦＦＡ 囧',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Alive Error:", e);
        reply(`An error occurred: ${e.message}`);
    }
});
