import joi from 'joi';

import { apiHandler } from '_helpers/server/api';

module.exports = apiHandler({
    POST: send
});

async function send(req: Request) {
    const body = await req.json();
    console.log(body)
    try {
        await fetch(`https://amici.bitrix24.ru/rest/10/xj0vcee34udha3ik/tasks.task.add.json?fields[TITLE]=${body.title}&fields[DESCRIPTION]=${body.description}&fields[RESPONSIBLE_ID]=1&fields[GROUP_ID]=2`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            },
        })
    } catch (err) {
        console.log("\nERROR:\n ", err)
    }
}

send.schema = joi.object({
    title: joi.string().required(),
    description: joi.string().required()
});