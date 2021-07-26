export class StatisticModel {
  icon!: string
  iconColor!: string
  value!: string
  content!: string
  index : number = 0
  constructor(icon: string, value: string, content: string, iconColor: string, index: number) {
    this.icon = icon
    this.value = value
    this.content = content
    this.iconColor = iconColor
    this.index = index
  }
}
