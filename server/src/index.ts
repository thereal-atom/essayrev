import { Elysia, t } from "elysia";
import { genRanId } from "./utils/crypto";

export const app = new Elysia();

app.post(
    "/essay",
    ({ body }) => {
        return {
            ...body,
            id: genRanId("essay"),
            createdAt: new Date(),
        };
    },
    {
        body: t.Object({
            name: t.String(),
            text: t.String(),
        }),
    },
);
app.get(
    "/essay/:id",
    () => {},
);

app.listen(50451, server => console.log(`🦊 Elysia is running at ${server?.hostname}:${server?.port}`));