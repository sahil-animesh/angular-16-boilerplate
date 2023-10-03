import { STORAGE_TYPE, COMMUNICATION_WITH } from "src/app/shared/constant-files/constant";

export const environment = {
    production: true,
    storageType: STORAGE_TYPE.LOCAL_STORAGE,
    apiBaseUrl: 'xyz.com',
    secretKey: 'd41d8cd98f00b204e9800998ecf8427e',
    socketUrl: `your socket Url`,
    signalRUrl: 'your signalRUrl',
    realTimeCommunication: COMMUNICATION_WITH.SOCKET,
};