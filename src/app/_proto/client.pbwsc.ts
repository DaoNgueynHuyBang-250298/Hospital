/* tslint:disable */
/* eslint-disable */
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { GrpcCallType } from '@ngx-grpc/common';
import { GrpcWorkerServiceClientDef } from '@ngx-grpc/worker';
import * as thisProto from './client.pb';

/**
 * Client definition for use in worker
 */
export const GrpcWorkerAccountClientDef: GrpcWorkerServiceClientDef = {
  serviceId: 'client.Account',
  methods: {
    '/client.Account/signIn': {
      type: GrpcCallType.unary,
      reqclss: thisProto.UserInfo,
      resclss: thisProto.UserReply
    },
    '/client.Account/register': {
      type: GrpcCallType.unary,
      reqclss: thisProto.UserInfo,
      resclss: thisProto.UserReply
    },
    '/client.Account/updatePassword': {
      type: GrpcCallType.unary,
      reqclss: thisProto.UserInfo,
      resclss: thisProto.UserReply
    }
  }
};

/**
 * Client definition for use in worker
 */
export const GrpcWorkerDeviceClientDef: GrpcWorkerServiceClientDef = {
  serviceId: 'client.Device',
  methods: {
    '/client.Device/updateDeviceAction': {
      type: GrpcCallType.unary,
      reqclss: thisProto.DeviceRequest,
      resclss: thisProto.Response
    },
    '/client.Device/addNewDevice': {
      type: GrpcCallType.unary,
      reqclss: thisProto.DeviceInfo,
      resclss: thisProto.Response
    }
  }
};

/**
 * Client definition for use in worker
 */
export const GrpcWorkerMobileClientDef: GrpcWorkerServiceClientDef = {
  serviceId: 'client.Mobile',
  methods: {
    '/client.Mobile/getListPatientByStaff': {
      type: GrpcCallType.unary,
      reqclss: thisProto.MobileRequest,
      resclss: thisProto.PatientResponse
    },
    '/client.Mobile/getListHistory': {
      type: GrpcCallType.unary,
      reqclss: thisProto.MobileRequest,
      resclss: thisProto.PatientHistoryResponse
    },
    '/client.Mobile/getInfoStaff': {
      type: GrpcCallType.unary,
      reqclss: thisProto.MobileRequest,
      resclss: thisProto.StaffResponse
    },
    '/client.Mobile/updateStaffInfo': {
      type: GrpcCallType.unary,
      reqclss: thisProto.MobileRequest,
      resclss: thisProto.StaffResponse
    },
    '/client.Mobile/updateAvatar': {
      type: GrpcCallType.unary,
      reqclss: thisProto.MobileRequest,
      resclss: thisProto.StaffResponse
    }
  }
};
