import * as crypto from 'crypto'

/**
 * Returns a secure random generated token
 * ```js
 * token(6)
 * // returns "f97a3c"
 * ```
 */
export function token(length: number): string {
    return crypto
        .randomBytes(Math.ceil(length / 2))
        .toString('hex')
        .substr(0, length)
}
