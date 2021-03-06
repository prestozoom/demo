import { Moment } from 'moment';

export const enum Language {
    FRENCH = 'FRENCH',
    ENGLISH = 'ENGLISH',
    SPANISH = 'SPANISH',
    TAGALOG = 'TAGALOG'
}

export interface IJobHistoryJobOrder {
    id?: number;
    startDate?: Moment;
    endDate?: Moment;
    language?: Language;
    jobId?: number;
    departmentId?: number;
    employeeId?: number;
    invoiceId?: number;
}

export class JobHistoryJobOrder implements IJobHistoryJobOrder {
    constructor(
        public id?: number,
        public startDate?: Moment,
        public endDate?: Moment,
        public language?: Language,
        public jobId?: number,
        public departmentId?: number,
        public employeeId?: number,
        public invoiceId?: number
    ) {}
}
