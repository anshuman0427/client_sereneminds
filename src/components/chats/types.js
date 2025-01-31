/**
 * @typedef {Object} UserProps
 * @property {string} name
 * @property {string} username
 * @property {string} avatar
 * @property {boolean} online
 */

/**
 * @typedef {Object} MessageProps
 * @property {string} id
 * @property {string} content
 * @property {string} timestamp
 * @property {boolean} [unread]
 * @property {UserProps | 'You'} sender
 * @property {{ fileName: string, type: string, size: string }} [attachment]
 */

/**
 * @typedef {Object} ChatProps
 * @property {string} id
 * @property {UserProps} sender
 * @property {MessageProps[]} messages
 */
