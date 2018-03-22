import * as crypto from 'crypto'

/**
 *
 * @param length number
 * @returns string
 */
export const token = (length: number): string => {
    return crypto
        .randomBytes(Math.ceil(length / 2))
        .toString('hex')
        .substr(0, length)
}
