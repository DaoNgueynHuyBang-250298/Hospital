/* tslint:disable */
/* eslint-disable */
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { GrpcMessage, RecursivePartial } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
export enum ResponseState {
  SUCCESS = 0,
  FAIL = 1
}
/**
 * Message implementation for client.DeviceInfo
 */
export class DeviceInfo implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeviceInfo();
    DeviceInfo.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeviceInfo) {
    _instance.idDevice = _instance.idDevice || '';
    _instance.port = _instance.port || 0;
    _instance.createdDate = _instance.createdDate || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeviceInfo,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.idDevice = _reader.readString();
          break;
        case 2:
          _instance.port = _reader.readInt32();
          break;
        case 3:
          _instance.createdDate = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    DeviceInfo.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: DeviceInfo, _writer: BinaryWriter) {
    if (_instance.idDevice) {
      _writer.writeString(1, _instance.idDevice);
    }
    if (_instance.port) {
      _writer.writeInt32(2, _instance.port);
    }
    if (_instance.createdDate) {
      _writer.writeString(3, _instance.createdDate);
    }
  }

  private _idDevice?: string;
  private _port?: number;
  private _createdDate?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeviceInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeviceInfo>) {
    _value = _value || {};
    this.idDevice = _value.idDevice;
    this.port = _value.port;
    this.createdDate = _value.createdDate;
    DeviceInfo.refineValues(this);
  }
  get idDevice(): string | undefined {
    return this._idDevice;
  }
  set idDevice(value: string | undefined) {
    this._idDevice = value;
  }
  get port(): number | undefined {
    return this._port;
  }
  set port(value: number | undefined) {
    this._port = value;
  }
  get createdDate(): string | undefined {
    return this._createdDate;
  }
  set createdDate(value: string | undefined) {
    this._createdDate = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DeviceInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeviceInfo.AsObject {
    return {
      idDevice: this.idDevice,
      port: this.port,
      createdDate: this.createdDate
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module DeviceInfo {
  /**
   * Standard JavaScript object representation for DeviceInfo
   */
  export interface AsObject {
    idDevice?: string;
    port?: number;
    createdDate?: string;
  }
}

/**
 * Message implementation for client.DeviceRequest
 */
export class DeviceRequest implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeviceRequest();
    DeviceRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeviceRequest) {
    _instance.reportDate = _instance.reportDate || '';
    _instance.idObject = _instance.idObject || 0;
    _instance.idBed = _instance.idBed || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeviceRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.reportDate = _reader.readString();
          break;
        case 2:
          _instance.idObject = _reader.readInt32();
          break;
        case 3:
          _instance.idBed = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    DeviceRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeviceRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.reportDate) {
      _writer.writeString(1, _instance.reportDate);
    }
    if (_instance.idObject) {
      _writer.writeInt32(2, _instance.idObject);
    }
    if (_instance.idBed) {
      _writer.writeString(3, _instance.idBed);
    }
  }

  private _reportDate?: string;
  private _idObject?: number;
  private _idBed?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeviceRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeviceRequest>) {
    _value = _value || {};
    this.reportDate = _value.reportDate;
    this.idObject = _value.idObject;
    this.idBed = _value.idBed;
    DeviceRequest.refineValues(this);
  }
  get reportDate(): string | undefined {
    return this._reportDate;
  }
  set reportDate(value: string | undefined) {
    this._reportDate = value;
  }
  get idObject(): number | undefined {
    return this._idObject;
  }
  set idObject(value: number | undefined) {
    this._idObject = value;
  }
  get idBed(): string | undefined {
    return this._idBed;
  }
  set idBed(value: string | undefined) {
    this._idBed = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DeviceRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeviceRequest.AsObject {
    return {
      reportDate: this.reportDate,
      idObject: this.idObject,
      idBed: this.idBed
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module DeviceRequest {
  /**
   * Standard JavaScript object representation for DeviceRequest
   */
  export interface AsObject {
    reportDate?: string;
    idObject?: number;
    idBed?: string;
  }
}

/**
 * Message implementation for client.MobileRequest
 */
export class MobileRequest implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new MobileRequest();
    MobileRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: MobileRequest) {
    _instance.fromDate = _instance.fromDate || '';
    _instance.endDate = _instance.endDate || '';
    _instance.idStaff = _instance.idStaff || '';
    _instance.idPatient = _instance.idPatient || '';
    _instance.username = _instance.username || '';
    _instance.password = _instance.password || '';
    _instance.idPerson = _instance.idPerson || '';
    _instance.idShift = _instance.idShift || '';
    _instance.dayShift = _instance.dayShift || '';
    _instance.staffName = _instance.staffName || '';
    _instance.address = _instance.address || '';
    _instance.gender = _instance.gender || '';
    _instance.dob = _instance.dob || '';
    _instance.phoneNum = _instance.phoneNum || '';
    _instance.identityCard = _instance.identityCard || '';
    _instance.avatar = _instance.avatar || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: MobileRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.fromDate = _reader.readString();
          break;
        case 2:
          _instance.endDate = _reader.readString();
          break;
        case 3:
          _instance.idStaff = _reader.readString();
          break;
        case 4:
          _instance.idPatient = _reader.readString();
          break;
        case 5:
          _instance.username = _reader.readString();
          break;
        case 6:
          _instance.password = _reader.readString();
          break;
        case 7:
          _instance.idPerson = _reader.readString();
          break;
        case 8:
          _instance.idShift = _reader.readString();
          break;
        case 9:
          _instance.dayShift = _reader.readString();
          break;
        case 10:
          _instance.staffName = _reader.readString();
          break;
        case 11:
          _instance.address = _reader.readString();
          break;
        case 12:
          _instance.gender = _reader.readString();
          break;
        case 13:
          _instance.dob = _reader.readString();
          break;
        case 14:
          _instance.phoneNum = _reader.readString();
          break;
        case 15:
          _instance.identityCard = _reader.readString();
          break;
        case 16:
          _instance.avatar = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    MobileRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: MobileRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.fromDate) {
      _writer.writeString(1, _instance.fromDate);
    }
    if (_instance.endDate) {
      _writer.writeString(2, _instance.endDate);
    }
    if (_instance.idStaff) {
      _writer.writeString(3, _instance.idStaff);
    }
    if (_instance.idPatient) {
      _writer.writeString(4, _instance.idPatient);
    }
    if (_instance.username) {
      _writer.writeString(5, _instance.username);
    }
    if (_instance.password) {
      _writer.writeString(6, _instance.password);
    }
    if (_instance.idPerson) {
      _writer.writeString(7, _instance.idPerson);
    }
    if (_instance.idShift) {
      _writer.writeString(8, _instance.idShift);
    }
    if (_instance.dayShift) {
      _writer.writeString(9, _instance.dayShift);
    }
    if (_instance.staffName) {
      _writer.writeString(10, _instance.staffName);
    }
    if (_instance.address) {
      _writer.writeString(11, _instance.address);
    }
    if (_instance.gender) {
      _writer.writeString(12, _instance.gender);
    }
    if (_instance.dob) {
      _writer.writeString(13, _instance.dob);
    }
    if (_instance.phoneNum) {
      _writer.writeString(14, _instance.phoneNum);
    }
    if (_instance.identityCard) {
      _writer.writeString(15, _instance.identityCard);
    }
    if (_instance.avatar) {
      _writer.writeString(16, _instance.avatar);
    }
  }

  private _fromDate?: string;
  private _endDate?: string;
  private _idStaff?: string;
  private _idPatient?: string;
  private _username?: string;
  private _password?: string;
  private _idPerson?: string;
  private _idShift?: string;
  private _dayShift?: string;
  private _staffName?: string;
  private _address?: string;
  private _gender?: string;
  private _dob?: string;
  private _phoneNum?: string;
  private _identityCard?: string;
  private _avatar?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of MobileRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<MobileRequest>) {
    _value = _value || {};
    this.fromDate = _value.fromDate;
    this.endDate = _value.endDate;
    this.idStaff = _value.idStaff;
    this.idPatient = _value.idPatient;
    this.username = _value.username;
    this.password = _value.password;
    this.idPerson = _value.idPerson;
    this.idShift = _value.idShift;
    this.dayShift = _value.dayShift;
    this.staffName = _value.staffName;
    this.address = _value.address;
    this.gender = _value.gender;
    this.dob = _value.dob;
    this.phoneNum = _value.phoneNum;
    this.identityCard = _value.identityCard;
    this.avatar = _value.avatar;
    MobileRequest.refineValues(this);
  }
  get fromDate(): string | undefined {
    return this._fromDate;
  }
  set fromDate(value: string | undefined) {
    this._fromDate = value;
  }
  get endDate(): string | undefined {
    return this._endDate;
  }
  set endDate(value: string | undefined) {
    this._endDate = value;
  }
  get idStaff(): string | undefined {
    return this._idStaff;
  }
  set idStaff(value: string | undefined) {
    this._idStaff = value;
  }
  get idPatient(): string | undefined {
    return this._idPatient;
  }
  set idPatient(value: string | undefined) {
    this._idPatient = value;
  }
  get username(): string | undefined {
    return this._username;
  }
  set username(value: string | undefined) {
    this._username = value;
  }
  get password(): string | undefined {
    return this._password;
  }
  set password(value: string | undefined) {
    this._password = value;
  }
  get idPerson(): string | undefined {
    return this._idPerson;
  }
  set idPerson(value: string | undefined) {
    this._idPerson = value;
  }
  get idShift(): string | undefined {
    return this._idShift;
  }
  set idShift(value: string | undefined) {
    this._idShift = value;
  }
  get dayShift(): string | undefined {
    return this._dayShift;
  }
  set dayShift(value: string | undefined) {
    this._dayShift = value;
  }
  get staffName(): string | undefined {
    return this._staffName;
  }
  set staffName(value: string | undefined) {
    this._staffName = value;
  }
  get address(): string | undefined {
    return this._address;
  }
  set address(value: string | undefined) {
    this._address = value;
  }
  get gender(): string | undefined {
    return this._gender;
  }
  set gender(value: string | undefined) {
    this._gender = value;
  }
  get dob(): string | undefined {
    return this._dob;
  }
  set dob(value: string | undefined) {
    this._dob = value;
  }
  get phoneNum(): string | undefined {
    return this._phoneNum;
  }
  set phoneNum(value: string | undefined) {
    this._phoneNum = value;
  }
  get identityCard(): string | undefined {
    return this._identityCard;
  }
  set identityCard(value: string | undefined) {
    this._identityCard = value;
  }
  get avatar(): string | undefined {
    return this._avatar;
  }
  set avatar(value: string | undefined) {
    this._avatar = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    MobileRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): MobileRequest.AsObject {
    return {
      fromDate: this.fromDate,
      endDate: this.endDate,
      idStaff: this.idStaff,
      idPatient: this.idPatient,
      username: this.username,
      password: this.password,
      idPerson: this.idPerson,
      idShift: this.idShift,
      dayShift: this.dayShift,
      staffName: this.staffName,
      address: this.address,
      gender: this.gender,
      dob: this.dob,
      phoneNum: this.phoneNum,
      identityCard: this.identityCard,
      avatar: this.avatar
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module MobileRequest {
  /**
   * Standard JavaScript object representation for MobileRequest
   */
  export interface AsObject {
    fromDate?: string;
    endDate?: string;
    idStaff?: string;
    idPatient?: string;
    username?: string;
    password?: string;
    idPerson?: string;
    idShift?: string;
    dayShift?: string;
    staffName?: string;
    address?: string;
    gender?: string;
    dob?: string;
    phoneNum?: string;
    identityCard?: string;
    avatar?: string;
  }
}

/**
 * Message implementation for client.PatientResponse
 */
export class PatientResponse implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new PatientResponse();
    PatientResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: PatientResponse) {
    _instance.response = _instance.response || undefined;
    _instance.data = _instance.data || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: PatientResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.response = new Response();
          _reader.readMessage(
            _instance.response,
            Response.deserializeBinaryFromReader
          );
          break;
        case 2:
          const messageInitializer2 = new PatientBedInfo();
          _reader.readMessage(
            messageInitializer2,
            PatientBedInfo.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer2);
          break;
        default:
          _reader.skipField();
      }
    }

    PatientResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: PatientResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.response) {
      _writer.writeMessage(
        1,
        _instance.response as any,
        Response.serializeBinaryToWriter
      );
    }
    if (_instance.data && _instance.data.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.data as any,
        PatientBedInfo.serializeBinaryToWriter
      );
    }
  }

  private _response?: Response;
  private _data?: PatientBedInfo[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of PatientResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<PatientResponse>) {
    _value = _value || {};
    this.response = _value.response ? new Response(_value.response) : undefined;
    this.data = (_value.data || []).map(m => new PatientBedInfo(m));
    PatientResponse.refineValues(this);
  }
  get response(): Response | undefined {
    return this._response;
  }
  set response(value: Response | undefined) {
    this._response = value;
  }
  get data(): PatientBedInfo[] | undefined {
    return this._data;
  }
  set data(value: PatientBedInfo[] | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    PatientResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): PatientResponse.AsObject {
    return {
      response: this.response ? this.response.toObject() : undefined,
      data: (this.data || []).map(m => m.toObject())
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module PatientResponse {
  /**
   * Standard JavaScript object representation for PatientResponse
   */
  export interface AsObject {
    response?: Response.AsObject;
    data?: PatientBedInfo.AsObject[];
  }
}

/**
 * Message implementation for client.PatientHistoryResponse
 */
export class PatientHistoryResponse implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new PatientHistoryResponse();
    PatientHistoryResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: PatientHistoryResponse) {
    _instance.response = _instance.response || undefined;
    _instance.data = _instance.data || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: PatientHistoryResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.response = new Response();
          _reader.readMessage(
            _instance.response,
            Response.deserializeBinaryFromReader
          );
          break;
        case 2:
          const messageInitializer2 = new PatientHistoryInfo();
          _reader.readMessage(
            messageInitializer2,
            PatientHistoryInfo.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer2);
          break;
        default:
          _reader.skipField();
      }
    }

    PatientHistoryResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: PatientHistoryResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.response) {
      _writer.writeMessage(
        1,
        _instance.response as any,
        Response.serializeBinaryToWriter
      );
    }
    if (_instance.data && _instance.data.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.data as any,
        PatientHistoryInfo.serializeBinaryToWriter
      );
    }
  }

  private _response?: Response;
  private _data?: PatientHistoryInfo[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of PatientHistoryResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<PatientHistoryResponse>) {
    _value = _value || {};
    this.response = _value.response ? new Response(_value.response) : undefined;
    this.data = (_value.data || []).map(m => new PatientHistoryInfo(m));
    PatientHistoryResponse.refineValues(this);
  }
  get response(): Response | undefined {
    return this._response;
  }
  set response(value: Response | undefined) {
    this._response = value;
  }
  get data(): PatientHistoryInfo[] | undefined {
    return this._data;
  }
  set data(value: PatientHistoryInfo[] | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    PatientHistoryResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): PatientHistoryResponse.AsObject {
    return {
      response: this.response ? this.response.toObject() : undefined,
      data: (this.data || []).map(m => m.toObject())
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module PatientHistoryResponse {
  /**
   * Standard JavaScript object representation for PatientHistoryResponse
   */
  export interface AsObject {
    response?: Response.AsObject;
    data?: PatientHistoryInfo.AsObject[];
  }
}

/**
 * Message implementation for client.PatientHistoryInfo
 */
export class PatientHistoryInfo implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new PatientHistoryInfo();
    PatientHistoryInfo.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: PatientHistoryInfo) {
    _instance.idBed = _instance.idBed || '';
    _instance.codeBed = _instance.codeBed || '';
    _instance.patientCode = _instance.patientCode || '';
    _instance.patientName = _instance.patientName || '';
    _instance.idObject = _instance.idObject || 0;
    _instance.countSupportCall = _instance.countSupportCall || 0;
    _instance.countEmergencyCall = _instance.countEmergencyCall || 0;
    _instance.dateCheck = _instance.dateCheck || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: PatientHistoryInfo,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.idBed = _reader.readString();
          break;
        case 2:
          _instance.codeBed = _reader.readString();
          break;
        case 3:
          _instance.patientCode = _reader.readString();
          break;
        case 4:
          _instance.patientName = _reader.readString();
          break;
        case 5:
          _instance.idObject = _reader.readInt32();
          break;
        case 6:
          _instance.countSupportCall = _reader.readInt32();
          break;
        case 7:
          _instance.countEmergencyCall = _reader.readInt32();
          break;
        case 8:
          _instance.dateCheck = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    PatientHistoryInfo.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: PatientHistoryInfo,
    _writer: BinaryWriter
  ) {
    if (_instance.idBed) {
      _writer.writeString(1, _instance.idBed);
    }
    if (_instance.codeBed) {
      _writer.writeString(2, _instance.codeBed);
    }
    if (_instance.patientCode) {
      _writer.writeString(3, _instance.patientCode);
    }
    if (_instance.patientName) {
      _writer.writeString(4, _instance.patientName);
    }
    if (_instance.idObject) {
      _writer.writeInt32(5, _instance.idObject);
    }
    if (_instance.countSupportCall) {
      _writer.writeInt32(6, _instance.countSupportCall);
    }
    if (_instance.countEmergencyCall) {
      _writer.writeInt32(7, _instance.countEmergencyCall);
    }
    if (_instance.dateCheck) {
      _writer.writeString(8, _instance.dateCheck);
    }
  }

  private _idBed?: string;
  private _codeBed?: string;
  private _patientCode?: string;
  private _patientName?: string;
  private _idObject?: number;
  private _countSupportCall?: number;
  private _countEmergencyCall?: number;
  private _dateCheck?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of PatientHistoryInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<PatientHistoryInfo>) {
    _value = _value || {};
    this.idBed = _value.idBed;
    this.codeBed = _value.codeBed;
    this.patientCode = _value.patientCode;
    this.patientName = _value.patientName;
    this.idObject = _value.idObject;
    this.countSupportCall = _value.countSupportCall;
    this.countEmergencyCall = _value.countEmergencyCall;
    this.dateCheck = _value.dateCheck;
    PatientHistoryInfo.refineValues(this);
  }
  get idBed(): string | undefined {
    return this._idBed;
  }
  set idBed(value: string | undefined) {
    this._idBed = value;
  }
  get codeBed(): string | undefined {
    return this._codeBed;
  }
  set codeBed(value: string | undefined) {
    this._codeBed = value;
  }
  get patientCode(): string | undefined {
    return this._patientCode;
  }
  set patientCode(value: string | undefined) {
    this._patientCode = value;
  }
  get patientName(): string | undefined {
    return this._patientName;
  }
  set patientName(value: string | undefined) {
    this._patientName = value;
  }
  get idObject(): number | undefined {
    return this._idObject;
  }
  set idObject(value: number | undefined) {
    this._idObject = value;
  }
  get countSupportCall(): number | undefined {
    return this._countSupportCall;
  }
  set countSupportCall(value: number | undefined) {
    this._countSupportCall = value;
  }
  get countEmergencyCall(): number | undefined {
    return this._countEmergencyCall;
  }
  set countEmergencyCall(value: number | undefined) {
    this._countEmergencyCall = value;
  }
  get dateCheck(): string | undefined {
    return this._dateCheck;
  }
  set dateCheck(value: string | undefined) {
    this._dateCheck = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    PatientHistoryInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): PatientHistoryInfo.AsObject {
    return {
      idBed: this.idBed,
      codeBed: this.codeBed,
      patientCode: this.patientCode,
      patientName: this.patientName,
      idObject: this.idObject,
      countSupportCall: this.countSupportCall,
      countEmergencyCall: this.countEmergencyCall,
      dateCheck: this.dateCheck
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module PatientHistoryInfo {
  /**
   * Standard JavaScript object representation for PatientHistoryInfo
   */
  export interface AsObject {
    idBed?: string;
    codeBed?: string;
    patientCode?: string;
    patientName?: string;
    idObject?: number;
    countSupportCall?: number;
    countEmergencyCall?: number;
    dateCheck?: string;
  }
}

/**
 * Message implementation for client.MasterRequest
 */
export class MasterRequest implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new MasterRequest();
    MasterRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: MasterRequest) {
    _instance.fromDate = _instance.fromDate || '';
    _instance.toDate = _instance.toDate || '';
    _instance.userId = _instance.userId || 0;
    _instance.idNurse = _instance.idNurse || 0;
    _instance.idFaculty = _instance.idFaculty || '';
    _instance.idRoom = _instance.idRoom || '';
    _instance.idBed = _instance.idBed || '';
    _instance.bedName = _instance.bedName || '';
    _instance.username = _instance.username || '';
    _instance.personName = _instance.personName || '';
    _instance.gender = _instance.gender || '';
    _instance.dob = _instance.dob || '';
    _instance.identityCard = _instance.identityCard || '';
    _instance.phoneNum = _instance.phoneNum || '';
    _instance.address = _instance.address || '';
    _instance.password = _instance.password || '';
    _instance.idObject = _instance.idObject || 0;
    _instance.email = _instance.email || '';
    _instance.img = _instance.img || '';
    _instance.note = _instance.note || '';
    _instance.idPerson = _instance.idPerson || '';
    _instance.excelFile = _instance.excelFile || '';
    _instance.idUnit = _instance.idUnit || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: MasterRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.fromDate = _reader.readString();
          break;
        case 2:
          _instance.toDate = _reader.readString();
          break;
        case 3:
          _instance.userId = _reader.readInt32();
          break;
        case 4:
          _instance.idNurse = _reader.readInt32();
          break;
        case 5:
          _instance.idFaculty = _reader.readString();
          break;
        case 6:
          _instance.idRoom = _reader.readString();
          break;
        case 7:
          _instance.idBed = _reader.readString();
          break;
        case 8:
          _instance.bedName = _reader.readString();
          break;
        case 9:
          _instance.username = _reader.readString();
          break;
        case 10:
          _instance.personName = _reader.readString();
          break;
        case 11:
          _instance.gender = _reader.readString();
          break;
        case 12:
          _instance.dob = _reader.readString();
          break;
        case 13:
          _instance.identityCard = _reader.readString();
          break;
        case 14:
          _instance.phoneNum = _reader.readString();
          break;
        case 15:
          _instance.address = _reader.readString();
          break;
        case 16:
          _instance.password = _reader.readString();
          break;
        case 17:
          _instance.idObject = _reader.readInt32();
          break;
        case 18:
          _instance.email = _reader.readString();
          break;
        case 19:
          _instance.img = _reader.readString();
          break;
        case 20:
          _instance.note = _reader.readString();
          break;
        case 21:
          _instance.idPerson = _reader.readString();
          break;
        case 22:
          _instance.excelFile = _reader.readString();
          break;
        case 23:
          _instance.idUnit = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    MasterRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: MasterRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.fromDate) {
      _writer.writeString(1, _instance.fromDate);
    }
    if (_instance.toDate) {
      _writer.writeString(2, _instance.toDate);
    }
    if (_instance.userId) {
      _writer.writeInt32(3, _instance.userId);
    }
    if (_instance.idNurse) {
      _writer.writeInt32(4, _instance.idNurse);
    }
    if (_instance.idFaculty) {
      _writer.writeString(5, _instance.idFaculty);
    }
    if (_instance.idRoom) {
      _writer.writeString(6, _instance.idRoom);
    }
    if (_instance.idBed) {
      _writer.writeString(7, _instance.idBed);
    }
    if (_instance.bedName) {
      _writer.writeString(8, _instance.bedName);
    }
    if (_instance.username) {
      _writer.writeString(9, _instance.username);
    }
    if (_instance.personName) {
      _writer.writeString(10, _instance.personName);
    }
    if (_instance.gender) {
      _writer.writeString(11, _instance.gender);
    }
    if (_instance.dob) {
      _writer.writeString(12, _instance.dob);
    }
    if (_instance.identityCard) {
      _writer.writeString(13, _instance.identityCard);
    }
    if (_instance.phoneNum) {
      _writer.writeString(14, _instance.phoneNum);
    }
    if (_instance.address) {
      _writer.writeString(15, _instance.address);
    }
    if (_instance.password) {
      _writer.writeString(16, _instance.password);
    }
    if (_instance.idObject) {
      _writer.writeInt32(17, _instance.idObject);
    }
    if (_instance.email) {
      _writer.writeString(18, _instance.email);
    }
    if (_instance.img) {
      _writer.writeString(19, _instance.img);
    }
    if (_instance.note) {
      _writer.writeString(20, _instance.note);
    }
    if (_instance.idPerson) {
      _writer.writeString(21, _instance.idPerson);
    }
    if (_instance.excelFile) {
      _writer.writeString(22, _instance.excelFile);
    }
    if (_instance.idUnit) {
      _writer.writeString(23, _instance.idUnit);
    }
  }

  private _fromDate?: string;
  private _toDate?: string;
  private _userId?: number;
  private _idNurse?: number;
  private _idFaculty?: string;
  private _idRoom?: string;
  private _idBed?: string;
  private _bedName?: string;
  private _username?: string;
  private _personName?: string;
  private _gender?: string;
  private _dob?: string;
  private _identityCard?: string;
  private _phoneNum?: string;
  private _address?: string;
  private _password?: string;
  private _idObject?: number;
  private _email?: string;
  private _img?: string;
  private _note?: string;
  private _idPerson?: string;
  private _excelFile?: string;
  private _idUnit?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of MasterRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<MasterRequest>) {
    _value = _value || {};
    this.fromDate = _value.fromDate;
    this.toDate = _value.toDate;
    this.userId = _value.userId;
    this.idNurse = _value.idNurse;
    this.idFaculty = _value.idFaculty;
    this.idRoom = _value.idRoom;
    this.idBed = _value.idBed;
    this.bedName = _value.bedName;
    this.username = _value.username;
    this.personName = _value.personName;
    this.gender = _value.gender;
    this.dob = _value.dob;
    this.identityCard = _value.identityCard;
    this.phoneNum = _value.phoneNum;
    this.address = _value.address;
    this.password = _value.password;
    this.idObject = _value.idObject;
    this.email = _value.email;
    this.img = _value.img;
    this.note = _value.note;
    this.idPerson = _value.idPerson;
    this.excelFile = _value.excelFile;
    this.idUnit = _value.idUnit;
    MasterRequest.refineValues(this);
  }
  get fromDate(): string | undefined {
    return this._fromDate;
  }
  set fromDate(value: string | undefined) {
    this._fromDate = value;
  }
  get toDate(): string | undefined {
    return this._toDate;
  }
  set toDate(value: string | undefined) {
    this._toDate = value;
  }
  get userId(): number | undefined {
    return this._userId;
  }
  set userId(value: number | undefined) {
    this._userId = value;
  }
  get idNurse(): number | undefined {
    return this._idNurse;
  }
  set idNurse(value: number | undefined) {
    this._idNurse = value;
  }
  get idFaculty(): string | undefined {
    return this._idFaculty;
  }
  set idFaculty(value: string | undefined) {
    this._idFaculty = value;
  }
  get idRoom(): string | undefined {
    return this._idRoom;
  }
  set idRoom(value: string | undefined) {
    this._idRoom = value;
  }
  get idBed(): string | undefined {
    return this._idBed;
  }
  set idBed(value: string | undefined) {
    this._idBed = value;
  }
  get bedName(): string | undefined {
    return this._bedName;
  }
  set bedName(value: string | undefined) {
    this._bedName = value;
  }
  get username(): string | undefined {
    return this._username;
  }
  set username(value: string | undefined) {
    this._username = value;
  }
  get personName(): string | undefined {
    return this._personName;
  }
  set personName(value: string | undefined) {
    this._personName = value;
  }
  get gender(): string | undefined {
    return this._gender;
  }
  set gender(value: string | undefined) {
    this._gender = value;
  }
  get dob(): string | undefined {
    return this._dob;
  }
  set dob(value: string | undefined) {
    this._dob = value;
  }
  get identityCard(): string | undefined {
    return this._identityCard;
  }
  set identityCard(value: string | undefined) {
    this._identityCard = value;
  }
  get phoneNum(): string | undefined {
    return this._phoneNum;
  }
  set phoneNum(value: string | undefined) {
    this._phoneNum = value;
  }
  get address(): string | undefined {
    return this._address;
  }
  set address(value: string | undefined) {
    this._address = value;
  }
  get password(): string | undefined {
    return this._password;
  }
  set password(value: string | undefined) {
    this._password = value;
  }
  get idObject(): number | undefined {
    return this._idObject;
  }
  set idObject(value: number | undefined) {
    this._idObject = value;
  }
  get email(): string | undefined {
    return this._email;
  }
  set email(value: string | undefined) {
    this._email = value;
  }
  get img(): string | undefined {
    return this._img;
  }
  set img(value: string | undefined) {
    this._img = value;
  }
  get note(): string | undefined {
    return this._note;
  }
  set note(value: string | undefined) {
    this._note = value;
  }
  get idPerson(): string | undefined {
    return this._idPerson;
  }
  set idPerson(value: string | undefined) {
    this._idPerson = value;
  }
  get excelFile(): string | undefined {
    return this._excelFile;
  }
  set excelFile(value: string | undefined) {
    this._excelFile = value;
  }
  get idUnit(): string | undefined {
    return this._idUnit;
  }
  set idUnit(value: string | undefined) {
    this._idUnit = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    MasterRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): MasterRequest.AsObject {
    return {
      fromDate: this.fromDate,
      toDate: this.toDate,
      userId: this.userId,
      idNurse: this.idNurse,
      idFaculty: this.idFaculty,
      idRoom: this.idRoom,
      idBed: this.idBed,
      bedName: this.bedName,
      username: this.username,
      personName: this.personName,
      gender: this.gender,
      dob: this.dob,
      identityCard: this.identityCard,
      phoneNum: this.phoneNum,
      address: this.address,
      password: this.password,
      idObject: this.idObject,
      email: this.email,
      img: this.img,
      note: this.note,
      idPerson: this.idPerson,
      excelFile: this.excelFile,
      idUnit: this.idUnit
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module MasterRequest {
  /**
   * Standard JavaScript object representation for MasterRequest
   */
  export interface AsObject {
    fromDate?: string;
    toDate?: string;
    userId?: number;
    idNurse?: number;
    idFaculty?: string;
    idRoom?: string;
    idBed?: string;
    bedName?: string;
    username?: string;
    personName?: string;
    gender?: string;
    dob?: string;
    identityCard?: string;
    phoneNum?: string;
    address?: string;
    password?: string;
    idObject?: number;
    email?: string;
    img?: string;
    note?: string;
    idPerson?: string;
    excelFile?: string;
    idUnit?: string;
  }
}

/**
 * Message implementation for client.UserInfo
 */
export class UserInfo implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UserInfo();
    UserInfo.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UserInfo) {
    _instance.username = _instance.username || '';
    _instance.password = _instance.password || '';
    _instance.token = _instance.token || '';
    _instance.roleId = _instance.roleId || 0;
    _instance.idPerson = _instance.idPerson || '';
    _instance.newPassword = _instance.newPassword || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UserInfo,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.username = _reader.readString();
          break;
        case 2:
          _instance.password = _reader.readString();
          break;
        case 3:
          _instance.token = _reader.readString();
          break;
        case 4:
          _instance.roleId = _reader.readInt32();
          break;
        case 5:
          _instance.idPerson = _reader.readString();
          break;
        case 6:
          _instance.newPassword = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    UserInfo.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: UserInfo, _writer: BinaryWriter) {
    if (_instance.username) {
      _writer.writeString(1, _instance.username);
    }
    if (_instance.password) {
      _writer.writeString(2, _instance.password);
    }
    if (_instance.token) {
      _writer.writeString(3, _instance.token);
    }
    if (_instance.roleId) {
      _writer.writeInt32(4, _instance.roleId);
    }
    if (_instance.idPerson) {
      _writer.writeString(5, _instance.idPerson);
    }
    if (_instance.newPassword) {
      _writer.writeString(6, _instance.newPassword);
    }
  }

  private _username?: string;
  private _password?: string;
  private _token?: string;
  private _roleId?: number;
  private _idPerson?: string;
  private _newPassword?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UserInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<UserInfo>) {
    _value = _value || {};
    this.username = _value.username;
    this.password = _value.password;
    this.token = _value.token;
    this.roleId = _value.roleId;
    this.idPerson = _value.idPerson;
    this.newPassword = _value.newPassword;
    UserInfo.refineValues(this);
  }
  get username(): string | undefined {
    return this._username;
  }
  set username(value: string | undefined) {
    this._username = value;
  }
  get password(): string | undefined {
    return this._password;
  }
  set password(value: string | undefined) {
    this._password = value;
  }
  get token(): string | undefined {
    return this._token;
  }
  set token(value: string | undefined) {
    this._token = value;
  }
  get roleId(): number | undefined {
    return this._roleId;
  }
  set roleId(value: number | undefined) {
    this._roleId = value;
  }
  get idPerson(): string | undefined {
    return this._idPerson;
  }
  set idPerson(value: string | undefined) {
    this._idPerson = value;
  }
  get newPassword(): string | undefined {
    return this._newPassword;
  }
  set newPassword(value: string | undefined) {
    this._newPassword = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UserInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UserInfo.AsObject {
    return {
      username: this.username,
      password: this.password,
      token: this.token,
      roleId: this.roleId,
      idPerson: this.idPerson,
      newPassword: this.newPassword
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module UserInfo {
  /**
   * Standard JavaScript object representation for UserInfo
   */
  export interface AsObject {
    username?: string;
    password?: string;
    token?: string;
    roleId?: number;
    idPerson?: string;
    newPassword?: string;
  }
}

/**
 * Message implementation for client.Response
 */
export class Response implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Response();
    Response.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Response) {
    _instance.state = _instance.state || 0;
    _instance.message = _instance.message || '';
    _instance.file = _instance.file || new Uint8Array();
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: Response,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.state = _reader.readEnum();
          break;
        case 2:
          _instance.message = _reader.readString();
          break;
        case 3:
          _instance.file = _reader.readBytes();
          break;
        default:
          _reader.skipField();
      }
    }

    Response.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Response, _writer: BinaryWriter) {
    if (_instance.state) {
      _writer.writeEnum(1, _instance.state);
    }
    if (_instance.message) {
      _writer.writeString(2, _instance.message);
    }
    if (_instance.file && _instance.file.length) {
      _writer.writeBytes(3, _instance.file);
    }
  }

  private _state?: ResponseState;
  private _message?: string;
  private _file?: Uint8Array;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Response to deeply clone from
   */
  constructor(_value?: RecursivePartial<Response>) {
    _value = _value || {};
    this.state = _value.state;
    this.message = _value.message;
    this.file = _value.file;
    Response.refineValues(this);
  }
  get state(): ResponseState | undefined {
    return this._state;
  }
  set state(value: ResponseState | undefined) {
    this._state = value;
  }
  get message(): string | undefined {
    return this._message;
  }
  set message(value: string | undefined) {
    this._message = value;
  }
  get file(): Uint8Array | undefined {
    return this._file;
  }
  set file(value: Uint8Array | undefined) {
    this._file = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Response.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Response.AsObject {
    return {
      state: this.state,
      message: this.message,
      file: this.file ? this.file.subarray(0) : new Uint8Array()
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module Response {
  /**
   * Standard JavaScript object representation for Response
   */
  export interface AsObject {
    state?: ResponseState;
    message?: string;
    file?: Uint8Array;
  }
}

/**
 * Message implementation for client.UserReply
 */
export class UserReply implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UserReply();
    UserReply.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UserReply) {
    _instance.response = _instance.response || undefined;
    _instance.info = _instance.info || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UserReply,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.response = new Response();
          _reader.readMessage(
            _instance.response,
            Response.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.info = new UserInfo();
          _reader.readMessage(
            _instance.info,
            UserInfo.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    UserReply.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: UserReply, _writer: BinaryWriter) {
    if (_instance.response) {
      _writer.writeMessage(
        1,
        _instance.response as any,
        Response.serializeBinaryToWriter
      );
    }
    if (_instance.info) {
      _writer.writeMessage(
        2,
        _instance.info as any,
        UserInfo.serializeBinaryToWriter
      );
    }
  }

  private _response?: Response;
  private _info?: UserInfo;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UserReply to deeply clone from
   */
  constructor(_value?: RecursivePartial<UserReply>) {
    _value = _value || {};
    this.response = _value.response ? new Response(_value.response) : undefined;
    this.info = _value.info ? new UserInfo(_value.info) : undefined;
    UserReply.refineValues(this);
  }
  get response(): Response | undefined {
    return this._response;
  }
  set response(value: Response | undefined) {
    this._response = value;
  }
  get info(): UserInfo | undefined {
    return this._info;
  }
  set info(value: UserInfo | undefined) {
    this._info = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UserReply.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UserReply.AsObject {
    return {
      response: this.response ? this.response.toObject() : undefined,
      info: this.info ? this.info.toObject() : undefined
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module UserReply {
  /**
   * Standard JavaScript object representation for UserReply
   */
  export interface AsObject {
    response?: Response.AsObject;
    info?: UserInfo.AsObject;
  }
}

/**
 * Message implementation for client.FacultyResponse
 */
export class FacultyResponse implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new FacultyResponse();
    FacultyResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: FacultyResponse) {
    _instance.response = _instance.response || undefined;
    _instance.data = _instance.data || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: FacultyResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.response = new Response();
          _reader.readMessage(
            _instance.response,
            Response.deserializeBinaryFromReader
          );
          break;
        case 2:
          const messageInitializer2 = new FacultyInfo();
          _reader.readMessage(
            messageInitializer2,
            FacultyInfo.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer2);
          break;
        default:
          _reader.skipField();
      }
    }

    FacultyResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: FacultyResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.response) {
      _writer.writeMessage(
        1,
        _instance.response as any,
        Response.serializeBinaryToWriter
      );
    }
    if (_instance.data && _instance.data.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.data as any,
        FacultyInfo.serializeBinaryToWriter
      );
    }
  }

  private _response?: Response;
  private _data?: FacultyInfo[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of FacultyResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<FacultyResponse>) {
    _value = _value || {};
    this.response = _value.response ? new Response(_value.response) : undefined;
    this.data = (_value.data || []).map(m => new FacultyInfo(m));
    FacultyResponse.refineValues(this);
  }
  get response(): Response | undefined {
    return this._response;
  }
  set response(value: Response | undefined) {
    this._response = value;
  }
  get data(): FacultyInfo[] | undefined {
    return this._data;
  }
  set data(value: FacultyInfo[] | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    FacultyResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): FacultyResponse.AsObject {
    return {
      response: this.response ? this.response.toObject() : undefined,
      data: (this.data || []).map(m => m.toObject())
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module FacultyResponse {
  /**
   * Standard JavaScript object representation for FacultyResponse
   */
  export interface AsObject {
    response?: Response.AsObject;
    data?: FacultyInfo.AsObject[];
  }
}

/**
 * Message implementation for client.FacultyInfo
 */
export class FacultyInfo implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new FacultyInfo();
    FacultyInfo.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: FacultyInfo) {
    _instance.idFaculty = _instance.idFaculty || 0;
    _instance.idUnit = _instance.idUnit || 0;
    _instance.facultyName = _instance.facultyName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: FacultyInfo,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.idFaculty = _reader.readInt32();
          break;
        case 2:
          _instance.idUnit = _reader.readInt32();
          break;
        case 3:
          _instance.facultyName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    FacultyInfo.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: FacultyInfo,
    _writer: BinaryWriter
  ) {
    if (_instance.idFaculty) {
      _writer.writeInt32(1, _instance.idFaculty);
    }
    if (_instance.idUnit) {
      _writer.writeInt32(2, _instance.idUnit);
    }
    if (_instance.facultyName) {
      _writer.writeString(3, _instance.facultyName);
    }
  }

  private _idFaculty?: number;
  private _idUnit?: number;
  private _facultyName?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of FacultyInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<FacultyInfo>) {
    _value = _value || {};
    this.idFaculty = _value.idFaculty;
    this.idUnit = _value.idUnit;
    this.facultyName = _value.facultyName;
    FacultyInfo.refineValues(this);
  }
  get idFaculty(): number | undefined {
    return this._idFaculty;
  }
  set idFaculty(value: number | undefined) {
    this._idFaculty = value;
  }
  get idUnit(): number | undefined {
    return this._idUnit;
  }
  set idUnit(value: number | undefined) {
    this._idUnit = value;
  }
  get facultyName(): string | undefined {
    return this._facultyName;
  }
  set facultyName(value: string | undefined) {
    this._facultyName = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    FacultyInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): FacultyInfo.AsObject {
    return {
      idFaculty: this.idFaculty,
      idUnit: this.idUnit,
      facultyName: this.facultyName
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module FacultyInfo {
  /**
   * Standard JavaScript object representation for FacultyInfo
   */
  export interface AsObject {
    idFaculty?: number;
    idUnit?: number;
    facultyName?: string;
  }
}

/**
 * Message implementation for client.BranchInfo
 */
export class BranchInfo implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new BranchInfo();
    BranchInfo.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: BranchInfo) {
    _instance.idBranch = _instance.idBranch || '';
    _instance.branchName = _instance.branchName || '';
    _instance.address = _instance.address || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: BranchInfo,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.idBranch = _reader.readString();
          break;
        case 2:
          _instance.branchName = _reader.readString();
          break;
        case 3:
          _instance.address = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    BranchInfo.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: BranchInfo, _writer: BinaryWriter) {
    if (_instance.idBranch) {
      _writer.writeString(1, _instance.idBranch);
    }
    if (_instance.branchName) {
      _writer.writeString(2, _instance.branchName);
    }
    if (_instance.address) {
      _writer.writeString(3, _instance.address);
    }
  }

  private _idBranch?: string;
  private _branchName?: string;
  private _address?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of BranchInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<BranchInfo>) {
    _value = _value || {};
    this.idBranch = _value.idBranch;
    this.branchName = _value.branchName;
    this.address = _value.address;
    BranchInfo.refineValues(this);
  }
  get idBranch(): string | undefined {
    return this._idBranch;
  }
  set idBranch(value: string | undefined) {
    this._idBranch = value;
  }
  get branchName(): string | undefined {
    return this._branchName;
  }
  set branchName(value: string | undefined) {
    this._branchName = value;
  }
  get address(): string | undefined {
    return this._address;
  }
  set address(value: string | undefined) {
    this._address = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    BranchInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): BranchInfo.AsObject {
    return {
      idBranch: this.idBranch,
      branchName: this.branchName,
      address: this.address
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module BranchInfo {
  /**
   * Standard JavaScript object representation for BranchInfo
   */
  export interface AsObject {
    idBranch?: string;
    branchName?: string;
    address?: string;
  }
}

/**
 * Message implementation for client.RoomInfo
 */
export class RoomInfo implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RoomInfo();
    RoomInfo.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RoomInfo) {
    _instance.idRoom = _instance.idRoom || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RoomInfo,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.idRoom = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    RoomInfo.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: RoomInfo, _writer: BinaryWriter) {
    if (_instance.idRoom) {
      _writer.writeString(1, _instance.idRoom);
    }
  }

  private _idRoom?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RoomInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<RoomInfo>) {
    _value = _value || {};
    this.idRoom = _value.idRoom;
    RoomInfo.refineValues(this);
  }
  get idRoom(): string | undefined {
    return this._idRoom;
  }
  set idRoom(value: string | undefined) {
    this._idRoom = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RoomInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RoomInfo.AsObject {
    return {
      idRoom: this.idRoom
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module RoomInfo {
  /**
   * Standard JavaScript object representation for RoomInfo
   */
  export interface AsObject {
    idRoom?: string;
  }
}

/**
 * Message implementation for client.Unit
 */
export class Unit implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Unit();
    Unit.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Unit) {
    _instance.idUnit = _instance.idUnit || 0;
    _instance.blockName = _instance.blockName || '';
    _instance.idBranch = _instance.idBranch || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: Unit, _reader: BinaryReader) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.idUnit = _reader.readInt32();
          break;
        case 2:
          _instance.blockName = _reader.readString();
          break;
        case 3:
          _instance.idBranch = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    Unit.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Unit, _writer: BinaryWriter) {
    if (_instance.idUnit) {
      _writer.writeInt32(1, _instance.idUnit);
    }
    if (_instance.blockName) {
      _writer.writeString(2, _instance.blockName);
    }
    if (_instance.idBranch) {
      _writer.writeInt32(3, _instance.idBranch);
    }
  }

  private _idUnit?: number;
  private _blockName?: string;
  private _idBranch?: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Unit to deeply clone from
   */
  constructor(_value?: RecursivePartial<Unit>) {
    _value = _value || {};
    this.idUnit = _value.idUnit;
    this.blockName = _value.blockName;
    this.idBranch = _value.idBranch;
    Unit.refineValues(this);
  }
  get idUnit(): number | undefined {
    return this._idUnit;
  }
  set idUnit(value: number | undefined) {
    this._idUnit = value;
  }
  get blockName(): string | undefined {
    return this._blockName;
  }
  set blockName(value: string | undefined) {
    this._blockName = value;
  }
  get idBranch(): number | undefined {
    return this._idBranch;
  }
  set idBranch(value: number | undefined) {
    this._idBranch = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Unit.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Unit.AsObject {
    return {
      idUnit: this.idUnit,
      blockName: this.blockName,
      idBranch: this.idBranch
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module Unit {
  /**
   * Standard JavaScript object representation for Unit
   */
  export interface AsObject {
    idUnit?: number;
    blockName?: string;
    idBranch?: number;
  }
}

/**
 * Message implementation for client.BedResponse
 */
export class BedResponse implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new BedResponse();
    BedResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: BedResponse) {
    _instance.response = _instance.response || undefined;
    _instance.data = _instance.data || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: BedResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.response = new Response();
          _reader.readMessage(
            _instance.response,
            Response.deserializeBinaryFromReader
          );
          break;
        case 2:
          const messageInitializer2 = new BedInfo();
          _reader.readMessage(
            messageInitializer2,
            BedInfo.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer2);
          break;
        default:
          _reader.skipField();
      }
    }

    BedResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: BedResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.response) {
      _writer.writeMessage(
        1,
        _instance.response as any,
        Response.serializeBinaryToWriter
      );
    }
    if (_instance.data && _instance.data.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.data as any,
        BedInfo.serializeBinaryToWriter
      );
    }
  }

  private _response?: Response;
  private _data?: BedInfo[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of BedResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<BedResponse>) {
    _value = _value || {};
    this.response = _value.response ? new Response(_value.response) : undefined;
    this.data = (_value.data || []).map(m => new BedInfo(m));
    BedResponse.refineValues(this);
  }
  get response(): Response | undefined {
    return this._response;
  }
  set response(value: Response | undefined) {
    this._response = value;
  }
  get data(): BedInfo[] | undefined {
    return this._data;
  }
  set data(value: BedInfo[] | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    BedResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): BedResponse.AsObject {
    return {
      response: this.response ? this.response.toObject() : undefined,
      data: (this.data || []).map(m => m.toObject())
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module BedResponse {
  /**
   * Standard JavaScript object representation for BedResponse
   */
  export interface AsObject {
    response?: Response.AsObject;
    data?: BedInfo.AsObject[];
  }
}

/**
 * Message implementation for client.PatientBedInfo
 */
export class PatientBedInfo implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new PatientBedInfo();
    PatientBedInfo.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: PatientBedInfo) {
    _instance.idBed = _instance.idBed || '';
    _instance.codeBed = _instance.codeBed || '';
    _instance.bedName = _instance.bedName || '';
    _instance.roomName = _instance.roomName || '';
    _instance.facultyName = _instance.facultyName || '';
    _instance.floorName = _instance.floorName || '';
    _instance.blockName = _instance.blockName || '';
    _instance.patientCode = _instance.patientCode || '';
    _instance.patientName = _instance.patientName || '';
    _instance.patientGender = _instance.patientGender || '';
    _instance.patientBirthday = _instance.patientBirthday || '';
    _instance.patientAddress = _instance.patientAddress || '';
    _instance.patientDateIn = _instance.patientDateIn || '';
    _instance.patientPathology = _instance.patientPathology || '';
    _instance.patientTreatment = _instance.patientTreatment || '';
    _instance.idObject = _instance.idObject || 0;
    _instance.status = _instance.status || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: PatientBedInfo,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.idBed = _reader.readString();
          break;
        case 2:
          _instance.codeBed = _reader.readString();
          break;
        case 3:
          _instance.bedName = _reader.readString();
          break;
        case 4:
          _instance.roomName = _reader.readString();
          break;
        case 5:
          _instance.facultyName = _reader.readString();
          break;
        case 6:
          _instance.floorName = _reader.readString();
          break;
        case 7:
          _instance.blockName = _reader.readString();
          break;
        case 8:
          _instance.patientCode = _reader.readString();
          break;
        case 9:
          _instance.patientName = _reader.readString();
          break;
        case 10:
          _instance.patientGender = _reader.readString();
          break;
        case 11:
          _instance.patientBirthday = _reader.readString();
          break;
        case 12:
          _instance.patientAddress = _reader.readString();
          break;
        case 13:
          _instance.patientDateIn = _reader.readString();
          break;
        case 14:
          _instance.patientPathology = _reader.readString();
          break;
        case 15:
          _instance.patientTreatment = _reader.readString();
          break;
        case 16:
          _instance.idObject = _reader.readInt32();
          break;
        case 17:
          _instance.status = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    PatientBedInfo.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: PatientBedInfo,
    _writer: BinaryWriter
  ) {
    if (_instance.idBed) {
      _writer.writeString(1, _instance.idBed);
    }
    if (_instance.codeBed) {
      _writer.writeString(2, _instance.codeBed);
    }
    if (_instance.bedName) {
      _writer.writeString(3, _instance.bedName);
    }
    if (_instance.roomName) {
      _writer.writeString(4, _instance.roomName);
    }
    if (_instance.facultyName) {
      _writer.writeString(5, _instance.facultyName);
    }
    if (_instance.floorName) {
      _writer.writeString(6, _instance.floorName);
    }
    if (_instance.blockName) {
      _writer.writeString(7, _instance.blockName);
    }
    if (_instance.patientCode) {
      _writer.writeString(8, _instance.patientCode);
    }
    if (_instance.patientName) {
      _writer.writeString(9, _instance.patientName);
    }
    if (_instance.patientGender) {
      _writer.writeString(10, _instance.patientGender);
    }
    if (_instance.patientBirthday) {
      _writer.writeString(11, _instance.patientBirthday);
    }
    if (_instance.patientAddress) {
      _writer.writeString(12, _instance.patientAddress);
    }
    if (_instance.patientDateIn) {
      _writer.writeString(13, _instance.patientDateIn);
    }
    if (_instance.patientPathology) {
      _writer.writeString(14, _instance.patientPathology);
    }
    if (_instance.patientTreatment) {
      _writer.writeString(15, _instance.patientTreatment);
    }
    if (_instance.idObject) {
      _writer.writeInt32(16, _instance.idObject);
    }
    if (_instance.status) {
      _writer.writeBool(17, _instance.status);
    }
  }

  private _idBed?: string;
  private _codeBed?: string;
  private _bedName?: string;
  private _roomName?: string;
  private _facultyName?: string;
  private _floorName?: string;
  private _blockName?: string;
  private _patientCode?: string;
  private _patientName?: string;
  private _patientGender?: string;
  private _patientBirthday?: string;
  private _patientAddress?: string;
  private _patientDateIn?: string;
  private _patientPathology?: string;
  private _patientTreatment?: string;
  private _idObject?: number;
  private _status?: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of PatientBedInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<PatientBedInfo>) {
    _value = _value || {};
    this.idBed = _value.idBed;
    this.codeBed = _value.codeBed;
    this.bedName = _value.bedName;
    this.roomName = _value.roomName;
    this.facultyName = _value.facultyName;
    this.floorName = _value.floorName;
    this.blockName = _value.blockName;
    this.patientCode = _value.patientCode;
    this.patientName = _value.patientName;
    this.patientGender = _value.patientGender;
    this.patientBirthday = _value.patientBirthday;
    this.patientAddress = _value.patientAddress;
    this.patientDateIn = _value.patientDateIn;
    this.patientPathology = _value.patientPathology;
    this.patientTreatment = _value.patientTreatment;
    this.idObject = _value.idObject;
    this.status = _value.status;
    PatientBedInfo.refineValues(this);
  }
  get idBed(): string | undefined {
    return this._idBed;
  }
  set idBed(value: string | undefined) {
    this._idBed = value;
  }
  get codeBed(): string | undefined {
    return this._codeBed;
  }
  set codeBed(value: string | undefined) {
    this._codeBed = value;
  }
  get bedName(): string | undefined {
    return this._bedName;
  }
  set bedName(value: string | undefined) {
    this._bedName = value;
  }
  get roomName(): string | undefined {
    return this._roomName;
  }
  set roomName(value: string | undefined) {
    this._roomName = value;
  }
  get facultyName(): string | undefined {
    return this._facultyName;
  }
  set facultyName(value: string | undefined) {
    this._facultyName = value;
  }
  get floorName(): string | undefined {
    return this._floorName;
  }
  set floorName(value: string | undefined) {
    this._floorName = value;
  }
  get blockName(): string | undefined {
    return this._blockName;
  }
  set blockName(value: string | undefined) {
    this._blockName = value;
  }
  get patientCode(): string | undefined {
    return this._patientCode;
  }
  set patientCode(value: string | undefined) {
    this._patientCode = value;
  }
  get patientName(): string | undefined {
    return this._patientName;
  }
  set patientName(value: string | undefined) {
    this._patientName = value;
  }
  get patientGender(): string | undefined {
    return this._patientGender;
  }
  set patientGender(value: string | undefined) {
    this._patientGender = value;
  }
  get patientBirthday(): string | undefined {
    return this._patientBirthday;
  }
  set patientBirthday(value: string | undefined) {
    this._patientBirthday = value;
  }
  get patientAddress(): string | undefined {
    return this._patientAddress;
  }
  set patientAddress(value: string | undefined) {
    this._patientAddress = value;
  }
  get patientDateIn(): string | undefined {
    return this._patientDateIn;
  }
  set patientDateIn(value: string | undefined) {
    this._patientDateIn = value;
  }
  get patientPathology(): string | undefined {
    return this._patientPathology;
  }
  set patientPathology(value: string | undefined) {
    this._patientPathology = value;
  }
  get patientTreatment(): string | undefined {
    return this._patientTreatment;
  }
  set patientTreatment(value: string | undefined) {
    this._patientTreatment = value;
  }
  get idObject(): number | undefined {
    return this._idObject;
  }
  set idObject(value: number | undefined) {
    this._idObject = value;
  }
  get status(): boolean | undefined {
    return this._status;
  }
  set status(value: boolean | undefined) {
    this._status = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    PatientBedInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): PatientBedInfo.AsObject {
    return {
      idBed: this.idBed,
      codeBed: this.codeBed,
      bedName: this.bedName,
      roomName: this.roomName,
      facultyName: this.facultyName,
      floorName: this.floorName,
      blockName: this.blockName,
      patientCode: this.patientCode,
      patientName: this.patientName,
      patientGender: this.patientGender,
      patientBirthday: this.patientBirthday,
      patientAddress: this.patientAddress,
      patientDateIn: this.patientDateIn,
      patientPathology: this.patientPathology,
      patientTreatment: this.patientTreatment,
      idObject: this.idObject,
      status: this.status
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module PatientBedInfo {
  /**
   * Standard JavaScript object representation for PatientBedInfo
   */
  export interface AsObject {
    idBed?: string;
    codeBed?: string;
    bedName?: string;
    roomName?: string;
    facultyName?: string;
    floorName?: string;
    blockName?: string;
    patientCode?: string;
    patientName?: string;
    patientGender?: string;
    patientBirthday?: string;
    patientAddress?: string;
    patientDateIn?: string;
    patientPathology?: string;
    patientTreatment?: string;
    idObject?: number;
    status?: boolean;
  }
}

/**
 * Message implementation for client.BedInfo
 */
export class BedInfo implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new BedInfo();
    BedInfo.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: BedInfo) {
    _instance.idBed = _instance.idBed || '';
    _instance.codeBed = _instance.codeBed || '';
    _instance.codeRoom = _instance.codeRoom || '';
    _instance.codeowndepartment = _instance.codeowndepartment || '';
    _instance.codeuserdepartment = _instance.codeuserdepartment || '';
    _instance.codeDevice = _instance.codeDevice || '';
    _instance.port = _instance.port || 0;
    _instance.isdeleted = _instance.isdeleted || false;
    _instance.bedName = _instance.bedName || '';
    _instance.roomName = _instance.roomName || '';
    _instance.isAvailable = _instance.isAvailable || false;
    _instance.idRoom = _instance.idRoom || '';
    _instance.floorName = _instance.floorName || '';
    _instance.idFloor = _instance.idFloor || '';
    _instance.facultyNameOwn = _instance.facultyNameOwn || '';
    _instance.facultyNameUse = _instance.facultyNameUse || '';
    _instance.idBlock = _instance.idBlock || '';
    _instance.blockName = _instance.blockName || '';
    _instance.idBranch = _instance.idBranch || '';
    _instance.branchName = _instance.branchName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: BedInfo,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.idBed = _reader.readString();
          break;
        case 2:
          _instance.codeBed = _reader.readString();
          break;
        case 3:
          _instance.codeRoom = _reader.readString();
          break;
        case 4:
          _instance.codeowndepartment = _reader.readString();
          break;
        case 5:
          _instance.codeuserdepartment = _reader.readString();
          break;
        case 6:
          _instance.codeDevice = _reader.readString();
          break;
        case 7:
          _instance.port = _reader.readInt32();
          break;
        case 8:
          _instance.isdeleted = _reader.readBool();
          break;
        case 9:
          _instance.bedName = _reader.readString();
          break;
        case 10:
          _instance.roomName = _reader.readString();
          break;
        case 11:
          _instance.isAvailable = _reader.readBool();
          break;
        case 12:
          _instance.idRoom = _reader.readString();
          break;
        case 13:
          _instance.floorName = _reader.readString();
          break;
        case 14:
          _instance.idFloor = _reader.readString();
          break;
        case 15:
          _instance.facultyNameOwn = _reader.readString();
          break;
        case 16:
          _instance.facultyNameUse = _reader.readString();
          break;
        case 17:
          _instance.idBlock = _reader.readString();
          break;
        case 18:
          _instance.blockName = _reader.readString();
          break;
        case 19:
          _instance.idBranch = _reader.readString();
          break;
        case 20:
          _instance.branchName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    BedInfo.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: BedInfo, _writer: BinaryWriter) {
    if (_instance.idBed) {
      _writer.writeString(1, _instance.idBed);
    }
    if (_instance.codeBed) {
      _writer.writeString(2, _instance.codeBed);
    }
    if (_instance.codeRoom) {
      _writer.writeString(3, _instance.codeRoom);
    }
    if (_instance.codeowndepartment) {
      _writer.writeString(4, _instance.codeowndepartment);
    }
    if (_instance.codeuserdepartment) {
      _writer.writeString(5, _instance.codeuserdepartment);
    }
    if (_instance.codeDevice) {
      _writer.writeString(6, _instance.codeDevice);
    }
    if (_instance.port) {
      _writer.writeInt32(7, _instance.port);
    }
    if (_instance.isdeleted) {
      _writer.writeBool(8, _instance.isdeleted);
    }
    if (_instance.bedName) {
      _writer.writeString(9, _instance.bedName);
    }
    if (_instance.roomName) {
      _writer.writeString(10, _instance.roomName);
    }
    if (_instance.isAvailable) {
      _writer.writeBool(11, _instance.isAvailable);
    }
    if (_instance.idRoom) {
      _writer.writeString(12, _instance.idRoom);
    }
    if (_instance.floorName) {
      _writer.writeString(13, _instance.floorName);
    }
    if (_instance.idFloor) {
      _writer.writeString(14, _instance.idFloor);
    }
    if (_instance.facultyNameOwn) {
      _writer.writeString(15, _instance.facultyNameOwn);
    }
    if (_instance.facultyNameUse) {
      _writer.writeString(16, _instance.facultyNameUse);
    }
    if (_instance.idBlock) {
      _writer.writeString(17, _instance.idBlock);
    }
    if (_instance.blockName) {
      _writer.writeString(18, _instance.blockName);
    }
    if (_instance.idBranch) {
      _writer.writeString(19, _instance.idBranch);
    }
    if (_instance.branchName) {
      _writer.writeString(20, _instance.branchName);
    }
  }

  private _idBed?: string;
  private _codeBed?: string;
  private _codeRoom?: string;
  private _codeowndepartment?: string;
  private _codeuserdepartment?: string;
  private _codeDevice?: string;
  private _port?: number;
  private _isdeleted?: boolean;
  private _bedName?: string;
  private _roomName?: string;
  private _isAvailable?: boolean;
  private _idRoom?: string;
  private _floorName?: string;
  private _idFloor?: string;
  private _facultyNameOwn?: string;
  private _facultyNameUse?: string;
  private _idBlock?: string;
  private _blockName?: string;
  private _idBranch?: string;
  private _branchName?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of BedInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<BedInfo>) {
    _value = _value || {};
    this.idBed = _value.idBed;
    this.codeBed = _value.codeBed;
    this.codeRoom = _value.codeRoom;
    this.codeowndepartment = _value.codeowndepartment;
    this.codeuserdepartment = _value.codeuserdepartment;
    this.codeDevice = _value.codeDevice;
    this.port = _value.port;
    this.isdeleted = _value.isdeleted;
    this.bedName = _value.bedName;
    this.roomName = _value.roomName;
    this.isAvailable = _value.isAvailable;
    this.idRoom = _value.idRoom;
    this.floorName = _value.floorName;
    this.idFloor = _value.idFloor;
    this.facultyNameOwn = _value.facultyNameOwn;
    this.facultyNameUse = _value.facultyNameUse;
    this.idBlock = _value.idBlock;
    this.blockName = _value.blockName;
    this.idBranch = _value.idBranch;
    this.branchName = _value.branchName;
    BedInfo.refineValues(this);
  }
  get idBed(): string | undefined {
    return this._idBed;
  }
  set idBed(value: string | undefined) {
    this._idBed = value;
  }
  get codeBed(): string | undefined {
    return this._codeBed;
  }
  set codeBed(value: string | undefined) {
    this._codeBed = value;
  }
  get codeRoom(): string | undefined {
    return this._codeRoom;
  }
  set codeRoom(value: string | undefined) {
    this._codeRoom = value;
  }
  get codeowndepartment(): string | undefined {
    return this._codeowndepartment;
  }
  set codeowndepartment(value: string | undefined) {
    this._codeowndepartment = value;
  }
  get codeuserdepartment(): string | undefined {
    return this._codeuserdepartment;
  }
  set codeuserdepartment(value: string | undefined) {
    this._codeuserdepartment = value;
  }
  get codeDevice(): string | undefined {
    return this._codeDevice;
  }
  set codeDevice(value: string | undefined) {
    this._codeDevice = value;
  }
  get port(): number | undefined {
    return this._port;
  }
  set port(value: number | undefined) {
    this._port = value;
  }
  get isdeleted(): boolean | undefined {
    return this._isdeleted;
  }
  set isdeleted(value: boolean | undefined) {
    this._isdeleted = value;
  }
  get bedName(): string | undefined {
    return this._bedName;
  }
  set bedName(value: string | undefined) {
    this._bedName = value;
  }
  get roomName(): string | undefined {
    return this._roomName;
  }
  set roomName(value: string | undefined) {
    this._roomName = value;
  }
  get isAvailable(): boolean | undefined {
    return this._isAvailable;
  }
  set isAvailable(value: boolean | undefined) {
    this._isAvailable = value;
  }
  get idRoom(): string | undefined {
    return this._idRoom;
  }
  set idRoom(value: string | undefined) {
    this._idRoom = value;
  }
  get floorName(): string | undefined {
    return this._floorName;
  }
  set floorName(value: string | undefined) {
    this._floorName = value;
  }
  get idFloor(): string | undefined {
    return this._idFloor;
  }
  set idFloor(value: string | undefined) {
    this._idFloor = value;
  }
  get facultyNameOwn(): string | undefined {
    return this._facultyNameOwn;
  }
  set facultyNameOwn(value: string | undefined) {
    this._facultyNameOwn = value;
  }
  get facultyNameUse(): string | undefined {
    return this._facultyNameUse;
  }
  set facultyNameUse(value: string | undefined) {
    this._facultyNameUse = value;
  }
  get idBlock(): string | undefined {
    return this._idBlock;
  }
  set idBlock(value: string | undefined) {
    this._idBlock = value;
  }
  get blockName(): string | undefined {
    return this._blockName;
  }
  set blockName(value: string | undefined) {
    this._blockName = value;
  }
  get idBranch(): string | undefined {
    return this._idBranch;
  }
  set idBranch(value: string | undefined) {
    this._idBranch = value;
  }
  get branchName(): string | undefined {
    return this._branchName;
  }
  set branchName(value: string | undefined) {
    this._branchName = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    BedInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): BedInfo.AsObject {
    return {
      idBed: this.idBed,
      codeBed: this.codeBed,
      codeRoom: this.codeRoom,
      codeowndepartment: this.codeowndepartment,
      codeuserdepartment: this.codeuserdepartment,
      codeDevice: this.codeDevice,
      port: this.port,
      isdeleted: this.isdeleted,
      bedName: this.bedName,
      roomName: this.roomName,
      isAvailable: this.isAvailable,
      idRoom: this.idRoom,
      floorName: this.floorName,
      idFloor: this.idFloor,
      facultyNameOwn: this.facultyNameOwn,
      facultyNameUse: this.facultyNameUse,
      idBlock: this.idBlock,
      blockName: this.blockName,
      idBranch: this.idBranch,
      branchName: this.branchName
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module BedInfo {
  /**
   * Standard JavaScript object representation for BedInfo
   */
  export interface AsObject {
    idBed?: string;
    codeBed?: string;
    codeRoom?: string;
    codeowndepartment?: string;
    codeuserdepartment?: string;
    codeDevice?: string;
    port?: number;
    isdeleted?: boolean;
    bedName?: string;
    roomName?: string;
    isAvailable?: boolean;
    idRoom?: string;
    floorName?: string;
    idFloor?: string;
    facultyNameOwn?: string;
    facultyNameUse?: string;
    idBlock?: string;
    blockName?: string;
    idBranch?: string;
    branchName?: string;
  }
}

/**
 * Message implementation for client.PatientInfo
 */
export class PatientInfo implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new PatientInfo();
    PatientInfo.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: PatientInfo) {
    _instance.idPatient = _instance.idPatient || '';
    _instance.patientName = _instance.patientName || '';
    _instance.gender = _instance.gender || '';
    _instance.identityCard = _instance.identityCard || '';
    _instance.phoneNum = _instance.phoneNum || '';
    _instance.address = _instance.address || '';
    _instance.birthday = _instance.birthday || '';
    _instance.timeIn = _instance.timeIn || '';
    _instance.pathology = _instance.pathology || '';
    _instance.treatment = _instance.treatment || '';
    _instance.timeOut = _instance.timeOut || '';
    _instance.codeRoom = _instance.codeRoom || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: PatientInfo,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.idPatient = _reader.readString();
          break;
        case 2:
          _instance.patientName = _reader.readString();
          break;
        case 3:
          _instance.gender = _reader.readString();
          break;
        case 4:
          _instance.identityCard = _reader.readString();
          break;
        case 5:
          _instance.phoneNum = _reader.readString();
          break;
        case 6:
          _instance.address = _reader.readString();
          break;
        case 7:
          _instance.birthday = _reader.readString();
          break;
        case 8:
          _instance.timeIn = _reader.readString();
          break;
        case 9:
          _instance.pathology = _reader.readString();
          break;
        case 10:
          _instance.treatment = _reader.readString();
          break;
        case 11:
          _instance.timeOut = _reader.readString();
          break;
        case 12:
          _instance.codeRoom = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    PatientInfo.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: PatientInfo,
    _writer: BinaryWriter
  ) {
    if (_instance.idPatient) {
      _writer.writeString(1, _instance.idPatient);
    }
    if (_instance.patientName) {
      _writer.writeString(2, _instance.patientName);
    }
    if (_instance.gender) {
      _writer.writeString(3, _instance.gender);
    }
    if (_instance.identityCard) {
      _writer.writeString(4, _instance.identityCard);
    }
    if (_instance.phoneNum) {
      _writer.writeString(5, _instance.phoneNum);
    }
    if (_instance.address) {
      _writer.writeString(6, _instance.address);
    }
    if (_instance.birthday) {
      _writer.writeString(7, _instance.birthday);
    }
    if (_instance.timeIn) {
      _writer.writeString(8, _instance.timeIn);
    }
    if (_instance.pathology) {
      _writer.writeString(9, _instance.pathology);
    }
    if (_instance.treatment) {
      _writer.writeString(10, _instance.treatment);
    }
    if (_instance.timeOut) {
      _writer.writeString(11, _instance.timeOut);
    }
    if (_instance.codeRoom) {
      _writer.writeString(12, _instance.codeRoom);
    }
  }

  private _idPatient?: string;
  private _patientName?: string;
  private _gender?: string;
  private _identityCard?: string;
  private _phoneNum?: string;
  private _address?: string;
  private _birthday?: string;
  private _timeIn?: string;
  private _pathology?: string;
  private _treatment?: string;
  private _timeOut?: string;
  private _codeRoom?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of PatientInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<PatientInfo>) {
    _value = _value || {};
    this.idPatient = _value.idPatient;
    this.patientName = _value.patientName;
    this.gender = _value.gender;
    this.identityCard = _value.identityCard;
    this.phoneNum = _value.phoneNum;
    this.address = _value.address;
    this.birthday = _value.birthday;
    this.timeIn = _value.timeIn;
    this.pathology = _value.pathology;
    this.treatment = _value.treatment;
    this.timeOut = _value.timeOut;
    this.codeRoom = _value.codeRoom;
    PatientInfo.refineValues(this);
  }
  get idPatient(): string | undefined {
    return this._idPatient;
  }
  set idPatient(value: string | undefined) {
    this._idPatient = value;
  }
  get patientName(): string | undefined {
    return this._patientName;
  }
  set patientName(value: string | undefined) {
    this._patientName = value;
  }
  get gender(): string | undefined {
    return this._gender;
  }
  set gender(value: string | undefined) {
    this._gender = value;
  }
  get identityCard(): string | undefined {
    return this._identityCard;
  }
  set identityCard(value: string | undefined) {
    this._identityCard = value;
  }
  get phoneNum(): string | undefined {
    return this._phoneNum;
  }
  set phoneNum(value: string | undefined) {
    this._phoneNum = value;
  }
  get address(): string | undefined {
    return this._address;
  }
  set address(value: string | undefined) {
    this._address = value;
  }
  get birthday(): string | undefined {
    return this._birthday;
  }
  set birthday(value: string | undefined) {
    this._birthday = value;
  }
  get timeIn(): string | undefined {
    return this._timeIn;
  }
  set timeIn(value: string | undefined) {
    this._timeIn = value;
  }
  get pathology(): string | undefined {
    return this._pathology;
  }
  set pathology(value: string | undefined) {
    this._pathology = value;
  }
  get treatment(): string | undefined {
    return this._treatment;
  }
  set treatment(value: string | undefined) {
    this._treatment = value;
  }
  get timeOut(): string | undefined {
    return this._timeOut;
  }
  set timeOut(value: string | undefined) {
    this._timeOut = value;
  }
  get codeRoom(): string | undefined {
    return this._codeRoom;
  }
  set codeRoom(value: string | undefined) {
    this._codeRoom = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    PatientInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): PatientInfo.AsObject {
    return {
      idPatient: this.idPatient,
      patientName: this.patientName,
      gender: this.gender,
      identityCard: this.identityCard,
      phoneNum: this.phoneNum,
      address: this.address,
      birthday: this.birthday,
      timeIn: this.timeIn,
      pathology: this.pathology,
      treatment: this.treatment,
      timeOut: this.timeOut,
      codeRoom: this.codeRoom
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module PatientInfo {
  /**
   * Standard JavaScript object representation for PatientInfo
   */
  export interface AsObject {
    idPatient?: string;
    patientName?: string;
    gender?: string;
    identityCard?: string;
    phoneNum?: string;
    address?: string;
    birthday?: string;
    timeIn?: string;
    pathology?: string;
    treatment?: string;
    timeOut?: string;
    codeRoom?: string;
  }
}

/**
 * Message implementation for client.StaffResponse
 */
export class StaffResponse implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StaffResponse();
    StaffResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StaffResponse) {
    _instance.response = _instance.response || undefined;
    _instance.data = _instance.data || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StaffResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.response = new Response();
          _reader.readMessage(
            _instance.response,
            Response.deserializeBinaryFromReader
          );
          break;
        case 2:
          const messageInitializer2 = new StaffInfo();
          _reader.readMessage(
            messageInitializer2,
            StaffInfo.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer2);
          break;
        default:
          _reader.skipField();
      }
    }

    StaffResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StaffResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.response) {
      _writer.writeMessage(
        1,
        _instance.response as any,
        Response.serializeBinaryToWriter
      );
    }
    if (_instance.data && _instance.data.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.data as any,
        StaffInfo.serializeBinaryToWriter
      );
    }
  }

  private _response?: Response;
  private _data?: StaffInfo[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StaffResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<StaffResponse>) {
    _value = _value || {};
    this.response = _value.response ? new Response(_value.response) : undefined;
    this.data = (_value.data || []).map(m => new StaffInfo(m));
    StaffResponse.refineValues(this);
  }
  get response(): Response | undefined {
    return this._response;
  }
  set response(value: Response | undefined) {
    this._response = value;
  }
  get data(): StaffInfo[] | undefined {
    return this._data;
  }
  set data(value: StaffInfo[] | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    StaffResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StaffResponse.AsObject {
    return {
      response: this.response ? this.response.toObject() : undefined,
      data: (this.data || []).map(m => m.toObject())
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module StaffResponse {
  /**
   * Standard JavaScript object representation for StaffResponse
   */
  export interface AsObject {
    response?: Response.AsObject;
    data?: StaffInfo.AsObject[];
  }
}

/**
 * Message implementation for client.StaffInfo
 */
export class StaffInfo implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StaffInfo();
    StaffInfo.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StaffInfo) {
    _instance.staffId = _instance.staffId || '';
    _instance.username = _instance.username || '';
    _instance.email = _instance.email || '';
    _instance.staffName = _instance.staffName || '';
    _instance.facultyName = _instance.facultyName || '';
    _instance.note = _instance.note || '';
    _instance.address = _instance.address || '';
    _instance.dob = _instance.dob || '';
    _instance.gender = _instance.gender || '';
    _instance.objectName = _instance.objectName || '';
    _instance.phoneNum = _instance.phoneNum || '';
    _instance.password = _instance.password || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StaffInfo,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.staffId = _reader.readString();
          break;
        case 2:
          _instance.username = _reader.readString();
          break;
        case 3:
          _instance.email = _reader.readString();
          break;
        case 4:
          _instance.staffName = _reader.readString();
          break;
        case 5:
          _instance.facultyName = _reader.readString();
          break;
        case 6:
          _instance.note = _reader.readString();
          break;
        case 7:
          _instance.address = _reader.readString();
          break;
        case 8:
          _instance.dob = _reader.readString();
          break;
        case 9:
          _instance.gender = _reader.readString();
          break;
        case 10:
          _instance.objectName = _reader.readString();
          break;
        case 11:
          _instance.phoneNum = _reader.readString();
          break;
        case 12:
          _instance.password = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    StaffInfo.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: StaffInfo, _writer: BinaryWriter) {
    if (_instance.staffId) {
      _writer.writeString(1, _instance.staffId);
    }
    if (_instance.username) {
      _writer.writeString(2, _instance.username);
    }
    if (_instance.email) {
      _writer.writeString(3, _instance.email);
    }
    if (_instance.staffName) {
      _writer.writeString(4, _instance.staffName);
    }
    if (_instance.facultyName) {
      _writer.writeString(5, _instance.facultyName);
    }
    if (_instance.note) {
      _writer.writeString(6, _instance.note);
    }
    if (_instance.address) {
      _writer.writeString(7, _instance.address);
    }
    if (_instance.dob) {
      _writer.writeString(8, _instance.dob);
    }
    if (_instance.gender) {
      _writer.writeString(9, _instance.gender);
    }
    if (_instance.objectName) {
      _writer.writeString(10, _instance.objectName);
    }
    if (_instance.phoneNum) {
      _writer.writeString(11, _instance.phoneNum);
    }
    if (_instance.password) {
      _writer.writeString(12, _instance.password);
    }
  }

  private _staffId?: string;
  private _username?: string;
  private _email?: string;
  private _staffName?: string;
  private _facultyName?: string;
  private _note?: string;
  private _address?: string;
  private _dob?: string;
  private _gender?: string;
  private _objectName?: string;
  private _phoneNum?: string;
  private _password?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StaffInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<StaffInfo>) {
    _value = _value || {};
    this.staffId = _value.staffId;
    this.username = _value.username;
    this.email = _value.email;
    this.staffName = _value.staffName;
    this.facultyName = _value.facultyName;
    this.note = _value.note;
    this.address = _value.address;
    this.dob = _value.dob;
    this.gender = _value.gender;
    this.objectName = _value.objectName;
    this.phoneNum = _value.phoneNum;
    this.password = _value.password;
    StaffInfo.refineValues(this);
  }
  get staffId(): string | undefined {
    return this._staffId;
  }
  set staffId(value: string | undefined) {
    this._staffId = value;
  }
  get username(): string | undefined {
    return this._username;
  }
  set username(value: string | undefined) {
    this._username = value;
  }
  get email(): string | undefined {
    return this._email;
  }
  set email(value: string | undefined) {
    this._email = value;
  }
  get staffName(): string | undefined {
    return this._staffName;
  }
  set staffName(value: string | undefined) {
    this._staffName = value;
  }
  get facultyName(): string | undefined {
    return this._facultyName;
  }
  set facultyName(value: string | undefined) {
    this._facultyName = value;
  }
  get note(): string | undefined {
    return this._note;
  }
  set note(value: string | undefined) {
    this._note = value;
  }
  get address(): string | undefined {
    return this._address;
  }
  set address(value: string | undefined) {
    this._address = value;
  }
  get dob(): string | undefined {
    return this._dob;
  }
  set dob(value: string | undefined) {
    this._dob = value;
  }
  get gender(): string | undefined {
    return this._gender;
  }
  set gender(value: string | undefined) {
    this._gender = value;
  }
  get objectName(): string | undefined {
    return this._objectName;
  }
  set objectName(value: string | undefined) {
    this._objectName = value;
  }
  get phoneNum(): string | undefined {
    return this._phoneNum;
  }
  set phoneNum(value: string | undefined) {
    this._phoneNum = value;
  }
  get password(): string | undefined {
    return this._password;
  }
  set password(value: string | undefined) {
    this._password = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    StaffInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StaffInfo.AsObject {
    return {
      staffId: this.staffId,
      username: this.username,
      email: this.email,
      staffName: this.staffName,
      facultyName: this.facultyName,
      note: this.note,
      address: this.address,
      dob: this.dob,
      gender: this.gender,
      objectName: this.objectName,
      phoneNum: this.phoneNum,
      password: this.password
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module StaffInfo {
  /**
   * Standard JavaScript object representation for StaffInfo
   */
  export interface AsObject {
    staffId?: string;
    username?: string;
    email?: string;
    staffName?: string;
    facultyName?: string;
    note?: string;
    address?: string;
    dob?: string;
    gender?: string;
    objectName?: string;
    phoneNum?: string;
    password?: string;
  }
}
