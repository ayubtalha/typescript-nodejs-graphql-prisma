import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): any => {
    const request = GqlExecutionContext.create(ctx).getContext().req;
    return request.user;
  },
);
