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
                const absoluteAcc = Math.abs(acc);

                if (absoluteItem < absoluteAcc) {
                    acc = item;
                } else if (absoluteItem === absoluteAcc) {
                    acc = absoluteItem;
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
                const absoluteAcc = Math.abs(acc);

                if (absoluteItem < absoluteAcc) {
                    acc = item;
                } else if (absoluteItem === absoluteAcc) {
                    acc = absoluteItem;
                }

                return acc;
            });

            return value;
        }

        return 0;
    }
}
