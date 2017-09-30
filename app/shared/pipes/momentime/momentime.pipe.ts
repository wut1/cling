import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
@Pipe({name:'momentTime'})
export class MomentTime {
    transform(value:Date):string {
        moment.locale('zh-cn')
        let time =  moment(value).fromNow();
        return time;
    }
}