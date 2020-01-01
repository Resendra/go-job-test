import { Injectable } from '@nestjs/common';
import { isNil, isEmpty } from 'lodash';

@Injectable()
export class UtilsService {
    public getClosestToZero(items: number[]): number {
        if (items && items.length > 0) {
            const value = items.reduce((acc, item) => {

                if (!Number.isSafeInteger(item)) {
                    throw new Error('Integer not safe');
                }

                if (!acc) {
                    return item;
                }

                const absoluteItem = Math.abs(item);

                if (absoluteItem < acc) {
                    acc = item;
                }

                return acc;
            });

            return value;
        }

        return 0;
    }

    public getClosestToZeroLo(items: number[]): number {
        if (!isEmpty(items)) {
            const value = items.reduce((acc, item) => {

                if (!Number.isSafeInteger(item)) {
                    throw new Error('Integer not safe');
                }

                if (isNil(acc)) {
                    return item;
                }

                const absoluteItem = Math.abs(item);

                if (absoluteItem < acc) {
                    acc = item;
                }

                return acc;
            });

            return value;
        }

        return 0;
    }
}
