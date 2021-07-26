/* tslint:disable */
/* eslint-disable */
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import {
  GrpcCallType,
  GrpcClient,
  GrpcClientFactory,
  GrpcClientSettings,
  GrpcEvent
} from '@ngx-grpc/common';
import {
  GRPC_CLIENT_FACTORY,
  GrpcHandler,
  takeMessages,
  throwStatusErrors
} from '@ngx-grpc/core';
import { Metadata } from 'grpc-web';
import { Observable } from 'rxjs';
import * as thisProto from './client.pb';
import {
  GRPC_ACCOUNT_CLIENT_SETTINGS,
  GRPC_DEVICE_CLIENT_SETTINGS,
  GRPC_MOBILE_CLIENT_SETTINGS
} from './client.pbconf';
/**
 * Service client implementation for client.Account
 */
@Injectable({
  providedIn: 'root'
})
export class AccountClient {
  private client: GrpcClient;

  constructor(
    @Optional()
    @Inject(GRPC_ACCOUNT_CLIENT_SETTINGS)
    settings: GrpcClientSettings,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('client.Account', settings);
  }

  /**
   * Unary RPC for /client.Account/signIn
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.UserReply>
   */
  signIn(
    requestData: thisProto.UserInfo,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.UserReply> {
    return this.signIn$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /client.Account/signIn
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.UserReply>>
   */
  signIn$eventStream(
    requestData: thisProto.UserInfo,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.UserReply>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/client.Account/signIn',
      requestData,
      requestMetadata,
      requestClass: thisProto.UserInfo,
      responseClass: thisProto.UserReply
    });
  }

  /**
   * Unary RPC for /client.Account/register
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.UserReply>
   */
  register(
    requestData: thisProto.UserInfo,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.UserReply> {
    return this.register$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /client.Account/register
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.UserReply>>
   */
  register$eventStream(
    requestData: thisProto.UserInfo,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.UserReply>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/client.Account/register',
      requestData,
      requestMetadata,
      requestClass: thisProto.UserInfo,
      responseClass: thisProto.UserReply
    });
  }

  /**
   * Unary RPC for /client.Account/updatePassword
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.UserReply>
   */
  updatePassword(
    requestData: thisProto.UserInfo,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.UserReply> {
    return this.updatePassword$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /client.Account/updatePassword
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.UserReply>>
   */
  updatePassword$eventStream(
    requestData: thisProto.UserInfo,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.UserReply>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/client.Account/updatePassword',
      requestData,
      requestMetadata,
      requestClass: thisProto.UserInfo,
      responseClass: thisProto.UserReply
    });
  }
}
/**
 * Service client implementation for client.Device
 */
@Injectable({
  providedIn: 'root'
})
export class DeviceClient {
  private client: GrpcClient;

  constructor(
    @Optional()
    @Inject(GRPC_DEVICE_CLIENT_SETTINGS)
    settings: GrpcClientSettings,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('client.Device', settings);
  }

  /**
   * Unary RPC for /client.Device/updateDeviceAction
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Response>
   */
  updateDeviceAction(
    requestData: thisProto.DeviceRequest,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.Response> {
    return this.updateDeviceAction$eventStream(
      requestData,
      requestMetadata
    ).pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Device/updateDeviceAction
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.Response>>
   */
  updateDeviceAction$eventStream(
    requestData: thisProto.DeviceRequest,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.Response>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/client.Device/updateDeviceAction',
      requestData,
      requestMetadata,
      requestClass: thisProto.DeviceRequest,
      responseClass: thisProto.Response
    });
  }

  /**
   * Unary RPC for /client.Device/addNewDevice
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Response>
   */
  addNewDevice(
    requestData: thisProto.DeviceInfo,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.Response> {
    return this.addNewDevice$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /client.Device/addNewDevice
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.Response>>
   */
  addNewDevice$eventStream(
    requestData: thisProto.DeviceInfo,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.Response>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/client.Device/addNewDevice',
      requestData,
      requestMetadata,
      requestClass: thisProto.DeviceInfo,
      responseClass: thisProto.Response
    });
  }
}
/**
 * Service client implementation for client.Mobile
 */
@Injectable({
  providedIn: 'root'
})
export class MobileClient {
  private client: GrpcClient;

  constructor(
    @Optional()
    @Inject(GRPC_MOBILE_CLIENT_SETTINGS)
    settings: GrpcClientSettings,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('client.Mobile', settings);
  }

  /**
   * Unary RPC for /client.Mobile/getListPatientByStaff
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.PatientResponse>
   */
  getListPatientByStaff(
    requestData: thisProto.MobileRequest,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.PatientResponse> {
    return this.getListPatientByStaff$eventStream(
      requestData,
      requestMetadata
    ).pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /client.Mobile/getListPatientByStaff
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.PatientResponse>>
   */
  getListPatientByStaff$eventStream(
    requestData: thisProto.MobileRequest,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.PatientResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/client.Mobile/getListPatientByStaff',
      requestData,
      requestMetadata,
      requestClass: thisProto.MobileRequest,
      responseClass: thisProto.PatientResponse
    });
  }

  /**
   * Unary RPC for /client.Mobile/getListHistory
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.PatientHistoryResponse>
   */
  getListHistory(
    requestData: thisProto.MobileRequest,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.PatientHistoryResponse> {
    return this.getListHistory$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /client.Mobile/getListHistory
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.PatientHistoryResponse>>
   */
  getListHistory$eventStream(
    requestData: thisProto.MobileRequest,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.PatientHistoryResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/client.Mobile/getListHistory',
      requestData,
      requestMetadata,
      requestClass: thisProto.MobileRequest,
      responseClass: thisProto.PatientHistoryResponse
    });
  }

  /**
   * Unary RPC for /client.Mobile/getInfoStaff
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.StaffResponse>
   */
  getInfoStaff(
    requestData: thisProto.MobileRequest,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.StaffResponse> {
    return this.getInfoStaff$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /client.Mobile/getInfoStaff
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.StaffResponse>>
   */
  getInfoStaff$eventStream(
    requestData: thisProto.MobileRequest,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.StaffResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/client.Mobile/getInfoStaff',
      requestData,
      requestMetadata,
      requestClass: thisProto.MobileRequest,
      responseClass: thisProto.StaffResponse
    });
  }

  /**
   * Unary RPC for /client.Mobile/updateStaffInfo
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.StaffResponse>
   */
  updateStaffInfo(
    requestData: thisProto.MobileRequest,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.StaffResponse> {
    return this.updateStaffInfo$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /client.Mobile/updateStaffInfo
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.StaffResponse>>
   */
  updateStaffInfo$eventStream(
    requestData: thisProto.MobileRequest,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.StaffResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/client.Mobile/updateStaffInfo',
      requestData,
      requestMetadata,
      requestClass: thisProto.MobileRequest,
      responseClass: thisProto.StaffResponse
    });
  }

  /**
   * Unary RPC for /client.Mobile/updateAvatar
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.StaffResponse>
   */
  updateAvatar(
    requestData: thisProto.MobileRequest,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.StaffResponse> {
    return this.updateAvatar$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /client.Mobile/updateAvatar
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.StaffResponse>>
   */
  updateAvatar$eventStream(
    requestData: thisProto.MobileRequest,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.StaffResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/client.Mobile/updateAvatar',
      requestData,
      requestMetadata,
      requestClass: thisProto.MobileRequest,
      responseClass: thisProto.StaffResponse
    });
  }
}
