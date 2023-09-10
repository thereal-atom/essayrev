import { t } from "elysia";
import { app } from "../..";
import { genRanId } from "../../utils/crypto";


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