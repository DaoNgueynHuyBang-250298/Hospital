/* tslint:disable */
/* eslint-disable */
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { GrpcCallType } from '@ngx-grpc/common';
import { GrpcWorkerServiceClientDef } from '@ngx-grpc/worker';
import * as thisProto from './administrator.pb';
import * as client000 from './client.pb';
/**
 * Client definition for use in worker
 */
export const GrpcWorkerAdministratorClientDef: GrpcWorkerServiceClientDef = {
  serviceId: 'client.Administrator',
  methods: {
    '/client.Administrator/getListPatient': {
      type: GrpcCallType.unary,
      reqclss: client000.MasterRequest,
      resclss: client000.PatientResponse
    },
    '/client.Administrator/getListStaff': {
      type: GrpcCallType.unary,
      reqclss: client000.MasterRequest,
      resclss: client000.StaffResponse
    },
    '/client.Administrator/insertStaff': {
      type: GrpcCallType.unary,
      reqclss: client000.MasterRequest,
      resclss: client000.StaffResponse
    },
    '/client.Administrator/insertMultyStaff': {
      type: GrpcCallType.unary,
      reqclss: client000.MasterRequest,
      resclss: client000.StaffResponse
    },
    '/client.Administrator/insertMultyBed': {
      type: GrpcCallType.unary,
      reqclss: client000.MasterRequest,
      resclss: client000.BedResponse
    },
    '/client.Administrator/getListBed': {
      type: GrpcCallType.unary,
      reqclss: client000.MasterRequest,
      resclss: client000.BedResponse
    },
    '/client.Administrator/modifyBed': {
      type: GrpcCallType.unary,
      reqclss: client000.MasterRequest,
      resclss: client000.BedResponse
    }
  }
};
