import {client} from 'core/services/api';
import {SendPushTokenRequestData} from 'features/push/types';

class PushRepository {
  public sendPushToken = async (data: SendPushTokenRequestData) => {
    await client.post<never>('/push/token', data);
  };
}

export const pushRepository = Object.freeze(new PushRepository());
