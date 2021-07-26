export class ChartStackedModel {
  reportDate!: string
  unCheckCase!: number
  checkCase!: number
  constructor(reportDate: string, checkCase: number, unCheckCase: number) {
    this.reportDate = reportDate
    this.unCheckCase = unCheckCase
    this.checkCase = checkCase
  }
}
