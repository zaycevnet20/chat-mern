import { Request } from "express"

export type RequestWithBody<B> = Request<{}, {}, B>
export type RequestWithParamsAndBody<P, B> = Request<P, {}, B>

