import joi from 'joi';

import { apiHandler } from '_helpers/server/api';

module.exports = apiHandler({
    POST: send
});

async function send(req: Request) {
    const body = await req.json();
    try {
        await fetch('https://api.tracker.yandex.net/v2/issues/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'OAuth y0_AgAAAAAd_uiVAAtX9gAAAAD8GOT9AAAu7u3BJcdNFbVedgk2Q20WTveUiA',
                'X-Cloud-Org-ID': 'bpfrqd036ajrj2nmba9m'
            },
            body: JSON.stringify(body)
        })
    } catch (err) {
        console.log("\nERROR:\n ", err)
    }
}

send.schema = joi.object({
    summary: joi.string().required(),
    queue: joi.string().required(),
    description: joi.string().required()
});