import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Firebase } from 'src/shared/firebase';

@Injectable()
export class DataRepository {
  async addData(data: any): Promise<any> {
    try {
      const firebase = await Firebase.getFirebase();
      await firebase.push('data', {
        voltage: data.voltage,
        current: data.current,
        frequency: data.frequency,
        power: data.power,
        faultMsg: data.faultMsg ? data.faultMsg : 'No Fault',
        isFault: data.isFault ? data.isFault : false,
        line: data.line,
        timeid: new Date().valueOf(),
        time: new Date().toLocaleTimeString(),
        date: new Date().toLocaleDateString(),
      });
      // const res = await firebase.getOrderByTimeId('data');
      // console.log(res);
      return { status: 'success' };
    } catch (err) {
      console.log(err);
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    } finally {
    }
  }
}
