![Linear App Webhooks](https://cdn.sanity.io/images/ornj730p/production/240a680cf76a0364465aaa0c901aebce5fda2bea-1536x957.png)

# Linear App Discord

Listener for Linear App new issue events connected to Discord.

This is a simple express server utilizing Linear's built in webhook usage to monitor for new issue events and send alerts to the connected Discord webhook.

## Setup / Deployment

You will need to put your own [Discord webhook](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks) into the configuration file. For deployment, setup a [Heroku](https://www.heroku.com/) account and follow this [simple tutorial](https://www.youtube.com/watch?v=MxfxiR8TVNU&t=310s).

## Helpful Resources

- [Discord's Webhook Docs](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks) - How to make webhooks
- [Linear's Webhook Docs](https://github.com/linearapp/linear/blob/master/docs/Webhooks.md) - How to create a webhook connection
- [Github's Webhook Guide](https://developer.github.com/webhooks/) - Learn about webhooks
- [Heroku](https://heroku.com/) - Recommended deployment solution
- [Heroku Deployment Tutorial](https://www.youtube.com/watch?v=MxfxiR8TVNU&t=310s) - Learn how to use it

## Built With

- [Node.js](https://nodejs.org/en/) - JavaScript runtime environment
- [NPM](https://www.npmjs.com/) - Node package manager
- [Express](https://www.npmjs.com/package/express) - Web framework
- [Webhook Discord](https://www.npmjs.com/package/webhook-discord) - Easy hook sending

## Author

- **Ethan Zoller** - [Site](https://www.ethanzoller.com/) | [Twitter](https://twitter.com/ethanzolla)
- **Alistair Smith** - [Site](https://alistair.cloud/) | [Twitter](https://twitter.com/aabbccsmith)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
