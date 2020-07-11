import { Request, Response } from 'express'

import { NotFoundError } from '../errors/NotFoundError'

export const notFound = (app: any) => {
  app.all('*', async (req: Request, res: Response) => {
    throw new NotFoundError(`Can't find ${req.originalUrl} on this server!`)
  })
}
