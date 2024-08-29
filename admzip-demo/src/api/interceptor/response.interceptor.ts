import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { ApiResponse, ApiResponseI } from '../dto/api-response.dto';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<ApiResponseI> {
    return next.handle().pipe(
      map((data) => {
        if(ApiResponse.isApiResponse(data)){
          delete data['api_response_shell'];
          return data as ApiResponseI;
        }else{
          return {
            code: 200,
            data: data,
          };
        }
      }),
    );
  }
}
