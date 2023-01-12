
import { SocialPlatforms } from "@database/enum/user";

export interface BasicUserDetailResponse {
  email: string;
  id: string;
}

export interface LoggedInUser extends BasicUserDetailResponse {
  token: string;
  stripeCustomerId?: string;
  isAccountSetup?: boolean;
}
export interface Locationuser{
  pincode:number;
}

export interface HospitalRegister{
  name:string,
  managingdoctorId:string,
  specialityId:string,
  pincode:number;
  locationId:string
}

export interface Address{
  employeeId:string,
  pincode:number;
  address:string
}

export interface EmployeeRegister{
name:string,
designationId:string,
hospitalId:string,
locationId:string,
}
export interface Xref{
 employeeId:string;
 patientId:string
}
export interface LoggedInUserSocial extends BasicUserDetailResponse {
  token: string;
  stripeCustomerId?: string;
  isNewUser: boolean;
  isAccountSetup?: boolean;
}

export interface Specialityuser{
  specialityName:string;
  description:string
  }


  export interface PatientRegister{
    name:string;
    dob:string
    }

    export interface  Jobtype{
      name:string;
      description:string
      }

export interface UserProfile {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneCode: string;
  contact: number;
  isAccountSetup: boolean;
  isMemberSociety: boolean;
  keyfobSerialId: string;
}

export interface SocialLoginUser {
  email: string;
  socialPlatform: SocialPlatforms;
  socialPlatformId: string;
  identityToken?: string;
}


export interface AccountSetupData {
  profile: UserProfile;
  paymentCard: Array<unknown> | null;
}

export interface RegisterUser {
  id: string,
  email: string;
  firstName?: string;
  lastName?: string;
  dob?: string;
  token: string;
  marketing?: boolean;
  isVerified?: boolean;
}

export interface UserEmailVerification extends RegisterUser {
  message: string;
}
