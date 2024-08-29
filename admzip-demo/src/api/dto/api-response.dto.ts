export interface ApiResponseI {
  code: number;
  message?: string;
  data: any;
}

export class ApiResponse {

  static response(res: ApiResponseI){
    return {
      ...res,
      'api_response_shell': 'api_response_shell',
    };
  }

  static isApiResponse(data: any): boolean{
    if(!data) return false;
    return data['api_response_shell'] === 'api_response_shell';
  }

}