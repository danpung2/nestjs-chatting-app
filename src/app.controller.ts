import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render("index")
  root() {
    return { data: {
        title: "Chatting App",
        copyright: "danpung2"
    }};
  }
}
