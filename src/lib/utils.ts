import * as crypto from 'crypto'

export const token = (length: number): string =>
    crypto.randomBytes(Math.round(length / 2)).toString('hex')
