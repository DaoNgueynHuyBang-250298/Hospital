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
import * as thisProto from './administrator.pb';
import * as client000 from './client.pb';
import { GRPC_ADMINISTRATOR_CLIENT_SETTINGS } from './administrator.pbconf';
/**
 * Service client implementation for client.Administrator
 */
@Injectable({
  providedIn: 'root'
})
export class AdministratorClient {
  private client: GrpcClient;

  constructor(
    @Optional()
    @Inject(GRPC_ADMINISTRATOR_CLIENT_SETTINGS)
    settings: GrpcClientSettings,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('client.Administrator', settings);
  }

  /**
   * Unary RPC for /client.Administrator/getListPatient
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.PatientResponse>
   */
  getListPatient(
    requestData: client000.MasterRequest,
    requestMetadata: Metadata = {}
  ): Observable<client000.PatientResponse> {
    return this.getListPatient$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /client.Administrator/getListPatient
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<client000.PatientResponse>>
   */
  getListPatient$eventStream(
    requestData: client000.MasterRequest,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<client000.PatientResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/client.Administrator/getListPatient',
      requestData,
      requestMetadata,
      requestClass: client000.MasterRequest,
      responseClass: client000.PatientResponse
    });
  }

  /**
   * Unary RPC for /client.Administrator/getListStaff
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.StaffResponse>
   */
  getListStaff(
    requestData: client000.MasterRequest,
    requestMetadata: Metadata = {}
  ): Observable<client000.StaffResponse> {
    return this.getListStaff$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /client.Administrator/getListStaff
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<client000.StaffResponse>>
   */
  getListStaff$eventStream(
    requestData: client000.MasterRequest,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<client000.StaffResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/client.Administrator/getListStaff',
      requestData,
      requestMetadata,
      requestClass: client000.MasterRequest,
      responseClass: client000.StaffResponse
    });
  }

  /**
   * Unary RPC for /client.Administrator/insertStaff
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.StaffResponse>
   */
  insertStaff(
    requestData: client000.MasterRequest,
    requestMetadata: Metadata = {}
  ): Observable<client000.StaffResponse> {
    return this.insertStaff$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /client.Administrator/insertStaff
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<client000.StaffResponse>>
   */
  insertStaff$eventStream(
    requestData: client000.MasterRequest,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<client000.StaffResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/client.Administrator/insertStaff',
      requestData,
      requestMetadata,
      requestClass: client000.MasterRequest,
      responseClass: client000.StaffResponse
    });
  }

  /**
   * Unary RPC for /client.Administrator/insertMultyStaff
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.StaffResponse>
   */
  insertMultyStaff(
    requestData: client000.MasterRequest,
    requestMetadata: Metadata = {}
  ): Observable<client000.StaffResponse> {
    return this.insertMultyStaff$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /client.Administrator/insertMultyStaff
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<client000.StaffResponse>>
   */
  insertMultyStaff$eventStream(
    requestData: client000.MasterRequest,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<client000.StaffResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/client.Administrator/insertMultyStaff',
      requestData,
      requestMetadata,
      requestClass: client000.MasterRequest,
      responseClass: client000.StaffResponse
    });
  }

  /**
   * Unary RPC for /client.Administrator/insertMultyBed
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.BedResponse>
   */
  insertMultyBed(
    requestData: client000.MasterRequest,
    requestMetadata: Metadata = {}
  ): Observable<client000.BedResponse> {
    return this.insertMultyBed$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /client.Administrator/insertMultyBed
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<client000.BedResponse>>
   */
  insertMultyBed$eventStream(
    requestData: client000.MasterRequest,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<client000.BedResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/client.Administrator/insertMultyBed',
      requestData,
      requestMetadata,
      requestClass: client000.MasterRequest,
      responseClass: client000.BedResponse
    });
  }

  /**
   * Unary RPC for /client.Administrator/getListBed
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.BedResponse>
   */
  getListBed(
    requestData: client000.MasterRequest,
    requestMetadata: Metadata = {}
  ): Observable<client000.BedResponse> {
    return this.getListBed$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /client.Administrator/getListBed
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<client000.BedResponse>>
   */
  getListBed$eventStream(
    requestData: client000.MasterRequest,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<client000.BedResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/client.Administrator/getListBed',
      requestData,
      requestMetadata,
      requestClass: client000.MasterRequest,
      responseClass: client000.BedResponse
    });
  }

  /**
   * Unary RPC for /client.Administrator/modifyBed
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<client000.BedResponse>
   */
  modifyBed(
    requestData: client000.MasterRequest,
    requestMetadata: Metadata = {}
  ): Observable<client000.BedResponse> {
    return this.modifyBed$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /client.Administrator/modifyBed
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<client000.BedResponse>>
   */
  modifyBed$eventStream(
    requestData: client000.MasterRequest,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<client000.BedResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/client.Administrator/modifyBed',
      requestData,
      requestMetadata,
      requestClass: client000.MasterRequest,
      responseClass: client000.BedResponse
    });
  }
}
