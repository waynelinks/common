import { Request, Response, NextFunction } from 'express'
import { CustomError } from '../errors/CustomError'

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
// eslint-disable-next-line consistent-return
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() })
  }

  res.status(400).send({
    errors: [{ message: 'Something went wrong' }],
  })
}
