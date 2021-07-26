import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-synthesis-rpt',
  templateUrl: './synthesis-rpt.component.html',
  styleUrls: ['./synthesis-rpt.component.css']
})
export class SynthesisRPTComponent implements OnInit {
  Lists = [
    {"STT":"01", "KHOA":"Khoa Tổng Quát", "PHONG":"204", "GIUONG":"03", "TRANGTHAI":"Online"}, // đổi
    {"STT":"01", "KHOA":"Khoa Tổng Quát", "PHONG":"204", "GIUONG":"03", "TRANGTHAI":"Offline"},
    {"STT":"01", "KHOA":"Khoa Tổng Quát", "PHONG":"204", "GIUONG":"03", "TRANGTHAI":"Online"},
    {"STT":"01", "KHOA":"Khoa Tổng Quát", "PHONG":"204", "GIUONG":"03", "TRANGTHAI":"Offline"},
    {"STT":"01", "KHOA":"Khoa Tổng Quát", "PHONG":"204", "GIUONG":"03", "TRANGTHAI":"Online"},
    {"STT":"01", "KHOA":"Khoa Tổng Quát", "PHONG":"204", "GIUONG":"03", "TRANGTHAI":"Online"}, // đổi
    {"STT":"01", "KHOA":"Khoa Tổng Quát", "PHONG":"204", "GIUONG":"03", "TRANGTHAI":"Offline"},
    {"STT":"01", "KHOA":"Khoa Tổng Quát", "PHONG":"204", "GIUONG":"03", "TRANGTHAI":"Online"},
    {"STT":"01", "KHOA":"Khoa Tổng Quát", "PHONG":"204", "GIUONG":"03", "TRANGTHAI":"Offline"},
    {"STT":"01", "KHOA":"Khoa Tổng Quát", "PHONG":"204", "GIUONG":"03", "TRANGTHAI":"Online"},
    {"STT":"01", "KHOA":"Khoa Tổng Quát", "PHONG":"204", "GIUONG":"03", "TRANGTHAI":"Online"}, // đổi
    {"STT":"01", "KHOA":"Khoa Tổng Quát", "PHONG":"204", "GIUONG":"03", "TRANGTHAI":"Offline"},
    {"STT":"01", "KHOA":"Khoa Tổng Quát", "PHONG":"204", "GIUONG":"03", "TRANGTHAI":"Online"},
    {"STT":"01", "KHOA":"Khoa Tổng Quát", "PHONG":"204", "GIUONG":"03", "TRANGTHAI":"Offline"},
    {"STT":"01", "KHOA":"Khoa Tổng Quát", "PHONG":"204", "GIUONG":"03", "TRANGTHAI":"Online"},
    {"STT":"01", "KHOA":"Khoa Tổng Quát", "PHONG":"204", "GIUONG":"03", "TRANGTHAI":"Online"}, // đổi
    {"STT":"01", "KHOA":"Khoa Tổng Quát", "PHONG":"204", "GIUONG":"03", "TRANGTHAI":"Offline"},
    {"STT":"01", "KHOA":"Khoa Tổng Quát", "PHONG":"204", "GIUONG":"03", "TRANGTHAI":"Online"},
    {"STT":"01", "KHOA":"Khoa Tổng Quát", "PHONG":"204", "GIUONG":"03", "TRANGTHAI":"Offline"},
    {"STT":"01", "KHOA":"Khoa Tổng Quát", "PHONG":"204", "GIUONG":"03", "TRANGTHAI":"Online"},
    {"STT":"01", "KHOA":"Khoa Tổng Quát", "PHONG":"204", "GIUONG":"03", "TRANGTHAI":"Online"}, // đổi
    {"STT":"01", "KHOA":"Khoa Tổng Quát", "PHONG":"204", "GIUONG":"03", "TRANGTHAI":"Offline"},
    {"STT":"01", "KHOA":"Khoa Tổng Quát", "PHONG":"204", "GIUONG":"03", "TRANGTHAI":"Online"},
    {"STT":"01", "KHOA":"Khoa Tổng Quát", "PHONG":"204", "GIUONG":"03", "TRANGTHAI":"Offline"},
    {"STT":"01", "KHOA":"Khoa Tổng Quát", "PHONG":"204", "GIUONG":"03", "TRANGTHAI":"Online"},
    {"STT":"01", "KHOA":"Khoa Tổng Quát", "PHONG":"204", "GIUONG":"03", "TRANGTHAI":"Online"}, // đổi
    {"STT":"01", "KHOA":"Khoa Tổng Quát", "PHONG":"204", "GIUONG":"03", "TRANGTHAI":"Offline"},
    {"STT":"01", "KHOA":"Khoa Tổng Quát", "PHONG":"204", "GIUONG":"03", "TRANGTHAI":"Online"},
    {"STT":"01", "KHOA":"Khoa Tổng Quát", "PHONG":"204", "GIUONG":"03", "TRANGTHAI":"Offline"},
    {"STT":"01", "KHOA":"Khoa Tổng Quát", "PHONG":"204", "GIUONG":"03", "TRANGTHAI":"Online"},
    {"STT":"01", "KHOA":"Khoa Tổng Quát", "PHONG":"204", "GIUONG":"03", "TRANGTHAI":"Online"}, // đổi
    {"STT":"01", "KHOA":"Khoa Tổng Quát", "PHONG":"204", "GIUONG":"03", "TRANGTHAI":"Offline"},
    {"STT":"01", "KHOA":"Khoa Tổng Quát", "PHONG":"204", "GIUONG":"03", "TRANGTHAI":"Online"},
    {"STT":"01", "KHOA":"Khoa Tổng Quát", "PHONG":"204", "GIUONG":"03", "TRANGTHAI":"Offline"},
    {"STT":"01", "KHOA":"Khoa Tổng Quát", "PHONG":"204", "GIUONG":"03", "TRANGTHAI":"Online"},
    {"STT":"01", "KHOA":"Khoa Tổng Quát", "PHONG":"204", "GIUONG":"03", "TRANGTHAI":"Online"}, // đổi
    {"STT":"01", "KHOA":"Khoa Tổng Quát", "PHONG":"204", "GIUONG":"03", "TRANGTHAI":"Offline"},
    {"STT":"01", "KHOA":"Khoa Tổng Quát", "PHONG":"204", "GIUONG":"03", "TRANGTHAI":"Online"},
    {"STT":"01", "KHOA":"Khoa Tổng Quát", "PHONG":"204", "GIUONG":"03", "TRANGTHAI":"Offline"},
    {"STT":"01", "KHOA":"Khoa Tổng Quát", "PHONG":"204", "GIUONG":"03", "TRANGTHAI":"Online"},
    {"STT":"01", "KHOA":"Khoa Tổng Quát", "PHONG":"204", "GIUONG":"03", "TRANGTHAI":"Online"}, // đổi
    {"STT":"01", "KHOA":"Khoa Tổng Quát", "PHONG":"204", "GIUONG":"03", "TRANGTHAI":"Offline"},
    {"STT":"01", "KHOA":"Khoa Tổng Quát", "PHONG":"204", "GIUONG":"03", "TRANGTHAI":"Online"},
    {"STT":"01", "KHOA":"Khoa Tổng Quát", "PHONG":"204", "GIUONG":"03", "TRANGTHAI":"Offline"},
    {"STT":"01", "KHOA":"Khoa Tổng Quát", "PHONG":"204", "GIUONG":"03", "TRANGTHAI":"Online"},
    {"STT":"01", "KHOA":"Khoa Tổng Quát", "PHONG":"204", "GIUONG":"03", "TRANGTHAI":"Online"}, // đổi
    {"STT":"01", "KHOA":"Khoa Tổng Quát", "PHONG":"204", "GIUONG":"03", "TRANGTHAI":"Offline"},
    {"STT":"01", "KHOA":"Khoa Tổng Quát", "PHONG":"204", "GIUONG":"03", "TRANGTHAI":"Online"},
    {"STT":"01", "KHOA":"Khoa Tổng Quát", "PHONG":"204", "GIUONG":"03", "TRANGTHAI":"Offline"},
    {"STT":"01", "KHOA":"Khoa Tổng Quát", "PHONG":"204", "GIUONG":"03", "TRANGTHAI":"Online"},
    {"STT":"01", "KHOA":"Khoa Tổng Quát", "PHONG":"204", "GIUONG":"03", "TRANGTHAI":"Online"}, // đổi
    {"STT":"01", "KHOA":"Khoa Tổng Quát", "PHONG":"204", "GIUONG":"03", "TRANGTHAI":"Offline"},
    {"STT":"01", "KHOA":"Khoa Tổng Quát", "PHONG":"204", "GIUONG":"03", "TRANGTHAI":"Online"},
    {"STT":"01", "KHOA":"Khoa Tổng Quát", "PHONG":"204", "GIUONG":"03", "TRANGTHAI":"Offline"},
    {"STT":"01", "KHOA":"Khoa Tổng Quát", "PHONG":"204", "GIUONG":"03", "TRANGTHAI":"Online"},
    {"STT":"01", "KHOA":"Khoa Tổng Quát", "PHONG":"204", "GIUONG":"03", "TRANGTHAI":"Online"}, // đổi
    {"STT":"01", "KHOA":"Khoa Tổng Quát", "PHONG":"204", "GIUONG":"03", "TRANGTHAI":"Offline"},
    {"STT":"01", "KHOA":"Khoa Tổng Quát", "PHONG":"204", "GIUONG":"03", "TRANGTHAI":"Online"},
    {"STT":"01", "KHOA":"Khoa Tổng Quát", "PHONG":"204", "GIUONG":"03", "TRANGTHAI":"Offline"},
    {"STT":"01", "KHOA":"Khoa Tổng Quát", "PHONG":"204", "GIUONG":"03", "TRANGTHAI":"Online"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
