import axios from "axios";
import dayjs from "dayjs";

const webhook =
  "https://oapi.dingtalk.com/robot/send?access_token=704b8017c745fee233be009d93fce196f05e053942c7ea75da012d51c78c48e9";
const markdown = {
  msgtype: "markdown",
  markdown: {
    title: "打卡提醒",
    text: `
    ### 💣打卡提醒
    ${dayjs().format("YYYY-MM-DD HH:mm:ss")}
    别再忘了打卡我哥😂！
    `,
  },
};

axios
  .post(webhook, markdown)
  .then((result) => {
    console.log("Markdown消息已推送 ...");
  })
  .catch((error) => {
    console.error("推送失败 ...", error);
  });
