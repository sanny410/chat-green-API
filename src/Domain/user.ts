export type UserIdInstance = string;
export type UserApiTokenInstance = string;
export type MessageWinContact = string;
export type MessageText = string;
export type QuotedMessageId = string;
export type ContactWin = string;
export type IdMessage = number;

export interface User {
    idInstance: UserIdInstance,
    apiToken: UserApiTokenInstance,
}

export interface MessageRequest {
    winContact: MessageWinContact,
    message: MessageText;
    quotedMessageId?: QuotedMessageId;
    archiveChat?: boolean;
    linkPreview?: boolean;
}

export interface Contact {
    win: ContactWin;
    chatList: Message[];
}

export interface Message {
    win: ContactWin;
    idMessage: IdMessage;
    text: MessageText
}

export interface UpdateInfo {
    win: ContactWin
    message: Message,
}

export const updateContactList = (contact: Contact, contactList: Contact[]): Contact[] => {
    return contactList.map((item,) => {
        if (item.win === contact.win) item = contact;
        return item;
    });
};


