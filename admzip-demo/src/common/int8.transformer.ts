import { ValueTransformer } from 'typeorm';

// refer: https://flowus.cn/dfc49801-801e-46ec-b69c-d0376d7b382b
// bigint/int8 may over number max value, so int8 is convert to string default by type-orm
// if you confirm value not over number max, can use this transformer to convert string to number
// number-max(9007199254740992), int8-max(9223372036854775807)

export class BigintTransformer implements ValueTransformer {
  public to(data?: number): number {
    return data;
  }

  public from(data?: string): number | null {
    return data == null ? null : parseInt(data);
  }
}
