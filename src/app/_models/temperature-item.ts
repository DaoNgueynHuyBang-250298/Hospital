export class TemperatureItemViewModel {
    reportDate!: string;
    isCheck!: number;
    constructor(reportDate: string, isCheck: number){
        this.reportDate = reportDate;
        this.isCheck = isCheck;
    }
}
