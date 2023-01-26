"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var import_express = __toESM(require("express"));
var import_openai = require("openai");
const configuration = new import_openai.Configuration({
  apiKey: process.env.OPENAI_API_KEY
});
const openai = new import_openai.OpenAIApi(configuration);
const app = (0, import_express.default)();
const port = 3e3;
app.get("/", async (_, res) => {
  const response = await openai.createCompletion({
    model: "code-davinci-002",
    prompt: `
      <!-- Write HTML to display SiteGPT with a cool background image. -->

      <!DOCTYPE html>
    `,
    temperature: 0,
    max_tokens: 256
  });
  res.send(response.data.choices[0].text);
});
app.listen(port, () => console.log(`server started at localhost:${port}`));
//# sourceMappingURL=index.js.map
