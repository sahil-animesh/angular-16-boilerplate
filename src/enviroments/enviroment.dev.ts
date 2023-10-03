import { COMMUNICATION_WITH, STORAGE_TYPE } from "src/app/shared/constant-files/constant";

export const environment = {
    production: false,
    storageType: STORAGE_TYPE.LOCAL_STORAGE,
    realTimeCommunication: COMMUNICATION_WITH.SOCKET,
    apiBaseUrl: 'xyz.com',
    secretKey: 'd41d8cd98f00b204e9800998ecf8427e',
    socketUrl: `your socket Url`,
    signalRUrl: 'your signalRUrl',
};